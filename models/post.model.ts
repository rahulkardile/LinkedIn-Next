import mongoose, { Document, Model } from "mongoose";
import { IUser } from "./user.model";

export interface IPost {
  description: string;
  user: IUser;
  imageUrl?: string;
  likes?: string[];
  comments?: any;
}

export interface IPostDocument extends IPost, Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<IPostDocument>(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
      userId: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      profileImage: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
        default: "",
        required: true,
      },
    },
    likes: {
      type: [String],
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    },
  },
  {
    timestamps: true,
  }
);

const Post: Model<IPostDocument> = mongoose.model<IPostDocument>(
  "User",
  UserSchema
);

export default Post;
