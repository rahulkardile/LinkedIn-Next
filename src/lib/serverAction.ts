"use server";

import { currentUser } from "@clerk/nextjs/server";
import Post from "../../models/post.model";
import { IUser } from "../../models/user.model";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";
import { revalidatePath } from "next/cache";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
});

export async function createPostAction(
  inputText: string,
  selectedFile: string
) {
  connectDB();

  const user = await currentUser();
  if (!user) throw new Error("User is not authenticated!");
  if (!inputText) throw new Error("Input field is required!");

  const image = selectedFile;
  const UserDatabase: IUser = {
    firstName: user.firstName || "Rahul",
    lastName: user.lastName || "Kardile",
    userId: user.id,
    profileImage: user.imageUrl,
  };

  try {
    let upload;

    if (image) {
      // 1. create post with image
      upload = await cloudinary.uploader.upload(image);

      const data = await Post.create({
        description: inputText,
        user: UserDatabase,
        imageUrl: upload?.secure_url,
      });

      return {
        success: true,
        data,
        message: "Post successfull!",
      };
    } else {
      const data = await Post.create({
        description: inputText,
        user: UserDatabase,
      });

      return {
        success: true,
        data,
        message: "Post successfull!",
      };
    }
  } catch (error: any) {
    console.log(error);
  }
}

export async function getAllPost() {
  try {
    await connectDB();

    const posts = await Post.find().sort({ createdAt: -1 });
    if (!posts) return [];
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    console.log(error);
  }
}

export async function DeletePost(id: string) {
  try {

    interface res {
      message: string,
      success: boolean
    }

    const user = await currentUser();
    if (!user) throw new Error("User not authenticated.")

    const deletePost = await Post.findById(id);
    if (!deletePost) throw new Error("Could Not find post")

    if (deletePost.user.userId !== user.id) {
      throw new Error('You are not an owner of this Post.');
    }

    await Post.deleteOne({ _id: id });
    revalidatePath("/");

    if (deletePost) {

      const data: res = {
        message: "Post has been deleted!",
        success: true
      }
      return JSON.parse(JSON.stringify(data))

    } else {

      const data: res = {
        message: "Error While Deleting",
        success: false
      }

      return JSON.parse(JSON.stringify(data))
    }

  } catch (error) {
    console.log(error);
  }
}
