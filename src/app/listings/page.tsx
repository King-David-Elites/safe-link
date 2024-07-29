"use client";
// pages/Listings.js

import Image from "next/image";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <div className="w-full flex justify-center">
          <div className="bg-white w-[75%] sm:w-[100%] py-2 flex flex-row rounded-md m">
            <div className="flex flex-row items-center w-[85%] ml-2 rounded-md  px-2 bg-[#f2f4f8]">
              <IoSearch />
              <input
                placeholder="Search by name or keywords"
                className="bg-[#f2f4f8] ml-2 rounded-md  py-2 outline-none w-full"
              />
            </div>
            <button className="bg-primary flex-1 w-full text-white mx-2 px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Search Results (10)</h2>
        <div className="grid grid-cols-3 sm:grid-cols-1  gap-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="border rounded-lg  flex flex-col">
              <div className="items-center mb-4 flex flex-col">
                <div className="w-full h-48 bg-[url('/image6.png')] rounded-lg bg-cover bg-no-repeat">
                  <div className="flex flex-row-reverse mr-4 mt-4">
                    <button>
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                  <div className="relative top-32 left-4">
                    <Image
                      src="/image7.png"
                      alt="Profile"
                      width={500}
                      height={500}
                      className="rounded-full w-16 h-16  bg-cover"
                    />
                  </div>
                </div>
                <div className="px-4 mt-10">
                  <h3 className="text-xl font-bold">Dianne Russell</h3>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    tempor mattis turpis egestas quam cursus sit lobortis. Quam
                    cursus bibendum imperdiet sollicitudin porttitor. Eleifend
                    nisi, mattis pulvinar sagittis at nisi aliquam metus. Ante
                    accumsan vitae tristique at laoreet libero. Mauris tellus,
                    nulla aliquam ut in quam et dis dui. Egestas egestas
                    elementum proin purus.
                  </p>
                </div>
              </div>
              <div className="flex-grow mb-4"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Listings;
