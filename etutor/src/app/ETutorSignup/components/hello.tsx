import React from 'react'

function hello() {
    const [selectedTimeZone, setSelectedTimeZone] = useState("Berlin, GMT +02:200");

    const [selectedDate, setSelectedDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("Berlin, GMT +02:00");
    const [isOpentime, setIsOpentime] = useState(false);
    const [startDateexp, setstartDateexp] = useState("");
     // date picker-----------------------------------
  const handleTimeSelect = (time: any) => {
    // handleBookingInputChange("time", time);
    setSelectedTimeZone(time);
    setSelectedTime(time);
    setIsOpentime(false);
  };

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

  const handleStartDateChange = (date) => {
    setSelectedDate(date);
    setstartDateexp(date);
    setIsOpen(false);
  };

  // -------------------------------------------
  return (
    <div>
      
    </div>
  )
}

export default hello
