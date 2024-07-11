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

const ServerLoginForm = dynamic(() => import("./LoginForm"), {
  ssr: false,
});

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
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openLogInModal = () => setIsLogInModalOpen(true);
  const closeLogInModal = () => setIsLogInModalOpen(false);
  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  // if (pathName === "/login") return <div></div>;

  useEffect(() => {
    console.log("is login modal open", isLogInModalOpen);
    closeDrawer();
  }, [pathName]);
  return (
    <>
      {pathName !== "/login" && pathName !== "/signup" && (
        <div className="sm:flex hidden fixed top-0 left-0 z-50">
          <button className="p-4  " onClick={openDrawer}>
            <FaBars size={24} color="white" />
          </button>
          <Link
            href={"/"}
            className="w-full flex justify-center bg-transparent"
          >
            <Image width={280} height={64} alt="logo" src={"/logo.png"} />
          </Link>
        </div>
      )}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        openLogInModal={openLogInModal}
        openSignUpModal={openSignUpModal}
      />
      <Modal isOpen={isLogInModalOpen} onClose={closeLogInModal}>
        <LoginForm
          closeModal={closeLogInModal}
          openSignUpModal={openSignUpModal}
        />
      </Modal>
      <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <SignupForm
          closeModal={closeSignUpModal}
          openLogInModal={openLogInModal}
        />
      </Modal>
      <nav className="bg-black flex justify-between text-white sm:hidden h-16 items-center pl-6 pr-4">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/logo.png"}
            className=""
            width={180}
            height={64}
          />
        </Link>
        <div className="flex flex-row items-center">
          {children}
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
