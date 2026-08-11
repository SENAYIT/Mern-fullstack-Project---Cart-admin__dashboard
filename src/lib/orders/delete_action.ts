"use server";
import { revalidatePath } from "next/cache";

export type State = {
  success: boolean;
  message: string | null;
};

export async function deleteOrder(
  id: string,
  prev: State,
  // formData: FormData,
): Promise<State> {
  try {
    const deletedOrder_Id = `deleted order id is:${id}`;
    console.log(deletedOrder_Id);

    revalidatePath("/dashboard/orders");

    return {
      success: true,
      message: "successfully deleted the order",
    };
  } catch (error) {
    console.log(error);
    // throw new Error("Something went wrong");
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

// export async function deleteOrder(id: string) {
//   try {
//     const deletedOrderId = `deleted order id is:${id}`;
//     console.log(deletedOrderId);
//     revalidatePath("/dashboard/orders");
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to Delete Order");
//   }
// }
