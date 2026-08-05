"use server";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { customerSchema } from "@/lib/validations/customerSchema";
import { State } from "./definitions";

// Use Zod to update the expected types
const UpdateCustomer = customerSchema.omit({ id: true, date: true });

export async function updateCustomer(
  id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const customerData = {
    name: formData.get("name"),
    profile_photo: formData.get("profile_photo"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password: formData.get("password"),
  };

  // console.log(
  //   `form data at the updateCustomer is :${JSON.stringify(customerData)}`,
  // );

  // Validate form fields using Zod
  const validatedFields = UpdateCustomer.safeParse({ ...customerData });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Missing Fields. Failed to Update Customer.",
      values: {
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
        phoneNumber: formData.get("phoneNumber")?.toString(),
        password: formData.get("password")?.toString(),
      },
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Prepare data for insertion into the database
  const { name, profile_photo, email, phoneNumber, password } =
    validatedFields.data;

  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database

  try {
    console.log(`customers updated successfully`);

    const updatedData = `updated customer data is : "/n" name: ${name}, profile_photo:${profile_photo}, email:${email}, phoneNumber:${phoneNumber}, password:${password}, date:${date}`;

    // const updatedData = `updated customer data is : "/n" name: ${name}, email:${email}, phoneNumber:${phoneNumber}, password:${password}, date:${date}`;

    console.log(updatedData);

    return {
      success: true,
      message: "Database Success: successfully updated Customer.",
      values: {},
      errors: {},
    };
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      success: false,
      message: "Database Error: Failed to Update Customer.",
      values: {},
      errors: {},
    };
  }

  // revalidatePath("/dashboard/customers");
  // redirect("/dashboard/customers");
}
