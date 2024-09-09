import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";

import Image from "next/image";
import { Nav, NavLink } from "@/components/Nav";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-openSans",
});

export const metadata: Metadata = {
  title: "SAFELINK",
  description:
    "SAFELINK helps you tell your prospects and clients about yourself, your business and why they should buy from you",
  // icons: {
  //   icon: "icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <Toaster />
        <Nav>
          <NavLink href={"/create-listing"}>List With Us</NavLink>
          <NavLink href={"/pricing"}>Pricing</NavLink>

          {/* <NavLink href={"/null"}>Log In</NavLink> */}

          {/* <NavLink href={"/signup"}>Sign Up</NavLink> */}
        </Nav>
        <div className="min-h-[500px]">{children}</div>
        <Drawer />
        <LoginModal>
          <LoginForm />
        </LoginModal>
        <SignupModal>
          <SignupForm />
        </SignupModal>

        <Footer />
      </body>
    </html>
  );
}
