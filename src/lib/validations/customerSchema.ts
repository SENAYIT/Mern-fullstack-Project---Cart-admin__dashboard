import { z } from "zod";

export const customerSchema = z.object({
  id: z.string(),

  name: z
    .string({
      error: "Please enter a customer name",
    })
    .trim()
    .min(1, {
      error: "Please enter a customer name",
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
        { error: "only JPG, PNG, or WebP photos are allowed" },
      )
      .refine((file) => !file || file.size <= 1 * 1024 * 1024, {
        error: "Profile Photo must be less than 2MB",
      }),
  ),

  email: z
    .string({
      error: "Please enter a customer email",
    })
    .trim()
    .min(1, {
      error: "Please enter a customer email",
    }),

  phoneNumber: z
    .string({
      error: "Please enter a customer phone number",
    })
    .trim()
    .min(1, {
      error: "Please enter a customer phone number",
    }),

  password: z
    .string({
      error: "Please enter a customer password",
    })
    .trim()
    .min(1, {
      error: "Please enter a customer password",
    }),

  date: z.string(),
});
