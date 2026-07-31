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
    (value) => (value instanceof File && value.size === 0 ? undefined : value),
    z
      .instanceof(File)
      .optional()
      .refine(
        (file) =>
          !file ||
          ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        { error: "only JPG , PNG ,or WebP photo are allowed" },
      )
      .refine((file) => !file || file.size <= 1 * 1024 * 1024, {
        error: "Profile Photo must be less than 2MB",
      }),
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
