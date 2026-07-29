"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { signOut } from "@/auth"; // for logout function

// for the login page - authentication action with error handling for invalid credentials and other potential errors that may occur during the sign-in process. This function will be called when the user submits the login form, and it will attempt to sign in the user using the provided credentials. If the credentials are invalid, it will return a specific error message. If any other error occurs, it will return a generic error message. If the sign-in is successful, it will redirect the user to the dashboard page.

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/" });
  return;
}
