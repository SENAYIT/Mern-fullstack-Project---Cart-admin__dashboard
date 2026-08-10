export type paymentMethod =
  | "Telebirr"
  | "CBE"
  | "Cash"
  | "Chapa"
  | "otherBankTransfer";
export type paymentStatus = "pending" | "paid" | "not_paid";
export type orderStatus = "new" | "pending" | "completed" | "cancelled";

import { z } from "zod";

// current focus only order with customer and cart

export const cartItemSchema = z.object({
  productId: z.string().trim().min(1),
  name: z.string().trim().min(1),
  price: z.number().int().positive(),
  quantity: z.number().int().positive(),
  totalPrice: z.coerce.number().gt(0),
});

export const orderCartSchema = z.object({
  id: z.string(),
  customer: z
    .string({
      error: "Please Select a customer name",
    })
    .trim()
    .min(1, {
      error: "Please Select a customer name",
    }),

  cartItems: z
    .array(cartItemSchema)
    .min(1, { error: "Please add a cart items" }),
});

export const orderStatusSchema = z.object({
  id: z.string(),
  // orderId: z
  //   .string({
  //     error: "Please enter order Id",
  //   })
  //   .trim()
  //   .min(1, {
  //     error: "Please enter order Id",
  //   }),

  // customer: z
  //   .string({
  //     error: "Please enter a customer name",
  //   })
  //   .trim()
  //   .min(1, {
  //     error: "Please enter a customer name",
  //   }),
  status: z.enum(["new", "pending", "completed", "cancelled"], {
    error: "Please select an order status",
  }),
});

//  not needed for now
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

  products: z.array(z.any()).optional(),

  totalPrice: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),

  OrderStatus: z.enum(["new", "pending", "completed", "cancelled"], {
    error: "Please select an order status",
  }),
});

export const order_PaymentSchema = z.object({
  id: z.string(),
  paymentMethod: z.enum(
    ["Telebirr", "CBE", "Cash", "Chapa", "otherBankTransfer"],
    {
      error: "Please select the payment method",
    },
  ),

  paymentPrice: z.coerce.number().gt(0, {
    message:
      "Please enter an amount greater than $0 and the Order's total Price",
  }),

  paymentStatus: z.enum(["pending", "paid", "not_paid"], {
    error: "Please select the payment status",
  }),

  orderStatus: z.enum(["new", "pending", "completed", "cancelled"], {
    error: "Please select an order status",
  }),
});
