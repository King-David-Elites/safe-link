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
            Edit Your Listing
          </h1>
          <p className="text-[#252625] leading-4 text-[10px]">
            by showcasing your exclusive listings to our highly-esteemed users
          </p>
        </div>
      </div>

      <form className="w-full max-w-[600px] mx-auto">
        <div>
          <button className="text-[#252625] font-medium text-[11px] leading-3 flex items-center gap-2 my-2">
            <FaLocationDot className="text-[#2301F3]" size={20} />
            location
          </button>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            Title/Name
          </label>
          <input
          name="title"
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="text"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Very Short headline for your listing
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="description"
          >
            Description
          </label>
          <input
          name="description"
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
            <label className='text-[#252625] font-medium text-[14px] leading-3' htmlFor="title">Images</label>
            <div className="border-[0.5px] border-[#A6A6A6] border-dashed rounded w-full p-4 gap-3 flex flex-col items-center justify-center">
                <img src={'/Vector.svg'} className="h-10 w-10" alt="" />
                <small className="text-[#2301F3] text-[12px] leading-3">upload a file</small>
                <small className="text-[#696969] text-[12px] leading-3">PNG, JPG, GIF up to 5mb</small>
            </div>
            <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            mark and upload more than one high-quality images.
          </small>
        </div>

        <div className="flex flex-col items-start gap-2 my-2">
            <label className='text-[#252625] font-medium text-[14px] leading-3' htmlFor="title">Video</label>
            <div className="border-[0.5px] border-[#A6A6A6] border-dashed rounded w-full p-4 gap-3 flex flex-col items-center justify-center">
                <img src={'/Vector.svg'} className="h-10 w-10" alt="" />
                <small className="text-[#2301F3] text-[11px] leading-3">upload a file</small>
                <small className="text-[#696969] text-[11px] leading-3">MP4 only</small>
            </div>
            <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            upload a clear video showing the views (optional)
          </small>
        </div>

        <div className="flex items-center gap-5 w-[100px]">
          <label htmlFor="price" className="text-[14px] capitalize">price</label>
          <div className="flex items-center border-[0.5px] border-[#A6A6A6]">
            <input type="text" className="p-2 focus:outline-none" />
            <select className="p-2 focus:outline-none" name="currency">
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
            </select>
          </div>
        </div>
        <div className="my-5">
          <button className="bg-[#F2BE5C] py-2 px-3 text-white text-[14px] leading-4 font-semibold rounded-md capitalize" type="submit">list</button>
        </div>
      </form>
    </section>
  );
};

export default page;
