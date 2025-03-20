import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { BlogServices } from './blog.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const userId = req.user?.userId; // from the JWT token set by auth middleware
  // console.log(title, content);
  // console.log('id asbe', userId);
  const result = await BlogServices.createBlogIntoDb({
    title,
    content,
    author: userId,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog post successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await BlogServices.getAllBlogs(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog are retrieved successfully',
    data: result,
  });
});

const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BlogServices.getSingleBlog(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
})

const updateBlogController = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const { title, content } = req.body;
  const userId = req.user?.userId;

  const updatedBlog = await BlogServices.updateBlogById(
    blogId,
    { title, content },
    userId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog updated successfully!',
    data: updatedBlog,
  });
});

const deleteBlogById = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const userId = req.user?.userId;

  const result = await BlogServices.deleteBlogById(blogId, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog deleted  successfully!',
    data: result,
  });
});
const deleteBlogByAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BlogServices.deleteBlogByAdmin(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog deleted successfully!',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogController,
  deleteBlogById,
  deleteBlogByAdmin,
};
