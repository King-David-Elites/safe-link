"use client";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, ReactNode, useEffect, useState } from "react";
import Modal from "./Modal";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";
import useModalStore from "@/store/useModalStore";
import { IoPersonCircleOutline } from "react-icons/io5";

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathName = usePathname();
  const isActive = pathName === props.href;
  const isActiveClassName = isActive && "text-primary";

  return (
    <Link
      {...props}
      className={`mr-4  ${isActiveClassName} hover:text-primary  focus-visible:text-primary`}
    />
  );
}

export function Nav({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const {
    isLogInModalOpen,
    isSignUpModalOpen,
    isDrawerOpen,
    openLogInModal,
    closeLogInModal,
    openSignUpModal,
    closeSignUpModal,
    openDrawer,
    closeDrawer,
  } = useModalStore();

  // if (pathName === "/login") return <div></div>;

  useEffect(() => {
    console.log("is login modal open", isLogInModalOpen);
    closeDrawer();
  }, [pathName]);
  return (
    <>
      {pathName === "/" && (
        <div className="sm:flex  hidden fixed top-0 left-0 z-50">
          <div className="flex flex-row justify-between items-center w-screen pr-4">
            <button className="p-4 " onClick={openDrawer}>
              <FaBars size={24} color="white" />
            </button>
            <Link
              href={"/"}
              className="w-full sm:flex hidden justify-center bg-transparent"
            >
              <Image
                width={100}
                height={60}
                alt="logo"
                src={"/text-logo.png"}
              />
            </Link>
            <Link href={"/profile"}>
              <IoPersonCircleOutline color="#fff" size={28} />
            </Link>
          </div>
        </div>
      )}

      <nav className="bg-black flex  justify-between text-white sm:hidden h-16 items-center pl-6 pr-4">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/text-logo.png"}
            className=""
            width={120}
            height={64}
          />
        </Link>
        <div className="flex flex-row items-center">
          {children}
          <Link
            href={"/profile"}
            className="border hover:text-primary rounded-full bg-white hover:border-primary w-8 h-8 mr-4"
          >
            <div></div>
          </Link>
          <button
            onClick={openLogInModal}
            className="border hover:text-primary border-primary rounded-[4px] py-3 px-6 mr-4"
          >
            Log In
          </button>
          <button
            onClick={openSignUpModal}
            className="bg-primary rounded-[4px] py-3 px-6 hover:text-white hover:bg-primary/[0.8]  focus-visible:text-white"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}
