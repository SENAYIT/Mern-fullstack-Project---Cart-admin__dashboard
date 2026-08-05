import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z
    .string({
      error: "Please enter a product name",
    })
    .trim()
    .min(1, {
      error: "Please enter a product name",
    }),
  description: z
    .string({
      error: "Please enter a product description",
    })
    .trim()
    .min(1, {
      error: "Please enter a product description",
    }),
  // price: z
  //   .number({
  //     error: "Please enter a product price",
  //   })
  //   .min(0, {
  //     error: "Please enter a product price",
  //   }),

  price: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),

  // stock: z
  //   .number({
  //     error: "Please enter a product stock",
  //   })
  //   .min(0, {
  //     error: "Please enter a product stock",
  //   }),

  stock: z.coerce
    .number()
    .gt(0, {
      message: "Please enter a stock (quantity of product) greater than 0.",
    }),

  image: z.preprocess(
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
        error: "Product Image must be less than 2MB",
      }),
  ),

  status: z.enum(["active", "inactive", "new", "low-stock"], {
    error: "Please select a product status",
  }),
  date: z.string(),
});
