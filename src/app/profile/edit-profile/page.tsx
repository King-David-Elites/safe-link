"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import EditProfile1 from "@/components/EditProfile1";
import EditProfile2 from "@/components/EditProfile2";

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
    city: "",
    zip: "",
    email: "",
    phone1: "",
    phone2: "",
  });

  const [step, setStep] = useState(0)


  const [selectedFiles, setSelectedFiles] = useState<SelectedFilesState>({
    cover: "",
    professional_pictures: [],
    work_pictures: [],
    leisure_pictures: [],
  });

  const nextStep = () => {
    setStep(prev => prev + 1)
  }

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
  

  return (
    <section className="px-3 py-5">
   
    </section>
  );
};

export default page;
