import mongoose, { Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    category: {
        type: String,
        enum: ['Technology', 'Health', 'Lifestyle', 'Business', "Portfolio"], // Example categories
        default: 'Technology', // Provide a default value
    },
    image: String
  }, 
  {
    timestamps: true,
  },
);

export const BlogModel = mongoose.model<IBlog>('Blog', blogSchema);
