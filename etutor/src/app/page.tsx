"use client";
import ContactUs from "@/components/ContactUs";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import MeeteTutors from "@/components/MeeteTutors";
import Navbar from "@/components/Navbar/Navbar";
import ParentsComments from "@/components/ParentsComments";
import Payment from "@/components/Payment";
import StudentsFaqs from "@/components/StudentsFaqs";
import WhyeTutor from "@/components/WhyeTutor";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session)

  useEffect(() => {
    if (session) {
      if (session.user?.role === "parent") {
        router.push("/parent");
      } else if (session?.user?.role === "teacher") {
        router.push("/etutor");
      } else if (session?.user?.role === "student") {
        router.push("/studentdashboard");
      }
    }
  }, [router, session]);

  return (
    <>
      <Navbar />
      <div className="px-[60px] mb:px-5 lg:px-5">
        <Hero />
        <MeeteTutors />
        <WhyeTutor />
        <HowWorks />
        <Payment />
        <ParentsComments />
        <StudentsFaqs />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
