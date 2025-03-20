import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ContactServices } from "./contact.service";
import { Request, Response } from "express";

const createContactController = catchAsync(async (req: Request, res: Response) => {
    const result = await ContactServices.createContact(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Message sent successfully",
        data: result,
    });
});

const getAllContactsController = catchAsync(async (req: Request, res: Response) => {
    const result = await ContactServices.getAllContacts();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All contacts retrieved successfully",
        data: result,
    });
});

const deleteContactByIdController = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ContactServices.deleteContactById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Contact deleted successfully",
        data: result,
    });
});

export const ContactControllers = {
    createContactController,
    getAllContactsController,
    deleteContactByIdController,
};
