import { z } from "zod";

export const orderSchema = z.object({
  id: z.string(),
  customer: z
    .string({
      error: "Please enter a customer name",
    })
    .trim()
    .min(1, {
      error: "Please enter a customer name",
    }),

  // products: z.array(z.any()).optional(),

  // totalPrice: z
  //   .number({
  //     error: "Please enter a total price",
  //   })
  //   .min(0, {
  //     error: "Please enter a total price",
  //   }),

  totalPrice: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),

  status: z.enum(["new", "pending", "completed", "cancelled"], {
    error: "Please select an order status",
  }),
});
