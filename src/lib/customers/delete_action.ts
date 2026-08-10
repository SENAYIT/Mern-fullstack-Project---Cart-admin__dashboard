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
    // return {
    //   success: false,
    //   message: "Failed to Delete Customer",
    // };
  }
}

// type State = {
//   success: boolean;
//   message: string;
// };

// export async function deleteCustomer(
//   prevState: State,
//   id: string,
// ): Promise<State> {
//   try {
//     const deletedCustomer_Id = `deleted customer id is:${id}`;
//     console.log(deletedCustomer_Id);

//     revalidatePath("/dashboard/customers");

//     return {
//       success: true,
//       message: "successfully deleted the customer",
//     };
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to Delete Customer");
//     // return {
//     //   success: false,
//     //   message: "Failed to Delete Customer",
//     // };
//   }
// }
