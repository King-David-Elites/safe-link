"use client";
import DynamicBackground from "@/components/DynamicBackground";
import { Showcase } from "@/components/Showcase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { MdImageSearch } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  const images = [
    "/homepage-image-1.jpg",
    "/homepage-image-2.jpg",
    "/homepage-image-3.jpg",
    "/homepage-image-4.jpg",
    "/homepage-image-5.jpg",
    "/homepage-image-6.jpg",
    "/homepage-image-7.jpg",
    "/homepage-image-8.jpg",
    "/homepage-image-9.jpg",
    "/homepage-image-10.jpg",
    "/homepage-image-11.jpg",
    "/homepage-image-12.jpg",
    "/homepage-image-13.jpg",
    "/homepage-image-14.jpg",
    "/homepage-image-15.jpg",
    "/homepage-image-16.jpg",
    "/homepage-image-17.jpg",
  ];

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="h-[70vh] w-full mb-2  ">
        <DynamicBackground images={images}>
          <div className="m-1 flex items-center justify-center">
            <Image
              alt="logo"
              src="/safe.svg"
              width={250}
              height={70}
              className="object-cover my-3 sm:hidden"
            />
          </div>
          <div className="sm:flex flex-col items-center mb-3 hidden">
            <img src="/icon.svg" alt="" />
            <p className="text-white text-[15px] sm:block hidden">
              Explore our directory of businesses
            </p>
          </div>

          <div className="bg-white w-[75%] sm:w-[85%] py-2 flex flex-row rounded-md">
            <div className="flex flex-row items-center w-[85%] ml-2 rounded-md  px-2 bg-[#f2f4f8] sm:w-full">
              <IoSearch />
              <div className="pl-2 w-full flex items-center justify-between">
                <input
                  onClick={() => {
                    router.push("/products");
                  }}
                  placeholder="Search by name or keyword"
                  className=" outline-none w-full bg-transparent sm:text-xs"
                />
                <img src={"/camera.svg"} alt="" className="w-6 h-6" />
              </div>
            </div>
            <Link
              href={"/products"}
              className="bg-primary sm:hidden flex-1 w-full text-white mx-2 px-4 py-2 rounded-lg leading-6 font-medium text-[18px] text-center "
            >
              Search
            </Link>
          </div>
        </DynamicBackground>
      </div>
      <div className="relative top-[15vh]">
        <Showcase />
      </div>
    </div>
  );
}
