"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// for the employers form actions - create, update, delete - with error handling for form validation and rest api operations.

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    error: "Please select an employee.",
  }),
  image_url: z
    .instanceof(File, {
      error: "Please upload your image.",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      { error: "only JPG , PNG ,or WebP images are allowed" },
    )
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      error: "Image must be less than 2MB",
    })
    .optional(),
  email: z.string({
    error: "Please enter a valid email.",
  }),

  phoneNumber: z.string({
    error: "Please select an employee.",
  }),
  password: z.string({
    error: "Please enter your phone number.",
  }),

  date: z.string(),
});

const CreateEmployer = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    name?: string[];
    image_url?: string[];
    email?: string[];
    phoneNumber?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function createEmployer(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateEmployer.safeParse({
    name: formData.get("name"),
    image_url: formData.get("image_url") || undefined,
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password: formData.get("password"),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  // Prepare data for insertion into the database
  const { name, image_url, email, phoneNumber, password } =
    validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    console.log("employee created Successfull");
    const createdData = `created employer data is : "/n" name: ${name} , image:${image_url}, email:${email}, phoneNumber:${phoneNumber}, password:${password}, data:${date}`;
    console.log(createdData);
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Employer.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/employers");
  redirect("/dashboard/employers");
}

// for the update invoice form, we need to include the id of the invoice we want to update. We can do this by binding the id to the updateInvoice function and then passing the bound function as the action to the form.

// Use Zod to update the expected types
const UpdateEmployer = FormSchema.omit({ id: true, date: true });

export async function updateEmployer(
  id: string,
  prevState: State,
  formData: FormData,
) {
  // Validate form fields using Zod
  const validatedFields = UpdateEmployer.safeParse({
    name: formData.get("name"),
    image_url: formData.get("image_url") || undefined,
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    password: formData.get("password"),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Employer.",
    };
  }
  // Prepare data for insertion into the database
  const { name, image_url, email, phoneNumber, password } =
    validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database

  try {
    console.log(`employers updated successfully`);
    const updatedData = `updated employer data is : "/n" name: ${name} , image:${image_url}, email:${email}, phoneNumber:${phoneNumber}, password:${password}, data:${date}`;
    console.log(updatedData);
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return { message: "Database Error: Failed to Update Employer." };
  }

  revalidatePath("/dashboard/employers");
  redirect("/dashboard/employers");
}

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
