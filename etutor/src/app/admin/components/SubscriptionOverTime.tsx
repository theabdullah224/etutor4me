
    import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const names = ["Total", "Daily", "Weekly", "Monthly", "Yearly"];

function SubscriptionOverTime() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentName, setCurrentName] = useState(names[0]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [storedDates, setStoredDates] = useState([currentDate]); // To store all visited dates
  const [startDate, setStartDate] = useState(new Date("2023-02-01")); // Initial start date
  //   const [currentDateMonth, setCurrentDateMo] = useState(new Date()); // Track the current date
  const [storedMonths, setStoredMonths] = useState([
    months[new Date().getMonth()],
  ]);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Track the current year
  const [storedYears, setStoredYears] = useState([new Date().getFullYear()]);

  //   date for year-----------------------------
  const handlePreviousYear = () => {
    const newYear = currentYear - 1; // Go to the previous year
    updateYear(newYear);
  };

  const handleNextYear = () => {
    const newYear = currentYear + 1; // Go to the next year
    updateYear(newYear);
  };

  const updateYear = (newYear: any) => {
    setCurrentYear(newYear);
    setStoredYears((prevYears) => {
      if (!prevYears.includes(newYear)) {
        return [...prevYears, newYear];
      }
      return prevYears;
    });
  };

  //   date by month----------------
  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1); // Go to the previous month
    updateMonth(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1); // Go to the next month
    updateMonth(newDate);
  };

  const updateMonth = (newDate: any) => {
    setCurrentDate(newDate);
    const newMonthName = months[newDate.getMonth()];
    setStoredMonths((prevMonths) => {
      if (!prevMonths.includes(newMonthName)) {
        return [...prevMonths, newMonthName];
      }
      return prevMonths;
    });
  };

  //   date by week--------------
  // Format a date as "dd/mm/yyyy"
  const formatDateWeek = (date: any) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Get the start and end of the week
  const getFormattedWeek = (start: any) => {
    const end = new Date(start);
    end.setDate(start.getDate() + 6); // 6 days after the start date
    return `${formatDateWeek(start)} - ${formatDateWeek(end)}`;
  };
  const [storedWeeks, setStoredWeeks] = useState([
    getFormattedWeek(new Date("2023-02-01")),
  ]);
  const handlePreviousWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7); // Move back by 7 days
    updateWeek(newStartDate);
  };

  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7); // Move forward by 7 days
    updateWeek(newStartDate);
  };

  const updateWeek = (newStartDate: any) => {
    setStartDate(newStartDate);
    const formattedWeek = getFormattedWeek(newStartDate);
    setStoredWeeks((prevWeeks) => {
      // Avoid duplicates in the stored weeks array
      if (!prevWeeks.includes(formattedWeek)) {
        return [...prevWeeks, formattedWeek];
      }
      return prevWeeks;
    });
  };

  // -----------------------------
  //   date by day---------------------
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const formatDate = (date: any) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handlePreviousdate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1); // Go to the previous day
    updateDate(newDate);
  };

  const handleNextdate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1); // Go to the next day
    updateDate(newDate);
  };

  const updateDate = (newDate: any) => {
    setCurrentDate(newDate);
    setStoredDates((prevDates) => {
      // Avoid duplicates in the stored dates array
      if (
        !prevDates.some(
          (date) => date.toDateString() === newDate.toDateString()
        )
      ) {
        return [...prevDates, newDate];
      }
      return prevDates;
    });
  };
  // =----------------------

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === names.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Update `currentName` whenever `currentIndex` changes
  useEffect(() => {
    setCurrentName(names[currentIndex]);
  }, [currentIndex]);
  return (
    <div className="h-full hover:cursor-pointer px-3 custom-xl:px-6 py-3 custom-xl:py-6  bg-[#ede8fa]  rounded-md sm:rounded-xl  custom-lg:rounded-3xl">

      <div className="flex justify-between h-full ">
        <div className="flex flex-col justify-between  h-full px-3 py-1.5">
          <h1 className="text-xl sm:text-3xl custom-lg:text-[35px] leading-10 text-[#8276bc] font-medium">
          Subscriptions over time 
          </h1>
          <h1 className="text-3xl md:text-4xl custom-lg:text-[44px]  mb-2 leading-none text-[#685AAD] font-medium py-2 custom-lg:py-6">
          15 subscription
          </h1>
          <h1 className="text-base sm:text-lg custom-lg:text-2xl font-bold leading-none text-[#a398cf] flex items-center  gap-3">
            {" "}
            <ChevronDown className="font-extrabold  " /> 12.4%
          </h1>
        </div>

        <div className=" flex flex-col justify-between   pt-3">
          <div className="flex items-center  flex-row-reverse text-[#7669b5]">
            <div className=" flex items-center justify-center gap-1 sm:gap-2 custom-lg:gap-3">
              <button onClick={handlePrevious}>
                <ChevronLeft />
              </button>

              <span className="font-bold text-base sm:text-lg custom-lg:text-2xl  w-fit custom-lg:w-[5.6rem] text-center">
                {currentName}
              </span>

              <button onClick={handleNext}>
                <ChevronRight />
              </button>
            </div>
          </div>

          {currentName === "Daily" && (
            <div className="flex items-center  flex-row-reverse text-[#7669b5]">
              <div className=" flex items-center justify-center gap-1 sm:gap-2 custom-lg:gap-3">
                <button onClick={handlePreviousdate}>
                  <ChevronLeft />
                </button>

                <span className="font-medium text-xl  custom-lg:w-[11.4rem] text-center   ">
                  {" "}
                  {days[currentDate.getDay()]} - {formatDate(currentDate)}
                </span>

                <button onClick={handleNextdate}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}

          {currentName === "Weekly" && (
            <div className="flex items-center  flex-row-reverse text-[#7669b5]">
              <div className=" flex items-center justify-center gap-1 sm:gap-2 custom-lg:gap-3">
                <button onClick={handlePreviousWeek}>
                  <ChevronLeft />
                </button>

                <span className="font-medium text-lg  custom-lg:w-[14.4rem] text-center  ">
                  {" "}
                  {getFormattedWeek(startDate)}
                </span>

                <button onClick={handleNextWeek}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}

          {currentName === "Monthly" && (
            <div className="flex items-center  flex-row-reverse text-[#7669b5]">
              <div className=" flex items-center justify-center gap-1 sm:gap-2 custom-lg:gap-3">
                <button onClick={handlePreviousMonth}>
                  <ChevronLeft />
                </button>

                <span className="font-bold text-xl  custom-lg:w-[6.3rem] text-center  ">
                  {" "}
                  {months[currentDate.getMonth()]}
                </span>

                <button onClick={handleNextMonth}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}
          {currentName === "Yearly" && (
            <div className="flex items-center  flex-row-reverse text-[#7669b5]">
              <div className=" flex items-center justify-center gap-1 sm:gap-2 custom-lg:gap-3">
                <button onClick={handlePreviousYear}>
                  <ChevronLeft />
                </button>

                <span className="font-bold text-xl  custom-lg:w-[6.3rem] text-center  ">
                  {" "}
                  {currentYear}
                </span>

                <button onClick={handleNextYear}>
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
   
  );
}

export default SubscriptionOverTime;

