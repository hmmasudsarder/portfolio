import mongoose, { Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const BlogModel = mongoose.model<IBlog>('Blog', blogSchema);
