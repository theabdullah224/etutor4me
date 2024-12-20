
import React, { useState } from "react";
import searchicon from "../../../../public/searchIconLightPurple.svg";
import ProfileLogo from "../../../../public/profileLogoWHite.svg";
import Chat from "../../../../public/chatLogoWHite.svg";
import Activity from "../../../../public/activityLogoWHite.svg";
import SettingIcon from "../../../../public/SettingIconPurple.svg";
import filledStar from "../../../../public/filled Star.svg";
import unfilledStar from "../../../../public/unfilledStar.svg";
import Image from "next/image";

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function Students() {
    const [Expand, setExpand] = useState<any>(null);
    const [managePricing, SetmanagePricing] = useState(false);
    const [etutorPriceManagement, setetutorPriceManagement] = useState(true);
  return (
    <div>
       <div className=" py-3 sm:py-6 custom-xl:py-12 px-3 custom-xl:px-7 bg-[#ede8fa] h-full rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
            <div className="flex justify-between items-start">
              <div className="flex gap-8 items-start">
                <h1 className="text-xl sm:text-3xl custom-lg:text-[50px] text-[#8276bc] font-medium leading-normal pl-5">
                  All accounts
                </h1>
                <div className="border-2 custom-xl:border-8 border-[#b4a5d7] text-[#8376bc] rounded-md md:rounded-xl custom-xl:rounded-xl text-sm sm:text-base md:text-lg custom-lg:text-xl font-bold px-4 py-0">
                  120
                </div>
              </div>
              <div className="mr-5">
                <Image
                  src={SettingIcon}
                  alt=""
                  className=" w-5 sm:w-7 custom-xl:w-9"
                />
              </div>
            </div>

            <div className="  mt-3 custom-xl:mt-14 text-[#8376bc]  justify-between hidden custom-xl:flex">
              <div className="flex text-xl items-start ">
                <span className="  w-[23.6rem] text-center border-r border-[#8376bc] leading-none   ">
                  Name
                </span>
                <span className="w-[8.6rem] text-center leading-none">ID</span>
              </div>
              <div className="flex text-xl items-start ">
                <span className="w-[10rem] text-center  border-r border-[#8376bc]  leading-none   ">
                  Profile
                </span>
                <span className="w-[8.2rem] text-center border-r border-[#8376bc] leading-none">
                  Chat
                </span>
                <span className="w-[9.2rem] text-center leading-none">
                  Activity
                </span>
                <span className="w-[5rem] text-center leading-none"></span>
              </div>
            </div>

            <div className="  mt-3 custom-xl:mt-11 custom-lg:pr-3.5">
              <div
                id="style-3"
                className=" max-h-[25rem] custom-lg:max-h-[39rem] flex flex-col gap-2 sm:gap-3 custom-xl:gap-5 overflow-y-auto pr-2 custom-xl:pr-6"
              >
                {a.map((index) => (
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      Expand === index
                        ? "min-h-[7rem] sm:min-h-[8rem] bg-[#a296cc] rounded-md sm:rounded-xl  custom-lg:rounded-2xl "
                        : "min-h-[60px] sm:min-h-[92px]"
                    }`}
                    key={index}
                  >
                    <div
                      className="item min-h-[60px] sm:min-h-[92px] bg-[#a296cc] rounded-md sm:rounded-xl  custom-lg:rounded-2xl flex items-center px-4 custom-lg:px-7  justify-between"
                    >
                      <div className="flex items-center gap-4 custom-lg:gap-0">
                        <div className="img border border-red-600 rounded-full h-[40px] md:h-[68px] w-[40px] md:w-[68px]"></div>
                        <span
                          onClick={() => {
                            SetmanagePricing(true);
                          }}
                          className="name hover:cursor-pointer  text-white text-sm  sm:text-xl font-medium custom-lg:w-[17.7rem] custom-lg:border-r text-center leading-none  truncate"
                        >
                          Youssef Summers
                        </span>
                        <span className="name  text-white text-xl font-medium w-[12.5rem]  text-center leading-none truncate hidden custom-xl:block">
                          #2002627
                        </span>
                      </div>

                      <div className="hidden custom-lg:flex items-center   ">
                        <div className="w-[10rem] flex items-center justify-center ">
                          <Image src={ProfileLogo} alt="" />
                        </div>
                        <div className="w-[8.2rem] flex items-center justify-center border-x">
                          <Image src={Chat} alt="" />
                        </div>
                        <div className="w-[9.2rem] flex items-center justify-center ">
                          <Image src={Activity} alt="" />
                        </div>
                        <span className="w-[0.4rem] text-center leading-none"></span>
                      </div>

                      <div
                        onClick={() => {
                          setExpand((prev: any) =>
                            prev === index ? null : index
                          );
                        }}
                        className="text-white block custom-lg:hidden"
                      >
                        {Expand === index ? "Collapse" : "Expand"}
                      </div>
                    </div>

                    <div
                      className={`transition-opacity duration-500 px-12 custom-lg:hidden items-center  w-full justify-between ${
                        Expand != null ? "flex" : "hidden"
                      }`}
                    >
                      <div className="">
                        <Image src={ProfileLogo} alt="" />
                      </div>
                      <div className="">
                        <Image src={Chat} alt="" />
                      </div>
                      <div className=" ">
                        <Image src={Activity} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <style jsx>{`
                #style-3::-webkit-scrollbar-track {
                  border-radius: 10px;
                  background-color: #d2cceb;
                }

                #style-3::-webkit-scrollbar {
                  width: 8px;

                  background-color: transparent;
                }

                #style-3::-webkit-scrollbar-thumb {
                  border-radius: 10px;

                  background-color: #7f72ba;
                }
              `}</style>
            </div>
          </div>
    </div>
  )
}

export default Students
