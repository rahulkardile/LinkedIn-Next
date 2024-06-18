import mongoose, { Document, Model } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  userId: string;
  profileImage?: string;
  bio?: string;
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<IUserDocument>(
  {
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
      default:
        "Full Stack Web Developer | React JS | MongoDB | Express JS | Node JS | Next JS | React Native",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUserDocument> = mongoose.models?.User || mongoose.model<IUserDocument>("User", UserSchema);

export default User;
