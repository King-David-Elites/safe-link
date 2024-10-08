"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps, ReactNode, useEffect, useState } from "react";
import Modal from "./LoginModal";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";
import useModalStore from "@/store/useModalStore";
import { FaRegUserCircle } from "react-icons/fa";
import useLocalStorage from "use-local-storage";
import useUserStore from "@/store/useUserStore";

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
  const router = useRouter();
  const { user } = useUserStore();
  //const user = stringifiedUser;
  console.log("user", user);
  // Replca this with the actual user
  //const [user, setUser] = useState(true);

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
    // console.log("is login modal open", isLogInModalOpen);
    closeDrawer();
  }, [pathName]);
  return (
    <>
      {pathName === "/" && (
        <div
          className={`sm:flex items-center justify-between px-2 bg-black bg-opacity-30 hidden fixed z-50 top-0 left-0  w-full `}
        >
          <button className="p-4  " onClick={openDrawer}>
            <FaBars size={24} color="white" />
          </button>
          <div>
            <Link
              href={"/"}
              className="w-full flex justify-center bg-transparent"
            >
              <Image width={100} height={50} alt="logo" src={"/logo.svg"} />
            </Link>
          </div>

          {user?.email ? (
            <div className="">
              <Link
                href={{
                  pathname: "/profile",
                  // query: {
                  //   id: user?._id,
                  // },
                }}
                className="text-[#f2f2f2]"
              >
                <FaRegUserCircle size={30} />
              </Link>
            </div>
          ) : (
            <>
              <button
                onClick={openLogInModal}
                className="border hover:text-primary sm:hidden border-primary rounded-[4px] py-3 px-6 mr-4"
              >
                Log In
              </button>
              {/* <button
                onClick={openSignUpModal}
                className="bg-primary rounded-[4px] py-3 px-6 hover:text-white hover:bg-primary/[0.8]  focus-visible:text-white"
              >
                Sign Up
              </button> */}
            </>
          )}
        </div>
      )}

      <nav
        className={`bg-black flex  justify-between text-white sm:hidden h-16 items-center pl-6 pr-4`}
      >
        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/logo.svg"}
            className="object-contain"
            width={100}
            height={50}
          />
        </Link>
        <div className="flex flex-row items-center">
          {children}
          {user ? (
            <Link
              href={{
                pathname: "/profile",
                // query: {
                //   id: user?._id,
                // },
              }}
              className=""
            >
              <FaRegUserCircle
                size={30}
                color={pathName === "/profile" ? "#f2be56" : "#fff"}
              />
            </Link>
          ) : (
            <>
              <button
                onClick={openLogInModal}
                className="border hover:text-primary sm:hidden border-primary rounded-[4px] py-3 px-6 mr-4"
              >
                Log In
              </button>
              {/* <button
                onClick={openSignUpModal}
                className="bg-primary rounded-[4px] py-3 px-6 hover:text-white hover:bg-primary/[0.8]  focus-visible:text-white"
              >
                Sign Up
              </button> */}
            </>
          )}
        </div>
      </nav>
      {pathName === "/" && (
        <div className="sm:hidden bg-transparent absolute top-15 left-2">
          <button className="p-4  " onClick={openDrawer}>
            <FaBars size={24} color="grey" />
          </button>
        </div>
      )}
    </>
  );
}
