"use client";
import Inventory from "@/components/Inventory";
import PictureCategories from "@/components/PictureCategories";
import QA from "@/components/QA";
import UserProfileHeader from "@/components/UserProfileHeader";
import React, { useState } from "react";

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
        <PictureCategories categories={categories} />
      ) : (
        <Inventory inventory={inventory} />
      )}
    </section>
  );
};

export default page;
