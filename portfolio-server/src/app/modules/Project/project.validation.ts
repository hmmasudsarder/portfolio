import { z } from "zod";

export const projectValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ invalid_type_error: "Title must be a string" })
      .min(1, "Title is required"),
    content: z
      .string({ invalid_type_error: "Content must be a string" })
      .min(1, "Content is required"),
    category: z
      .string({ invalid_type_error: "Category must be a string" })
      .min(1, "Category is required"),
    image: z
      .string({ invalid_type_error: "Image must be a string" })
      .url("Invalid image URL format"),
    liveLink: z
      .string({ invalid_type_error: "Live link must be a string" })
      .url("Invalid URL format"),
    frontEndGitLink: z
      .string({ invalid_type_error: "GitHub frontend link must be a string" })
      .url("Invalid URL format")
      .optional(),
    backEndGitLink: z
      .string({ invalid_type_error: "GitHub backend link must be a string" })
      .url("Invalid URL format"),
  }),
});

export const ProjectValidation = {
  projectValidationSchema,
};
