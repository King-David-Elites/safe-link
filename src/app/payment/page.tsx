"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import PaymentTransfer from "@/components/PaymentTransfer";
import PaymentCard from "@/components/PaymentCard";

const page = () => {
  const router = useRouter();
  const [type, setType] = useState<"card" | "transfer">("card");
  return (
    <section className="px-5 py-10">
      <div className="flex items-start justify-between mb-5">
        <button
          className="p-2 -mt-5"
          onClick={() => {
            router.back();
          }}
        >
          <FaArrowLeft size={20} />
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-semibold text-[#252625] text-[20px] leading-7">
            Prices
          </h1>
          <p className="text-[#252625] leading-4 text-[10px]">
            by showcasing your exclusive listings to our highly-esteemed users
          </p>
        </div>
      </div>

      <div className="flex-row flex justify-around my-8">
        <button
          className="items-center flex flex-col focus:outline-none"
          onClick={() => setType("card")}
        >
          <div
            className={`text-[18px] sm:text-[13px] p-2 transition-colors duration-300 ${type === "card" ? "text-[#F2BE5C]" : "text-black"}  leading-5 font-medium`}
          >
            Pay with your card
          </div>
          {type === "card" && (
            <div
              className={`h-[6px] sm:h-[4px]  bg-[#F2BE5C] w-48 sm:w-28 rounded-md`}
            />
          )}
        </button>
        <button
          className="items-center flex flex-col focus:outline-none"
          onClick={() => setType("transfer")}
        >
          <div
            className={`text-[18px] sm:text-[13px] p-2 font-medium leading-5 transition-colors duration-300 ${type === "transfer" ? "text-[#F2BE5C]" : "text-black"}`}
          >
            Pay with bank transfer
          </div>
          {type === "transfer" && (
            <div className="h-[6px] sm:h-[4px] sm:w-28 bg-[#F2BE5C] w-48 rounded-md" />
          )}
        </button>
      </div>

      <div>{type === "card" ? <PaymentCard /> : <PaymentTransfer />}</div>
    </section>
  );
};

export default page;
