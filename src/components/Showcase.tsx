import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export function Showcase(){
    return(
        <section className="p-5">
             <div className="grid grid-cols-3 sm:grid-cols-1  gap-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="border rounded-lg  flex flex-col">
              <div className="items-center mb-4 flex flex-col">
                <div className="w-full h-[250px] bg-[url('/image6.png')] rounded-lg bg-cover bg-no-repeat relative">
                  <div className="flex flex-row-reverse mr-4 mt-4">
                    <button>
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                  <div className="absolute -bottom-7 left-3">
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
        </section>
    )
}