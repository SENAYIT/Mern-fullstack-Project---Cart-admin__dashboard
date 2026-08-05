"use server";
import { revalidatePath } from "next/cache";

export async function deleteCustomer(id: string) {
  try {
    const deletedCustomer_Id = `deleted customer id is:${id}`;
    console.log(deletedCustomer_Id);

    revalidatePath("/dashboard/customers");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Delete Customer");
  }
}
