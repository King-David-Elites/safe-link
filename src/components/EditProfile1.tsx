"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const EditProfile1 = () => {
  const router = useRouter();
  return (
    <section className="px-3 py-5">
      <div className="flex items-start mb-5">
        <button
          className="p-2"
          onClick={() => {
            router.back();
          }}
        >
          <FaArrowLeft size={20} />
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-semibold text-[#252625] text-[20px] leading-7">
            Edit Your Profile
          </h1>
          <p className="text-[#696969] leading-4 text-[10px]">
            This information will be displayed publicly to give your customers
            an overview of who you are
          </p>
        </div>
      </div>

      <form>
        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            Name
          </label>
          <input
            name="title"
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            About
          </label>
          <textarea
            name="about"
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Brief description for your profile
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <p className="font-medium text-[12px] leading-3">
            Answer these questions to stand out to your prospects:
          </p>
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            1. What’s your name, and what can your customers call you?
          </label>
          <textarea
            name="title"
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Maximum of 100 words
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            2. What inspired you to start your business?
          </label>
          <textarea
            name="title"
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Maximum of 100 words
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            3. What makes your products or services unique?
          </label>
          <textarea
            name="title"
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Maximum of 100 words
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            4. Do you have a physical store? If so, where is it located?
          </label>
          <textarea
            name="title"
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Maximum of 100 words
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            5. Do you offer delivery services?
          </label>
          <textarea
            name="title"
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Maximum of 100 words
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            6. How can customers best reach you with any questions?
          </label>
          <textarea
            name="title"
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Maximum of 100 words
          </small>
        </div>

        <button className="bg-[#F2BE5C] font-medium text-white text-[14px] leading-5 rounded-lg p-3">Save & continue</button>
      </form>
    </section>
  );
};

export default EditProfile1;
