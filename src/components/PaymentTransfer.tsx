import React from 'react'

const PaymentTransfer = () => {
  return (
    <div>
      <div className="bg-white drop-shadow-lg drop-shadow-[#00000026] rounded-xl p-5 shadow-lg shadow-[#00000026] mb-5 h-fit">
        <div className="flex items-center gap-3">
          <img src={"/ellipse.svg"} alt="" />
          <h2 className="text-[#170F49] leading-[35px] font-bold capitalize">
            12 month plan
          </h2>
        </div>
        <div>
          <p className="py-2 mt-2">
            <span className="text-[#170F49] font-bold leading-[30px] text-[32px]">
              N18,000
            </span>{" "}
            /12 months
          </p>
          <small className="text-[#170F49] font-bold leading-[20px] my-3 pb-3">
            What's included
          </small>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={"check.svg"} alt="" />
            <small className="text-[#170F49] text-[11px]">
              Unlimited listing
            </small>
          </div>
          <div className="flex items-center gap-2">
            <img src={"check.svg"} alt="" />
            <small className="text-[#170F49] text-[11px]">
              12 month subscription{" "}
            </small>
          </div>
          <div className="flex items-center gap-2">
            <img src={"check.svg"} alt="" />
            <small className="text-[#170F49] text-[11px]">
              {" "}
              Occasional Feature on the homepage
            </small>
          </div>
          <div className="flex items-center gap-2">
            <img src={"check.svg"} alt="" />
            <small className="text-[#170F49] text-[11px]">
              {" "}
              Occasional Feature on the Safelink social media platforms
            </small>
          </div>
        </div>
        <div>
          <h3 className='text-[#170F49] leading-5 font-bold my-3'>Payment Details</h3>
          <div>
            <ul>
              <li className='text-[#170F49] leading-5 text-[12px]'>Bank Name: Opay</li>
              <li className='text-[#170F49] leading-5 text-[12px] flex items-center gap-3'>Account Number: 9055443121 <img src={'/copy.svg'} alt="" /> </li>
              <li className='text-[#170F49] leading-5 text-[12px]'>Account Name: KDE </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <button className='bg-[#F2BE5C] rounded p-3 w-full text-white font-medium text-[12px] leading-[18px]'>I’ve made the payment</button>
      </div>
    </div>
  )
}

export default PaymentTransfer