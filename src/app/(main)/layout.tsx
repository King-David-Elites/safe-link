import { Nav, NavLink } from "@/components/Nav";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav>
                <NavLink href={"/create-listing"}>List With Us</NavLink>
                <NavLink href={"/pricing"}>Pricing</NavLink>
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
        </>

    );
}
