// components/Footer.js

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-[12px]">
      <div className="container mx-auto sm:px-6 px-16 grid sm:grid-cols-1 grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">CREAMCARD</h2>
          <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo
            erat urna a nisl dolor sit amet.
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <FaTwitter className="text-xl hover:text-gray-400" />
            </Link>
            <Link href="#">
              <FaLinkedin className="text-xl hover:text-gray-400" />
            </Link>
            <Link href="#">
              <FaFacebook className="text-xl hover:text-gray-400" />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">CATEGORIES</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400">
                REAL ESTATE
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                CARS
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">BUSINESS</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400">
                AFFILIATE MARKETING
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                LIST WITH US
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">ABOUT</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400">
                TEAM
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto sm:px-6 px-16 mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-sm">
          &copy; 2022 King David Elites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
