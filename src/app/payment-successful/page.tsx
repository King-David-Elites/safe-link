'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
    const router = useRouter()
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
            Payment
          </h1>
          <p className="text-[#252625] leading-4 text-[10px]">
          You can now complete your profile by listing your desired products / services
          </p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-8'>
        <img src={'/success.svg'} alt="" />
        <div className='text-center my-5'>
            <h2 className='text-[#252625] font-semibold leading-[30px]'>Payment Successful</h2>
            <p className='text-[10px] leading-[15px] my-3'>Your payment in the amount of <span className='text-[#F2BE5C]'>N18,000 </span> has successfully processed 
            you can now enjoy our features</p>
        </div>
      </div>
      <div>
        <button className='bg-[#F2BE5C] rounded p-3 text-white leading-[18px] text-[12px] font-medium w-full my-3'>Proceed to Listing</button>
      </div>
    </section>
  )
}

export default page