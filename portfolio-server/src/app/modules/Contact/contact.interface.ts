import { Document } from "mongoose";

export interface IContact extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    category: 'Technology' | 'Health' | 'Lifestyle' | 'Business'
    message: string;
}

