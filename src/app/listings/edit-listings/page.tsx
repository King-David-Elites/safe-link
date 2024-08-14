"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";

const page = () => {
  const router = useRouter();
  return (
    <section className="px-3 py-5">
      <div className="flex items-start">
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
            Edit Your Listing
          </h1>
          <p className="text-[#252625] leading-4 text-[10px]">
            by showcasing your exclusive listings to our highly-esteemed users
          </p>
        </div>
      </div>

      <form>
        <div>
          <button className="text-[#252625] font-medium text-[11px] leading-3">
            <FaLocationDot size={20} />
            location
          </button>
        </div>

        <div>
          <label
            className="text-[#252625] font-medium text-[11px] leading-3"
            htmlFor="title"
          >
            Title/Name
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded"
            type="text"
          />
          <small className="text-[#A6A6A6] text-[8px] leading-[8px]">
            Very Short headline for your listing
          </small>
        </div>

        <div>
          <label
            className="text-[#252625] font-medium text-[11px] leading-3"
            htmlFor="title"
          >
            Description
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded"
            type="text"
          />
        </div>

        <div>
            <label className='text-[#252625] font-medium text-[11px] leading-3' htmlFor="title">Title/Name</label>
            <div>
                <CiImageOn/>
                <small>upload a file</small>
                <small>PNG, JPG, GIF up to 5mb</small>
            </div>
        </div>
      </form>
    </section>
  );
};

export default page;
