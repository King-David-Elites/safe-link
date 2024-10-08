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
import { GoogleOAuthProvider } from "@react-oauth/google";
import useLocalStorage from "use-local-storage";

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
  metadataBase: new URL("http://localhost:4050"), // Set the base URL for metadata
  title: "SAFELINK",
  description:
    "SAFELINK helps you tell your prospects and clients about yourself, your business and why they should buy from you",
  openGraph: {
    type: "website",
    title: "SAFELINK",
    description:
      "SafeLink helps you organize your business details, photos, and prices in one simple link. No need to fill up your phone or your clients' phones with too many pictures—just send one link! It's easier for your customers to buy from you and share your business with others.",
    //siteName: "safelink",
    images: [
      {
        url: "homepage-image-2.jpg",
        width: "100%",
        height: "100%",
      },
    ],
  },
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId="309112425909-homsbnmdt7mlevglhqsae6l9gpfggga0.apps.googleusercontent.com">
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
      </GoogleOAuthProvider>
    </html>
  );
}
