"use client";
// components/Drawer.js

import { useState } from "react";
//import NavLink from "next/NavLink";
import { MdClose, MdContactMail, MdDescription } from "react-icons/md";
import {
  FaHome,
  FaList,
  FaEnvelope,
  FaBell,
  FaHeart,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "./Nav";
import useModalStore from "@/store/useModalStore";
import Link from "next/link";
import useLocalStorage from "use-local-storage";

{
  /* <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        openLogInModal={openLogInModal}
        openSignUpModal={openSignUpModal}
      />
      <Modal isOpen={isLogInModalOpen} onClose={closeLogInModal}>
        <LoginForm />
      </Modal>
      <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <SignupForm
          closeModal={closeSignUpModal}
          openLogInModal={openLogInModal}
        />
      </Modal> */
}

const Drawer = () => {
  const { closeDrawer, openDrawer, isDrawerOpen } = useModalStore();
  const [user] = useLocalStorage<any>("user", null);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform  ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white w-80 shadow-lg`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <span>Welcome!</span>
        <button onClick={closeDrawer}>
          <MdClose size={28} />
        </button>
      </div>
      <nav className="flex flex-col space-y-8 p-4">
        <NavLink href="/">
          <div className="flex-row flex items-center space-x-4">
            <FaHome />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink href="/create-listing">
          <div className="flex-row flex items-center space-x-4">
            <FaList />
            <span>List With Us</span>
          </div>
        </NavLink>
        {/* <NavLink href="/messages">
          <div className="flex-row flex items-center space-x-4">
            <FaEnvelope />
            <span>Messages</span>
          </div>
        </NavLink>
        <NavLink href="/notifications">
          <div className="flex-row flex items-center space-x-4">
            <FaBell />
            <span>Notifications</span>
          </div>
        </NavLink> */}
        {/* <NavLink href="/saved">
          <div className="flex-row flex items-center space-x-4">
            <FaHeart />
            <span>Saved Listings</span>
          </div>
        </NavLink> */}
        {user && (
          <NavLink href="/profile">
            <div className="flex-row flex items-center space-x-4">
              <FaUser />
              <span>Profile</span>
            </div>
          </NavLink>
        )}
        <hr />
        {/* <NavLink href={"/about"}>
          <div className="flex-row flex items-center space-x-4">
            <MdDescription />
            <span>About</span>
          </div>
        </NavLink> */}
        <Link
          href="mailto:usesafelink@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <div className="flex-row flex items-center space-x-4">
            <MdContactMail />
            <span>Contact Us</span>
          </div>
        </Link>
        {!user && (
          <>
            <NavLink href="/login">
              <div className="flex-row flex items-center space-x-4">
                <FaUser />
                <span>Log in</span>
              </div>
            </NavLink>
            <NavLink href="/login">
              <div className="flex-row flex items-center space-x-4">
                <FaUserCircle />
                <span>Sign up</span>
              </div>
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Drawer;
