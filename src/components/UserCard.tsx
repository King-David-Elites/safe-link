import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { Product } from "@/types/product";
import useListStore from "@/store/useListStore";

function UserCard({ data }: { data: Product }) {
  console.log("sdf", data);
  const image = data.images[0];
  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useListStore();

  const isFavorite = favorites.some((item) => item.id === data._id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
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
    <Link
      className="border  rounded-lg flex flex-col"
      href={{
        pathname: "/product",
        query: {
          id: data._id,
        },
      }}
    >
      <div className="items-center mb-4 flex flex-col">
        <div
          className="w-full h-48 rounded-lg bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flex flex-row-reverse mr-4 mt-4">
            <button onClick={handleFavoriteToggle}>
              {isFavorite ? (
                <FaHeart size={20} color="black" />
              ) : (
                <FaRegHeart size={20} />
              )}
            </button>
          </div>
          <div className="relative top-32 left-4">
            <Image
              src={data.owner.profilePicture ?? "/image7.png"}
              alt="Profile"
              width={500}
              height={500}
              className="rounded-full border border-gray-200 w-16 h-16 bg-cover"
            />
          </div>
        </div>
        <div className="px-4 mt-10">
          <h3 className="text-xl font-bold">
            {data.title}
            {/* {data.owner.firstName + " " + data.owner.lastName} */}
          </h3>
          <p className="text-gray-500">{data.description}</p>
        </div>
      </div>
      <div className="flex-grow mb-4"></div>
    </Link>
  );
}

export default UserCard;
