"use client";

// pages/Listings.js

import Image from "next/image";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Toast from "react-hot-toast";
import Loading from "@/app/loading";
import { baseUrl, fetchInventory, fetchInventoryBySearch } from "@/lib/api";
import customFetch from "@/lib/customFetch";
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/types/product";
import Inventory from "@/components/Inventory";
import { useRouter } from "next/navigation";
import useSearchStore from "@/store/useSearchStore";
import LoadingModal from "@/components/LoadingModal";
import ProductCard from "@/components/ProductCard";

const Listings = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inventory, setInventory] = useState<Product[]>([]);
  const { query, setQuery } = useSearchStore();
  const { fetch } = useFetch();

  const searchInventory = async () => {
    setIsLoading(true);
    const data = await fetchInventoryBySearch(query);
    if (data) {
      setInventory(data);
      console.log("loaded inventory", data);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    searchInventory();
  }, []);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4 min-h-screen">
        <LoadingModal isOpen={isLoading}>
          <Loading />
        </LoadingModal>
        <div className="w-full flex justify-center">
          <div className="bg-white w-[75%] sm:w-[100%] py-2 flex flex-row rounded-md m">
            <div className="flex flex-row items-center w-[85%] ml-2 rounded-md  px-2 bg-[#f2f4f8]">
              <IoSearch />
              <input
                placeholder="Search by name or keywords"
                onChange={onChangeText}
                value={query}
                className="bg-[#f2f4f8] ml-2 rounded-md  py-2 outline-none w-full"
              />
            </div>
            <button
              onClick={searchInventory}
              className="bg-primary flex-1 w-full text-white mx-2 px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Search Results ({inventory.length})
        </h2>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-3 sm:grid-cols-1  gap-4">
            {inventory.length > 0 &&
              inventory.map((data, index) => (
                <ProductCard data={data} key={index} />
              ))}
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default Listings;
