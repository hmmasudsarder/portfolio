
import { Schema, model } from "mongoose";
import { IProject } from "./project.interface";


const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: false }, 
  content: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  liveLink: { type: String, required: true },
  frontEndGitLink: { type: String, required: true },
  backEndGitLink: { type: String, required: true },
});


export const Project = model<IProject>("Project", ProjectSchema);