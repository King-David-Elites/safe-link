// pages/terms-and-conditions.
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-[50vh] w-full mb-2 sm:flex hidden">
        <div
          className=" h-full w-full image flex flex-col justify-center"
          style={{
            backgroundImage: "url('/image2.jpg')",
            backgroundSize: "cover",
          }}
        >
          <button
            className=" mb-4 flex flex-row ml-4 mt-4 text-white space-x-2"
            onClick={() => router.back()}
          >
            <IoArrowBack size={24} />
            <div>Back</div>
          </button>
          <div className="flex-1 flex-col flex text-white mx-4 justify-center items-center mb-4">
            <h1 className="text-3xl font-semibold ">Terms & Conditions</h1>
            <h2 className="text-lg text-center ">
              All you need to know about King David Elite
            </h2>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto rounded-lg p-2">
          <div className="flex flex-row items-center sm:hidden">
            <button
              className=" mb-4 flex flex-row space-x-2"
              onClick={() => router.back()}
            >
              <IoArrowBack size={24} />
              <div>Back</div>
            </button>

            <div className="flex-1 flex-col flex items-center mb-4">
              <h1 className="text-2xl font-semibold ">Terms and Conditions</h1>
              <h2 className="text-lg ">
                by showcasing your exclusive listings to our highly-esteemed
                users
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">1. Acceptance of Terms</h3>
              <p>
                By using or accessing the SAFELINK website, mobile app, or other
                services (collectively, the "SAFELINK Services"), you agree to
                be bound by these terms and conditions (the "Terms and
                Conditions"). If you do not agree to these Terms and Conditions,
                you may not use the SAFELINK Services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">2. Description of Services</h3>
              <p>
                SAFELINK provides a platform for businesses to store and send
                their profile and inventory to customers and other businesses.
                SAFELINK also provides a variety of other services, such as the
                ability to create and manage listings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">3. Account Creation</h3>
              <p>
                To create an account with SAFELINK, you will need to provide
                certain information, such as your name, email address, and
                mailing address. You will also need to create a password. You
                agree to provide accurate and complete information, and to keep
                your account information up-to-date.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">4. Account Use</h3>
              <p>
                You are responsible for all activity that occurs under your
                account. You agree to keep your password confidential and to not
                share your account with anyone else. You agree to notify
                SAFELINK immediately if you believe that your account has been
                compromised.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                5. Prohibited Content and Activities
              </h3>
              <p>You may not use the SAFELINK Services to:</p>
              <ul className="list-disc list-inside">
                <li>
                  Post or transmit any content that is unlawful, harmful,
                  threatening, abusive, harassing, tortious, defamatory, vulgar,
                  obscene, pornographic, libelous, or racially, sexually,
                  religiously, or otherwise objectionable.
                </li>
                <li>Infringe the intellectual property rights of others.</li>
                <li>Impersonate any person or entity.</li>
                <li>
                  Interfere with the SAFELINK Services or with the use and
                  enjoyment of the SAFELINK Services by others.
                </li>
                <li>Violate any applicable laws or regulations.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">6. Enforcement</h3>
              <p>
                SAFELINK reserves the right to deny you access to the SAFELINK
                Services at any time for any reason, without notice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">7. Modifications</h3>
              <p>
                SAFELINK reserves the right to modify these Terms and Conditions
                at any time. Any changes to these Terms and Conditions will be
                effective immediately upon posting on the SAFELINK website. Your
                continued use of the SAFELINK Services after any changes to
                these Terms and Conditions will constitute your acceptance of
                the changes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">8. Governing Law</h3>
              <p>
                These Terms and Conditions will be governed by and construed in
                accordance with the laws of the Federal Republic of Nigeria,
                without regard to its conflict of law provisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">9. Entire Agreement</h3>
              <p>
                These Terms and Conditions constitute the entire agreement
                between you and SAFELINK with respect to your use of the
                SAFELINK Services and supersede all prior or contemporaneous
                communications, representations, or agreements, whether oral or
                written.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">10. Severability</h3>
              <p>
                If any provision of these Terms and Conditions is held to be
                invalid or unenforceable, such provision will be struck from
                these Terms and Conditions and the remaining provisions will
                remain in full force and effect.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">11. Waiver</h3>
              <p>
                No waiver of any provision of these Terms and Conditions will be
                effective unless in writing and signed by both you and SAFELINK.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">12. Headings</h3>
              <p>
                The headings in these Terms and Conditions are for convenience
                only and will not affect their interpretation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">13. Survival</h3>
              <p>
                The provisions of these Terms and Conditions that by their
                nature should survive termination of this Agreement will survive
                termination of this Agreement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">14. Contact Us</h3>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us at{" "}
                <Link
                  href="mailto:SAFELINKng@gmail.com"
                  className="text-blue-500"
                >
                  <div>SAFELINKng@gmail.com</div>
                </Link>
              </p>
            </div>
            <div className="mt-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">
                  By clicking here, I state that I have read and understood the
                  terms and conditions.
                </span>
              </label>
            </div>
          </div>
        </div>
        <footer className="mt-12 text-center">
          <div className="space-y-4">
            <p className="text-gray-600">
              &copy; 2022 King David Elites. All rights reserved
            </p>
            <div className="space-x-4">
              <Link href="#" className="text-gray-600">
                Terms and Conditions
              </Link>
              <Link href="#" className="text-gray-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600">
                Contact Us
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
