"use client";

import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function PasswordInput({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          className="border border-[#737373] outline-none focus:border-2 focus:border-primary p-2 w-full rounded-[4px]"
          id={id}
          name={id}
          placeholder="••••••••"
          type={showPassword ? "text" : "password"}
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
      </div>
    </div>
  );
}
