

import express from 'express';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';

const router = express.Router();

router.post('/', auth('admin'), validateRequest(BlogValidation.blogValidationSchema), BlogControllers.createBlog)
router.patch('/:id', auth('admin'), validateRequest(BlogValidation.blogValidationSchema), BlogControllers.updateBlogController)
router.delete('/:id', auth('admin'), BlogControllers.deleteBlogById)
router.get('/', BlogControllers.getAllBlogs)
router.get('/:id', BlogControllers.getBlogById)





export const BlogRoutes = router;