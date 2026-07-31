"use server";
import { revalidatePath } from "next/cache";

export async function deleteEmployer(id: string) {
  try {
    const deltedEmployer_Id = `deleted employer id is:${id}`;
    console.log(deltedEmployer_Id);
    revalidatePath("/dashboard/employers");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Delete Employer");
  }
}
