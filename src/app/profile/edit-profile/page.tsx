"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import FileBase64 from "react-file-base64";
import { HiX } from "react-icons/hi";

interface FormState {
    name: string;
    about: string;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    cover: File | null;
    professionalPictures: File[];
    workPictures: File[];
    leisurePictures: File[];
    address: string;
    country: string;
    state: string;
    city: string;
    zip: string;
    email: string;
    phone1: string;
    phone2: string;
  }

  interface SelectedFilesState {
    cover: string;
    professional_pictures: string[];
    work_pictures: string[];
    leisure_pictures: string[];
  }



const page = () => {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    name: "",
    about: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    cover: null,
    professionalPictures: [],
    workPictures: [],
    leisurePictures: [],
    address: "",
    country: "Nigeria",
    state: "",
    // city: "",
    zip: "",
    email: "",
    phone1: "",
    phone2: "",
  });




  const [selectedFiles, setSelectedFiles] = useState<SelectedFilesState>({
    cover: "",
    professional_pictures: [],
    work_pictures: [],
    leisure_pictures: [],
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      const newFiles = Array.from(files);
      setForm((prevForm) => ({
        ...prevForm,
        [name]:
          name === "cover"
            ? newFiles
            : [...((prevForm[name] as File[]) || []), ...newFiles],
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDelete = (name: keyof FormState, index: number) => {
    setForm((prevForm) => {
      const updatedFiles = [...(prevForm[name] as File[])];
      updatedFiles.splice(index, 1);
      return { ...prevForm, [name]: updatedFiles };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };
  

  return (
    <section className="px-3 py-5 sm:w-full max-w-[960px] mx-auto">
    <div className="flex items-start mb-5">
      <button
        className="p-2 cursor-pointer"
        onClick={() => {
          router.back();
        }}
      >
        <FaArrowLeft size={20} />
      </button>
      <div className="flex-1 text-center">
        <h1 className="font-semibold text-[#252625] text-[20px] leading-7">
          Edit Your Profile
        </h1>
        <p className="text-[#696969] leading-4 text-[10px]">
          This information will be displayed publicly to give your customers
          an overview of who you are
        </p>
      </div>
    </div>

    <form>
      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          About
        </label>
        <textarea
         name="about"
         value={form.about}
         onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          Brief description for your profile
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <p className="font-medium text-[12px] leading-3 my-3">
          Answer these questions to stand out to your prospects:
        </p>
        <label
          className="text-[#252625] font-medium text-[13px] my-2 leading-3"
          htmlFor="title"
        >
          1. What’s your name, and what can your customers call you?
        </label>
        <textarea
          name="question1"
          value={form.question1}
          onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          Maximum of 100 words
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[13px] my-2 leading-3"
          htmlFor="title"
        >
          2. What inspired you to start your business?
        </label>
        <textarea
        name="question2"
        value={form.question2}
        onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          Maximum of 100 words
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[13px] my-2 leading-3"
          htmlFor="title"
        >
          3. What makes your products or services unique?
        </label>
        <textarea
        name="question3"
        value={form.question3}
        onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          Maximum of 100 words
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[13px] my-2 leading-3"
          htmlFor="title"
        >
          4. Do you have a physical store? If so, where is it located?
        </label>
        <textarea
         name="question4"
         value={form.question4}
         onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          Maximum of 100 words
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[13px] my-2 leading-3"
          htmlFor="title"
        >
          5. Do you offer delivery services?
        </label>
        <textarea
         name="question5"
         value={form.question5}
         onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          Maximum of 100 words
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[13px] my-2 leading-3"
          htmlFor="title"
        >
          6. How can customers best reach you with any questions?
        </label>
        <textarea
          name="question6"
          value={form.question6}
          onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          Maximum of 100 words
        </small>
      </div>

      {[
              "Cover",
              "Professional Pictures",
              "Work Pictures",
              "Leisure Pictures",
            ].map((label, index) => (
              <div key={index} className="mb-6">
                <label className="blocktext-[#252625] font-medium text-[12px] leading-3 my-2">{label}</label>
                <div className="flex-col border-dashed border-2 border-gray-300 rounded px-4 py-8 flex justify-center items-center">
                  <input
                    type="file"
                    name={label.toLowerCase().replace(" ", "_")}
                    onChange={handleChange}
                    multiple={label !== "Cover"}
                    className="hidden"
                    id={label}
                  />
                  <img src={'/Vector.svg'} alt="" />
                  <label
                    htmlFor={label}
                    className="cursor-pointer text-[#2301F3] text-[12px] leading-3 py-2"
                  >
                    upload a file
                  </label>
                  <p className="text-[#A6A6A6] text-[10px] leading-3">PNG, JPG, GIF up to 5mb</p>
                  <div className="flex flex-wrap mt-2">
                    {form[label.toLowerCase().replace(" ", "_")] &&
                      Array.from(
                        form[label.toLowerCase().replace(" ", "_")]
                      ).map((file, fileIndex) => (
                        <div key={fileIndex} className="relative mr-2 mb-2">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(
                                label.toLowerCase().replace(" ", "_"),
                                fileIndex
                              )
                            }
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 h-4 w-4 items-center justify-center flex"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}

     

     

     

      <div className="flex flex-col items-start gap-2 my-2">
        <p className="text-[#252625] text-[14px] leading-4">Address</p>
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Address
        </label>
        <textarea
         name="address"
         value={form.address}
         onChange={handleChange}
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Country
        </label>
        <input
          name="country"
          value={form.country}
          onChange={handleChange}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          State
        </label>
        <input
         name="state"
         value={form.state}
         onChange={handleChange}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Zip/Postal code
        </label>
        <input
         name="zip"
         value={form.zip}
         onChange={handleChange}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Email
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Phone 1
        </label>
        <input
        name="phone1"
        value={form.phone1}
        onChange={handleChange}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Phone 2
        </label>
        <input
          name="phone2"
          value={form.phone2}
          onChange={handleChange}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <button className="bg-[#F2BE5C] font-medium text-white text-[14px] leading-5 rounded-lg p-3 my-3">Save and Proceed to Subscription</button>

    </form>
  </section>
  );
};

export default page;
