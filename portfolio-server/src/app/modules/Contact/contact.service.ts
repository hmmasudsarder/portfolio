import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Contact } from "./Contact.model";

const createContact = async (payload: Partial<typeof Contact>) => {
    return await Contact.create(payload);
};

const getAllContacts = async () => {
    return await Contact.find();
};

const deleteContactById = async (id: string) => {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
        throw new AppError(httpStatus.NOT_FOUND, "Contact not found!");
    }
    return { message: "Contact deleted successfully" };
};

export const ContactServices = {
    createContact,
    getAllContacts,
    deleteContactById,
};