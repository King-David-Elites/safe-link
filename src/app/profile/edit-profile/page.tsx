"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import FileBase64 from "react-file-base64";
import { HiX } from "react-icons/hi";
import {
  fetchQuestions,
  fetchQuestionsAnswers,
  submitAnswer,
  updateProfile,
} from "@/lib/api";
import Loading from "@/app/loading";
import { QuestionInput } from "@/components/QuestionInput";
import {
  base64ToFile,
  convertFilesToBase64,
  convertFileToBase64,
} from "@/util/convertImage";
import useLocalStorage from "use-local-storage";

interface FormState {
  name: string;
  about: string;
  // question1: string;
  // question2: string;
  // question3: string;
  // question4: string;
  // question5: string;
  // question6: string;
  cover: File | null;
  professionalPictures: File[];
  workPictures: File[];
  leisurePictures: File[];
  address: string;
  country: string;
  state: string;
  //city: string;
  zip: string;
  email: string;
  phone1: string;
  phone2: string;
  answers: {};
}

interface SelectedFilesState {
  cover: string;
  professional_pictures: string[];
  work_pictures: string[];
  leisure_pictures: string[];
}

const page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionForm, setQuestionsForm] = useState({});
  const [user] = useLocalStorage<any>("user", null);
  console.log("user", user);
  const id = user?._id;

  useEffect(() => {
    setIsLoading(true);
    fetchQuestions(router).then((data) => {
      console.log("questions", data);
      setIsLoading(false);
      if (data) {
        setQuestions(data);
      }
    });
    fetchQuestionsAnswers(router);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchQuestionsAnswers(router).then((data) => {
      console.log("answers", data);
      setIsLoading(false);
      if (data) {
        setAnswers(data);
        const newAnswers = {};
        data.forEach((item) => {
          newAnswers[item.questionId.id] = item.answer;
        });
        setForm((prevForm) => ({
          ...prevForm,
          answers: newAnswers,
        }));
      }
    });
  }, []);

  const updateQuestionsForm = () => {
    const newQuestionsForm = {};
    answers.forEach((item) => {
      const key = item.questionId.id;
      const value = item.answer;
      newQuestionsForm[key] = value;
    });
    setQuestionsForm(newQuestionsForm);
  };
  console.log("asd", questionForm);

  useEffect(() => {
    updateQuestionsForm();
  }, [answers]);

  const [form, setForm] = useState<FormState>({
    name: user?.name || "",
    about: user?.about || "",
    // question1: "",
    // question2: "",
    // question3: "",
    // question4: "",
    // question5: "",
    // question6: "",
    cover: user?.profilePicture
      ? base64ToFile(user?.profilePicture, "cover.png", "image/png")
      : null,
    professionalPictures: user?.professionalPictures
      ? user?.professionalPictures.map((pic: string, index: number) =>
          base64ToFile(pic, `professional_${index}.png`, "image/png")
        )
      : [],
    workPictures: user?.workPictures
      ? user?.workPictures.map((pic: string, index: number) =>
          base64ToFile(pic, `work_${index}.png`, "image/png")
        )
      : [],
    leisurePictures: user?.leisurePictures
      ? user?.leisurePictures.map((pic: string, index: number) =>
          base64ToFile(pic, `leisure_${index}.png`, "image/png")
        )
      : [],
    address: user?.address || "",
    country: user?.country || "Nigeria",
    state: user?.state || "",
    zip: "",
    email: user?.email || "",
    phone1: user?.phoneNumber || "",
    phone2: "",
    answers: questionForm,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files, type } = e.target;

    // Handle file inputs
    if (type === "file") {
      if (files) {
        //const newFiles = Array.from(files);
        setForm((prevForm) => ({
          ...prevForm,
          [name]: name === "cover" ? [...files] : [...files],
        }));
      }
    } else {
      // Handle text inputs
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      answers: {
        ...prevForm.answers,
        [name]: value,
      },
    }));
  };

  const handleDelete = (name: keyof FormState, index: number) => {
    setForm((prevForm) => {
      const updatedFiles = [...(prevForm[name] as File[])];
      updatedFiles.splice(index, 1);
      return { ...prevForm, [name]: updatedFiles };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form", form);

    if (
      !form.cover ||
      !form.professionalPictures ||
      !form.leisurePictures ||
      !form.workPictures
    ) {
      alert("Please upload all required files");
      return;
    }

    //Convert files to base64 if necessary
    const profilePictureBase64 = form.cover
      ? await convertFileToBase64(form.cover)
      : [];
    const professionalPicturesBase64 = await convertFilesToBase64(
      form.professionalPictures
    );
    const workPicturesBase64 = await convertFilesToBase64(form.workPictures);
    const leisurePicturesBase64 = await convertFilesToBase64(
      form.leisurePictures
    );

    try {
      setIsLoading(true);
      // Map over each answer and send a POST request using submitAnswer
      for (const [questionId, answer] of Object.entries(form.answers)) {
        await submitAnswer(questionId, answer, router);
      }

      // After all answers are submitted, send the final profile POST request
      const profilePayload = {
        firstName: form.name.split(" ")[0],
        lastName: form.name.split(" ")[1] || "",
        _id: id, // Replace with actual user? ID
        about: form.about,
        profilePicture: profilePictureBase64,
        professionalPictures: professionalPicturesBase64,
        workPictures: workPicturesBase64,
        leisurePictures: leisurePicturesBase64,
        address: form.address,
        country: form.country,
        state: form.state,
        // city: form.city, // Assuming city is similar to state
        zipCode: form.zip,
        phoneNumber: form.phone1,
      };

      const response = await updateProfile(profilePayload, router);
      console.log("response", response);
    } catch (error) {
      console.error("Error submitting the form", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("ff", form.answers);

  return (
    <section className="px-3 py-5 sm:w-full max-w-[960px] mx-auto">
      {isLoading && (
        <div className="flex flex-1 ">
          <Loading />
        </div>
      )}
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

      <form onSubmit={handleSubmit}>
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
            required
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
            required
            value={form.about}
            onChange={handleChange}
            maxLength={100}
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          />
          <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
            Brief description for your profile
          </small>
        </div>

        <div>
          <p className="font-medium text-[12px] leading-3 mb-3 my-6">
            Answer these questions to stand out to your prospects:
          </p>
          {questions?.map((question, index) => (
            <QuestionInput
              key={question.id}
              question={{ ...question, index }}
              value={form.answers[question.id] || ""}
              onChange={handleAnswerChange}
            />
          ))}
        </div>

        {[
          { name: "cover", title: "Cover" },
          { name: "professionalPictures", title: "Professional Pictures" },
          { name: "workPictures", title: "Work Pictures" },
          { name: "leisurePictures", title: "Leisure Pictures" },
        ].map((item, index) => (
          <div key={index} className="mb-6">
            <label className="blocktext-[#252625] font-medium text-[12px] leading-3 my-2">
              {item.title}
            </label>
            <div className="flex-col border-dashed border-2 border-gray-300 rounded px-4 py-8 flex justify-center items-center">
              <input
                type="file"
                name={item.name}
                onChange={handleChange}
                multiple={item.name !== "Cover"}
                className="hidden"
                id={item.name}
              />
              <img src={"/Vector.svg"} alt="" />
              <label
                htmlFor={item.name}
                className="cursor-pointer text-[#2301F3] text-[12px] leading-3 py-2"
              >
                upload a file
              </label>
              <p className="text-[#A6A6A6] text-[10px] leading-3">
                PNG, JPG, GIF up to 5mb
              </p>
              <div className="flex flex-wrap mt-2">
                {form[item.name] &&
                  Array.from(form[item.name]).map((file, fileIndex) => (
                    <div key={fileIndex} className="relative mr-2 mb-2">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => handleDelete(item.name, fileIndex)}
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
          {/* <p className="text-[#252625] text-[14px] leading-4">Address</p> */}
          <label
            className="text-[#252625] font-medium text-[14px] leading-3"
            htmlFor="title"
          >
            Address
          </label>
          <textarea
            name="address"
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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

        <button
          type="submit"
          className="bg-[#F2BE5C] font-medium text-white text-[14px] leading-5 rounded-lg p-3 my-3"
        >
          Save and Proceed to Subscription
        </button>
      </form>
    </section>
  );
};

export default page;
