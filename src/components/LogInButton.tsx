"use client";
import { useLogin } from "@/hooks/useLogin";
import useModalStore from "@/store/useModalStore";
import React from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

function LogInButton() {
  const { closeLogInModal } = useModalStore();
  const { login, isLoading } = useLogin();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = document.querySelector("form"); // Assuming this button is inside a form
    const formData = new FormData(form as HTMLFormElement); // Gather form data

    await login(formData); // Call the login function with the form data
  };

  return (
    <>
      <button
        title="submit"
        // formAction={login}
        onClick={handleClick}
        disabled={isLoading}
        className="bg-gradient-to-r from flex flex-row  justify-center items-center   bg-[#f2be5c] to-white py-3 rounded-md"
      //onLoad={}
      >
       {
          isLoading ? " logging in ..." : "login"
        }
      </button>

      {
       isLoading &&
        <Loader />
      }
    </>

  );
}

export default LogInButton;
