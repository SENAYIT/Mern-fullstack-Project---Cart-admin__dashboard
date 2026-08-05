"use server";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { productSchema } from "@/lib/validations/productSchema";
import { ProductStatus } from "./definitions";
import { State } from "./definitions";

// Use Zod to update the expected types
const UpdateProduct = productSchema.omit({ id: true, date: true });

export async function updateProduct(
  id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const productData = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    image: formData.get("image"),
    status: formData.get("status")?.toString() as ProductStatus,
  };

  console.log(
    `form data at the updateProduct is :${JSON.stringify(productData)}`,
  );

  // Validate form fields using Zod
  const validatedFields = UpdateProduct.safeParse({ ...productData });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Missing Fields. Failed to Update Product.",
      values: {
        name: formData.get("name")?.toString(),
        description: formData.get("description")?.toString(),
        price: Number(formData.get("price")),
        stock: Number(formData.get("stock")),
        // image: formData.get("image") as File | null,
        status: formData.get("status")?.toString() as ProductStatus,
      },
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // Prepare data for insertion into the database
  const { name, description, price, stock, image, status } =
    validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database

  try {
    console.log(`products updated successfully`);
    const updatedData = `updated product data is : "/n" name: ${name} , description:${description}, price:${price}, stock:${stock}, image:${image}, status:${status}, data:${date}`;
    console.log(updatedData);

    return {
      success: true,
      message: "Database Success: successfully updated Product.",
      values: {},
      errors: {},
    };
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      success: false,
      message: "Database Error: Failed to Update Product.",
      values: {},
      errors: {},
    };
  }

  // revalidatePath("/dashboard/products");
  // redirect("/dashboard/products");
}
