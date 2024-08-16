import ImageSearchButton from "@/components/ImageSearchButton";
import UserCard from "@/components/UserCard";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdImageSearch } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="h-[70vh] w-full mb-2">
        <div
          className=" h-full w-full image flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/background1.png')",
            backgroundSize: "cover",
          }}
        >
          <img src="/logo.png" className="w-72 h-auto sm:hidden" />
          <img src="/icon.png" className="w-20 h-auto hidden sm:flex" />
          <div className="text-white text-[20px] mb-2">
            Explore our directory of businesses
          </div>
          <div className="bg-white w-[75%] sm:w-[90%] py-2 flex flex-row rounded-md m">
            <div className="flex flex-row items-center w-[85%] ml-2 rounded-md  px-2 bg-[#f2f4f8]">
              <IoSearch />
              <input
                placeholder="Search by name or"
                className="bg-[#f2f4f8]  rounded-md  py-2 outline-none w-full"
              />
              <ImageSearchButton />
            </div>
            <Link
              href={"/products"}
              className="bg-primary flex-1 w-full text-white mx-2 px-4 py-2 rounded-md"
            >
              Search
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-col items-center px-4 py-8">
        <div className="text-white flex space-x-1 flex-row">
          <div className="text-white text-[18px]">What is</div>
          <div className="text-primary text-[18px] mb-2">Safelink?</div>
        </div>
        <div className="text-white text-center">
          SafeLink is the tool we have created to allow vendors and service
          providers organize their business details, product photos,
          descriptions, and prices in just one link. Now, you don't have to
          flood your phone memory or bombard your client's phone with pictures
          upon pictures, all you have to do is to send a link, which makes it
          much easier for them to buy from you and for them to refer you to more
          of their friends and colleagues at the same time.
        </div>
        <button className="bg-primary text-white p-2 mt-4">
          Create your profile
        </button>
      </div>

      <div className="text-primary text-[24px] sm:hidden mx-4 text-lg my-4 font-semibold">
        Our Top Sellers
      </div>
      <div className="w-full hidden sm:flex justify-center">
        <div className="text-primary text-center text-[20px]  mx-4 text-lg my-4 font-semibold">
          Featured Profiles
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 px-4 ">
        {[...Array(6)].map((user, index) => (
          <UserCard data={user} key={index} />
        ))}
      </div>

      <div className="h-[50vh] w-full my-2">
        <div
          className=" h-full w-full image flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/background2.jpeg')",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-row sm:flex-col items-center">
            <div className="text-white font-semibold sm:text-lg text-xl">
              Present yourself and Yourself Better With
            </div>
            <div className="text-primary text-xl sm:text-xl ml-1 font-bold">
              CreamCard
            </div>
          </div>
          <div className="text-[#f2f2f2] text-center mt-2">
            CREAMCARD helps you tell your prospects and clients about yourself,
            your business and why they should buy from you
          </div>
          <button className="outline-none border text-[#f2f2f2] mt-6 font-semibold p-2 border-[#f2f2f2]">
            SIGN UP FOR A PROFILE TODAY
          </button>
        </div>
      </div>
    </div>
  );
}
