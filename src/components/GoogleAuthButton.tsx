"use client";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import React from "react";
import { handleGoogleLogin } from "@/lib/api";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore";

function GoogleAuthButton() {
  const router = useRouter();
  const { setUser } = useUserStore();
  return (
    <div className="w-[100%]">
      <GoogleLogin
        //width={"100%"}
        onSuccess={(googleResponse) =>
          handleGoogleLogin(router, googleResponse, setUser)
        }
        onError={() => {
          console.log("Google Login Failed");
          toast.error("Sign in with google failed");
        }}

        // useOneTap
      />
    </div>
  );
}

export default GoogleAuthButton;
