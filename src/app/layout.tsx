import type { Metadata } from "next";
import { Poppins, Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { Nav, NavLink } from "@/components/Nav";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
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
      <body className={`${raleway.className}`}>
        <Nav>
          <NavLink href={"/create-listing"}>List With Us</NavLink>
          <NavLink href={"/pricing"}>Pricing</NavLink>
        </Nav>
        <Toaster />
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
