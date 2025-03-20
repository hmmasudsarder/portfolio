import { Project } from "./project.model";





// get all Project from db
const getAllProject = async () => {

    const result = await Project.find();
    return result;
  };


  export const getProjectById = async (id: string) => {
    // Query your database for a project by its ID
    // Example using a mock database or ORM query like Mongoose:
    const project = await Project.findById(id);
  
    return project; // Returns the project or null if not found
  };




  export const ProjectServices = {
    getAllProject,
    getProjectById
  };