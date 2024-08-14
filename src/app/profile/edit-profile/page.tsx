'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const page = () => {
    const router = useRouter()

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
          This information will be displayed publicly to give your customers an overview of who you are
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
          {/* <small className="text-[#A6A6A6] text-[8px] leading-[8px]">
            Very Short headline for your listing
          </small> */}
        </div>
      </form>
    </section>
  )
}

export default page