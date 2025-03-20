import { Document } from "mongoose";

export interface IProject extends Document {
  projectName: string;
  liveLink: string;
  projectImg: string;
  projectBanner?: string; 
  projectOverview: string;
  tools: string[]; // Added tools array
}