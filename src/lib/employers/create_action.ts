"use server";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { employeeSchema } from "@/lib/validations/employeeSchema";
import { State } from "./definitions";

const CreateEmployer = employeeSchema.omit({ id: true, date: true });

export async function createEmployer(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // Prepare data for insertion into the database

  const employerData = {
    name: formData.get("name"),
    profile_photo: formData.get("profile_photo"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password: formData.get("password"),
  };

  console.log(
    `form data at the createEmplloyer is :${JSON.stringify(employerData)}`,
  );

  // Validate form fields using Zod
  const validatedFields = CreateEmployer.safeParse({ ...employerData });

  // If form validation fails, return errors early. Otherwise, continue.
  // console.log(
  //   `the validatedFields object from the createEmployer Action is :${JSON.stringify(validatedFields)}`,
  // );
  if (!validatedFields.success || validatedFields.success !== true) {
    const validFieldError = validatedFields.error.flatten().fieldErrors;
    console.log(
      `the validated fields error is from createEmployer action is :${JSON.stringify(validFieldError)}`,
    );
    return {
      success: false,
      message: "Missing Fields. Failed to Create Employer.",
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
    console.log("employee created Successfull");
    const createdData = `created employer data is : "/n" name: ${name} , profile_photo:${profile_photo}, email:${email}, phoneNumber:${phoneNumber}, password:${password}, data:${date}`;
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
