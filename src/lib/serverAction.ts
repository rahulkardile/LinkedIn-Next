"use server";

import { currentUser } from "@clerk/nextjs/server";
import Post from "../../models/post.model";
import { IUser } from "../../models/user.model";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET, // Click 'View Credentials' below to copy your API secret
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

      await Post.create({
        description: inputText,
        user: UserDatabase,
        imageUrl: upload?.secure_url,
      });
    } else {
      await Post.create({
        description: inputText,
        user: UserDatabase,
      });
    }
  } catch (error: any) {
   console.log(error);
   
  }
}
