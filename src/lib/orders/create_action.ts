"use server";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { orderSchema } from "@/lib/validations/orderSchema";
import { State, OrderStatus } from "./definitions";

const CreateOrder = orderSchema.omit({ id: true });

export async function createOrder(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // Prepare data for insertion into the database

  const orderData = {
    customer: formData.get("customer"),
    // products: formData.get("products"),
    totalPrice: formData.get("totalPrice"),
    status: formData.get("status")?.toString() as OrderStatus,
  };

  console.log(`form data at the createOrder is :${JSON.stringify(orderData)}`);

  // Validate form fields using Zod
  const validatedFields = CreateOrder.safeParse({ ...orderData });

  // If form validation fails, return errors early. Otherwise, continue.
  // console.log(
  //   `the validatedFields object from the createEmployer Action is :${JSON.stringify(validatedFields)}`,
  // );
  if (!validatedFields.success || validatedFields.success !== true) {
    const validFieldError = validatedFields.error.flatten().fieldErrors;
    console.log(
      `the validated fields error is from createEmployer action is :${JSON.stringify(validFieldError)}`,
    );
    return {
      success: false,
      message: "Missing Fields. Failed to Create Employer.",
      values: {
        customer: formData.get("customer")?.toString(),
        // products: formData.getAll("products"),
        totalPrice: Number(formData.get("totalPrice")),
        status: formData.get("status")?.toString() as OrderStatus,
      },
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // Prepare data for insertion into the database
  const { customer, totalPrice, status } = validatedFields.data;
  // const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    console.log("order created Successfull");
    const createdData = `created order data is : "/n" customer: ${customer} , totalPrice:${totalPrice}, status:${status}`;
    console.log(createdData);

    return {
      success: true,
      message: "Database Success: successfully created Order.",
      values: {},
      errors: {},
    };
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      success: false,
      message: "Database Error: Failed to Create Order.",
      values: {},
      errors: {},
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath("/dashboard/employers");
  // redirect("/dashboard/employers");
}
