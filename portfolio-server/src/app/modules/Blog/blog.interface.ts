import { Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: string; // Author's user ID (ObjectId as a string from User model)
  category?: 'Technology' | 'Health' | 'Lifestyle' | 'Business' | 'Portfolio'; // Make category optional
  image: string; // Made image optional since it’s not required in the schema
  createdAt: Date;
  updatedAt: Date;
}
