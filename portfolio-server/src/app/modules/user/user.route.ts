import express from 'express';
import auth from '../../middlewares/auth';
import { userController } from './user.controller';
import { BlogControllers } from '../Blog/blog.controller';

const router = express.Router();


router.patch('/users/:userId/block', auth('admin'), userController.blockUser)
router.delete('/blogs/:id', auth('admin'), BlogControllers.deleteBlogByAdmin);

export const userRoutes = router;