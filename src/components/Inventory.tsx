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
            className=" h-[50vh] rounded-lg w-full sm:w-[45vw] sm:h-[25vh] image flex p-2 flex-col items-center justify-between"
            style={{
              backgroundImage: `url(${category.images[0]})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-row-reverse w-full ">
              <button className="hover:text-black/[0.6]">
                <FaRegHeart size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-1">
              <div className="text-[#f2f2f2] font-semibold sm:text-[14px] text-[20px]">
                {category.title}
              </div>
              <div className="text-white font-semibold text-[15px] sm:text-[14px]">
                {category.price}
              </div>
              <div className="text-white sm:hidden font-medium text-[12px]">
                {category.description}
              </div>
              <div className="flex flex-row-reverse">
                <button className="bg-primary text-white px-4 py-1 rounded-sm">
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
