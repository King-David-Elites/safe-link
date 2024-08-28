import { useState } from "react";
import { toast } from "react-hot-toast";
import useModalStore from "@/store/useModalStore";
import { object, string, InferType } from "yup";
import { baseUrl } from "@/lib/api";
import { useRouter } from "next/navigation";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { closeLogInModal } = useModalStore();
  console.log("fgh", baseUrl);
  const router = useRouter();

  const schema = object({
    email: string().required("Email is required").email("Invalid email format"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  const login = async (rawFormData: FormData) => {
    const formData = {
      email: rawFormData.get("email"),
      password: rawFormData.get("password"),
    };
    console.log("form data", formData);

    try {
      await schema.validate(formData, { abortEarly: true });
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        //cache: "force-cache",
      });

      if (!response.ok) {
        const res = await response.json();
        console.log("res", response, res);
        toast.error(res.error);
        // if (response.status === 404) {
        //   toast.error("The email or password is incorrect");
        // } else {
        //   toast.error("An error occurred during login");
        // }
        return;
      }

      const data = await response.json();
      console.log("response", data.data.user);
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      router.replace("/");
      toast.success("Logged in successfully");
      closeLogInModal();
      return { success: true, data };
    } catch (error: any) {
      console.error("Login error:", error);
      if (error.name === "ValidationError") {
        toast.error(error.errors[0]);
      } else {
        toast.error(error.message || "An error occurred");
      }
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
}
