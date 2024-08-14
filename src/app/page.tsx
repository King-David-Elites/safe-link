'use client'
import { Showcase } from "@/components/Showcase";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="h-[70vh] w-full mb-2">
        <div
          className=" h-full w-full image flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/background1.png')",
            backgroundColor: "#00000080",
            backgroundSize: "cover",
            backgroundBlendMode: "mutiply",
            backgroundPosition: "center"
          }}
        >
          <div className="m-1 flex items-center justify-center">
          <Image alt="logo" src="/safe.svg" width={250} height={70} className="object-cover my-3 sm:hidden" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <img src="/icon.svg" alt="" />
            <p className="text-white text-[15px] sm:block hidden">Explore our directory of businesses</p>
          </div>
      
          <div className="bg-white w-[75%] sm:w-[90%] py-2 flex flex-row rounded-md m">
            <div className="flex flex-row items-center w-[85%] ml-2 rounded-md  px-2 bg-[#f2f4f8] sm:w-full">
              <IoSearch />
              <div className="p-2 w-full flex items-center justify-between">
              <input
              onClick={() => {
                router.push('/listings')
              }}
                placeholder="Search by name or keyword"
                className=" outline-none w-full bg-transparent"
              />
              <img src={'/camera.svg'} alt="" className="w-7 h-7" />
              </div>
            </div>
            <Link
              href={"/listings"}
              className="bg-primary flex-1 w-full text-white mx-2 px-4 py-2 rounded-lg leading-6 font-medium text-[18px] text-center sm:hidden"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
       <div className="my-5">
        <Showcase/>
       </div>
     
    </div>
  );
}
