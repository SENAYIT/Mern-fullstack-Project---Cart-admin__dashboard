"use server";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { orderSchema } from "@/lib/validations/orderSchema";
import { OrderStatus, State } from "./definitions";

// Use Zod to update the expected types
const UpdateOrder = orderSchema.omit({ id: true });

export async function updateOrder(
  id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const orderData = {
    customer: formData.get("customer"),
    products: formData.get("products"),
    totalPrice: formData.get("totalPrice"),
    status: formData.get("status")?.toString() as OrderStatus,
  };

  console.log(`form data at the updateOrder is :${JSON.stringify(orderData)}`);

  // Validate form fields using Zod
  const validatedFields = UpdateOrder.safeParse({ ...orderData });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Missing Fields. Failed to Update Order.",
      values: {
        customer: formData.get("customer")?.toString(),
        // products: formData.get("products")?.toString(),
        totalPrice: Number(formData.get("totalPrice")),
        status: formData.get("status")?.toString() as OrderStatus,
      },
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // Prepare data for insertion into the database
  const { customer, totalPrice, status } = validatedFields.data;

  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database

  try {
    console.log(`orders updated successfully`);
    const updatedData = `updated order data is : "/n" customer: ${customer} , totalPrice:${totalPrice}, status:${status}, data:${date}`;
    console.log(updatedData);

    return {
      success: true,
      message: "Database Success: successfully updated Order.",
      values: {},
      errors: {},
    };
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      success: false,
      message: "Database Error: Failed to Update Order.",
      values: {},
      errors: {},
    };
  }

  // revalidatePath("/dashboard/orders");
  // redirect("/dashboard/orders");
}
