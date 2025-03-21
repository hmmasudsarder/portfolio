import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.services";

const createProjectController = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.createProject(req.body); // Assuming a new ProjectServices will be implemented
  sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Created new project successfully!",
      data: result,
  });
});


const getAllProject = catchAsync(async (req:Request, res:Response) => {

    const result = await ProjectServices.getAllProject();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project retrieved successfully',
      data: result,
    });
  });

const getProjectById = catchAsync(async (req:Request, res:Response) => {
  const { id } = req.params;
    const result = await ProjectServices.getProjectById(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project retrieved successfully',
      data: result,
    });
  });
  
  const deleteBlogById = catchAsync(async (req: Request, res: Response) => {
    const blogId = req.params.id;
    // const userId = req.user?.userId;
  
    const result = await ProjectServices.deleteBlogById(blogId);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'blog deleted  successfully!',
      data: result,
    });
  });

  export const ProjectControllers = {
    getAllProject,
    createProjectController,
    getProjectById,
    deleteBlogById
  };
  