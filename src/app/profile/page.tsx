"use client";
import Inventory from "@/components/Inventory";
import PictureCategories from "@/components/PictureCategories";
import ProfileHeader from "@/components/ProfileHeader";
import QA from "@/components/QA";
import Head from "next/head";
import React, { useState } from "react";

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

const Page = () => {
  const [type, setType] = useState<"images" | "inventory">("images");

  return (
    <div className="w-full">
      <Head>
        <title>KingDavid Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileHeader />
      <QA questions={questions} />
      <div className="flex-row flex justify-around mt-8">
        <button
          className="items-center flex flex-col"
          onClick={() => setType("images")}
        >
          <div
            className={`text-[22px] sm:text-[14px] sm:text-[#696969]  font-medium text-black/[0.5]`}
          >
            My Pictures
          </div>
          {type === "images" && (
            <div className={`h-[6px] bg-black w-48 sm:w-28 rounded-md`} />
          )}
        </button>
        <button
          className="items-center flex flex-col"
          onClick={() => setType("inventory")}
        >
          <div className="text-[22px] sm:text-[14px] sm:text-[#696969] font-medium text-black/[0.5]">
            My Inventory
          </div>
          {type === "inventory" && (
            <div className="h-[6px] sm:w-28 bg-black w-48 rounded-md" />
          )}
        </button>
      </div>
      {type === "images" ? (
        <PictureCategories categories={categories} />
      ) : (
        <Inventory inventory={inventory} />
      )}
    </div>
  );
};

export default Page;
