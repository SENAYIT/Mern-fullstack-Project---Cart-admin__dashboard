"use server";
import { revalidatePath } from "next/cache";

export type State = {
  success: boolean;
  message: string | null;
};

export async function deleteProduct(
  id: string,
  prev: State,
  // formData: FormData,
): Promise<State> {
  try {
    const deletedProduct_Id = `deleted product id is:${id}`;
    console.log(deletedProduct_Id);

    revalidatePath("/dashboard/products");

    return {
      success: true,
      message: "successfully deleted the product",
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

// export async function deleteProduct(id: string) {
//   try {
//     const deletedProduct_Id = `deleted product id is:${id}`;
//     console.log(deletedProduct_Id);
//     revalidatePath("/dashboard/products");
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to Delete Product");
//   }
// }
