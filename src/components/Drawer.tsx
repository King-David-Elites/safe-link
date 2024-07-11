// components/Drawer.js

import { useState } from "react";
//import NavLink from "next/NavLink";
import { MdClose } from "react-icons/md";
import {
  FaHome,
  FaList,
  FaEnvelope,
  FaBell,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "./Nav";

const Drawer = ({ isOpen, onClose, openLogInModal, openSignUpModal }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white w-80 shadow-lg`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <span>Welcome!</span>
        <button onClick={onClose}>
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
        <NavLink href="/list">
          <div className="flex-row flex items-center space-x-4">
            <FaList />
            <span>List With Us</span>
          </div>
        </NavLink>
        <NavLink href="/messages">
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
        </NavLink>
        <NavLink href="/saved">
          <div className="flex-row flex items-center space-x-4">
            <FaHeart />
            <span>Saved Listings</span>
          </div>
        </NavLink>
        <NavLink href="/profile">
          <div className="flex-row flex items-center space-x-4">
            <FaUser />
            <span>Profile</span>
          </div>
        </NavLink>
        <hr />
        <NavLink href="/about">
          <span>About</span>
        </NavLink>
        <NavLink href="/contact">
          <span>Contact Us</span>
        </NavLink>
        <NavLink href="/login">
          <div className="flex-row flex items-center space-x-4">
            <FaUser />
            <span>Log in</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Drawer;
