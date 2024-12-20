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
function Pricing() {
  const [Expand, setExpand] = useState<any>(null);
  const [managePricing, SetmanagePricing] = useState(false);
  const [etutorPriceManagement, setetutorPriceManagement] = useState(true);
  return (
    <div
      className={`  ${
        managePricing
          ? "mt-4 sm:mt-7 custom-lg:mt-[54px]"
          : "mt-16 sm:mt-14 custom-lg:mt-[76px]"
      }  `}
    >
      {/* top search bar */}

      {managePricing === false && (
        <>
          <div className="absolute top-16 sm:top-14 2xl:top-8 ">
            <div className="relative w-fit  h-fit truncate ">
              <input
                type="text"
                placeholder="Search by name,or ID"
                className=" bg-[#ede8fa] text-[#aaa1d3] truncate placeholder-[#aaa1d3] text-xl px-5  custom-lg:px-10  py-2 custom-lg:py-5 rounded-md border border-transparent w-full  custom-xl:w-[34.4rem] focus:outline-none focus:ring-0"
              />
              <Image
                src={searchicon}
                className="absolute right-2 sm:right-4 custom-xl:right-8 top-1/2 transform -translate-y-1/2 text-[#d1cbe6]  w-4 sm:w-5 h-4 sm:h-5 "
                alt="x"
              />
            </div>
          </div>

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

          <div className=" my-5 sm:my-7 custom-lg:my-14 py-3 sm:py-6 custom-xl:py-12 px-3 custom-xl:px-12 bg-[#ede8fa]  rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
            <h1 className="text-xl sm:text-3xl custom-lg:text-[50px] text-[#8276bc] font-medium leading-normal ">
              Country-Specific Adjustments
            </h1>
            <div className="   mt-3 sm:mt-5 custom-lg:mt-14 ">
              <div className="flex justify-between px-2 sm:px-4 custom-lg:px-12 items-center text-xs sm:text-lg custom-lg:text-xl text-[#7669b5]">
                <span className="leading-none ">Type</span>
                <span className="leading-none ">Pricing Difference </span>
                <span className="leading-none "></span>
              </div>
              <div className="mt-3 sm:mt-5 custom-lg:mt-8  max-h-[24rem] overflow-y-auto overflow-auto scrollbar-none flex flex-col gap-2 sm:gap-3 custom-xl:gap-5">
                <div className=" py-2 sm:py-4 custom-lg:py-0 custom-lg:h-[7rem] rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#a296cc] flex items-center justify-between gap-2 px-2 sm:px-4  custom-lg:px-0 custom-lg:pl-12 custom-lg:pr-7">
                  <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white custom-lg:w-[19rem]">
                    Higher-Cost Countries
                  </h1>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className=" bg-[#cfc7e8] px-5 sm:px-9 custom-lg:px-[70px] py-1 sm:py-3 custom-lg:py-5  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      +10%
                    </div>
                    <span className="text-xs sm:text-lg custom-lg:text-2xl text-white uppercase">
                      usd
                    </span>
                  </div>
                  <div className="px-5 sm:px-7 custom-lg:px-[62px] py-1 sm:py-3 custom-lg:py-5 bg-[#fc7777] text-xs sm:text-lg custom-lg:text-2xl text-white font-medium rounded-sm sm:rounded-lg">
                    EDIT
                  </div>
                </div>
                <div className=" py-2 sm:py-4 custom-lg:py-0 custom-lg:h-[7rem] rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#a296cc] flex items-center justify-between gap-2 px-2 sm:px-4  custom-lg:px-0 custom-lg:pl-12 custom-lg:pr-7">
                  <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white custom-lg:w-[19rem]">
                    Moderate-Cost Countries
                  </h1>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className=" bg-[#cfc7e8] px-5 sm:px-9 custom-lg:px-[70px] py-1 sm:py-3 custom-lg:py-5  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      Base Rate
                    </div>
                  </div>
                  <div className="px-5 sm:px-7 custom-lg:px-[62px] py-1 sm:py-3 custom-lg:py-5 bg-transparent select-none text-xs sm:text-lg custom-lg:text-2xl text-transparent font-medium rounded-sm sm:rounded-lg">
                    EDIT
                  </div>
                </div>
                <div className=" py-2 sm:py-4 custom-lg:py-0 custom-lg:h-[7rem] rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#a296cc] flex items-center justify-between gap-2 px-2 sm:px-4  custom-lg:px-0 custom-lg:pl-12 custom-lg:pr-7">
                  <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white custom-lg:w-[19rem]">
                    Lowe-Cost Countries
                  </h1>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className=" bg-[#cfc7e8] px-5 sm:px-9 custom-lg:px-[70px] py-1 sm:py-3 custom-lg:py-5  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      -10%
                    </div>
                    <span className="text-xs sm:text-lg custom-lg:text-2xl text-white uppercase">
                      usd
                    </span>
                  </div>
                  <div className="px-5 sm:px-7 custom-lg:px-[62px] py-1 sm:py-3 custom-lg:py-5 bg-[#fc7777] text-xs sm:text-lg custom-lg:text-2xl text-white font-medium rounded-sm sm:rounded-lg">
                    EDIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {false && (
        <div className=" py-3 sm:py-6 custom-xl:py-[72px] px-3 custom-xl:px-8 bg-[#f6f4fd] h-full rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
          <div>
            <h1 className="text-xl sm:text-3xl custom-lg:text-[45px] text-[#685aad] font-medium leading-normal pl-2 sm:pl-4 custom-lg:pl-5 custom-xl:pl-7 ">
              Pricing Management
            </h1>
            <h3 className="text-xl sm:text-3xl custom-lg:text-[39px] text-[#8479bd]  leading-normal pl-2 sm:pl-4 custom-lg:pl-5 custom-xl:pl-7  mt-0 sm:mt-3.5">
              Student Account
            </h3>
          </div>

          <div className=" mt-3 sm:mt-6 custom-lg:mt-8 custom-xl:mt-16 p-3 sm:p-6 custom-lg:p-8 custom-xl:p-16 rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#ede8fa]">
            <div className="flex gap-4 sm:gap-8 custom-lg:gap-16 custom-xl:gap-24 items-center ">
              <div className="img border border-red-800 rounded-full h-[70px] sm:h-[100px] custom-xl:h-[164px] w-[70px] sm:w-[100px] custom-xl:w-[164px]"></div>

              <div className="flex flex-col gap-1 custom-xl:gap-3">
                <span className=" text-2xl custom-lg:text-4xl custom-xl:text-[55px] leading-none font-bold  text-[#6c5baa]">
                  Youssef Assri
                </span>
                <span className=" text-lg custom-lg:text-xl custom-xl:text-[33px] leading-none   text-[#6c5baa]">
                  Student ID: 125A
                </span>
                <span className=" text-lg custom-lg:text-xl custom-xl:text-[26px] leading-none font-medium text-[#9486c2]">
                  Standard Membership
                </span>
              </div>
            </div>

            <div className="data grid grid-cols-1 custom-lg:grid-cols-2 custom-xl:grid-cols-3  mt-3 sm:mt-6 custom-lg:mt-8 custom-xl:mt-12 gap-x-9 custom-xl:gap-x-12 gap-y-2 sm:gap-y-4 custom-lg:gap-y-7 custom-xl:gap-y-10">
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Age
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Grade Level
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Institution
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Signup Date
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Sessions Completed
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Sessions Left
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Sessions Booked
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Free Trials completed
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Free Trials Left
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
            </div>
            <div>
              <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]   custom-xl:gap-x-12 mt-2 sm:mt-4 custom-lg:mt-7 custom-xl:mt-10">
                Subjects Needed
              </label>
            </div>
          </div>

          {/* Pay As you go */}
          <div className=" my-5 sm:my-7 custom-lg:my-14 py-3 sm:py-6 custom-xl:py-12 px-3 custom-xl:px-12 bg-[#ede8fa]  rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
            <h1 className="text-xl sm:text-3xl custom-lg:text-[50px] text-[#8276bc] font-medium leading-normal ">
              Pay As You Go
            </h1>
            <div className="   mt-3 sm:mt-5 custom-lg:mt-14 ">
              <div className="flex justify-between px-2 sm:px-4 custom-lg:px-12 items-center text-xs sm:text-lg custom-lg:text-xl font-medium text-[#7669b5]">
                <span className="leading-none ">Title</span>
                <span className="leading-none ">Pricing</span>
                <span className="leading-none ">Discount</span>
                <span className="leading-none "></span>
              </div>
              <div className="mt-3 sm:mt-5 custom-lg:mt-8  max-h-[24rem] overflow-y-auto overflow-auto scrollbar-none flex flex-col gap-2 sm:gap-3 custom-xl:gap-5">
                <div className=" py-2 sm:py-4 custom-lg:py-0 custom-lg:h-[6.7rem] rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#a296cc] flex items-center justify-between gap-2 px-2 sm:px-4  custom-lg:px-0 custom-lg:pl-12 custom-lg:pr-7">
                  <span>
                    <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white ">
                      Junior
                    </h1>
                    <span className=" text-white text-xs sm:text-base custom-lg:text-2xl leading-tight">
                      etutor lvl
                    </span>
                  </span>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className=" bg-[#cfc7e8] px-5 sm:px-9  py-1 sm:py-3 custom-lg:py-4  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      $152.4
                    </div>
                    <span className="text-xs sm:text-lg custom-lg:text-2xl text-white uppercase">
                      usd
                    </span>
                  </div>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className="  bg-[#cfc7e8] px-5 sm:px-9  py-1 sm:py-3 custom-lg:py-4  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      +10%
                    </div>
                  </div>

                  <div className="px-5 sm:px-7 custom-lg:px-[62px] py-1 sm:py-3 custom-lg:py-4 bg-[#fc7777] text-xs sm:text-lg custom-lg:text-2xl text-white font-medium rounded-sm sm:rounded-lg">
                    EDIT
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* stanard Membership */}
          <div className=" my-5 sm:my-7 custom-lg:my-14 py-3 sm:py-6 custom-xl:py-12 px-3 custom-xl:px-12 bg-[#ede8fa]  rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
            <h1 className="text-xl sm:text-3xl custom-lg:text-[50px] text-[#8276bc] font-medium leading-normal ">
              Standard Membership
            </h1>
            <div className="   mt-3 sm:mt-5 custom-lg:mt-14 ">
              <div className="flex justify-between px-2 sm:px-4 custom-lg:px-12 items-center text-xs sm:text-lg custom-lg:text-xl font-medium text-[#7669b5]">
                <span className="leading-none ">Title</span>
                <span className="leading-none ">Title</span>
                <span className="leading-none ">Pricing</span>
                <span className="leading-none ">Discount</span>
                <span className="leading-none "></span>
              </div>
              <div className="mt-3 sm:mt-5 custom-lg:mt-8  max-h-[24rem] overflow-y-auto overflow-auto scrollbar-none flex flex-col gap-2 sm:gap-3 custom-xl:gap-5">
                <div className=" py-2 sm:py-4 custom-lg:py-0 custom-lg:h-[6.7rem] rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#a296cc] flex items-center justify-between gap-2 px-2 sm:px-4  custom-lg:px-0 custom-lg:pl-12 custom-lg:pr-7">
                  <span>
                    <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white ">
                      Junior
                    </h1>
                    <span className=" text-white text-xs sm:text-base custom-lg:text-2xl leading-tight">
                      etutor lvl
                    </span>
                  </span>
                  <span>
                    <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white ">
                      Junior
                    </h1>
                    <span className=" text-white text-xs sm:text-base custom-lg:text-2xl leading-tight">
                      etutor lvl
                    </span>
                  </span>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className=" bg-[#cfc7e8] px-5 sm:px-9  py-1 sm:py-3 custom-lg:py-4  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      $152.4
                    </div>
                    <span className="text-xs sm:text-lg custom-lg:text-2xl text-white uppercase">
                      usd
                    </span>
                  </div>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className="  bg-[#cfc7e8] px-5 sm:px-9  py-1 sm:py-3 custom-lg:py-4  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      +10%
                    </div>
                  </div>

                  <div className="px-5 sm:px-7 custom-lg:px-[62px] py-1 sm:py-3 custom-lg:py-4 bg-[#fc7777] text-xs sm:text-lg custom-lg:text-2xl text-white font-medium rounded-sm sm:rounded-lg">
                    EDIT
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* premium memebership */}
          <div className=" my-5 sm:my-7 custom-lg:my-14 py-3 sm:py-6 custom-xl:py-12 px-3 custom-xl:px-12 bg-[#ede8fa]  rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
            <h1 className="text-xl sm:text-3xl custom-lg:text-[50px] text-[#8276bc] font-medium leading-normal ">
              Premium Membership
            </h1>
            <div className="   mt-3 sm:mt-5 custom-lg:mt-14 ">
              <div className="flex justify-between px-2 sm:px-4 custom-lg:px-12 items-center text-xs sm:text-lg custom-lg:text-xl font-medium text-[#7669b5]">
                <span className="leading-none ">Title</span>
                <span className="leading-none ">Title</span>
                <span className="leading-none ">Pricing</span>
                <span className="leading-none ">Discount</span>
                <span className="leading-none "></span>
              </div>
              <div className="mt-3 sm:mt-5 custom-lg:mt-8  max-h-[24rem] overflow-y-auto overflow-auto scrollbar-none flex flex-col gap-2 sm:gap-3 custom-xl:gap-5">
                <div className=" py-2 sm:py-4 custom-lg:py-0 custom-lg:h-[6.7rem] rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#a296cc] flex items-center justify-between gap-2 px-2 sm:px-4  custom-lg:px-0 custom-lg:pl-12 custom-lg:pr-7">
                  <span>
                    <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white ">
                      Junior
                    </h1>
                    <span className=" text-white text-xs sm:text-base custom-lg:text-2xl leading-tight">
                      etutor lvl
                    </span>
                  </span>
                  <span>
                    <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white ">
                      Junior
                    </h1>
                    <span className=" text-white text-xs sm:text-base custom-lg:text-2xl leading-tight">
                      etutor lvl
                    </span>
                  </span>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className=" bg-[#cfc7e8] px-5 sm:px-9  py-1 sm:py-3 custom-lg:py-4  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      $152.4
                    </div>
                    <span className="text-xs sm:text-lg custom-lg:text-2xl text-white uppercase">
                      usd
                    </span>
                  </div>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className="  bg-[#cfc7e8] px-5 sm:px-9  py-1 sm:py-3 custom-lg:py-4  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      +10%
                    </div>
                  </div>

                  <div className="px-5 sm:px-7 custom-lg:px-[62px] py-1 sm:py-3 custom-lg:py-4 bg-[#fc7777] text-xs sm:text-lg custom-lg:text-2xl text-white font-medium rounded-sm sm:rounded-lg">
                    EDIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {managePricing && (
        <div className=" py-3 sm:py-6 custom-xl:py-[72px] px-3 custom-xl:px-8 bg-[#f6f4fd] h-full rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
          <div>
            <h1 className="text-xl sm:text-3xl custom-lg:text-[45px] text-[#685aad] font-medium leading-normal pl-2 sm:pl-4 custom-lg:pl-5 custom-xl:pl-7 ">
              Pricing Management
            </h1>
            <h3 className="text-xl sm:text-3xl custom-lg:text-[39px] text-[#8479bd]  leading-normal pl-2 sm:pl-4 custom-lg:pl-5 custom-xl:pl-7  mt-0 sm:mt-3.5">
              eTutor account
            </h3>
          </div>

          <div className=" mt-3 sm:mt-6 custom-lg:mt-8 custom-xl:mt-16 p-3 sm:p-6 custom-lg:p-8 custom-xl:p-16 rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#ede8fa]">
            <div className="flex gap-4 sm:gap-8 custom-lg:gap-16 custom-xl:gap-24 items-center ">
              <div className="img border border-red-800 rounded-full h-[70px] sm:h-[100px] custom-xl:h-[164px] w-[70px] sm:w-[100px] custom-xl:w-[164px]"></div>

              <div className="flex flex-col gap-1 custom-xl:gap-3">
                <span className=" text-2xl custom-lg:text-4xl custom-xl:text-[55px] leading-none font-bold  text-[#6c5baa]">
                  Youssef Assri
                </span>
                <span className=" text-lg custom-lg:text-xl custom-xl:text-[33px] leading-none   text-[#6c5baa]">
                  Student ID: 125A
                </span>
                <span className=" text-lg custom-lg:text-xl custom-xl:text-[26px] leading-none font-medium text-[#9486c2] flex gap-2">
                  <Image src={filledStar} alt="" />
                  <Image src={filledStar} alt="" />
                  <Image src={filledStar} alt="" />
                  <Image src={filledStar} alt="" />
                  <Image src={unfilledStar} alt="" />
                </span>
              </div>
            </div>

            <div className="data grid grid-cols-1 custom-lg:grid-cols-2 custom-xl:grid-cols-3  mt-3 sm:mt-6 custom-lg:mt-8 custom-xl:mt-12 gap-x-9 custom-xl:gap-x-12 gap-y-2 sm:gap-y-4 custom-lg:gap-y-7 custom-xl:gap-y-10">
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Age
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Sessions Completed
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Sessions Booked
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Signup Date
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Free Trials completed
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
              <div className="">
                <label className="block text-lg sm:text-3xl font-medium text-[#8276bc]">
                  Free Trials Booked
                </label>
                <input
                  type="text"
                  className="mt-2 sm:mt-4 px-9 py-2 sm:py-3 custom-xl:py-5 outline-none block w-full rounded-lg text-white bg-[#B4A5D7] text-base sm:text-lg custom-xl:text-2xl "
                />
              </div>
            </div>


            <div>
                <div className="box mt-12">
                <div className="bg-[#b4a5d7] text-[#7f71ba] rounded-lg p-4 max-w-md  shadow-md flex flex-col">
      {/* Profile Section */}
      <div className="flex items-center mb-2">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full h-12 w-12 mr-2"
        />
        {/* Name */}
        <span className="text-lg font-semibold text-purple-700">
          Youssef Amir
        </span>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {[...Array(4)].map((_, index) => (
          <span key={index} className="text-yellow-500 text-xl">
            ★
          </span>
        ))}
        <span className="text-gray-300 text-xl">★</span>
      </div>

      {/* Review Content */}
      <p className="text-white text-sm mb-2">
        I love how interactive and fun my tutoring sessions are! It’s not just
        about studying; my tutor makes learning exciting.
      </p>

      {/* Date */}
      <div className="text-right text-white text-xs">04 Oct 2024</div>
    </div>
                </div>
            </div>
          {/* Tutor Pricing */}
          <div className="  py-3 sm:py-6 custom-xl:py-12 px-3 custom-xl:px-12   rounded-md sm:rounded-xl  custom-lg:rounded-3xl">
           
            <div className="   mt-3 sm:mt-5 custom-lg:mt-14 ">
              <div className="flex justify-between px-2 sm:px-4 custom-lg:px-12 items-center text-xs sm:text-lg custom-lg:text-xl font-medium text-[#7669b5]">
                <span className="leading-none ">eTutors level</span>
                <span className="leading-none ">Price per Session</span>
                
                <span className="leading-none "></span>
              </div>


              <div className="mt-3 sm:mt-5 custom-lg:mt-8  max-h-[24rem] overflow-y-auto overflow-auto scrollbar-none flex flex-col gap-2 sm:gap-3 custom-xl:gap-5">
                <div className=" py-2 sm:py-4 custom-lg:py-0 custom-lg:h-[6.7rem] rounded-md sm:rounded-xl  custom-lg:rounded-3xl bg-[#b4a5d7] flex items-center justify-between gap-2 px-2 sm:px-4  custom-lg:px-0 custom-lg:pl-12 custom-lg:pr-7">
                  <span>
                    <h1 className="text-xs sm:text-lg custom-lg:text-3xl font-medium text-white ">
                      Junior
                    </h1>
                    <span className=" text-white text-xs sm:text-base custom-lg:text-2xl leading-tight">
                      etutor lvl
                    </span>
                  </span>
                  <div className="flex gap-2 custom-lg:gap-4 items-center">
                    <div className=" bg-[#cfc7e8] px-5 sm:px-9  py-1 sm:py-3 custom-lg:py-4  text-xs sm:text-lg custom-lg:text-2xl  font-medium rounded-sm sm:rounded-xl shadow-sm text-[#7f72b9]">
                      $152.4
                    </div>
                    <span className="text-xs sm:text-lg custom-lg:text-2xl text-white uppercase">
                      usd
                    </span>
                  </div>
                  

                  <div className="px-5 sm:px-7 custom-lg:px-[62px] py-1 sm:py-3 custom-lg:py-4 bg-[#fc7777] text-xs sm:text-lg custom-lg:text-2xl text-white font-medium rounded-sm sm:rounded-lg">
                    EDIT
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


        </div>
      )}
    </div>
  );
}

export default Pricing;
