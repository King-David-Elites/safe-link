"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import ReactFileBase64 from "react-file-base64";

interface FormState {
  name: string;
  about: string;
  // question1: string;
  // question2: string;
  // question3: string;
  // question4: string;
  // question5: string;
  // question6: string;
  cover: string | null;
  professionalPictures: string[];
  workPictures: string[];
  leisurePictures: string[];
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

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const [answers, setAnswers] = useState([]);
  const [questionForm, setQuestionsForm] = useState({});
  const [user] = useLocalStorage<any>("user", null);

  console.log("user", user);
  const id = user?._id;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

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
    // cover: user?.profilePicture
    //   ? base64ToFile(user?.profilePicture, "cover.png", "image/png")
    //   : null,
    // professionalPictures: user?.professionalPictures
    //   ? user?.professionalPictures.map((pic: string, index: number) =>
    //       base64ToFile(pic, `professional_${index}.png`, "image/png")
    //     )
    //   : [],
    // workPictures: user?.workPictures
    //   ? user?.workPictures.map((pic: string, index: number) =>
    //       base64ToFile(pic, `work_${index}.png`, "image/png")
    //     )
    //   : [],
    // leisurePictures: user?.leisurePictures
    //   ? user?.leisurePictures.map((pic: string, index: number) =>
    //       base64ToFile(pic, `leisure_${index}.png`, "image/png")
    //     )
    //   : [],
    cover: "" || null,
    professionalPictures: [],
    workPictures: [],
    leisurePictures: [],
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
    const loadQuestions = async () => {
      setIsLoading(true);
      try {
        const data = await fetchQuestions(router);
        if (data) {
          setQuestions(data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [router]);

  useEffect(() => {
    const loadAnswers = async () => {
      setIsLoading(true);
      try {
        const data = await fetchQuestionsAnswers(router);
        if (data) {
          setAnswers(data);
          const newAnswers: Record<string, string> = {};
          data.forEach((item) => {
            newAnswers[item.questionId.id] = item.answer;
          });
          setForm((prevForm) => ({
            ...prevForm,
            answers: newAnswers,
          }));
        }
      } catch (error) {
        console.error("Error fetching answers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnswers();
  }, [router]);

  useEffect(() => {
    if (user) {
      setForm((prevForm) => ({
        ...prevForm,
        name: user.name || prevForm.name,
        about: user.about || prevForm.about,
        cover: user.profilePicture || prevForm.cover,
        professionalPictures:
          user.professionalPictures || prevForm.professionalPictures,
        workPictures: user.workPictures || prevForm.workPictures,
        leisurePictures: user.leisurePictures || prevForm.leisurePictures,
        address: user.address || prevForm.address,
        country: user.country || prevForm.country,
        state: user.state || prevForm.state,
        email: user.email || prevForm.email,
        phone1: user.phoneNumber || prevForm.phone1,
      }));
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //@ts-ignore
    const { name, value, files } = e.target;

    //   if (files) {
    //     setForm((prevForm) => ({
    //       ...prevForm,
    //       [name]: name === "cover" ? files[0] : Array.from(files),
    //     }));
    //   } else {
    //     setForm((prevForm) => ({
    //       ...prevForm,
    //       [name]: value,
    //     }));
    //   }
    // };

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        const updatedFiles = [...(prevForm[name] as (File | string)[])];
        updatedFiles.splice(index, 1);
        return { ...prevForm, [name]: updatedFiles };
      });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(123);
      if (!id) {
        console.error("User ID is missing");
        return;
      }

      try {
        setIsLoading(true);

        // Handle answers submission
        // for (const [questionId, answer] of Object.entries(form.answers)) {
        //   if (answer && answer.trim() !== "") {
        //     await submitAnswer(questionId, answer, router);
        //   }
        // }

        // Convert images to base64
        // const profilePictureBase64 =
        //   form.cover instanceof File
        //     ? await convertFileToBase64(form.cover)
        //     : form.cover;
        // const professionalPicturesBase64 = await convertFilesToBase64(
        //   form.professionalPictures as File[]
        // );
        // const workPicturesBase64 = await convertFilesToBase64(
        //   form.workPictures as File[]
        // );
        // const leisurePicturesBase64 = await convertFilesToBase64(
        //   form.leisurePictures as File[]
        // );

        // Prepare profile payload
        const profilePayload = {
          firstName: form.name.split(" ")[0],
          lastName: form.name.split(" ")[1] || "",
          _id: id,
          about: form.about,
          // profilePicture: form.profilePicture,
          professionalPictures: form.professionalPictures,
          workPictures: form.workPictures,
          leisurePictures: form.leisurePictures,
          address: form.address,
          country: form.country,
          state: form.state,
          phoneNumber: form.phone1,
        };

        // Update profile 
          const response = await updateProfile(profilePayload);
          if(response){
            console.log("Profile updated successfully:", response);
            router.push(`/profile?${createQueryString('id',id)}`);
          }
      } catch (error) {
        console.error("Error submitting the form", error);
        // Show error message to user
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <section className="px-3 py-5 sm:w-full max-w-[960px] mx-auto">
        {isLoading && <Loading />}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="about"
            >
              About
            </label>
            <textarea
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              name="about"
              value={form.about}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="cover"
            >
              Cover Picture
            </label>
            {/* <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="file"
            name="cover"
            onChange={handleChange}
          /> */}
            <ReactFileBase64
              multiple={false}
              onDone={(f) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  cover: f.base64, // Set the cover picture to the base64 string
                }));
              }}
            />
            <p className="text-[#252625] font-medium text-[12px] leading-3">
              PNG, JPG, GIF up to 5mb
            </p>
            <div className="flex flex-wrap mt-2">
              {form.cover !== null && (
                <div className="relative mr-2 mb-2">
                  <img
                    src={form.cover as string}
                    alt="cover picture"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, cover: null })}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full pb-[2px] h-4 w-4 items-center justify-center flex"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="professionalPictures"
            >
              Professional Pictures
            </label>
            {/* <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="file"
            name="professionalPictures"
            multiple
            onChange={handleChange}
          /> */}
            <ReactFileBase64
              multiple={true}
              onDone={(f) => {
                if (Array.isArray(f)) {
                  // If f is an array, you can map over it to extract base64 strings
                  setForm((prevForm) => ({
                    ...prevForm,
                    professionalPictures: f.map((file) => file.base64), // Set to an array of base64 strings
                  }));
                } else {
                  // If f is a single FileBase64 object
                  setForm((prevForm) => ({
                    ...prevForm,
                    professionalPictures: [f.base64], // Wrap it in an array
                  }));
                }
              }}
            />
            <p className="text-[#252625] font-medium text-[12px] leading-3">
              PNG, JPG, GIF up to 5mb
            </p>
            <div className="flex flex-wrap mt-2">
              {form.professionalPictures &&
                Array.from(form.professionalPictures).map((file, fileIndex) => (
                  <div key={fileIndex} className="relative mr-2 mb-2">
                    <img
                      src={file as string}
                      alt={file.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleDelete("professionalPictures", fileIndex)
                      }
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full pb-[2px]  h-4 w-4 items-center justify-center flex"
                    >
                      &times;
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="workPictures"
            >
              Work Pictures
            </label>
            {/* <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="file"
            name="workPictures"
            multiple
            onChange={handleChange}
          /> */}
            <ReactFileBase64
              multiple={true}
              onDone={(f) => {
                if (Array.isArray(f)) {
                  // If f is an array, you can map over it to extract base64 strings
                  setForm((prevForm) => ({
                    ...prevForm,
                    workPictures: f.map((file) => file.base64), // Set to an array of base64 strings
                  }));
                } else {
                  // If f is a single FileBase64 object
                  setForm((prevForm) => ({
                    ...prevForm,
                    workPictures: [f.base64], // Wrap it in an array
                  }));
                }
              }}
            />
            <p className="text-[#252625] font-medium text-[12px] leading-3">
              PNG, JPG, GIF up to 5mb
            </p>
            <div className="flex flex-wrap mt-2">
              {form.workPictures &&
                Array.from(form.workPictures).map((file, fileIndex) => (
                  <div key={fileIndex} className="relative mr-2 mb-2">
                    <img
                      src={file as string}
                      alt={file.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleDelete("workPictures", fileIndex)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full pb-[2px] h-4 w-4 items-center justify-center flex"
                    >
                      &times;
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="leisurePictures"
            >
              Leisure Pictures
            </label>
            {/* <input
            className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
            type="file"
            name="leisurePictures"
            multiple
            onChange={handleChange}
          /> */}
            <ReactFileBase64
              multiple={true}
              onDone={(f) => {
                if (Array.isArray(f)) {
                  // If f is an array, you can map over it to extract base64 strings
                  setForm((prevForm) => ({
                    ...prevForm,
                    leisurePictures: f.map((file) => file.base64), // Set to an array of base64 strings
                  }));
                } else {
                  // If f is a single FileBase64 object
                  setForm((prevForm) => ({
                    ...prevForm,
                    leisurePictures: [f.base64], // Wrap it in an array
                  }));
                }
              }}
            />
            <p className="text-[#252625] font-medium text-[12px] leading-3">
              PNG, JPG, GIF up to 5mb
            </p>
            <div className="flex flex-wrap mt-2">
              {form.leisurePictures &&
                Array.from(form.leisurePictures).map((file, fileIndex) => (
                  <div key={fileIndex} className="relative mr-2 mb-2">
                    <img
                      src={file as string}
                      alt={file.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleDelete("leisurePictures", fileIndex)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full pb-[2px] h-4 w-4 items-center justify-center flex"
                    >
                      &times;
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="phone1"
            >
              Phone Number 1
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="tel"
              name="phone1"
              value={form.phone1}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start gap-2 my-2">
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor="phone2"
            >
              Phone Number 2
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="tel"
              name="phone2"
              value={form.phone2}
              onChange={handleChange}
            />
          </div>

          {/* {questions.map((question) => (
          <div
            key={question.id}
            className="flex flex-col items-start gap-2 my-2"
          >
            <label
              className="text-[#252625] font-medium text-[14px] leading-3"
              htmlFor={question.id}
            >
              {question.text}
            </label>
            <input
              className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
              type="text"
              name={question.id}
              value={form.answers[question.id] || ""}
              onChange={handleAnswerChange}
            />
          </div>
        ))} */}

          <button
            type="submit"
            className="bg-primary text-white rounded-md px-4 py-2 mt-4"
          >
            Save Changes
          </button>
        </form>
      </section>
    );
  ;
};

export default Page;
