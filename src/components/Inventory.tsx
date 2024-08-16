import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Inventory = ({
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
      <div className=" grid sm:grid-cols-2 grid-cols-3 gap-4">
        {inventory.map((category, index) => (
          <div
            key={index}
            className="border-[#cac4d0] rounded-lg border bg-[#f6f6f6] pb-2"
          >
            <img
              src={category.images[0]}
              className=" h-[40vh] rounded-lg w-full sm:w-[45vw] sm:h-[25vh] image flex flex-col items-center justify-between"
            />
            {/* <div className="flex flex-row-reverse w-full ">
              <button className="hover:text-black/[0.6]">
                <FaRegHeart size={24} />
              </button>
            </div> */}
            <div className="flex flex-col px-2 space-y-1 sm:space-y-[2px]">
              <div className=" font-semibold sm:text-[14px] text-[20px]">
                {category.title}
              </div>
              <div className=" font-semibold text-[15px] sm:text-[14px]">
                {category.price}
              </div>
              <div className="sm:hidden font-medium text-[12px]">
                {category.description}
              </div>
              <div className="flex flex-row-reverse">
                <button className="bg-primary text-white px-4 py-1 rounded-xl">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;
