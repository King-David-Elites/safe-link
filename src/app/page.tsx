import Image from "next/image";
import { IoSearch } from "react-icons/io5";

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
          <div className="text-white">Explore our directory of businesses</div>
          <div className="bg-white w-[75%] sm:w-[90%] py-2 flex flex-row rounded-md m">
            <div className="flex flex-row items-center w-[85%] ml-2 rounded-md  px-2 bg-[#f2f4f8]">
              <IoSearch />
              <input
                placeholder="Search by name or"
                className="bg-[#f2f4f8]  rounded-md  py-2 outline-none w-full"
              />
            </div>
            <button className="bg-primary flex-1 w-full text-white mx-2 px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
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
