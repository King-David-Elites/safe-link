// components/ServerLoginForm.js
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { MdCancel } from "react-icons/md";

async function createInvoice(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log("form data", rawFormData);

  // Handle form submission logic here

  // After successful login, redirect
  redirect("/");
}

export default function LoginForm({
  closeModal,
  openSignUpModal,
}: {
  closeModal: () => void;
  openSignUpModal: () => void;
}) {
  return (
    <div className="text-black text-[12px]">
      <div className="flex-row w-full flex items-center">
        <button onClick={closeModal}>
          <MdCancel size={28} />
        </button>
        <div className="w-full flex justify-center text-[24px] font-[500]">
          CREAM CARD
        </div>
      </div>
      <div className="w-full flex justify-center mt-0">
        <div>Welcome</div>
      </div>
      <form
        action={createInvoice}
        method="post"
        className="flex flex-col w-full text-black  space-y-4"
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
        <button
          type="submit"
          className="bg-gradient-to-r from bg-[#f2be5c] to-white py-2 rounded-md"
        >
          Login
        </button>
      </form>
      <div className="flex flex-row justify-center my-2 items-center space-x-2">
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
        <div className="text-[16px]">OR</div>
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
      </div>
      <button className="flex flex-row py-2 w-full justify-center space-x-4 items-center border border-black/[0.15] rounded-[4px]">
        <Image width={16} height={16} src={"/google-icon.png"} alt="google" />
        <div>sign up with google</div>
      </button>
      <div className="flex flex-row w-full justify-center space-x-[2px] mt-2">
        <div className="text-[10px] font-medium">Don't have an account?</div>
        <button
          onClick={() => {
            closeModal();
            openSignUpModal();
          }}
          className="text-blue-500 text-[10px] font-medium"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
