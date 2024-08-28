import React from "react";
import { useRouter } from "next/navigation";
import { FaCamera } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { HiUpload } from "react-icons/hi";

const UserProfileHeader = () => {
  const router = useRouter();
  const stringifiedUser = localStorage.getItem("user");
  const user = JSON.parse(stringifiedUser);
  console.log("user", user);

  return (
    <header className="max-w-full">
      <div className="relative">
        <img src={"/cp-placeholder.png"} alt="" className="h-[150px] w-full" />
        <button
          className="capitalize absolute top-2 left-2 flex items-center gap-2"
          onClick={() => router.back()}
        >
          <FaArrowLeftLong size={24} /> back
        </button>
      </div>
      <div className="w-full max-w-[960px] mx-auto flex items-end sm:items-center -mt-12 sm:mt-3 justify-between space-x-10 sm:space-x-1 sm:px-2">
        <div className="relative">
          <img
            className="h-28 w-28 sm:h-16 sm:w-16"
            src={"/pp-placeholder.png"}
            alt="profile"
          />
          <button className="rounded-full bg-gray-500/[0.5] p-2 absolute bottom-1 -right-1 cursor-pointer">
            <FaCamera size={15} />
          </button>
        </div>
        <div className="flex items-center gap-5 justify-between ">
          <div className="">
            <h1 className="flex items-center gap-2 font-semibold leading-8 text-[22px] sm:text-[14px] text-nowrap">
              KingDavid Team <img src={"/verification.svg"} alt="" />
            </h1>
            <small className="text-[14px] sm:text-[12px] font-semibold leading-5 text-[#737373]">
              Joined: 2022
            </small>
          </div>

          <div className="flex items-center gap-3 justify-between  sm:flex-wrap sm:justify-center">
            <button className="bg-[#F2BE5C] text-white capitalize flex items-center gap-3 leading-6 p-2 border border-[#F2BE5C] rounded cursor-pointer text-nowrap">
              <IoMdShareAlt size={20} />
              share profile
            </button>
          </div>
        </div>
      </div>
      <p className="my-2 mx-[10%] sm:mx-[2%] p-5 text-[#444544] tracking-wide text-[12px] leading-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempor
        mattis turpis egestas quam cursus sit lobortis. Quam cursus bibendum
        imperdiet sollicitudin porttitor. Eleifend nisi, mattis pulvinar
        sagittis at nisi aliquam metus. Ante accumsan vitae tristique at laoreet
        libero. Mauris tellus, nulla aliquam ut in quam et dis dui. Egestas
        egestas elementum proin purus.
      </p>
    </header>
  );
};

export default UserProfileHeader;
