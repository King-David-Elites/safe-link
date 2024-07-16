import { useRouter } from "next/navigation";
import React from "react";
import { FaBackward, FaCamera } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const ProfileHeader = () => {
  const router = useRouter();
  return (
    <header>
      <div
        className=" h-40 sm:h-28 w-full image flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/cp-placeholder.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row w-full px-[5%] mt-2 justify-between">
          <button onClick={() => router.back()}>
            <IoArrowBack size={24} />
          </button>
          <button className="rounded-full bg-gray-500/[0.5] p-2">
            <FaCamera size={20} />
          </button>
        </div>
        <div className="relative -bottom-20 sm:mt-4 w-[80%] sm:w-[95%]">
          <div className="  items-end sm:items-center flex justify-between flex-row">
            <div className="flex flex-row items-end">
              <img
                src="/pp-placeholder.png"
                alt="Logo"
                className="h-24 w-24 sm:h-16 sm:w-16"
              />
              <div className="ml-4 sm:ml-2 ">
                <h1 className="text-xl sm:text-[16px] sm:w-[40vw] font-bold overflow-clip">
                  KingDavid
                </h1>
                <p className="text-sm">Joined: 2022</p>
              </div>
            </div>
            <button className="ml-auto bg-gray-800 text-white px-4 sm:px-1 sm:text-xs py-2 rounded">
              Message this seller
            </button>
          </div>
        </div>
      </div>
      <p className="mt-20 sm:mt-24 mx-[10%] sm:mx-[5%]">
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

export default ProfileHeader;
