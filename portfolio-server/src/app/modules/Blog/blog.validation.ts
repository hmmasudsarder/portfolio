import { z } from 'zod';

export const blogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ invalid_type_error: 'Title must be a string' })
      .min(1, 'Title is required'),
      
    content: z
      .string({ invalid_type_error: 'Content must be a string' })
      .min(1, 'Content is required'),

    author: z
      .string({ invalid_type_error: 'Author must be a valid ObjectId' })
      .min(1, 'Author is required'),

      category: z
      .enum(['Technology', 'Health', 'Lifestyle', 'Business', 'Portfolio'], {
        invalid_type_error: 'Invalid category',
      })
      .optional(),// Ensure this matches the request body

    image: z.string().url('Invalid image URL'),
  }),
});

export const BlogValidation = {
  blogValidationSchema,
};
