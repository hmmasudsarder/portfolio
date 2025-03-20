import { Document } from "mongoose";

export interface IBlog extends Document  {
  title: string;
  content: string;
  author: string; // author user ID ObjectId as a string ata asbe user model theke
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
