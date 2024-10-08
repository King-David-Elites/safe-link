// components/Footer.js

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-[12px] px-4 pt-24 pb-10 sm:px-2">
      <div className="container mx-auto grid sm:grid-cols-1 grid-cols-4 gap-8">
        <div>
          <h2 className="font-medium text-lg mb-4">SAFELINK</h2>
          <p className="text-[12px] mb-6">
            SafeLink helps you organize your business details, photos, and
            prices in one simple link. No need to fill up your phone or your
            clients' phones with too many pictures—just send one link! It's
            easier for your customers to buy from you and share your business
            with others.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://x.com/usesafelink?t=YyJDe2Xl2hgWfnt0DcJHqA&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl hover:text-primary" />
            </Link>
            <Link
              href="https://www.instagram.com/usesafelink?igsh=enNza3ExcTd0MjFq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl hover:text-primary" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-primary" />
            </Link>
          </div>
        </div>
        {/* <div>
          <h2 className="font-medium text-lg mb-4">CATEGORIES</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary">
                REAL ESTATE
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                CARS
              </Link>
            </li>
          </ul>
        </div> */}
        <div>
          <h2 className="font-medium text-lg mb-4">BUSINESS</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary">
                AFFILIATE MARKETING
              </Link>
            </li>
            <li>
              <Link href="/create-listing" className="hover:text-primary">
                LIST WITH US
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-lg mb-4">ABOUT</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary">
                TEAM
              </Link>
            </li>
            <li>
              <Link
                href="mailto:usesafelink@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto sm:px-6 px-16 mt-10 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SAFELINK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
