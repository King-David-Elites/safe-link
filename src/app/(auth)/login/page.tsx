"use client";
import { logIn } from "@/actions/authActions";
import LogInButton from "@/components/LogInButton";
import PasswordInput from "@/components/PasswordInput";
import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
//import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";

async function page() {
  //const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    try {
      const result = await logIn(formData);
      if (result.success) {
        toast.success("Logged in successfully");
      } else {
        toast.error(result.message || "An error occurred");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center sm:px-[5%] min-h-screen max-w-[500px] mx-auto">
      <div className="flex-row w-full flex items-center">
        {/* <Link href={"/"}>
          <MdCancel size={28} />
        </Link> */}
        <div className="w-full flex justify-center mt-4 text-[24px] font-[500]">
          SAFELINK
        </div>
      </div>
      <div>Welcome back</div>
      <form className="flex flex-col w-full mt-8 sm:w-full space-y-4">
        <div className="">
          <div>Email</div>
          <input
            className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-3 w-full rounded-[4px]"
            id="email"
            title="Email"
            name="email"
            placeholder="Enter your email here"
            type="email"
          />
        </div>
        <PasswordInput id="password" label="Password" />
        {/* <PasswordInput id="confirmPassword" label="Confirm Password" /> */}
        {/* <div className="">
          <div>Confirm Password</div>
          <input
            className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-2 w-full rounded-[4px]"
            id="confirm-password"
            title="Confirm Password"
            name="confirm-password"
            placeholder="••••••••"
            type="password"
          />
        </div> */}

        {/* <button
          title="submit"
          formAction={handleSubmit}
          className="bg-gradient-to-r from bg-[#f2be5c] to-white py-2 rounded-md"
        >
          login
        </button> */}
        <LogInButton />
      </form>
      <div className="flex flex-row justify-center my-4 items-center space-x-2">
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
        <div className="text-[16px]">OR</div>
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
      </div>
      {/* <button className="flex flex-row py-3 my-2 w-[70%] sm:w-full justify-center space-x-4 items-center border border-black/[0.15] rounded-[4px]">
        <Image width={16} height={16} src={"/google-icon.png"} alt="google" />
        <div>sign up with google</div>
      </button> */}

      <div className="w-[100%]">
        <GoogleLogin
          //width={"100%"}
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>
      <div className="flex flex-row w-full justify-center space-x-[2px] mt-2">
        <div className="text-[14px] font-medium">Don't have an account?</div>
        <Link
          href={"/signup"}
          className="text-blue-500 text-[14px] font-medium"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default page;
