import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.services";








const getAllProject = catchAsync(async (req:Request, res:Response) => {

    const result = await ProjectServices.getAllProject();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project retrieved successfully',
      data: result,
    });
  });

const getAllProjectById = catchAsync(async (req:Request, res:Response) => {
  const { id } = req.params;
    const result = await ProjectServices.getProjectById(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Project retrieved successfully',
      data: result,
    });
  });

  export const ProjectControllers = {
    getAllProject,
    getAllProjectById
  };
  