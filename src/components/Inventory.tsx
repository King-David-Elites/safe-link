import { Product } from "@/types/product";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Inventory = ({ inventory }: { inventory: Product[] }) => {
  return (
    <section className="w-full h-full p-6">
      <div className="flex justify-start items-start gap-4 w-full flex-wrap">
        {inventory?.map((item, index) => (
          <div key={index} className="relative rounded-3xl w-[400px] min-h-[580px] bg-[#F6F6F6]">
            <img
              className="rounded-t-3xl w-full h-[287px] object-cover sm:36"
              src={item?.images[0]}
              alt=""
            />
            <div className="p-2">
              <h3 className="text-[#1C1B1F] text-[24px] font-semibold my-2">
                {item?.title}
              </h3>
              <p className="text-[#49454F] text-[16px] tracking-wide my-1">
                {item?.price}
              </p>
              <small className="text-[#49454F] text-[14px] leading-3">
                {item?.description}
              </small>
            </div>
            <button className="bg-[#F2BE5C] absolute bottom-0 left-0 m-1 p-2 rounded-lg w-full text-white border-[#CAC4D0] border">
              <Link href={{ pathname: "/product", query: { id: item._id } }}>
                view more
              </Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;
