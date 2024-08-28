// components/ServerLoginForm.js
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { MdCancel } from "react-icons/md";
import ModalButton from "./ModalButton";
import SignUpButton from "./SignUpButton";

// async function createInvoice(formData: FormData) {
//   'use server'
//   const rawFormData = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };
//   console.log("form data", rawFormData);

//   // Handle form submission logic here

//   // After successful login, redirect
//   redirect("/");
// }

export default function SignupForm() {
  console.log("asccx");
  return (
    <div className="text-black text-[12px]">
      <div className="flex-row w-full flex items-center">
        <ModalButton actionKey="close">
          <MdCancel size={28} />
        </ModalButton>
        <div className="w-full flex justify-center text-[24px] font-[500] uppercase">
          safelink
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div>Welcome</div>
      </div>

      <form
        // action={createInvoice}
        // method="post"
        className="flex flex-col w-full text-black space-y-2"
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-2 w-full rounded-[4px]"
            id="email"
            name="email"
            placeholder="Enter your email here"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-2 w-full rounded-[4px]"
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-2 w-full rounded-[4px]"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="••••••••"
            type="password"
            required
          />
        </div>
        <div className="flex flex-row space-x-2 items-start">
          <input type="checkbox"></input>
          <div className="text-xs">
            By clicking here, I state that I have read and understood the{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"terms-and-conditions"}
              className="text-primary"
            >
              Terms and Conditions.
            </Link>
          </div>
        </div>
        <SignUpButton />
      </form>
      <div className="flex flex-row justify-center mt-2 items-center space-x-2">
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
        <div className="text-[16px]">OR</div>
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
      </div>
      <button className="flex flex-row w-full justify-center space-x-4 items-center border border-black/[0.15] rounded-[4px] py-1">
        <Image width={16} height={16} src={"/google-icon.png"} alt="google" />
        <div>sign up with google</div>
      </button>
      <div className="flex flex-row w-full justify-center items-center space-x-[2px] mt-2">
        <div className="text-[10px] font-medium">Already have an account?</div>
        <ModalButton actionKey="openLogIn">Sign in</ModalButton>
      </div>
    </div>
  );
}
