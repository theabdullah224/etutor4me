import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import calendaricon from "../../../../../public/CalendarWhite.svg";




const ReasonToPauseOptions = [
  { value: "Mathematics", label: "Mathematics" },
  { value: "Algebra", label: "Algebra" },
];





function PauseOrResign() {
  const [activeview, setActiveview] = useState("Proceed");
  const [isReasonToPauseDropdownOpen, setIsReasonToPauseDropdownOpen] =useState(false);
  const [selectedReasonToPauses, setSelectedReasonToPauses] = useState("");


  const [isOpen, setIsOpen] = useState(false);


  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);



  // date picker-----------------------------------
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add previous month's days
    const prevMonthDays = firstDay;
    for (let i = prevMonthDays - 1; i >= 0; i--) {
      days.push({
        day: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          -i
        ).getDate(),
        isCurrentMonth: false,
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    // Add next month's days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };


  const handleDateChange = (date:any) => {
    setSelectedDate(date);
    setIsOpen(false);
  };









  const toggleReasonToPauseDropdown = () => {
    setIsReasonToPauseDropdownOpen(!isReasonToPauseDropdownOpen);
  };

  const handleReasonToPauseClick = (ReasonToPause: string) => {
    setSelectedReasonToPauses(ReasonToPause);
    setIsReasonToPauseDropdownOpen(false);
  };

  return (
    <div className="bg-white ">
      {activeview === "Proceed" && (
        <div className="bg-[#EDE8FA]  mt-[151px] px-14 pt-16 pb-28 rounded-3xl relative">
          <h1 className="text-xl sm:text-2xl custom-2xl:text-6xl text-[#685AAD] font-bold  mb-9 ">
            Pause or Resign
          </h1>
          <p className="text-3xl leading-snug text-[#6B5692] mb-40">
            We understand that circumstances can change, and sometimes you may
            need to step back from your <br />
            tutoring role. Whether you&apos;re looking to take a temporary break or
            feel it&apos;s time to resign, we&apos;re here to <br />
            support your decision. Please choose the option that aligns with
            your current needs.
          </p>

          <button
            onClick={() => {
              setActiveview("PauseOrResign");
            }}
            className="bg-[#FC7777]  text-white rounded-lg px-[155px] font-medium py-3 text-2xl absolute bottom-16 right-14"
          >
            Proceed
          </button>
        </div>
      )}
      {activeview === "PauseOrResign" && (
        <div className="bg-white absolute top-0 left-0 z-50 min-h-screen w-screen ">
          <div className="flex flex-col my-16 gap-10 ">
            {/* want to pause */}
            <div className="bg-[#EDE8FA]   pl-24 pr-16  pt-16 pb-5 rounded-3xl relative max-w-[91rem]  w-full mx-auto">
              <h1 className="text-xl sm:text-2xl custom-2xl:text-6xl text-[#685AAD] font-bold  mb-5  ">
                Pause Tutoring
              </h1>
              <p className="text-3xl leading-snug text-[#6B5692] mb-40">
                Need some time off? By pausing your tutoring sessions, you can
                take a break without losing your eTutor <br />
                profile, and you can easily resume tutoring when you&apos;re ready.
                This option is perfect if you plan to return in the <br />
                near future but need some time away for personal, academic, or
                professional reasons.
              </p>

              <div className="absolute bottom-14 right-16 flex gap-6">
                <button
                  onClick={() => {
                    setActiveview("Proceed");
                  }}
                  className="bg-[#8653FF]  text-white rounded-lg px-20 font-medium py-3 text-2xl "
                >
                  Go back
                </button>
                <button
                  onClick={() => {
                    setActiveview("Pause");
                  }}
                  className="bg-[#FC7777]  text-white rounded-lg px-20 font-medium py-3 text-2xl "
                >
                  I want to pause
                </button>
              </div>
            </div>

            {/* want to resign */}
            <div className="bg-[#EDE8FA]   pl-24 pr-16  pt-16 pb-5 rounded-3xl relative max-w-[91rem] w-full  mx-auto">
              <h1 className="text-xl sm:text-2xl custom-2xl:text-6xl text-[#685AAD] font-bold  mb-5  ">
                Resign from Tutoring
              </h1>
              <p className="text-3xl leading-snug text-[#6B5692] mb-20">
                If you’ve decided to step away from tutoring permanently, you
                can choose to resign. Resigning will <br />
                deactivate your account, and you will no longer be matched with
                students. We greatly value the impact <br />
                you’ve made and will always welcome you back should you decide
                to return in the future. We encourage you <br />
                to complete a brief exit form so we can better understand your
                experience and continue improving our <br /> platform.
              </p>

              <div className="absolute bottom-14 right-16 flex gap-6">
                <button
                  onClick={() => {
                    setActiveview("Proceed");
                  }}
                  className="bg-[#8653FF]  text-white rounded-lg px-20 font-medium py-3 text-2xl "
                >
                  Go back
                </button>
                <button
                  onClick={() => {
                    setActiveview("resign");
                  }}
                  className="bg-[#FC7777]  text-white rounded-lg px-20 font-medium py-3 text-2xl "
                >
                  I want to resign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeview === "Pause" && (
        <div className="bg-white absolute top-0 left-0 z-50 min-h-screen w-screen py-[84px] px-[125px]">
          <div className="bg-[#EDE8FA]   px-24 py-20 rounded-3xl relative   w-full mx-auto">
            <h1 className="text-xl sm:text-2xl custom-2xl:text-6xl text-[#685AAD] font-bold  mb-9  pt-1  ">
              Request to Pause Tutoring
            </h1>
            <p className="text-3xl leading-snug text-[#6B5692] mb-28">
              Before you submit your request to pause tutoring, please complete
              the following form. Your input is valuable and will <br />
              help us understand your reasons for taking a break.
            </p>

            {/* ReasonToPause select */}
            <div className="w-full max-w-[35.5rem] mt-11">
              <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
                Reason for Pausing <span className="text-[#FC7777]">*</span>
              </label>

              <div className="relative  select-none mt-6 ">
                <div
                  className="w-full bg-[#B4A5D7] text-white font-normal  text-sm custom-lg:text-xl pr-8 pl-5 py-5 rounded-lg cursor-pointer flex justify-between items-center"
                  onClick={toggleReasonToPauseDropdown}
                >
                  <span className="my-1">
                    {selectedReasonToPauses.length > 0
                      ? `${selectedReasonToPauses}`
                      : "select a reason"}
                  </span>
                  {isReasonToPauseDropdownOpen ? (
                    <ChevronUp size={22} className="text-white " />
                  ) : (
                    <ChevronDown size={22} className="text-white " />
                  )}
                </div>

                {isReasonToPauseDropdownOpen && (
                  <div
                    onMouseLeave={() => {
                      setIsReasonToPauseDropdownOpen(false);
                    }}
                    className="absolute top-full left-0 right-0 px-8 mt-2 bg-[#B4A5D7] text-white rounded-lg overflow-hidden z-10 w-[97%] mx-auto py-3  "
                  >
                    <div
                      id="style-2"
                      className="max-h-[16.4rem] overflow-y-auto  "
                    >
                      {ReasonToPauseOptions.map((ReasonToPause) => (
                        <div
                          key={ReasonToPause.value}
                          className=" py-2 cursor-pointer flex items-center"
                          onClick={() =>
                            handleReasonToPauseClick(ReasonToPause.value)
                          }
                        >
                          <div className=" border-b border-white py-2 flex  gap-4  w-full px-4 max-w-[22rem] truncate">
                            <span className="ml-2 text-xl text-white ">
                              {ReasonToPause.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>


            </div>

            <div className="mt-20 w-full max-w-[54rem]">
            <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
            Specify the length of time you plan to pause (e.g., 1 month, 3 months) <span className="text-[#FC7777]">*</span>
              </label>
              <input type="text"
                className="mt-2 sm:mt-9 px-4 py-6 block w-full rounded-lg text-white bg-[#B4A5D7] text-lg sm:text-xl md:text-xl placeholder:text-white"
                placeholder="Enter here"
              />

            </div>


            <div className="mt-20">
                <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
                Return Date (If you know when you’ll return, provide an expected date)
            
              </label>
            <div className="w-full max-w-[35.5rem] relative mt-9">
                    {/* Input field */}
                    <div
                      className={`w-full bg-[#B4A5D7] text-white text-sm custom-lg:text-xl custom-2xl:text-2xl pl-10 pr-8 py-2 sm:py-6 rounded-lg cursor-pointer flex justify-between items-center ${isOpen && "border-2 border-white"}`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="text-purple-400">
                        {selectedDate
                        // @ts-ignore
                          ? selectedDate.toLocaleDateString()
                          : "Select a date"}
                      </span>
                      <Image src={calendaricon} alt="" className="w-8 h-8" />
                    </div>

                    {/* Calendar dropdown */}
                    {isOpen && (
                        <div className="w-full">

                      <div className="bg-[#B4A5D7] text-white z-50 rounded-xl border-2 border-white p-4 shadow-lg absolute left-1/2 transform -translate-x-1/2   top-[90px]  max-w-[83%]  w-full  px-4 sm:px-10 py-4 sm:py-9">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-11  ">
                          <button
                            onClick={handlePrevMonth}
                            className="text-purple-600"
                          >
                            <ChevronLeft className="w-8 h-8 font-bold" />
                          </button>
                          <h2 className="text-white font-medium text-sm sm:text-xl custom-2xl:text-3xl">
                            {months[currentDate.getMonth()]}{" "}
                            {currentDate.getFullYear()}
                          </h2>
                          <button
                            onClick={handleNextMonth}
                            className="text-purple-600"
                          >
                            <ChevronRight className="w-8 h-8 font-bold " />
                          </button>
                        </div>

                        {/* Days of week */}
                        <div className="grid grid-cols-7 gap-1 mb-2 ">
                          {["S", "M", "T", "W", "T", "F", "S"].map(
                            (day, index) => (
                              <div
                                key={index}
                                className="text-center text-white text-sm sm:text-lg custom-2xl:text-2xl font-medium"
                              >
                                {day}
                              </div>
                            )
                          )}
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-1">
                          {generateDays().map((day, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                if (day.isCurrentMonth) {
                                  handleDateChange(
                                    new Date(
                                      currentDate.getFullYear(),
                                      currentDate.getMonth(),
                                      day.day
                                    )
                                  );
                                }
                              }}
                              className={`
                  p-2 text-center rounded-full text-sm sm:text-lg custom-2xl:text-2xl font-medium
                  ${day.isCurrentMonth ? "text-white " : "text-[#d3c6ef]"}
                  ${
                  //@ts-ignore
                    selectedDate && selectedDate.getDate() === day.day && selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getFullYear() === currentDate.getFullYear()
                      ? ""
                      : ""
                  }
                `}
                            >
                              {day.day}
                            </button>
                          ))}
                        </div>
                      </div>
                        </div>
                    )}
                  </div>
            </div>


            <div className="w-full mt-16">
                  <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
                  Additional Comments
                    <span className="text-[#FC7777]">*</span>
                  </label>
                  <textarea
                    className="mt-2 sm:mt-4 px-4 py-2.5 block w-full rounded-3xl  text-white bg-[#B4A5D7] text-lg sm:text-xl md:text-xl placeholder:text-white"

                    placeholder="Any further explanation or specific details about your pause."
                   
                  />
                </div>
            <div className="w-full mt-16">
                  <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
                  Suggestions for Improvement
                    <span className="text-[#FC7777]">*</span>
                  </label>
                  <textarea
                    className="mt-2 sm:mt-4 px-4 py-2.5 block w-full rounded-3xl  text-white bg-[#B4A5D7] text-lg sm:text-xl md:text-xl placeholder:text-white"
                   
                    placeholder="Share any ideas or feedback on how we can enhance the eTutor4Me experience during your absence."
                   
                  />
                </div>
                <div className=" mt-16 flex gap-6  flex-row-reverse">
                <button
                  onClick={() => {
                    setActiveview("Proceed");
                  }}
                  className="bg-[#8653FF]  text-white rounded-lg px-20 font-medium py-3 text-2xl  order-2"
                >
                  Go back
                </button>
                <button
                  onClick={() => {
                    setActiveview("Proceed");
                  }}
                  className="bg-[#FC7777]  text-white rounded-lg px-20 font-medium py-3 text-2xl "
                >
                  Submit Request
                </button>
              </div>



          </div>
        </div>
      )}
      {activeview === "resign" && (
        <div className="bg-white absolute top-0 left-0 z-50 min-h-screen w-screen py-[84px] px-[125px]">
          <div className="bg-[#EDE8FA]   px-24 py-20 rounded-3xl relative   w-full mx-auto">
            <h1 className="text-xl sm:text-2xl custom-2xl:text-6xl text-[#685AAD] font-bold  mb-9  pt-1  ">
            Request to Resign from Tutoring
            </h1>
            <p className="text-3xl leading-snug text-[#6B5692] mb-28">
            Before you submit your resignation, please complete the following form. Your feedback will help us improve our <br />
             services and support for future tutors.
            </p>

            {/* ReasonToPause select */}
            <div className="w-full max-w-[35.5rem] mt-11">
              <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
              Reason for Resigning<span className="text-[#FC7777]">*</span>
              </label>

              <div className="relative  select-none mt-6 ">
                <div
                  className="w-full bg-[#B4A5D7] text-white font-normal  text-sm custom-lg:text-xl pr-8 pl-5 py-5 rounded-lg cursor-pointer flex justify-between items-center"
                  onClick={toggleReasonToPauseDropdown}
                >
                  <span className="my-1">
                    {selectedReasonToPauses.length > 0
                      ? `${selectedReasonToPauses}`
                      : "select a reason"}
                  </span>
                  {isReasonToPauseDropdownOpen ? (
                    <ChevronUp size={22} className="text-white " />
                  ) : (
                    <ChevronDown size={22} className="text-white " />
                  )}
                </div>

                {isReasonToPauseDropdownOpen && (
                  <div
                    onMouseLeave={() => {
                      setIsReasonToPauseDropdownOpen(false);
                    }}
                    className="absolute top-full left-0 right-0 px-8 mt-2 bg-[#B4A5D7] text-white rounded-lg overflow-hidden z-10 w-[97%] mx-auto py-3  "
                  >
                    <div
                      id="style-2"
                      className="max-h-[16.4rem] overflow-y-auto  "
                    >
                      {ReasonToPauseOptions.map((ReasonToPause) => (
                        <div
                          key={ReasonToPause.value}
                          className=" py-2 cursor-pointer flex items-center"
                          onClick={() =>
                            handleReasonToPauseClick(ReasonToPause.value)
                          }
                        >
                          <div className=" border-b border-white py-2 flex  gap-4  w-full px-4 max-w-[22rem] truncate">
                            <span className="ml-2 text-xl text-white ">
                              {ReasonToPause.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>


            </div>
            

            <div className="mt-20 w-full max-w-[54rem]">
            <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
            Final Date of Availability <span className="text-[#FC7777]">*</span>
              </label>
              <input type="text"
                className="mt-2 sm:mt-9 px-4 py-6 block w-full rounded-lg text-white bg-[#B4A5D7] text-lg sm:text-xl md:text-xl placeholder:text-white"
                placeholder="Enter here"
              />

            </div>


           


            <div className="w-full mt-16">
                  <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
                  Additional Comments
                    <span className="text-[#FC7777]">*</span>
                  </label>
                  <textarea
                    className="mt-2 sm:mt-4 px-4 py-2.5 block w-full rounded-3xl  text-white bg-[#B4A5D7] text-lg sm:text-xl md:text-xl placeholder:text-white"

                    placeholder="Any further explanation or specific details about your pause."
                   
                  />
                </div>
            <div className="w-full mt-16">
                  <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
                  Feedback on Experience
                    <span className="text-[#FC7777]">*</span>
                  </label>
                  <textarea
                    className="mt-2 sm:mt-4 px-4 py-2.5 block w-full rounded-3xl  text-white bg-[#B4A5D7] text-lg sm:text-xl md:text-xl placeholder:text-white"
                   
                    placeholder="Share any ideas or feedback on how we can enhance the eTutor4Me experience during your absence."
                   
                  />
                </div>
            <div className="w-full mt-16">
                  <label className="block text-lg sm:text-xl font-semibold text-[#685AAD]">
                  Additional details 
                    <span className="text-[#FC7777]">*</span>
                  </label>
                  <textarea
                    className="mt-2 sm:mt-4 px-4 py-2.5 block w-full rounded-3xl  text-white bg-[#B4A5D7] text-lg sm:text-xl md:text-xl placeholder:text-white"
                   
                    placeholder="Share any ideas or feedback on how we can enhance the eTutor4Me experience during your absence."
                   
                  />
                </div>
                <div className=" mt-16 flex gap-6  flex-row-reverse">
                <button
                  onClick={() => {
                    setActiveview("Proceed");
                  }}
                  className="bg-[#8653FF]  text-white rounded-lg px-20 font-medium py-3 text-2xl  order-2"
                >
                  Go back
                </button>
                <button
                  onClick={() => {
                    setActiveview("Proceed");
                  }}
                  className="bg-[#FC7777]  text-white rounded-lg px-20 font-medium py-3 text-2xl "
                >
                  Submit Request
                </button>
              </div>



          </div>
        </div>
      )}
    </div>
  );
}

export default PauseOrResign;
