"use server";
import { revalidatePath } from "next/cache";

export async function deleteOrder(id: string) {
  try {
    const deletedOrderId = `deleted order id is:${id}`;
    console.log(deletedOrderId);
    revalidatePath("/dashboard/orders");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Delete Order");
  }
}
