"use client";

import { useState } from "react";
import { MdInsertPhoto } from "react-icons/md";

interface FormState {
  name: string;
  about: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
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
  cover: string | null;
  professionalPictures: string[];
  workPictures: string[];
  leisurePictures: string[];
}

export default function Page() {
  const [form, setForm] = useState<FormState>({
    name: "",
    about: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    cover: null,
    professionalPictures: [],
    workPictures: [],
    leisurePictures: [],
    address: "",
    country: "Nigeria",
    state: "",
    city: "",
    zip: "",
    email: "",
    phone1: "",
    phone2: "",
  });

  const [selectedFiles, setSelectedFiles] = useState<SelectedFilesState>({
    cover: null,
    professionalPictures: [],
    workPictures: [],
    leisurePictures: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
  
    if (files) {
      const newFiles = Array.from(files);
  
      if (name === "cover") {
        setForm((prevForm) => ({
          ...prevForm,
          cover: newFiles[0] || null,
        }));
        setSelectedFiles((prevFiles) => ({
          ...prevFiles,
          cover: newFiles[0] ? URL.createObjectURL(newFiles[0]) : null,
        }));
      } else if (
        name === "professionalPictures" ||
        name === "workPictures" ||
        name === "leisurePictures"
      ) {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: [...(prevForm[name as keyof FormState] as File[]), ...newFiles],
        }));
        setSelectedFiles((prevFiles) => ({
          ...prevFiles,
          [name]: [...(prevFiles[name as keyof SelectedFilesState] as string[]), ...newFiles.map((file) => URL.createObjectURL(file))],
        }));
      }
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

    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...(prevFiles[name as keyof SelectedFilesState] as string[])];
      updatedFiles.splice(index, 1);
      return { ...prevFiles, [name]: updatedFiles };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto bg-gray-200 p-4 sm:bg-white sm:p-2">
      <div className="flex flex-row sm:flex-col space-x-8 sm:space-x-0">
        <div className="bg-gray-200 sm:bg-white text-nowrap">
          <h1 className="text-3xl font-bold mb-4 sm:text-center">Profile</h1>
          <div>This information will be available publicly</div>
        </div>
        <div className="bg-white p-8 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">About</label>
              <textarea
                name="about"
                value={form.about}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold">
                Brief description for your profile
              </h2>
              <p>Answer these questions to stand out to your prospects:</p>
            </div>

            {[
              "How did you get into this line of business? (Tell us what motivated or prompted you to join this industry you operate in)",
              "What are your biggest hopes and dreams for your business? (Tell us where you see your business in the next few years)",
              "What is your favourite thing about this business of yours? (Tell us what gives you the most joy in this line of work)",
              "What are your greatest achievements since you started this business? (Tell us what you have been able to accomplish in this line of business and yeah, it is totally great if you are a newbie. You can specify that)",
              "In this order, tell us your favourite food, colour and hobby. (Interesting questions to forge interesting conversations with your prospects)",
            ].map((question, index) => (
              <div key={index} className="mb-6">
                <label className="block text-gray-700">{question}</label>
                <textarea
                  name={`question${index + 1}`}
                  value={form[`question${index + 1}` as keyof FormState] as string}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  maxLength={100}
                />
                <p className="text-gray-500">Maximum of 100 words</p>
              </div>
            ))}

            {[
              "cover",
              "professionalPictures",
              "workPictures",
              "leisurePictures",
            ].map((field, index) => (
              <div key={index} className="mb-6">
                <label className="block text-[#252625] font-medium text-[12px] leading-3 my-1">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </label>
                <div className="flex-col border-dashed border border-[#A6A6A6] rounded px-4 py-8 flex justify-center items-center">
                  <input
                    type="file"
                    name={field}
                    onChange={handleChange}
                    multiple={field !== "cover"}
                    className="hidden"
                    id={field}
                  />
                  <MdInsertPhoto size={48} color="grey" />
                  <label
                    htmlFor={field}
                    className="cursor-pointer text-[#2301F3] text-[12px] leading-3 py-2"
                  >
                    upload a file
                  </label>
                  <p className="text-[#A6A6A6] text-[10px] leading-3">
                    PNG, JPG, GIF up to 5mb
                  </p>
                  <div className="flex flex-wrap mt-2">
                    {selectedFiles[field as keyof SelectedFilesState] &&
                      (selectedFiles[field as keyof SelectedFilesState] as string[]).map((file, fileIndex) => (
                        <div key={fileIndex} className="relative mr-2 mb-2">
                          <img
                            src={file}
                            alt={`Preview ${fileIndex}`}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(field as keyof FormState, fileIndex)
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

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Saved Data</h2>
            <pre className="bg-gray-100 p-4 rounded">
              {JSON.stringify(form, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
