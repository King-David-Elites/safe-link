"use client";
import { useSignUp } from "@/hooks/useSignUp";
import React from "react";
import Loader from "./Loader";

function SignUpButton() {
  const { signUp, isLoading } = useSignUp();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = document.querySelector("form"); // Assuming this button is inside a form
    const formData = new FormData(form as HTMLFormElement); // Gather form data

    await signUp(formData); // Call the signUp function with the form data
  };

  return (
    <>
      <button
        title="submit"
        onClick={handleClick} // Trigger sign-up process
        disabled={isLoading} // Disable button while loading
        className="bg-gradient-to-r from flex flex-row justify-center items-center bg-[#f2be5c] to-white py-3 rounded-md"
      >
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>

      {isLoading && <Loader />}
    </>
  );
}

export default SignUpButton;
