"use server";
import { redirect } from "next/navigation";

export async function logIn(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log("form data", rawFormData);

  // Handle form submission logic here

  // After successful login, redirect
  redirect("/");
}
