"use client";
import { useLogin } from "@/hooks/useLogin";
import { useSignUp } from "@/hooks/useSignUp";
import useModalStore from "@/store/useModalStore";
import React from "react";
import toast from "react-hot-toast";

function SignUpButton() {
  const { signUp, isLoading } = useSignUp();

  return (
    <button
      title="submit"
      formAction={signUp}
      disabled={isLoading}
      className="bg-gradient-to-r from flex flex-row  justify-center items-center  bg-[#f2be5c] to-white py-2 rounded-md"
      //onLoad={}
    >
      Sign Up
      {isLoading && (
        <div className="rounded-full h-4 w-4 ml-2 border-2 border-dashed border-black animate-spin"></div>
      )}
    </button>
  );
}

export default SignUpButton;
