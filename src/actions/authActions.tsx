"use client";
import useModalStore from "@/store/useModalStore";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const baseUrl = process.env.BASE_URL;

export async function register(formData: FormData, baseUrl: string) {
  // const rawFormData = {
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // };
  // console.log("form data", rawFormData);
  try {
    const response = await fetch(`${baseUrl}/auth/register`);
    if (!response.ok) {
      toast.error("An error occured");

      return;
    }
    console.log("response", response.json());
  } catch (error: any) {
    console.log("error", error.response);
  }

  // Handle form submission logic here

  // After successful login, redirect
  //redirect("/");
}

export async function logIn(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log("raw form data", rawFormData);

  try {
    const response = await fetch(
      `https://cream-card-api.onrender.com/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
      }
    );

    if (!response.ok) {
      console.log("error", response);
      if (response.status === 404) {
        return {
          success: false,
          message: "The username or password is not correct",
        };
      }
      return { success: false, error: "An error occurred" };
    }

    const data = await response.json();
    console.log("response", data);
    return { success: true, data };
  } catch (error: any) {
    console.log("error", error);
    return { success: false, error: error.message || "An erroraaa occurred" };
  }
}
