import { z } from "zod";

export const employeeSchema = z.object({
  id: z.string(),
  name: z
    .string({
      error: "Please enter an employee name",
    })
    .trim()
    .min(1, {
      error: "Please enter an employee name",
    }),
  profile_photo: z.preprocess(
    (value) => {
      if (value instanceof File && value.size === 0) {
        return undefined;
      }
      return value;
    },
    z
      .instanceof(File, {
        error: "Please upload your Profile Photo.",
      })
      .refine(
        (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        { error: "only JPG , PNG ,or WebP photo are allowed" },
      )
      .refine((file) => file.size <= 1 * 1024 * 1024, {
        error: "Profile Photo must be less than 2MB",
      })
      .optional(),
  ),
  email: z
    .string({
      error: "Please enter an employee email",
    })
    .trim()
    .min(1, {
      error: "Please enter an employee email",
    }),

  phoneNumber: z
    .string({
      error: "Please enter an employee Phone number",
    })
    .trim()
    .min(1, {
      error: "Please enter an employee Phone number",
    }),
  password: z
    .string({
      error: "Please enter an employee Password",
    })
    .trim()
    .min(1, {
      error: "Please enter an employee Password",
    }),

  date: z.string(),
});
