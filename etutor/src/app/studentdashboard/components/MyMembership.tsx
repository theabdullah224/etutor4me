// pages/index.js
import { useState } from "react";
import Head from "next/head";
import CurrentPackage from "../components/CurrentPackage";
import OtherPackages from "./OtherPackage";
import PlanDetails from "./PlanDetail";
import { ChevronRight,ChevronLeft, Divide } from "lucide-react";
import Image from "next/image";



interface MyMembershipprops{
  studentdata:any,

}
export default function Home({studentdata}:MyMembershipprops) {
  const [selectedPlan, setSelectedPlan] = useState("");

  const togglePlan = () => {
    setSelectedPlan((prevPlan) =>
      prevPlan === "standard" ? "premium" : "standard"
    );
  };

  return (
    <div className={`min-h-screen rounded-3xl relative  bg-[#EDE8FA] ${selectedPlan == "standard" || selectedPlan == "premium" ? "pb-10":"py-10" }  px-14 `}>
        <div className="absolute -top-20 left-24 px-8 py-4 uppercase font-normal rounded-xl text-2xl bg-[#EDE8FA] text-[#685AAD]">
            Session Left: {studentdata?.user?.sessionsPerMonth || 0}
        </div>
      <main className=" w-full ">
        {selectedPlan ? (
          <div className="flex flex-col justify-start">
            <div className="mt-5 mb-5 py-2 max-w-[26rem]  w-full  flex items-center justify-center ">
              <button
                onClick={togglePlan}
                className={` w-full   bg-[#887CC4]  text-white px-2 py-2 sm:py-5 font-bold text-3xl rounded-full  `}
              >
                {selectedPlan === "standard"? (
                    <div className="flex justify-between items-center px-4">
                            <h1 className=" w-full font-normal">Standard</h1>
                            <ChevronRight className="font-bold"/>
                    </div>
                ) : (

                    <div className="flex justify-between items-center px-4">
                            <h1 className=" w-full font-normal order-2">Premium</h1>
                            <ChevronLeft className="font-bold order-1"/>
                    </div>
                ) }
              </button>
            </div>
            <PlanDetails
              plan={selectedPlan}
              onBack={() => setSelectedPlan("")}
            />
          </div>
        ) : (
          <>
            <CurrentPackage />
            <OtherPackages onSelectPlan={setSelectedPlan} />
          </>
        )}
      </main>
    </div>
  );
}
