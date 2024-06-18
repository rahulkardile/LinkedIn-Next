import mongoose, { Document, Model } from "mongoose";
import { IUser } from "./user.model";

export interface IComment {
  textMessage: string;
  user: IUser;
}

export interface ICommentDocument extends IComment, Document {
  createdAt: Date;
  updateedAt: Date;
}

const CommentSchema = new mongoose.Schema<ICommentDocument>(
  {
    textMessage: {
      type: String,
      required: true,
    },
    user: {
      userId: {
        type: String,
        required: true,
      },
      profileImage: {
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
    },
  },
  { timestamps: true }
);

const Comment : Model<ICommentDocument> = mongoose.models?.Comment || mongoose.model("Comment", CommentSchema);

export default Comment;
