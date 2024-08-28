import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const PaymentCard: React.FC = () => {
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
      </div>

      <form>
        <div className="flex items-start gap-1 flex-col my-3">
          <label
            htmlFor="cardNumber"
            className="text-[#252625] text-[12px] leading-4 capitalize"
          >
            Card Number
          </label>
          <input
            className="border-[0.76px] border-[#737373] rounded p-3 w-full focus:outline-none"
            type="text"
          />
          <div className="flex items-center gap-3">
            <small className="text-[#252625]">Accepted Cards</small>
            <img src={"/visa.svg"} alt="" />
            <img src={"/mastercard.svg"} alt="" />
          </div>
        </div>

        <div className="flex items-start gap-1 flex-col my-3">
          <label
            htmlFor="cardName"
            className="text-[#252625] text-[12px] leading-4 capitalize"
          >
            Card Name
          </label>
          <input
            className="border-[0.76px] border-[#737373] rounded p-3 w-full focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-start gap-1 flex-col my-3">
            <label
              htmlFor="expireDate"
              className="text-[#252625] text-[12px] leading-4 capitalize"
            >
              expire date
            </label>
            <input
              className="border-[0.76px] border-[#737373] rounded p-3 w-full focus:outline-none"
              type="text"
            />
          </div>

          <div className="flex items-start gap-1 flex-col my-3">
            <label
              htmlFor="cvv"
              className="text-[#252625] text-[12px] leading-4 uppercase"
            >
              cvv{" "}
            </label>
            <input
              className="border-[0.76px] border-[#737373] rounded p-3 w-full focus:outline-none"
              type="text"
            />
          </div>
        </div>

        <div className="flex items-start gap-1 flex-col my-3">
          <label
            htmlFor="password"
            className="text-[#252625] text-[12px] leading-4 capitalize"
          >
            {" "}
            password
          </label>
          <input
            className="border-[0.76px] border-[#737373] rounded p-3 w-full focus:outline-none"
            type="text"
          />
          <div className="flex items-center gap-2">
            <input className="focus:outline-none" type="radio" name="" id="" />
            <small className="text-[#252625] text-[12px] leading-4">Save card details for future transactions</small>
          </div>
        </div>
        <div>
          <button className="bg-[#F2BE5C] rounded p-3 text-white font-medium text-[12px] leading-[18px] w-full text-center my-2">
          CLICK TO PROCEED PARMENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentCard;
