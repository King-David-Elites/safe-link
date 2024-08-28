"use client";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useModalStore from "@/store/useModalStore";
import { fetchInventory } from "@/lib/api";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import useListStore from "@/store/useListStore";

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
  const [inventory, setInventory] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getInventory = async () => {
      const inventory = await fetchInventory(router);
      if (inventory) {
        setInventory(inventory);
      }
    };
    getInventory();
  }, []);

  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useListStore();

  //const isFavorite = (id) => favorites.some((item) => item.id === data._id);
  const isFavorite = (id) => favorites.find((obj) => obj.id === id);

  const handleFavoriteToggle = (data) => {
    if (isFavorite(data._id)) {
      removeFromFavorites(data._id);
    } else {
      // Add the item to favorites with relevant properties
      addToFavorites({
        id: data._id,
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.images[0],
      });
    }
  };

  return (
    <>
      <section className="flex items-center justify-center text-center bg-[#0D0D0D] p-28 my-5 sm:p-4">
        <div>
          <h2 className="font-medium leading-8 text-[24px] text-center text-white">
            What is <span className="text-[#F2BE5C]">Safelink?</span>
          </h2>
          <p className="text-[14px] text-white my-2">
            SafeLink helps you organize your business details, photos, and
            prices in one simple link. No need to fill up your phone or your
            clients’ phones with too many pictures—just send one link! It’s
            easier for your customers to buy from you and share your
            business with others.
          </p>
          <button
            onClick={openSignUpModal}
            className="bg-[#F2BE5C] py-2 px-4 rounded border border-[#F2BE5C] text-white my-5 font-medium"
          >
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
          {inventory?.map((item, index) => (
            <div
              key={index}
              className="border-x border-b border-[#000000] rounded-lg  flex flex-col"
            >
              <div className="items-center mb-4 flex flex-col">
                <div
                  className="w-full h-[200px]  rounded-lg bg-cover bg-no-repeat relative"
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                >
                  <div className="flex flex-row-reverse mr-4 mt-4">
                    <button onClick={() => handleFavoriteToggle(item)}>
                      {isFavorite(item._id) ? (
                        <FaHeart size={20} color="black" />
                      ) : (
                        <FaRegHeart size={20} />
                      )}
                    </button>
                  </div>
                  <div className="absolute -bottom-5 left-3">
                    <Image
                      src={item.owner.profilePicture ?? "/image7.png"}
                      alt="Profile"
                      width={300}
                      height={300}
                      className="rounded-full w-12 h-12 bg-cover"
                    />
                  </div>
                </div>
                <div className="px-4 mt-10">
                  <h3 className="text-[18px] leading-6 text-black my-2">
                    {item.title}
                  </h3>
                  <p className="text-[#444544F2] leading-5 text-[14px] tracking-wide">
                    {item.description}
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
                  SAFELINK
                </span>
              </h2>
              <p
                id="homepage-about"
                className="text-[#f2f2f2] text-center sm:text-[14px] mt-2"
              >
                SAFELINK helps you tell your prospects and clients about
                yourself, your business and why they should buy from you
              </p>
            </div>

            <button
              onClick={openSignUpModal}
              className="bg-[#F2BE5C] py-2 px-4 rounded border border-[#F2BE5C] text-white my-5 font-medium"
            >
              SIGN UP FOR A PROFILE TODAY
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
