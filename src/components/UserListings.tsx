import Link from "next/link";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const UserListings = ({
  inventory,
}: {
  inventory: {
    title: string;
    images: string[];
    price: string;
    description: string;
  }[];
}) => {
  return (
    <section className="p-6">
      <div className=" grid sm:grid-cols-1 grid-cols-3 gap-4">
        {inventory.map((category, index) => (
          <div key={index} className="rounded-3xl bg-[#F6F6F6]">
            <img className="rounded-t-3xl" src={category?.images[0]} alt="" />
            <div className="p-2">
              <h3 className="text-[#1C1B1F] text-[11px] font-semibold leading-4 tracking-wider my-2">
                {category?.title}
              </h3>
              <p className="text-[#49454F] text-[10px] leading-3 tracking-wide my-1">
                {category?.price}
              </p>
              <small className="text-[#49454F] text-[8px] leading-3">
                {category?.description}
              </small>
            </div>
            <div className="flex items-center justify-between p-2">
              <button className="bg-[#F2BE5C] m-1 p-2 rounded-lg  text-white border-[#CAC4D0] border">
                <Link href={"/profile/photos"}>view more</Link>
              </button>
              <button>
                <FaPlusCircle size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserListings;
