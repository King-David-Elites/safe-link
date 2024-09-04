import { useRouter } from "next/navigation";
import React from "react";
import { FaCamera } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { HiUpload } from "react-icons/hi";
import useLocalStorage from "use-local-storage";
import Link from "next/link";

const ProfileHeader = () => {
  const router = useRouter();

  const [user] = useLocalStorage<any>("user", null);

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
      <div className="w-full max-w-[960px] mx-auto flex items-end sm:items-center -mt-12 sm1:mt-3 justify-between space-x-10 sm1:space-x-1 sm1:px-2 ">
        <div className="relative">
          <img
            className="h-28 w-28 sm1:h-14 sm1:w-14 rounded-full"
            src={"/pp-placeholder.png"}
            alt="profile"
          />
          <button className="rounded-full bg-gray-500/[0.5] p-2 absolute bottom-1 -right-1 cursor-pointer">
            <FaCamera size={15} />
          </button>
        </div>
        <div className="flex items-center gap-5 justify-between ">
          <div className="">
            <h1 className="flex items-center gap-2 font-semibold leading-8 text-[22px] sm1:text-[12px]  text-nowrap">
              {user.email} <img src={"/verification.svg"} alt="" />
            </h1>
            <small className="text-[14px] sm1:text-[12px] font-semibold leading-5 text-[#737373]">
              Joined: {user?.createdAt.slice(0, 4)}
            </small>
          </div>

          <div className="flex items-center gap-3 justify-between sm1:flex-wrap sm1:justify-center">
            <Link
              href="/profile/edit-profile"
              // onClick={() => {
              //   router.push("/profile/edit-profile");
              // }}
              className="text-[#737373] capitalize flex items-center gap-3 leading-6 p-2 border border-[#A6A6A6] rounded cursor-pointer text-nowrap sm:hidden"
            >
              <MdEdit size={20} />
              edit profile
            </Link>
            <button className="bg-[#F2BE5C] text-white capitalize flex items-center gap-3 leading-6 p-2 border border-[#F2BE5C] rounded cursor-pointer text-nowrap">
              <IoMdShareAlt size={20} />
              share profile
            </button>
            <Link
              href={"/pricing"}
              className="bg-[#252625] text-[#F2F2F2] capitalize flex items-center gap-3 leading-6 p-2 border border-[#252625] rounded cursor-pointer text-nowrap sm1:hidden"
            >
              <HiUpload size={20} />
              upgrade account
            </Link>
          </div>
        </div>
      </div>
      <p className="my-2 mx-[10%] sm1:mx-[2%] p-5 text-[#444544] tracking-wide text-[12px] leading-4">
        {user?.about}
      </p>
      <div className="hidden sm:flex items-center justify-between mx-[5%]">
        <button
          onClick={() => {
            router.push("/profile/edit-profile");
          }}
          className="text-[#737373] capitalize flex items-center gap-3 leading-6 p-2 border border-[#A6A6A6] rounded cursor-pointer text-nowrap"
        >
          <MdEdit size={16} />
          edit profile
        </button>
        <button className="bg-[#252625] text-[#F2F2F2] capitalize flex items-center gap-3 leading-6 p-2 border border-[#252625] rounded cursor-pointer text-nowrap">
          <HiUpload size={20} />
          upgrade account
        </button>
      </div>
    </header>
  );
};

export default ProfileHeader;
