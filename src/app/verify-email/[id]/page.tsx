"use client";
import { useRouter, useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function page() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  console.log("id", id);

  const verifyAccount = async () => {
    console.log("id gotten", id);
    const body = {
      token: id,
    };
    try {
      const response = await fetch(
        `https://cream-card-api.onrender.com/api/v1/auth/verify-account`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        //console.log("res", response);
        const res = await response.json();
        console.log("res", response, res);
        toast.error(res.error);
        // if (response.status === 400) {
        //   toast.error("The token has expired");
        // } else {
        //   toast.error("Account verification failed");
        // }
        return;
      }

      const data = await response.json();
      console.log("response", data);
      toast.success("Account verified successfully");
      router.push("/login");

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
    }
  };

  useEffect(() => {
    verifyAccount();
  });

  return (
    <div className="flex flex-1 h-screen">
      please wait while your email is being verified.......
    </div>
  );
}

export default page;
