import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Project } from "./project.model";


const createProject = async (payload: Partial<typeof Project>) => {
  return await Project.create(payload);
};


// get all Project from db
const getAllProject = async () => {

    const result = await Project.find();
    return result;
  };


  const getProjectById = async (id: string) => {
    // Query your database for a project by its ID
    // Example using a mock database or ORM query like Mongoose:
    const project = await Project.findById(id);
  
    return project; // Returns the project or null if not found
  };

  const deleteBlogById = async (blogId: string) => {
    // Find the blog and delete
    const result = await Project.findOneAndDelete({
      _id: blogId,
    });
  
    if (!result) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'Blog not found or you are not authorized to delete it!',
      );
    }
  
    return { message: 'Blog deleted successfully' };
  };




  export const ProjectServices = {
    getAllProject,
    getProjectById,
    createProject,
    deleteBlogById
  };