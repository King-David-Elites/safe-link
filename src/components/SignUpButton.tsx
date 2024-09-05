"use client";
import { useLogin } from "@/hooks/useLogin";
import { useSignUp } from "@/hooks/useSignUp";
import useModalStore from "@/store/useModalStore";
import React from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

function SignUpButton() {
  const { signUp, isLoading } = useSignUp();

  return (
    <>
      <button
        title="submit"
        formAction={signUp}
        disabled={isLoading}
        className="bg-gradient-to-r from flex flex-row  justify-center items-center  bg-[#f2be5c] to-white py-3 rounded-md"
      //onLoad={}
      >
        {
          isLoading ? "signing up ..." : "sign up"
        }
       
      </button>

      {
       isLoading &&
        <Loader />
      }
    </>
  );
}

export default SignUpButton;
