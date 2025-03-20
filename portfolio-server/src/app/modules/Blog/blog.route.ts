

import express from 'express';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';

const router = express.Router();

router.post('/',auth('user'),validateRequest(BlogValidation.blogValidationSchema), BlogControllers.createBlog)
router.patch('/:id',auth('user'),validateRequest(BlogValidation.blogValidationSchema), BlogControllers.updateBlogController)
router.delete('/:id',auth('user'), BlogControllers.deleteBlogById)
router.get('/',BlogControllers.getAllBlogs)





export const BlogRoutes = router;