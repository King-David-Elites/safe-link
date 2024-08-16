"use client";
// pages/profile.tsx
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
  cover: string;
  professional_pictures: string[];
  work_pictures: string[];
  leisure_pictures: string[];
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
    cover: "",
    professional_pictures: [],
    work_pictures: [],
    leisure_pictures: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    const key = name as keyof FormState;
    if (files) {
      const newFiles = Array.from(files);
      setForm((prevForm) => ({
        ...prevForm,
        [key]:
          key === "cover"
            ? newFiles[0] || null
            : [...((prevForm[key] as File[]) || []), ...newFiles],
      }));
    } else {
      setForm({ ...form, [key]: value });
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
    <div className="container mx-auto bg-gray-200 p-4 sm:bg-white sm:p-2">
      <div className="flex flex-row sm:flex-col space-x-8 sm:space-x-0">
        <div className="bg-gray-200 sm:bg-white text-nowrap  ">
          <h1 className="text-3xl font-bold mb-4 sm:text-center">Profile</h1>
          <div>This information will be available publicly</div>
        </div>
        <div className="bg-white p-8 rounded-md ">
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
            ].map((question, index) => {
              const questionKey = `question${index + 1}` as keyof FormState;
              return (
                <div key={index} className="mb-6">
                  <label className="block text-gray-700">{question}</label>
                  <textarea
                    name={questionKey}
                    value={(form[questionKey] as string) || ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    maxLength={100}
                  />
                  <p className="text-gray-500">Maximum of 100 words</p>
                </div>
              );
            })}

            {[
              { label: "Cover", name: "cover", multiple: false },
              {
                label: "Professional Pictures",
                name: "professionalPictures",
                multiple: true,
              },
              { label: "Work Pictures", name: "workPictures", multiple: true },
              {
                label: "Leisure Pictures",
                name: "leisurePictures",
                multiple: true,
              },
            ].map(({ label, name, multiple }, index) => {
              const nameKey = name as keyof FormState;
              return (
                <div key={index} className="mb-6">
                  <label className="block text-gray-700">{label}</label>
                  <div className="flex-col border-dashed border-2 border-gray-300 rounded px-4 py-8 flex justify-center items-center">
                    <input
                      type="file"
                      name={name}
                      onChange={handleChange}
                      multiple={multiple}
                      className="hidden"
                      id={label}
                    />
                    <MdInsertPhoto size={48} color="grey" />
                    <label
                      htmlFor={label}
                      className="cursor-pointer text-blue-500"
                    >
                      upload a file
                    </label>
                    <p className="text-gray-500">PNG, JPG, GIF up to 5mb</p>
                    <div className="flex flex-wrap mt-2">
                      {form[nameKey] &&
                        Array.from(form[nameKey] as File[]).map(
                          (file, fileIndex) => (
                            <div key={fileIndex} className="relative mr-2 mb-2">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <button
                                type="button"
                                onClick={() => handleDelete(nameKey, fileIndex)}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 h-4 w-4 items-center justify-center flex"
                              >
                                &times;
                              </button>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              );
            })}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700">Address 1</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Zip / Postal code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700">Phone 1</label>
                  <input
                    type="text"
                    name="phone1"
                    value={form.phone1}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone 2</label>
                  <input
                    type="text"
                    name="phone2"
                    value={form.phone2}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
