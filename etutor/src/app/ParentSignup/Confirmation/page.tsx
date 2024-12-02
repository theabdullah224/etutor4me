"use client";
import SignUpNavbar from "@/components/SignUpNavbar";
import React from "react";
import Image from "next/image";
import back from "../../../../public/assets/signup/confirmation.png";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/signin/parentsignin"); // Navigate to /admin
  };
  return (
    <div
      className='"
      '
      style={{ backgroundImage: `url(${back.src})` }}
    >
      <SignUpNavbar />
      <div className="relative min-h-screen w-screen flex items-center justify-center ">
        <div className="  ">
        
          {/* Optional dark overlay */}
          <h1 className="text-darkBlue  font-bold sm:text-7xl  text-center ">
            A confirmation email with a link has been <br /> sent to your inbox.
            <span className="font-light">
              Please check your{" "}
              <a
                href="https://mail.google.com/mail/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-light"
              >
                email
              </a>{" "}
              <br /> to complete the process.
            </span>
          </h1>
        </div>
        <div className="absolute bottom-20 right-40  ">
          <div
            onClick={handleNavigate}
            className="rounded-md sm:rounded-3xl text-4xl bg-[#EDE6FF] text-black px-16 py-9  cursor-pointer mb:text-sm "
          >
            Confirmation
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
