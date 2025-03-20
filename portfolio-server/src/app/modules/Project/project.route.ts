import express from 'express';
import { ProjectControllers } from "./project.controller";


const router = express.Router();
// here add route 

router.get('/',ProjectControllers.getAllProject)
router.get('/:id',ProjectControllers.getAllProjectById)





export const ProjectRoutes = router;