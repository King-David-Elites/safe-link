"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FileBase64 from "react-file-base64";
import Loading from "@/app/loading";
import { fetchQuestions, fetchQuestionsAnswers, updateProfile } from "@/lib/api";
import useLocalStorage from "use-local-storage";

interface FormState {
  name: string;
  about: string;
  cover: string | null;
  professionalPictures: string[];
  workPictures: string[];
  leisurePictures: string[];
  address: string;
  country: string;
  state: string;
  zip: string;
  email: string;
  phone1: string;
  phone2: string;
  answers: Record<string, string>;
}

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [user] = useLocalStorage<any>("user", null);

  const [form, setForm] = useState<FormState>({
    name: user?.name ||  "",
    about: user?.about || "",
    cover: user?.profilePicture || null,
    professionalPictures: user?.professionalPictures || [],
    workPictures: user?.workPictures || [],
    leisurePictures: user?.leisurePictures || [],
    address: user?.address || "",
    country: user?.country || "Nigeria",
    state: user?.state || "",
    zip: "",
    email: user?.email || "",
    phone1: user?.phoneNumber || "",
    phone2: "",
    answers: {},
  });

  useEffect(() => {
    setIsLoading(true);
    fetchQuestions(router).then((data) => {
      setIsLoading(false);
      if (data) setQuestions(data);
    });
  }, []);

  const handleChange = (name: string, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (name: string, files: string[]) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files,
    }));
  };

  const handleDelete = (name: keyof FormState, index: number) => {
    setForm((prevForm) => {
      const updatedFiles = [...(prevForm[name] as string[])];
      updatedFiles.splice(index, 1);
      return { ...prevForm, [name]: updatedFiles };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user?._id) return;

    try {
      setIsLoading(true);

      const profilePayload = {
        name: form.name,
        _id: user._id,
        about: form.about,
        profilePicture: form.cover,
        professionalPictures: form.professionalPictures,
        workPictures: form.workPictures,
        leisurePictures: form.leisurePictures,
        address: form.address,
        country: form.country,
        state: form.state,
        phoneNumber: form.phone1,
      };

      await updateProfile(profilePayload, router);
      router.push("/profile");
    } catch (error) {
      console.error("Error submitting the form", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-3 py-5 sm:w-full max-w-[960px] mx-auto">
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="name">
            Name
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        {/* About Field */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="about">
            About
          </label>
          <textarea
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            name="about"
            value={form.about}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        {/* Cover Picture */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="cover">
            Profile Picture
          </label>
          <FileBase64
            onDone={({ base64 }) => handleChange("cover", base64)}
          />
        </div>

        {/* Professional Pictures */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="professionalPictures">
            Professional Pictures
          </label>
          <FileBase64
            multiple={true}
            onDone={(files) => handleFileChange("professionalPictures", files.map(f => f.base64))}
          />
          <div className="flex flex-wrap mt-2">
            {form.professionalPictures.map((pic, index) => (
              <div key={index} className="relative mr-2 mb-2">
                <img src={pic} alt={`Professional ${index}`} className="w-16 h-16 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleDelete("professionalPictures", index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full pb-[2px] h-4 w-4 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Work Pictures */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="workPictures">
            Work Pictures
          </label>
          <FileBase64
            multiple={true}
            onDone={(files) => handleFileChange("workPictures", files.map(f => f.base64))}
          />
          <div className="flex flex-wrap mt-2">
            {form.workPictures.map((pic, index) => (
              <div key={index} className="relative mr-2 mb-2">
                <img src={pic} alt={`Work ${index}`} className="w-16 h-16 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleDelete("workPictures", index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full pb-[2px] h-4 w-4 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Leisure Pictures */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="leisurePictures">
            Leisure Pictures
          </label>
          <FileBase64
            multiple={true}
            onDone={(files) => handleFileChange("leisurePictures", files.map(f => f.base64))}
          />
          <div className="flex flex-wrap mt-2">
            {form.leisurePictures.map((pic, index) => (
              <div key={index} className="relative mr-2 mb-2">
                <img src={pic} alt={`Leisure ${index}`} className="w-16 h-16 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleDelete("leisurePictures", index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full pb-[2px] h-4 w-4 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Address Field */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="address">
            Address
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="text"
            name="address"
            value={form.address}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        {/* Country Field */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="country">
            Country
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="text"
            name="country"
            value={form.country}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        {/* State Field */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="state">
            State
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="text"
            name="state"
            value={form.state}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        {/* Phone Number 1 */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="phone1">
            Phone Number 1
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="tel"
            name="phone1"
            value={form.phone1}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        {/* Phone Number 2 */}
        <div className="flex flex-col items-start gap-2 my-2">
          <label className="text-[#252625] font-medium text-[14px]" htmlFor="phone2">
            Phone Number 2 (optional)
          </label>
          <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="tel"
            name="phone2"
            value={form.phone2}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        {/* Questions Section */}
        {questions.map((question) => (
          <div key={question._id} className="flex flex-col items-start gap-2 my-2">
            <label className="text-[#252625] font-medium text-[14px]">
              {question.question}
            </label>
            <textarea
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              name={`answers[${question._id}]`}
              value={form.answers[question._id] || ""}
              onChange={(e) => handleChange("answers", { ...form.answers, [question._id]: e.target.value })}
            />
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold p-2 rounded mt-4"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Page;
