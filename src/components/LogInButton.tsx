"use client";
import { useLogin } from "@/hooks/useLogin";
import useModalStore from "@/store/useModalStore";
import React from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

function LogInButton() {
  const { closeLogInModal } = useModalStore();
  const { login, isLoading } = useLogin();

  return (
    <>
      <button
        title="submit"
        formAction={login}
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
