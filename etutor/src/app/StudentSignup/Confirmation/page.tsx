"use client";
import SignUpNavbar from "@/components/SignUpNavbar";
import React from "react";
import Image from "next/image";
import back from "../../../../public/assets/signup/confirmation.png";

import { useRouter } from "next/navigation";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/signin/studentsignin"); // Navigate to /admin
  };
  return (
    <div className=" " style={{ backgroundImage: `url(${back.src})` }}>
      <SignUpNavbar />
      <div className="relative min-h-screen w-screen flex items-center justify-center ">
        <div className="">
          {" "}
          {/* Optional dark overlay */}
          <h1 className="text-darkBlue  font-bold sm:text-7xl  text-center ">
            A confirmation email with a link has been <br /> sent to your inbox.
            <span className="font-light">
              Please check your{" "}
              <span className="underline font-light">email</span> <br /> to complete
              the process.
            </span>
          </h1>
        </div>

        <div 
          onClick={handleNavigate}
          className="absolute bottom-20 right-40 "
        >
          <div className="rounded-md sm:rounded-3xl text-4xl bg-[#EDE6FF] text-black px-16 py-9  cursor-pointer mb:text-sm ">
            Confirmation
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
