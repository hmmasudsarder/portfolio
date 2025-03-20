
import { Schema, model } from "mongoose";
import { IProject } from "./project.interface";


const ProjectSchema = new Schema<IProject>({
  projectName: { type: String, required: true },
  liveLink: { type: String, required: true },
  projectImg: { type: String, required: true },
  projectBanner: { type: String, required: false }, 
  projectOverview: { type: String, required: true },
  tools: { type: [String], required: true }, 
});


export const Project = model<IProject>("Project", ProjectSchema);