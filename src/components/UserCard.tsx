import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

function UserCard({ data }) {
  return (
    <Link
      className="border rounded-lg flex flex-col"
      href={{
        pathname: "/product",
        query: {
          id: 3,
        },
      }}
    >
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
              className="rounded-full w-16 h-16 bg-cover"
            />
          </div>
        </div>
        <div className="px-4 mt-10">
          <h3 className="text-xl font-bold">Diane Russel</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempor
            mattis turpis egestas quam cursus sit lobortis. Quam cursus bibendum
            imperdiet sollicitudin porttitor. Eleifend nisi, mattis pulvinar
            sagittis at nisi aliquam metus. Ante accumsan vitae tristique at
            laoreet libero. Mauris tellus, nulla aliquam ut in quam et dis dui.
            Egestas egestas elementum proin purus.
          </p>
        </div>
      </div>
      <div className="flex-grow mb-4"></div>
    </Link>
  );
}

export default UserCard;
