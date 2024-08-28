import { Product } from "@/types/product";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Inventory = ({ inventory }: { inventory: Product[] }) => {
  return (
    <section className="p-6">
      <div className=" grid sm:grid-cols-1 grid-cols-3 gap-4">
        {inventory?.map((item, index) => (
          <div key={index} className="rounded-3xl bg-[#F6F6F6]">
            <img
              className="rounded-t-3xl w-full h-48 sm:36"
              src={item?.images[0]}
              alt=""
            />
            <div className="p-2">
              <h3 className="text-[#1C1B1F] text-[11px] font-semibold leading-4 tracking-wider my-2">
                {item?.title}
              </h3>
              <p className="text-[#49454F] text-[10px] leading-3 tracking-wide my-1">
                {item?.price}
              </p>
              <small className="text-[#49454F] text-[8px] leading-3">
                {item?.description}
              </small>
            </div>
            <button className="bg-[#F2BE5C] m-1 p-2 rounded-lg w-full text-white border-[#CAC4D0] border">
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
