import { Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  content: string;
  category: string;
  image: string;
  liveLink: string;
  frontEndGitLink?: string; 
  backEndGitLink: string;
}