"use client";
import { addInventory } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../loading";
//import axios from 'axios';

export default function CreateListing() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<any>("");
  const [currency, setCurrency] = useState("USD");
  const [images, setImages] = useState<any>([]);
  const [videos, setVideos] = useState<any>([]);
  const [cover, setCover] = useState(null);

  const handleImageChange = (e: any) => {
    setImages([...e.target.files]);
  };

  const handleVideoChange = (e: any) => {
    setVideos([...e.target.files]);
  };

  const handleCoverChange = (e: any) => {
    setCover(e.target.files[0]);
  };

  const convertFileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const convertFilesToBase64 = (files: File[]): Promise<string[]> => {
    return Promise.all(
      files.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      })
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      title,
      currency,
      price,
      description,
      cover: await convertFileToBase64(cover),
      images: await convertFilesToBase64(images),
      videos,
    };

    const response = await addInventory(data, router);
    console.log("rt", response);
    setIsLoading(false);
  };

  //convertFilesToBase64([cover]).then((item) => console.log("xn", item[0]));

  return (
    <div className="max-w-2xl mx-auto p-4">
      {isLoading && <Loading />}
      <h1 className="text-3xl font-bold mb-4">Create Your Listing</h1>
      <p className="text-gray-500 mb-6">
        by showcasing your exclusive listings to our highly-esteemed users
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title/Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Very Short headline for your listing"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cover</label>
          <input
            type="file"
            //multiple
            onChange={handleCoverChange}
            accept="image/png, image/jpeg, image/gif"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            accept="image/png, image/jpeg, image/gif"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Video</label>
          <input
            type="file"
            onChange={handleVideoChange}
            accept="video/mp4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <div className="flex">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-2 border border-gray-300 rounded ml-2"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="NGN">NGN</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white w-36 p-2 rounded"
        >
          List
        </button>
      </form>
    </div>
  );
}
