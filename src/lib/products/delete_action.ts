"use server";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: string) {
  try {
    const deletedProduct_Id = `deleted product id is:${id}`;
    console.log(deletedProduct_Id);
    revalidatePath("/dashboard/products");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Delete Product");
  }
}
