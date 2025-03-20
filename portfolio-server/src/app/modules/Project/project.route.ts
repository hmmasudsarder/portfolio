import express from 'express';
import { ProjectControllers } from "./project.controller";
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './project.validation';


const router = express.Router();
// here add route 

router.post('/', auth('admin'), validateRequest(ProjectValidation.projectValidationSchema),  ProjectControllers.createProjectController)
router.get('/',  ProjectControllers.getAllProject)
router.get('/:id',  ProjectControllers.getProjectById)
router.delete('/:id', auth('admin'), ProjectControllers.deleteBlogById)





export const ProjectRoutes = router;