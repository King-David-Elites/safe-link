"use client";
import QA from "@/components/QA";
import UserListings from "@/components/UserListings";
import UserPictures from "@/components/UserPictures";
import UserProfileHeader from "@/components/UserProfileHeader";
import React, { useState } from "react";
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const page = () => {
  const [type, setType] = useState<"images" | "inventory">("images");

  function createObjectCopies<T>(obj: T): T[] {
    return new Array(6).fill({ ...obj });
  }

  const questions = [
    {
      question: "How did you get into this line of business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun",
    },
    {
      question: "What are your biggest hopes and dreams for your business?",
      answer:
        "e et ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun",
    },

    {
      question: "What is your favorite thing about this business of yours?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun",
    },
  ];

  const categories = [
    {
      title: "Professional Pictures",
      images: ["/image3.png", "/image4.png", "/image5.png"],
    },
    {
      title: "Work Pictures",
      images: ["/image3.png", "/image4.png", "/image5.png"],
    },
    {
      title: "Leisure Pictures",
      images: ["/image3.png", "/image4.png", "/image5.png"],
    },
  ];

  const inventoryObject = {
    title: "Name of Product",
    price: "Price of Product",
    description:
      "This is a short explanation of the product to be sold and clicking the read more should lead to the pictures",
    images: ["/image4.png"],
  };
  const inventory = createObjectCopies(inventoryObject);
  return (
    <section className="w-full">
      <UserProfileHeader />
      <QA questions={questions} />
      <div className="flex-row flex justify-around my-8 border-y-4 border-[#ECEDEE]">
        <button
          className="items-center flex flex-col"
          onClick={() => setType("images")}
        >
          <div
            className={`text-[18px] sm:text-[13px] py-2 sm:text-[#696969] leading-5 font-medium text-black/[0.5]`}
          >
            My Pictures
          </div>
          {type === "images" && (
            <div
              className={`h-[6px] sm:h-[4px] sm:bg-[#000000] bg-[#00000080] w-48 sm:w-28 rounded-md`}
            />
          )}
        </button>
        <button
          className="items-center flex flex-col"
          onClick={() => setType("inventory")}
        >
          <div className="text-[18px] sm:text-[13px] py-2 sm:text-[#696969] font-medium text-black/[0.5]">
            My Listings
          </div>
          {type === "inventory" && (
            <div className="h-[6px] sm:h-[4px] sm:w-28 sm:bg-[#000000] bg-[#00000080] w-48 rounded-md" />
          )}
        </button>
      </div>
      {type === "images" ? (
        <UserPictures categories={categories} />
      ) : (
        <UserListings inventory={inventory} />
      )}

<div className="bg-[#B28E49] rounded-md p-2 my-3">
          <p className="text-[12px] leading-4 font-semibold text-white">Your List</p>
          <div className='bg-white p-1 flex items-center justify-between gap-3 my-2 rounded-md'>
            <img className='w-10 h-10' src={'/image2.jpg'} alt="" />
            <div className='flex-1'>
                <h3 className='text-[#F2BE5C] font-semibold text-[12px] leading-5'>Black and White Crop Top</h3>
                <small className='font-medium text-[12px] leading-5'>N2,500</small>
            </div>
            <div className='flex items-center gap-2'>
                <img src={'/remove.svg'} alt="" />
                <small>1</small>
                <img src={'/add.svg'} alt="" />
                <MdDelete className='text-[#DC1F1F]' size={20} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-1">
              <button className="text-white font-semibold text-[12px] leading-5 flex items-center gap-3 bg-[#4CAF50] p-2 rounded-md my-2 flex-1 text-nowrap">
                  <IoLogoWhatsapp size={25}/>
                  Share list to seller via Whatsapp
              </button>
              <button className="text-white font-semibold text-[12px] leading-5 flex items-center gap-3 bg-[#A70A0A] p-2 rounded-md my-2 text-nowrap">
                  <MdDelete size={25}/>
                 Clear list
              </button>
          </div>
      </div>
    </section>
  );
};

export default page;
