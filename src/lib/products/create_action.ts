"use server";
import { ProductStatus } from "./definitions";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { State } from "./definitions";
import { productSchema } from "../validations/productSchema";

const CreateProduct = productSchema.omit({ id: true, date: true });

export async function createProduct(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // Prepare data for insertion into the database

  const productData = {
    name: formData.get("name"),
    image: formData.get("image"),
    description: formData.get("description"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    status: formData.get("status") as ProductStatus,
  };

  console.log(
    `form data at the createProduct is :${JSON.stringify(productData)}`,
  );

  // Validate form fields using Zod
  const validatedFields = CreateProduct.safeParse({ ...productData });

  // If form validation fails, return errors early. Otherwise, continue.
  // console.log(
  //   `the validatedFields object from the createEmployer Action is :${JSON.stringify(validatedFields)}`,
  // );
  if (!validatedFields.success || validatedFields.success !== true) {
    const validFieldError = validatedFields.error.flatten().fieldErrors;
    console.log(
      `the validated fields error is from create Product action is :${JSON.stringify(validFieldError)}`,
    );
    return {
      success: false,
      message: "Missing Fields. Failed to Create Product.",
      values: {
        name: formData.get("name")?.toString(),
        description: formData.get("description")?.toString(),
        status: formData.get("status")?.toString() as ProductStatus,
        price: Number(formData.get("price")),
        stock: Number(formData.get("stock")),
        // image: formData.get("image") as File | null,
      },
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // Prepare data for insertion into the database
  const { name, description, status, price, stock } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    console.log("Product created Successfull");
    const createdData = `created Product data is : "/n" name: ${name} , description:${description}, status:${status}, price:${price}, stock:${stock}, data:${date}`;
    console.log(createdData);

    return {
      success: true,
      message: "Database Success: successfully created Employer.",
      values: {},
      errors: {},
    };
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      success: false,
      message: "Database Error: Failed to Create Employer.",
      values: {},
      errors: {},
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath("/dashboard/employers");
  // redirect("/dashboard/employers");
}
