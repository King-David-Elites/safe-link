'use client'
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import useModalStore from "@/store/useModalStore";

export function Showcase() {

  const {
    isLogInModalOpen,
    isSignUpModalOpen,
    isDrawerOpen,
    openLogInModal,
    closeLogInModal,
    openSignUpModal,
    closeSignUpModal,
    openDrawer,
    closeDrawer,
  } = useModalStore();

  return (
    <>
      <section className="flex items-center justify-center text-center bg-[#0D0D0D] p-28 my-5 sm:p-4">
        <div>
          <h2 className="font-medium leading-8 text-[24px] text-center text-white">
            What is <span className="text-[#F2BE5C]">Safelink?</span>
          </h2>
          <p className="text-[14px] text-white my-2">
            SafeLink is the tool we have created to allow vendors and service
            providers organize their business details, product photos,
            descriptions, and prices in just one link. Now, you don't have to
            flood your phone memory or bombard your client's phone with pictures
            upon pictures, all you have to do is to send a link, which makes it
            muchCreate an Account easier for them to buy from you and for them
            to refer you to more of their friends and colleagues
            at the same time.
          </p>
          <button onClick={openSignUpModal} className="bg-[#F2BE5C] py-2 px-4 rounded border border-[#F2BE5C] text-white my-5 font-medium">
            Create an Account
          </button>
        </div>
      </section>
      <section className="p-5">
        <div>
          <h2 className="text-[#FDAF1E] font-semibold leading-6 text-[24px] my-5 w-full sm:text-center">
            Our Top Sellers
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1  gap-10">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="border-x border-b border-[#000000] rounded-lg  flex flex-col"
            >
              <div className="items-center mb-4 flex flex-col">
                <div className="w-full h-[200px]  bg-[url('/image6.png')] rounded-lg bg-cover bg-no-repeat relative">
                  <div className="flex flex-row-reverse mr-4 mt-4">
                    <button>
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                  <div className="absolute -bottom-5 left-3">
                    <Image
                      src="/image7.png"
                      alt="Profile"
                      width={300}
                      height={300}
                      className="rounded-full w-12 h-12 bg-cover"
                    />
                  </div>
                </div>
                <div className="px-4 mt-10">
                  <h3 className="text-[18px] leading-6 text-black my-2">
                    Dianne Russell
                  </h3>
                  <p className="text-[#444544F2] leading-5 text-[14px] tracking-wide">
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

      <section>
        <div className="h-[50vh] w-full my-2">
          <div
            className=" h-full w-full image flex flex-col items-center justify-center bg_blend"
            // style={{
            //   backgroundImage: "url('/background2.jpeg')",
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            // }}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-white font-semibold sm:text-lg text-[28px] sm:text-[18px] text-center">
                {" "}
                Present Yourself and Your Business Better with{" "}
                <span className="text-primary uppercase font-semibold text-[28px]">
                  CreamCard
                </span>
              </h2>
              <p className="text-[#f2f2f2] text-center sm:text-[14px] mt-2">
                CREAMCARD helps you tell your prospects and clients about
                yourself, your business and why they should buy from you
              </p>
            </div>

            <button onClick={openSignUpModal} className="bg-[#F2BE5C] py-2 px-4 rounded border border-[#F2BE5C] text-white my-5 font-medium">
            SIGN UP FOR A PROFILE TODAY
          </button>
          </div>
        </div>
      </section>
    </>
  );
}
