"use client";
import SignUpNavbar from "@/components/SignUpNavbar";
import React, { useState } from "react";
// import Signup from './Components/SignupImage';
// import SingupQuestions from './Components/SingupQuestions';
import Image from "next/image";
import singup from "../../../../public/assets/signup/signup.png";
import Link from "next/link";
import google from "../../../../public/googleicon.svg";
import line from "../../../../../../../public/assets/icons/line.svg";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [wait, setWait] = useState("Continue")



  const handleSubmit = async (e: React.FormEvent) => {
    setWait("Please Wait...")
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      role:'student',
      redirect: false,
    });

    if (result?.error) {
      setWait("Continue")
      setError(result.error);
    } else {
      // Handle successful sign-in (e.g., redirect or show success message)
      setWait("Continue")
      router.push("/studentdashboard"); // Redirect to the homepage or another page
    }
  };

  return (
    <div className="relative">
      <SignUpNavbar />
      <div className="flex items-center justify-center custom-2xl:items-start w-full custom-2xl:pr-36 pl-0 custom-2xl:justify-end  mb:flex-col mb:px-5 mb:gap-8 py-10 min-h-screen  ">
        <div className="absolute  hidden custom-2xl:block  z-30 bottom-0 left-24 w-[47rem]">
          <Image className="" src={singup} alt="signup" />
        </div>

        {/* login form */}

        <div className="rounded-3xl md:rounded-[3rem] bg-questionbg px-6 sm:px-11 py-9 max-w-[537px]  w-full custom-2xl:mr-[72px] mt-9 ">
        <h1 className="text-3xl 2xl:text-7xl font-extrabold text-darkBlue  lg:text-2xl lg:py-3 mb:text-xl mb:py-2 py-0">
            Sign In
          </h1>
          <p className="text-lightpurple text-3xl mt-3.5">As a Student</p>
          <div className="flex items-center justify-center  p-3.5 text-2xl gap-3 text-darkBlue cursor-pointer rounded-full bg-transparent border-darkBlue border mt-11 mb:py-2 mb:text-sm">
            <Image src={google} alt="google" className="w-5 h-5" />
            Continue with Google
          </div>
          <div className="flex items-center justify-center w-full gap-3 py-5 px-3">
            <div className="w-full">
              {" "}
              <Image alt="" src={line} />
            </div>
            <span className="text-darkBlue">or</span>
            <div className="w-full">
              <Image alt="" src={line} />
            </div>
          </div>



          <form onSubmit={handleSubmit}>

            <div className="flex w-full flex-col gap-5 mb:gap-3 mt-0.5">

            <div className="rounded-full bg-purpleBtn px-6 py-[17px] flex items-center w-full">
              <input
                type="email"
                className="placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs text-xl text-darkBlue"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="rounded-full bg-purpleBtn px-6 py-[17px] flex items-center w-full">
              <input
                type="password"
                className="placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs text-xl text-darkBlue"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            </div>

            {error && (
              <p className="text-red-600 mt-2">{error}</p>
            )}
            <div></div>

            <button
            type="submit"
       
              className={` bg-customBlue text-2xl text-white rounded-full w-full py-[17px] font-bold  px-5 mt-14  cursor-pointer text-center lg:text-xl lg:py-2 mb:text-sm mb:p-2 mb:mt-2 `}
            >
              {wait}
            </button>
          </form>
          <p className="text-[#534988] text-base mt-5">
            By clicking “Continue with Google / Email“ you agree to our User{" "}
            <br />
            <span className="underline">
              Terms of Service and Privacy Policy{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
