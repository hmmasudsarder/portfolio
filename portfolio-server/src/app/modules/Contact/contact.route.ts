import express from "express";
import { ContactControllers } from "./contact.controller";
import auth from "../../middlewares/auth";
const router = express.Router();
router.post("/", ContactControllers.createContactController);
router.get("/", auth("admin"), ContactControllers.getAllContactsController);
router.delete("/:id", auth("admin"), ContactControllers.deleteContactByIdController);

export const ContactRoute = router;