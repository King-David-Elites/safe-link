"use client";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useModalStore from "@/store/useModalStore";
import { fetchInventory, fetchUsers } from "@/lib/api";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import useListStore from "@/store/useListStore";
import Loading from "@/app/loading";
import Loader from "./Loader";
import LoadingSpinner from "./LoadingSpinner";
import Link from "next/link";
//import { User } from "@/types/user"; // Add this import

export interface User {
  _id: string;
  name: string;
  about: string;
  profilePicture?: string;
  professionalPictures: string[];
  // Add other relevant fields
}

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
  const [users, setUsers] = useState<User[]>([]); // Add type annotation
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const usersArray = await fetchUsers(router);
      console.log("users loaded", usersArray);
      if (usersArray) {
        setUsers(usersArray);
      }
      setIsLoading(false);
    };
    getUsers();
  }, [router]); // Add router to the dependency array

  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useListStore();

  const isFavorite = (id: string) => favorites.some((item) => item.id === id);

  const handleFavoriteToggle = (data: Product) => {
    // Add type annotation
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
          {isLoading ? (
            <div>
              <LoadingSpinner />
            </div>
          ) : (
            users.length > 0 &&
            users?.map((item, index) => {
              return (
                <>
                  {
                    item?.professionalPictures.length !== 0
                      ?
                      <Link
                      href={`/profile?id=${item._id}`}
                        key={index}
                        className="border-x border-2 border-primary rounded-lg  flex flex-col"
                      >
                        <div className="items-center mb-4 flex flex-col">
                          <div
                            className="w-full h-[200px] border rounded-lg bg-cover bg-no-repeat relative"
                            style={{
                              backgroundImage: `url(${item?.professionalPictures[0] || ""})`,
                            }}
                          >
                            <div className="absolute -bottom-[40px] left-3">
                              <img
                                src={item?.profilePicture || "/image7.png"}
                                alt="Profile"
                                className="rounded-full w-[80px] h-[80px] bg-cover border-2 border-primary"
                              />
                            </div>
                          </div>
                          <div className="px-4 mt-10 w-full">
                            <h3 className="text-[18px] text-left leading-6 text-black my-2">
                              {item?.name}
                            </h3>
                            <p className="text-[#444544F2] text-left leading-5 text-[14px] tracking-wide">
                              {item?.about}
                            </p>
                          </div>
                        </div>
                        <div className="flex-grow mb-4"></div>
                      </Link>
                      :

                      null
                  }
                </>
              )
            })
          )}
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
