import Image from "next/image";
import Link from "next/link";
//import { useRouter } from "next/navigation";
import React from "react";
import { MdCancel } from "react-icons/md";

async function getData() {
  const res = await fetch("https://freetestapi.com/api/v1/books");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function page() {
  //const router = useRouter();
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      //status: formData.get("status"),
    };
    console.log("form data", rawFormData);

    // mutate data
    // revalidate cache
  }
  //const data = await getData();
  //console.log("data", data);
  return (
    <div className="flex flex-col items-center sm:px-[2%] min-h-screen max-w-[760px] mx-auto">
      <div className="flex-row w-full flex items-center">
        {/* <Link href={"/"}>
          <MdCancel size={28} />
        </Link> */}
        <div className="w-full flex justify-center mt-4 text-[24px] font-[500]">
          CREAM CARD
        </div>
      </div>
      <div>Welcome back</div>
      <form className="flex flex-col w-full mt-8 sm:w-full space-y-4">
        <div className="">
          <div>Email</div>
          <input
            className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-2 w-full rounded-[4px]"
            id="email"
            title="Email"
            name="email"
            placeholder="Enter your email here"
            type="email"
          />
        </div>
        <div className="">
          <div>Password</div>
          <input
            className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-2 w-full rounded-[4px]"
            id="password"
            title="Password"
            name="password"
            placeholder="••••••••"
            type="password"
          />
        </div>
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

        <button
          title="submit"
          formAction={createInvoice}
          className="bg-gradient-to-r from bg-[#f2be5c] to-white py-2 rounded-md"
        >
          login
        </button>
      </form>
      <div className="flex flex-row justify-center my-4 items-center space-x-2">
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
        <div className="text-[16px]">OR</div>
        <div className="border-b w-8 h-0 border-[#a6a6a6]"></div>
      </div>
      <button className="flex flex-row py-2 my-2 w-full justify-center space-x-4 items-center border border-black/[0.15] rounded-[4px]">
        <Image width={16} height={16} src={"/google-icon.png"} alt="google" />
        <div>sign up with google</div>
      </button>
      <div className="flex flex-row w-full justify-center space-x-[2px] mt-2">
        <div className="text-[12px] font-medium">Don't have an account?</div>
        <Link
          href={"/signup"}
          className="text-blue-500 text-[12px] font-medium"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default page;
