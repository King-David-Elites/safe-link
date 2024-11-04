// app/payment/verify/page.tsx
"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const trxref = searchParams.get("trxref");
  const reference = searchParams.get("reference");

  return (
    <section className="px-5 py-10">
      <div className="flex items-start justify-between mb-5">
        {/* <button
          className="p-2 -mt-5"
          onClick={() => {
            router.back();
          }}
        >
          <FaArrowLeft size={20} />
        </button> */}
        <div className="flex-1 text-center">
          <h1 className="font-semibold text-[#252625] text-[20px] leading-7">
            Payment
          </h1>
          <p className="text-[#252625] leading-4 text-[10px]">
            You can now complete your profile by listing your desired products /
            services
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <img src={"/success.svg"} alt="" />

        <div className="text-center my-5">
          <h2 className="text-[#252625] font-semibold leading-[30px]">
            Payment Successful
          </h2>
          <p className="text-[10px] leading-[15px] my-3">
            Your payment has successfully processed you can now enjoy our
            features
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="bg-[#F2BE5C] rounded p-3 text-white leading-[18px] text-[12px] text-center font-medium w-full my-3"
        >
          Proceed to your profile
        </Link>
      </div>
    </section>
  );
}
