"use client";
import React, { useEffect, useState } from "react";
import SingupHeading from "./SingupHeading";
import QuestionBtn from "./QuestionBtn";
import ConfirmBtn from "./ConfirmBtn";
import Image from "next/image";
import dropdown from "../../../../public/assets/icons/downarrow.svg";
import google from "../../../../public/assets/icons/googleicon.svg";
import line from "../../../../public/assets/icons/line.svg";
import countryicon from "../../../../public/assets/icons/countryicon.svg";
import { useRouter } from "next/navigation";
import Page from "../page";
import axios from "axios";
import { signIn } from "next-auth/react";
import Germany from "../../../../public/Flag_of_Germany.svg.webp";
import UnitedKingdom from "../../../../public/Flag_of_the_United_Kingdom_(1-2).svg.webp";
import UnitedStates from "../../../../public/flag-Stars-and-Stripes-July-4-1912.jpg";
import France from "../../../../public/Flag-France.webp";
import Italy from "../../../../public/images.png";
import Ireland from "../../../../public/Irish_Flag__86476.jpg";
import Canada from "../../../../public/Flag-Canada.webp";
import Malta from "../../../../public/Flag-Malta.webp";
import Belize from "../../../../public/Belize.jpg";
import Belgium from "../../../../public/Belgium.webp";
import Switzerland from "../../../../public/Switzerland.png";
import Luxembourg from "../../../../public/Luxembourg.jpeg";
import Monaco from "../../../../public/Monaco.png";
import Haiti from "../../../../public/Haiti.png";
import Austria from "../../../../public/Flag_of_Austria.png";
import Liechtenstein from "../../../../public/liechtenstein.webp";
import Jamaica from "../../../../public/Flag_of_Jamaica.png";
import Barbados from "../../../../public/Flag_of_Barbados.svg";
import SaintLucia from "../../../../public/Saint Lucia.png";
import BurkinaFaso from "../../../../public/Flag-of-Burkina-Faso.webp";
import IvoryCoas from "../../../../public/ivory-coast.webp";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
} from "lucide-react";
import InputHeading from "@/app/ETutorSignup/components/InputHeading";
// import dropdown from "../../../../public/assets/icons/downarrow.svg";
import uparrow from "../../../../public/assets/icons/uparrow.svg";
import calendaricon from "../../../../public/calendaricongray.svg";

const timezones = [
  { label: "Baker Island, GMT -12:00", value: "Baker Island, GMT -12:00" },
  { label: "American Samoa, GMT -11:00", value: "American Samoa, GMT -11:00" },
  { label: "Hawaii, GMT -10:00", value: "Hawaii, GMT -10:00" },
  { label: "Alaska, GMT -09:00", value: "Alaska, GMT -09:00" },
  {
    label: "Pacific Time (US & Canada), GMT -08:00",
    value: "Pacific Time (US & Canada), GMT -08:00",
  },
  {
    label: "Mountain Time (US & Canada), GMT -07:00",
    value: "Mountain Time (US & Canada), GMT -07:00",
  },
  {
    label: "Central Time (US & Canada), GMT -06:00",
    value: "Central Time (US & Canada), GMT -06:00",
  },
  {
    label: "Eastern Time (US & Canada), GMT -05:00",
    value: "Eastern Time (US & Canada), GMT -05:00",
  },
  { label: "Caracas, GMT -04:00", value: "Caracas, GMT -04:00" },
  { label: "Buenos Aires, GMT -03:00", value: "Buenos Aires, GMT -03:00" },
  { label: "South Georgia, GMT -02:00", value: "South Georgia, GMT -02:00" },
  { label: "Cape Verde, GMT -01:00", value: "Cape Verde, GMT -01:00" },
  { label: "London, GMT ±00:00", value: "London, GMT ±00:00" },
  { label: "Berlin, GMT +01:00", value: "Berlin, GMT +01:00" },
  { label: "Cairo, GMT +02:00", value: "Cairo, GMT +02:00" },
  { label: "Moscow, GMT +03:00", value: "Moscow, GMT +03:00" },
  { label: "Dubai, GMT +04:00", value: "Dubai, GMT +04:00" },
  { label: "Islamabad, GMT +05:00", value: "Islamabad, GMT +05:00" },
  {
    label: "India Standard Time, GMT +05:30",
    value: "India Standard Time, GMT +05:30",
  },
  { label: "Nepal, GMT +05:45", value: "Nepal, GMT +05:45" },
  { label: "Dhaka, GMT +06:00", value: "Dhaka, GMT +06:00" },
  { label: "Myanmar, GMT +06:30", value: "Myanmar, GMT +06:30" },
  { label: "Bangkok, GMT +07:00", value: "Bangkok, GMT +07:00" },
  { label: "Beijing, GMT +08:00", value: "Beijing, GMT +08:00" },
  {
    label: "Australia Central Time, GMT +08:45",
    value: "Australia Central Time, GMT +08:45",
  },
  { label: "Tokyo, GMT +09:00", value: "Tokyo, GMT +09:00" },
  {
    label: "Australia Central Time, GMT +09:30",
    value: "Australia Central Time, GMT +09:30",
  },
  { label: "Sydney, GMT +10:00", value: "Sydney, GMT +10:00" },
  {
    label: "Lord Howe Island, GMT +10:30",
    value: "Lord Howe Island, GMT +10:30",
  },
  {
    label: "Solomon Islands, GMT +11:00",
    value: "Solomon Islands, GMT +11:00",
  },
  { label: "Norfolk Island, GMT +11:30", value: "Norfolk Island, GMT +11:30" },
  { label: "Auckland, GMT +12:00", value: "Auckland, GMT +12:00" },
  {
    label: "Chatham Islands, GMT +12:45",
    value: "Chatham Islands, GMT +12:45",
  },
  { label: "Nuku'alofa, GMT +13:00", value: "Nuku'alofa, GMT +13:00" },
  { label: "Kiritimati, GMT +14:00", value: "Kiritimati, GMT +14:00" },
];

const countries = [
  "Bangladesh",
  "Bahrain",
  "United States",
  "United Kingdom",
  "Ireland",
  "Canada",
  "Malta",
  "Belize",
  "France",
  "Canada (especially Quebec)",
  "Belgium",
  "Switzerland",
  "Luxembourg",
  "Monaco",
  "Haiti",
  "Germany",
  "Austria",
  "Switzerland",
  "Belgium",
  "Luxembourg",
  "Liechtenstein",
];

const city = [
  // United States
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "San Francisco",
  "Miami",
  // United Kingdom
  "London",
  "Birmingham",
  "Manchester",
  "Edinburgh",
  "Glasgow",
  // Ireland
  "Dublin",
  "Cork",
  "Galway",
  "Limerick",
  // Canada
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Ottawa",
  // Malta
  "Valletta",
  "Sliema",
  "St. Julian's",
  "Birgu",
  // Belize
  "Belmopan",
  "Belize City",
  "San Ignacio",
  "Orange Walk Town",
  // France
  "Paris",
  "Lyon",
  "Marseille",
  "Nice",
  "Toulouse",
  // Belgium
  "Brussels",
  "Antwerp",
  "Ghent",
  "Bruges",
  // Switzerland
  "Zurich",
  "Geneva",
  "Bern",
  "Basel",
  // Luxembourg
  "Luxembourg City",
  "Esch-sur-Alzette",
  "Differdange",
  "Dudelange",
  // Monaco
  "Monaco City",
  "Monte Carlo",
  // Haiti
  "Port-au-Prince",
  "Cap-Haïtien",
  "Gonaïves",
  "Les Cayes",
  // Germany
  "Berlin",
  "Munich",
  "Hamburg",
  "Frankfurt",
  "Cologne",
  // Austria
  "Vienna",
  "Salzburg",
  "Innsbruck",
  "Graz",
  // Liechtenstein
  "Vaduz",
  "Schaan",
  "Balzers",
  "Triesen",
];

const subjectOptions = [
  { value: "Mathematics", label: "Mathematics" },
  { value: "Algebra", label: "Algebra" },
  { value: "Geometry", label: "Geometry" },
  { value: "Calculus", label: "Calculus" },
  { value: "Trigonometry", label: "Trigonometry" },
  { value: "Statistics", label: "Statistics" },
  { value: "Science", label: "Science" },
  { value: "Biology", label: "Biology" },
  { value: "Chemistry", label: "Chemistry" },
  { value: "Physics", label: "Physics" },
  { value: "Environmental Science", label: "Environmental Science" },
  { value: "Earth Science", label: "Earth Science" },
  { value: "English Language Arts", label: "English Language Arts" },
  { value: "Grammar", label: "Grammar" },
  { value: "Literature", label: "Literature" },
  { value: "Writing", label: "Writing" },
  { value: "Reading Comprehension", label: "Reading Comprehension" },
  { value: "Social Studies", label: "Social Studies" },
  {
    value: "History (World, U.S., Ancient)",
    label: "History (World, U.S., Ancient)",
  },
  { value: "Geography", label: "Geography" },
  { value: "Economics", label: "Economics" },
  { value: "Political Science", label: "Political Science" },
  { value: "Foreign Languages", label: "Foreign Languages" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Chinese (Mandarin)", label: "Chinese (Mandarin)" },
  { value: "Japanese", label: "Japanese" },
  { value: "Arabic", label: "Arabic" },
  { value: "Russian", label: "Russian" },
  {
    value: "Specialized & Advanced Subjects",
    label: "Specialized & Advanced Subjects",
  },
  { value: "Advanced Mathematics", label: "Advanced Mathematics" },
  { value: "Differential Equations", label: "Differential Equations" },
  { value: "Linear Algebra", label: "Linear Algebra" },
  { value: "Discrete Math", label: "Discrete Math" },
  {
    value: "Computer Science & Technology",
    label: "Computer Science & Technology",
  },
  {
    value: "Programming (Python, Java, C++)",
    label: "Programming (Python, Java, C++)",
  },
  { value: "Web Development", label: "Web Development" },
  { value: "Data Science", label: "Data Science" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "AI and Machine Learning", label: "AI and Machine Learning" },
  { value: "Business & Economics", label: "Business & Economics" },
  { value: "Accounting", label: "Accounting" },
  { value: "Marketing", label: "Marketing" },
  { value: "Finance", label: "Finance" },
  { value: "Entrepreneurship", label: "Entrepreneurship" },
  {
    value: "Microeconomics/Macroeconomics",
    label: "Microeconomics/Macroeconomics",
  },
];

interface CountryCode {
  code: string;
  flag: string;
  name: string;
}
const countryCodes: CountryCode[] = [
  { code: "+49", flag: Germany, name: "Germany" },
  { code: "+44", flag: UnitedKingdom, name: "United Kingdom" },
  { code: "+1", flag: UnitedStates, name: "United States" },
  { code: "+33", flag: France, name: "France" },
  { code: "+39", flag: Italy, name: "Italy" },
  { code: "+353", flag: Ireland, name: "Ireland" },
  { code: "+1", flag: Canada, name: "Canada" },
  { code: "+356", flag: Malta, name: "Malta" },
  { code: "+501", flag: Belize, name: "Belize" },
  { code: "+32", flag: Belgium, name: "Belgium" },
  { code: "+41", flag: Switzerland, name: "Switzerland" },
  { code: "+352", flag: Luxembourg, name: "Luxembourg" },
  { code: "+377", flag: Monaco, name: "Monaco" },
  { code: "+509", flag: Haiti, name: "Haiti" },
  { code: "+43", flag: Austria, name: "Austria" },
  { code: "+423", flag: Liechtenstein, name: "Liechtenstein" },
  { code: "+1 876", flag: Jamaica, name: "Jamaica" },
  { code: "+1 246", flag: Barbados, name: "Barbados" },
  { code: "+1 758", flag: SaintLucia, name: "Saint Lucia" },
  { code: "+226", flag: BurkinaFaso, name: "Burkina Faso" },
  { code: "+225", flag: IvoryCoas, name: "Ivory Coast" },
];
interface SingupQuestionsprops {
  questionNo: any;
}
const SingupQuestions = ({ questionNo }: SingupQuestionsprops) => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [QuestionNo, setQuestionNo] = useState(1);
  const [isGradeConfirmed, setIsGradeConfirmed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [text, setText] = useState("");
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    "Berlin, GMT +02:200"
  );
  const [countryInfo, setCountryInfo] = useState("Berlin, GMT +02:200");
  const [firstName, setfirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [date, setdate] = useState("");
  const router = useRouter();
  const [selectedCode, setSelectedCode] = useState("+49");
  const [error, seterror] = useState("");
  const [completephonenumber, setCompletephonenumber] = useState("");
  const [selectedCountryForPhone, setselectedCountryForPhone] = useState(
    countryCodes[0]
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const [streetname, setstreetname] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpentime, setIsOpentime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("Berlin, GMT +02:00");

  const [zipcode, setZipcode] = useState("");
  const [institue, setInstitue] = useState("");
  const [Age, setAge] = useState("");
  const [nameDropdonw, setNameDropdonw] = useState(false);
  const [ChildsFirstName, setchildfirstname] = useState("");
  const [ChildLastName, setChildLastName] = useState("");
  const [selectedcity, setselectedcity] = useState("");
  const [loading, setLoading] = useState("Continue")
  const [Parentcountry, setParentcountry] = useState("")
  const [parentCity, setParentCity] = useState("")
  const [parentStreet, setParentStreet] = useState("")
  const [ParentZipCode, setParentZipCode] = useState("")


  const formData = {
    email,
    password,
    parent: {
      firstName,
      lastName,
      age: Age,
      Institution: institue,
      phoneNumber: completephonenumber,
      levelOfStudy: selectedLevel,
      grade: classLevel,
      subjectChildNeeds: selectedSubjects,
      additionalInformation: text,
      availability: selectedTimeZone + " " + date,

      childInformation: {
        firstName:ChildsFirstName,
        lastName:ChildLastName,
        age:Age,
        country: selectedCountry,
        city:selectedcity,
        institution: institue,
        streetName:streetname,
        zipCode:zipcode,
      },
    },
  };

  console.log(parentCity,Parentcountry,parentStreet,ParentZipCode);
  useEffect(() => {
    questionNo(QuestionNo);
  }, [QuestionNo, questionNo]);

  // select subject functions---------
  const toggleSubjectDropdown = () => {
    setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
    setIsOpen(false);
  };
  const handleSubjectClick = (subject: any) => {
    // Toggle the subject in selectedSubjects array
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const removeSubject = (subject: never) => {
    setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
  };

  useEffect(() => {
    setCompletephonenumber(`(${selectedCountryForPhone.code}) ${phoneNumber}`);
  }, [phoneNumber, selectedCountryForPhone]);

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setdate(date);
    setIsOpen(false);
  };

  // -------------------------------------------

  const handleGoogleSignIn = () => {
    console.log("clicked");
    const referId = localStorage.getItem("referIdPerson");
    // signIn('google', { callbackUrl: '/adminparent' });
    signIn("google", { callbackUrl: `/adminparent?ref=${referId || ""}` });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setLoading("Please Wait...")
    e.preventDefault();
    try {

      const referId = localStorage.getItem("referIdPerson");
      // const response = await axios.post("/api/auth/signup/parent", formData);
      const response = await axios.post("/api/auth/signup/parent", {
        ...formData,
        referId: referId || null, // Include the referId in the request data
      });
      // Redirect to confirmation page on successful signup
      router.push("/ParentSignup/Confirmation");
      console.log("Signup successful:", response.data);
    } catch (error: any) {
      setLoading("Continue")
      let errorMessage =
        "An unexpected error occurred. Please try again later.";

      if (error.response) {
        setLoading("Continue")
        // Handle errors from the server
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage =
            "Error: " +
            error.response.status +
            " - " +
            error.response.statusText;
        }
      } else if (error.request) {
        // Handle network errors (request was made but no response received)
        errorMessage = "Network error. Please check your internet connection.";
      } else {
        setLoading("Continue")
        // Handle other errors
        errorMessage = "Error: " + error.message;
      }

      // Set the error message to state
      seterror(errorMessage);
    }finally{
      setLoading("Continue")
    }
  };

  const timeZones = [
    "Newyork, GMT +01:00",
    "Paris, GMT +02:00",
    "Berlin, GMT +02:00",
    "Berlin, GMT +02:00",
    "London, GMT +01:00",
    "Moscow, GMT +03:00",
  ];

  const countryCode = [
    {
      id: 1,
      code: "49",
      img: countryicon,
    },
    {
      id: 2,
      code: "265",
      img: countryicon,
    },
    {
      id: 3,
      code: "112",
      img: countryicon,
    },
    {
      id: 4,
      code: "212",
      img: countryicon,
    },
  ];

  const toggleCountry = () => {
    setIsOpenCountry(!isOpenCountry);
  };
  const handleSelect = (timezone) => {
    setSelectedTimeZone(timezone);
    setIsOpenCountry(false);
  };
  const handleCountry = (country) => {
    setCountryInfo(country);
    setIsOpenCountry(false);
  };
  const clearText = () => {
    setText("");
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOption = (subject: any) => {
    setSelectedOptions((prev) => {
      if (prev.includes(subject)) {
        return prev.filter((s) => s !== subject); // Deselect if already selected
      }
      return [...prev, subject]; // Select if not selected
    });
  };

  const handleOptionChange = (option: any) => {
    setSelectedLevel(option);
    setClassLevel(""); // Reset class level when changing options
  };
  const handleCountrySelect = (country: any) => {
    setSelectedCode(`+${country.code}`);
    setIsDropdownOpen(false);
  };
  const confirmGrade = () => {
    setIsGradeConfirmed(true); // When the grade is confirmed
  };
  const [selectedGrade, setSelectedGrade] = useState(null);

  const handleGradeClick = (grade) => {
    setSelectedGrade(selectedGrade === grade ? null : grade);
    setClassLevel(selectedGrade === grade ? "" : grade);
  };

  const QuestionBtnWithSelection = ({ btnName, onClick }: any) => (
    <button
      className={` text-2xl text-[#534988] 2xl:text-4xl rounded-full w-full py-5  px-5 mt-4 mb-2 border-[#9184F0] border cursor-pointer text-center lg:text-xl lg:py-2 mb:text-sm mb:p-2 mb:mt-2
        ${
          selectedGrade === btnName
            ? "bg-customBlue text-white"
            : "hover:bg-customBlue hover:text-white bg-[#DDD3F8]"
        }`}
      onClick={() => onClick(btnName)}
    >
      {btnName}
    </button>
  );
  const renderClassLevelOptions = () => {
    switch (selectedLevel) {
      case "middle":
        return (
          <div className="rounded-3xl bg-questionbg p-10 px-16 max-w-[40rem]  custom-2xl:max-w-[57.7rem] w-full lg:p-8 mb:w-full mb:p-6   custom-lg:mt-6  custom-2xl:mr-7">
            <div>
              <SingupHeading heading="What is your child Grade?" />
            </div>
            <div className="flex w-full justify-between gap-4 custom-lg:gap-10  mt-12 px-2">
              <div className="w-full">
                <div>
                  <QuestionBtnWithSelection
                    btnName="5th grade"
                    onClick={handleGradeClick}
                  />
                </div>
                <QuestionBtnWithSelection
                  btnName="6th grade"
                  onClick={handleGradeClick}
                />
                <QuestionBtnWithSelection
                  btnName="7th grade"
                  onClick={handleGradeClick}
                />
              </div>
              <div className="w-full">
                <QuestionBtnWithSelection
                  btnName="8th grade"
                  onClick={handleGradeClick}
                />
                <QuestionBtnWithSelection
                  btnName="9th grade"
                  onClick={handleGradeClick}
                />
              </div>
            </div>
            <ConfirmBtn
              onClick={() => {
                setIsGradeConfirmed(true);
              }}
              btnName="Confirm"
            />
          </div>
        );
      case "high":
        return (
          <div className="rounded-3xl bg-questionbg p-10 px-16 max-w-[40rem]  custom-2xl:max-w-[57.7rem] w-full lg:p-8 mb:w-full mb:p-6   custom-lg:mt-6  custom-2xl:mr-7">
            <div>
              <SingupHeading heading="What is your Grade?" />
            </div>
            <div className="flex w-full justify-between gap-10">
              <div className="w-full">
                <QuestionBtnWithSelection
                  btnName="9th grade"
                  onClick={handleGradeClick}
                />
                <QuestionBtnWithSelection
                  btnName="10th grade"
                  onClick={handleGradeClick}
                />
              </div>
              <div className="w-full">
                <QuestionBtnWithSelection
                  btnName="11th grade"
                  onClick={handleGradeClick}
                />
                <QuestionBtnWithSelection
                  btnName="12th grade"
                  onClick={handleGradeClick}
                />
              </div>
            </div>
            <ConfirmBtn
              onClick={() => {
                setIsGradeConfirmed(true);
              }}
              btnName="Confirm"
            />
          </div>
        );
      case "college":
        return (
          <div className="rounded-3xl bg-questionbg p-10 px-16 max-w-[40rem]  custom-2xl:max-w-[57.7rem] w-full lg:p-8 mb:w-full mb:p-6   custom-lg:mt-6  custom-2xl:mr-7">
            <SingupHeading heading="What is your level of study?" />
            <QuestionBtnWithSelection
              btnName="Freshman year"
              onClick={handleGradeClick}
            />
            <QuestionBtnWithSelection
              btnName="Sophomore year"
              onClick={handleGradeClick}
            />
            <QuestionBtnWithSelection
              btnName="Junior year"
              onClick={handleGradeClick}
            />
            <QuestionBtnWithSelection
              btnName="Senior year"
              onClick={handleGradeClick}
            />
            <ConfirmBtn
              onClick={() => {
                setIsGradeConfirmed(true);
              }}
              btnName="Confirm"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const renderQuestionNo = () => {
    switch (QuestionNo) {
      case 1:
        return (
          <div className="rounded-3xl bg-questionbg p-10 px-16 w-1/2 lg:p-8 mb:w-full mb:p-6">
            <SingupHeading heading="What subjects does your child need help with?" />
            {/* --------------------------------------------subject selection dropdown------------------------- */}

            <div className="w-full  mx-auto mt-6 mb-4">
              <div className="relative  select-none">
                <div
                  className="w-full bg-[#DBCAFF] text-[#a394d6]  text-sm custom-lg:text-xl custom-2xl:text-2xl pr-7 sm:pr-14 pl-10 sm:pl-20 py-2 custom-2xl:py-6 rounded-full cursor-pointer flex justify-between items-center"
                  onClick={toggleSubjectDropdown}
                >
                  <span>
                    {selectedSubjects.length > 0
                      ? `${selectedSubjects.length} selected`
                      : "select subject(s)"}
                  </span>
                  {isSubjectDropdownOpen ? (
                    <ChevronUp size={40} className="text-[#a394d6] " />
                  ) : (
                    <ChevronDown size={40} className="text-[#a394d6] " />
                  )}
                </div>

                {isSubjectDropdownOpen && (
                  <div
                    onMouseLeave={() => {
                      setIsSubjectDropdownOpen(false);
                    }}
                    className="absolute top-full left-0 right-0 px-8 mt-2 bg-[#DBCAFF] rounded-3xl overflow-hidden z-10 w-[92%] mx-auto py-4 custom-2xl:py-7  "
                  >
                    <div
                      id="style-2"
                      className="max-h-[16.4rem] overflow-y-scroll  "
                    >
                      {subjectOptions.map((subject) => (
                        <div
                          key={subject.value}
                          className=" py-2 cursor-pointer flex items-center"
                          onClick={() => handleSubjectClick(subject.value)}
                        >
                          <div className=" border-b-2 border-[#a394d682] py-3 flex  gap-4  w-full px-4 max-w-[20rem]">
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={selectedSubjects.includes(
                                  subject.value
                                )}
                                onChange={() => {}}
                                className="absolute opacity-0 cursor-pointer"
                              />
                              <div
                                className={`h-7 w-7  border-2 border-[#6C5BAA] hover:bg-[#a394d6] hover:border-[#a394d6] rounded-md flex items-center justify-center 
                     ${
                       selectedSubjects.includes(subject.value)
                         ? "bg-[#6c5baa]"
                         : ""
                     }`}
                              >
                                {selectedSubjects.includes(subject.value) && (
                                  <Check className="text-white" />
                                )}
                              </div>
                            </div>
                            <span className="ml-2 text-2xl text-[#6C5BAA] ">
                              {subject.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {selectedSubjects.length > 0 && (
                <div className="flex flex-wrap items-start justify-start gap-2 mt-8   px-6 mx-auto min-h-[3.4rem]">
                  {selectedSubjects.map((subject) => (
                    <span
                      key={subject}
                      className="bg-[#6C5BAA] text-white px-5 py-2 custom-2xl:py-3.5 rounded-full flex items-center  gap-7  justify-between"
                    >
                      {subject}
                      <X
                        className="ml-2 h-4 custom-2xl:h-7 w-4 custom-2xl:w-7 cursor-pointer"
                        onClick={() => removeSubject(subject)}
                      />
                    </span>
                  ))}
                </div>
              )}
              <style jsx>{`
                #style-2::-webkit-scrollbar-track {
                  border-radius: 10px;
                  background-color: #c9bbef;
                }

                #style-2::-webkit-scrollbar {
                  width: 5px;
                  background-color: transparent;
                }

                #style-2::-webkit-scrollbar-thumb {
                  border-radius: 10px;

                  background-color: #8f81c7;
                }
              `}</style>
            </div>
            <ConfirmBtn
              onClick={() => {
                setQuestionNo(QuestionNo + 1);
              }}
              btnName="Confirm"
            />
          </div>
        );
      // persoanl information
      case 2:
        return (
          <div className="  rounded-3xl bg-questionbg p-10 px-16  w-full lg:p-8 mb:w-full mb:p-6 max-w-[80rem]     custom-2xl:mr-0">
            <div>
              <SingupHeading heading="Child's Personal Information" />
            </div>
            <div>
              <div className="  grid grid-cols-1 custom-2xl:grid-cols-3 gap-6  ">
                <div className=" mb:w-full">
                  <InputHeading text="First Name" className="text-[#685AAD]" />
                  <div className="rounded-full bg-purpleBtn px-10 xl:px-6 py-4 w-full lg:px-6 lg:py-4">
                    <input
                      type="text"
                      className="placeholder-[#9085C4] text-2xl xl:text-xl text-darkBlue placeholder:text-2xl placeholder:xl:text-xl lg:text-xs placeholder:lg:text-xs placeholder:mb:text-sm w-full bg-transparent outline-none mb:text-xs "
                      placeholder="First Name"
                      value={ChildsFirstName}
                      onChange={(e) => {
                        setchildfirstname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className=" mb:w-full">
                  <InputHeading text="Last Name" className="text-[#685AAD]" />
                  <div className="rounded-full bg-purpleBtn px-10 xl:px-6 py-4 w-full lg:px-6 lg:py-4">
                    <input
                      type="text"
                      className="placeholder-[#9085C4] text-2xl xl:text-xl text-darkBlue placeholder:text-2xl placeholder:xl:text-xl lg:text-xs placeholder:lg:text-xs placeholder:mb:text-sm w-full bg-transparent outline-none mb:text-xs "
                      placeholder="Last Name"
                      value={ChildLastName}
                      onChange={(e) => {
                        setChildLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col  mb:w-full">
                  <InputHeading text="Country" />

                  <div className="relative flex justify-center items-center">
                    <div
                      className="placeholder-[#9085C4] flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue xl:px-6 xl:text-lg text-2xl mb:text-sm lg:text-xs lg:px-4"
                      onClick={() => setNameDropdonw(!nameDropdonw)}
                    >
                      <button
                        className={`bg-purpleBtn focus:outline-none  truncate placeholder-[#9085C4] ${
                          !selectedCountry
                            ? "text-[#9085C4]"
                            : "text-darkpurple"
                        }`}
                      >
                        {selectedCountry || "Select a Country"}{" "}
                        {/* Display selected country */}
                      </button>
                      {nameDropdonw ? (
                        <Image
                          src={uparrow}
                          alt="dropdown"
                          className="w-3  custom-xl:w-4"
                        />
                      ) : (
                        <Image
                          src={dropdown}
                          alt="uparrow"
                          className="w-3  custom-xl:w-4"
                        />
                      )}
                    </div>

                    {nameDropdonw && (
                      <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-purple px-5 py-3">
                        <div
                          id="style-2"
                          className="py-4 px-4 lg:p-4  max-h-[15rem] overflow-y-auto"
                        >
                          {countries.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-center p-2 text-darkBlue border-b     px-5 py-2 text-2xl border-darkBlue  cursor-pointer mb:text-sm placeholder-darkpurple"
                              onClick={() => {
                                setSelectedCountry(subject); // Update the selected country when clicked
                                setNameDropdonw(false); // Close the dropdown after selecting
                              }}
                            >
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col  mb:w-full">
                  <InputHeading text="State / City" />

                  <div className="relative  flex justify-center items-center">
                    <div
                      className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue xl:px-6  xl:text-lg text-2xl lg:text-xs lg:px-4 mb:text-sm"
                      onClick={toggleDropdown}
                    >
                      <button
                        className={` bg-purpleBtn focus:outline-none text-darkpurple truncate ${
                          !selectedcity ? "text-[#9085C4]" : "text-darkpurple"
                        }`}
                      >
                        {selectedcity || "select a state / city"}
                      </button>
                      {isDropdownOpen ? (
                        <Image
                          src={uparrow}
                          alt="dropdown"
                          className="w-3  custom-xl:w-4"
                        />
                      ) : (
                        <Image
                          src={dropdown}
                          alt="uparrow"
                          className="w-3  custom-xl:w-4"
                        />
                      )}
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-purple px-5 py-3">
                        <div
                          id="style-2"
                          className="py-4 px-4 lg:p-4  max-h-[15rem] overflow-y-auto"
                        >
                          {city.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-center p-2 text-darkBlue border-b     px-5 py-2 text-2xl border-darkBlue  cursor-pointer mb:text-sm placeholder-darkpurple"
                              onClick={() => {
                                setselectedcity(subject);
                                toggleDropdown();
                              }}
                            >
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className=" mb:w-full">
                  <InputHeading
                    text="Street Name "
                    className="text-[#685AAD]"
                  />
                  <div className="rounded-full bg-purpleBtn px-10 xl:px-6 py-4 w-full lg:px-6 lg:py-4">
                    <input
                      type="text"
                      className="placeholder-[#9085C4] text-2xl xl:text-xl text-darkBlue placeholder:text-2xl placeholder:xl:text-xl lg:text-xs placeholder:lg:text-xs placeholder:mb:text-sm w-full bg-transparent outline-none mb:text-xs "
                      placeholder="enter street name"
                      value={streetname}
                      onChange={(e) => {
                        setstreetname(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className=" mb:w-full">
                  <InputHeading text="Zip Code " className="text-[#685AAD]" />
                  <div className="rounded-full bg-purpleBtn px-10 py-4 w-full">
                    <input
                      type="text"
                      className="placeholder-[#9085C4] text-2xl text-darkBlue placeholder:text-2xl xl:placeholder:text-xl lg:placeholder:text-sm placeholder:mb:text-sm lg:text-sm xl:text-xl w-full bg-transparent outline-none mb:text-xs"
                      placeholder="Zip Code"
                      value={zipcode}
                      onChange={(e) => {
                        setZipcode(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className=" mb:w-full">
                  <InputHeading
                    text="Institution "
                    className="text-[#685AAD]"
                  />
                  <div className="rounded-full bg-purpleBtn px-10 py-4 w-full">
                    <input
                      type="text"
                      className="placeholder-[#9085C4] text-2xl text-darkBlue placeholder:text-2xl w-full bg-transparent xl:placeholder:text-xl xl:text-xl placeholder:mb:text-sm  outline-none mb:text-xs lg:placeholder:text-sm lg:text-sm"
                      placeholder="enter institution name "
                      value={institue}
                      onChange={(e) => {
                        setInstitue(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className=" mb:w-full">
                  <InputHeading text="Age" className="text-[#685AAD]" />
                  <div className="rounded-full bg-purpleBtn px-10 py-4 w-full">
                    <input
                      type="text"
                      className="placeholder-[#9085C4] text-2xl text-darkBlue placeholder:text-2xl w-full bg-transparent outline-none xl:placeholder:text-xl xl:text-xl placeholder:mb:text-sm mb:text-xs lg:placeholder:text-sm lg:text-sm"
                      placeholder="enter age"
                      value={Age}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Ensure only numbers and limit the value to a maximum of 100
                        if (
                          /^\d*$/.test(value) &&
                          (value === "" || parseInt(value) <= 100)
                        ) {
                          setAge(value);
                        }
                      }}
                    />
                  </div>
                </div>

                {/*  */}
                <style jsx>{`
                  #style-2::-webkit-scrollbar-track {
                    border-radius: 10px;
                    background-color: #c9bbef;
                  }

                  #style-2::-webkit-scrollbar {
                    width: 5px;
                    background-color: transparent;
                  }

                  #style-2::-webkit-scrollbar-thumb {
                    border-radius: 10px;

                    background-color: #8f81c7;
                  }
                `}</style>

                {/*  */}
              </div>
            </div>
            <div className="w-[30%] ml-auto pt-12">
              <ConfirmBtn
                onClick={() => setQuestionNo(QuestionNo + 1)}
                btnName="Confirm"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className=" rounded-3xl bg-questionbg py-14 px-16 w-full lg:p-8 mb:w-full mb:p-6 max-w-[80rem] -mt-9">
            <div>
              <SingupHeading heading="Additional Information" />
            </div>
            <p className="text-darkBlue text-2xl mb:text-xs mt-4">
              Please provide any important information about yourself that you
              feel your eTutor should know. This could include learning
              preferences, any disabilities, a 504 plan or specific teaching
              strategies that work best for you. Your notes will help us tailor
              your learning experience to better meet your needs.
            </p>
            <div className="relative my-24 mb:my-5">
              <textarea
                className="text-black font-bold  w-full rounded-2xl p-4 border-gray-500 border focus:border-blue-500 focus:outline-none mb:text-xs"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={11}
                placeholder="Type here"
              ></textarea>
              <button
                onClick={clearText}
                className="absolute top-2 right-10 bg-black-500 text-black rounded p-1"
                title="Clear text"
              >
                &times;
              </button>
            </div>
            <div className="w-9/12 m-auto">
              <ConfirmBtn
                onClick={() => setQuestionNo(QuestionNo + 1)}
                btnName="Confirm"
              />
            </div>
          </div>
        );
      // when you are available
      case 4:
        return (
          <div className=" rounded-3xl bg-questionbg py-10 px-12 w-full lg:p-8 mb:w-full mb:p-6 max-w-[36rem] custom-2xl:mt-11 custom-2xl:mr-[19rem]">
            <SingupHeading heading="When are you available?" />

            <div className="w-full  mx-auto relative  mt-14">
              <div className="w-full  mx-auto relative">
                {/* Input field */}
                <div
                  className="w-full bg-[#DBCAFF] text-[#a394d6] text-sm custom-lg:text-xl custom-2xl:text-2xl pl-10 pr-8 py-2 sm:py-3 rounded-full cursor-pointer flex justify-between items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-purple-400">
                    {selectedDate
                      ? selectedDate.toLocaleDateString()
                      : "Select a date"}
                  </span>
                  <Image src={calendaricon} alt="" className="w-6 h-6" />
                </div>

                {/* Calendar dropdown */}
                {isOpen && (
                  <div className="bg-[#e2d5fd] text-[#a394d6] z-50 rounded-3xl p-4 shadow-lg absolute top-[72px] w-full  px-4 sm:px-10 py-4 sm:py-9">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-11  ">
                      <button
                        onClick={handlePrevMonth}
                        className="text-purple-600"
                      >
                        <ChevronLeft className="w-8 h-8 font-bold" />
                      </button>
                      <h2 className="text-[#685AAD] font-medium text-sm sm:text-xl custom-2xl:text-3xl">
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
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                        <div
                          key={index}
                          className="text-center text-[#76639b] text-sm sm:text-lg custom-2xl:text-2xl font-medium"
                        >
                          {day}
                        </div>
                      ))}
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
                  ${day.isCurrentMonth ? "text-[#685aad] " : "text-[#d3c6ef]"}
                  ${
                    selectedDate &&
                    selectedDate.getDate() === day.day &&
                    selectedDate.getMonth() === currentDate.getMonth() &&
                    selectedDate.getFullYear() === currentDate.getFullYear()
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
                )}
              </div>
            </div>

            <div className="w-full  mx-auto mt-6 relative  ">
              <div className="w-full  relative">
                {/* Input field */}
                <div
                  className="relative  w-full bg-[#DBCAFF] text-[#a394d6] text-sm custom-lg:text-xl custom-2xl:text-2xl pl-10 pr-3 py-2 sm:py-2 sm:pr-3 sm:pl-6 rounded-full cursor-pointer flex justify-between items-center"
                  onClick={() => setIsOpentime(!isOpentime)}
                >
                  <span className="text-[#a394d6]">Start time</span>

                  <div className=" h-full w-fit sm:w-full  sm:max-w-[219px] bg-[#685AAD] rounded-full text-xs sm:text-base custom-xl:text-xl flex items-center justify-start px-4 text-white p-1.5 truncate">
                    <span className="px-2 truncate">{selectedTime}</span>

                    {isOpentime && (
                      <div
                        onMouseLeave={() => setIsOpentime(false)}
                        className="bg-[#685AAD] text-white rounded-3xl p-2 shadow-lg absolute top-14 w-full max-w-[200px] z-50 "
                      >
                        <div
                          id="style-2"
                          className="max-h-[11.7rem] overflow-y-auto scrollbar-none  px-4"
                        >
                          {timezones.map((timezone, index) => (
                            <button
                              key={index}
                              onClick={() => handleTimeSelect(timezone.value)}
                              className={`
                                    block w-full text-left px-1 py-2  truncate last:border-b-0 border-b border-white text-xs sm:text-sm 
                                    ${selectedTime === timezone.value ? "" : ""}
                                  `}
                            >
                              {timezone.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Time options dropdown */}
              </div>
            </div>
            
            <div className="pt-16">

            <ConfirmBtn
              onClick={() => setQuestionNo(QuestionNo + 1)}
              btnName="Confirm"
              className="w-full"
              />
              </div>
          </div>
        );
      case 5:
          return (
            <div className="  rounded-3xl bg-questionbg py-12 px-16  w-full max-w-[63rem]     custom-2xl:mr-16 custom-2xl:-mt-7">
              <div>
                <SingupHeading heading="Parent's Personal Information" />
              </div>


              <div className="mt-10">
                <div className="  grid grid-cols-1 custom-2xl:grid-cols-2 gap-6  ">
                  
                 
                  <div className="flex flex-col  mb:w-full">
                    <InputHeading text="Country" />
  
                    <div className="relative flex justify-center items-center">
                      <div
                        className="placeholder-[#9085C4] flex justify-between items-center w-full cursor-pointer px-12 py-5 bg-purpleBtn rounded-full text-darkBlue  xl:text-lg text-2xl mb:text-sm lg:text-xs lg:px-4"
                        onClick={() => setNameDropdonw(!nameDropdonw)}
                      >
                        <button
                          className={`bg-purpleBtn focus:outline-none  truncate placeholder-[#9085C4] ${
                            !Parentcountry
                              ? "text-[#9085C4]"
                              : "text-darkpurple"
                          }`}
                        >
                          {Parentcountry || "Select a Country"}{" "}
                          {/* Display selected country */}
                        </button>
                        {nameDropdonw ? (
                          <Image
                            src={uparrow}
                            alt="dropdown"
                            className="w-3  custom-xl:w-4"
                          />
                        ) : (
                          <Image
                            src={dropdown}
                            alt="uparrow"
                            className="w-3  custom-xl:w-4"
                          />
                        )}
                      </div>
  
                      {nameDropdonw && (
                        <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-purple px-5 py-3">
                          <div
                            id="style-2"
                            className="py-4 px-4 lg:p-4  max-h-[15rem] overflow-y-auto"
                          >
                            {countries.map((subject) => (
                              <div
                                key={subject}
                                className="flex items-center p-2 text-darkBlue border-b     px-5 py-2 text-2xl border-darkBlue  cursor-pointer mb:text-sm placeholder-darkpurple"
                                onClick={() => {
                                  setParentcountry(subject); // Update the selected country when clicked
                                  setNameDropdonw(false); // Close the dropdown after selecting
                                }}
                              >
                                <span>{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>



                  <div className="flex flex-col  mb:w-full">
                    <InputHeading text="State / City" />
  
                    <div className="relative  flex justify-center items-center">
                      <div
                        className="flex justify-between items-center w-full cursor-pointer px-12 py-5 bg-purpleBtn rounded-full text-darkBlue xl:px-6  xl:text-lg text-2xl lg:text-xs lg:px-4 mb:text-sm"
                        onClick={toggleDropdown}
                      >
                        <button
                          className={` bg-purpleBtn focus:outline-none text-darkpurple truncate ${
                            !parentCity ? "text-[#9085C4]" : "text-darkpurple"
                          }`}
                        >
                          {parentCity || "select a state / city"}
                        </button>
                        {isDropdownOpen ? (
                          <Image
                            src={uparrow}
                            alt="dropdown"
                            className="w-3  custom-xl:w-4"
                          />
                        ) : (
                          <Image
                            src={dropdown}
                            alt="uparrow"
                            className="w-3  custom-xl:w-4"
                          />
                        )}
                      </div>
  
                      {isDropdownOpen && (
                        <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-purple px-5 py-3">
                          <div
                            id="style-2"
                            className="py-4 px-4 lg:p-4  max-h-[15rem] overflow-y-auto"
                          >
                            {city.map((subject) => (
                              <div
                                key={subject}
                                className="flex items-center p-2 text-darkBlue border-b     px-5 py-2 text-2xl border-darkBlue  cursor-pointer mb:text-sm placeholder-darkpurple"
                                onClick={() => {
                                  setParentCity(subject);
                                  toggleDropdown();
                                }}
                              >
                                <span>{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
  
                  <div className=" mb:w-full">
                    <InputHeading
                      text="Street Name "
                      className="text-[#685AAD]"
                    />
                    <div className="rounded-full bg-purpleBtn px-10 xl:px-6 py-5 w-full lg:px-6 lg:py-4">
                      <input
                        type="text"
                        className="placeholder-[#9085C4] text-2xl xl:text-xl text-darkBlue placeholder:text-2xl placeholder:xl:text-xl lg:text-xs placeholder:lg:text-xs placeholder:mb:text-sm w-full bg-transparent outline-none mb:text-xs "
                        placeholder="enter street name"
                        value={parentStreet}
                        onChange={(e) => {
                          setParentStreet(e.target.value);
                        }}
                      />
                    </div>
                  </div>
  
                  <div className=" mb:w-full">
                    <InputHeading text="Zip Code " className="text-[#685AAD]" />
                    <div className="rounded-full bg-purpleBtn px-10 py-5 w-full">
                      <input
                        type="text"
                        className="placeholder-[#9085C4] text-2xl text-darkBlue placeholder:text-2xl xl:placeholder:text-xl lg:placeholder:text-sm placeholder:mb:text-sm lg:text-sm xl:text-xl w-full bg-transparent outline-none mb:text-xs"
                        placeholder="Zip Code"
                        value={ParentZipCode}
                        onChange={(e) => {
                          setParentZipCode(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                 
                  
  
                  {/*  */}
                  <style jsx>{`
                    #style-2::-webkit-scrollbar-track {
                      border-radius: 10px;
                      background-color: #c9bbef;
                    }
  
                    #style-2::-webkit-scrollbar {
                      width: 5px;
                      background-color: transparent;
                    }
  
                    #style-2::-webkit-scrollbar-thumb {
                      border-radius: 10px;
  
                      background-color: #8f81c7;
                    }
                  `}</style>
  
                  {/*  */}
                </div>
              </div>
              <div className="  py-16">
                <ConfirmBtn
                  onClick={() => setQuestionNo(QuestionNo + 1)}
                  btnName="Confirm"
                />
              </div>
            </div>
          );
      // signup form
      case 6:
        return (
          <div className="rounded-3xl md:rounded-[4rem] bg-questionbg px-6 sm:px-11 py-9 max-w-[537px]  w-full custom-2xl:mr-[72px] -mt-4 ">
            <h1 className="text-3xl 2xl:text-7xl font-extrabold text-darkBlue  lg:text-2xl lg:py-3 mb:text-xl mb:py-2 py-0">
              Sign Up
            </h1>
            <p className="text-lightpurple text-3xl mt-3.5">As a Parent</p>

            <div
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center  p-3.5 text-2xl gap-3 text-darkBlue cursor-pointer rounded-full bg-transparent border-darkBlue border mt-11 mb:py-2 mb:text-sm"
            >
              <Image src={google} alt="google" />
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
              <div className="flex w-full gap-5 mb:gap-3 mt-0.5">
                <div className="rounded-full bg-purpleBtn px-6 py-[17px] flex items-center w-full ">
                  <input
                    type="text"
                    className="placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs text-xl text-darkBlue"
                    placeholder="First Name"
                    onChange={(e) => setfirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="rounded-full bg-purpleBtn px-6 py-[17px] w-full">
                  <input
                    type="text"
                    className="placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs text-xl text-darkBlue"
                    placeholder="Last Name"
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="rounded-full mt-10 bg-purpleBtn px-6 py-[17px] ">
                <input
                  type="email"
                  className="placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs text-xl text-darkBlue"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
              <div className="rounded-full mt-5 bg-purpleBtn px-6 py-[17px]">
                <input
                  type="password"
                  className="placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs text-xl text-darkBlue"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

           

              <div className=" text-darkBlue bg-[#DBCAFF] rounded-full mt-5">
                <div className="relative">
                  <div className="bg-purple-100 rounded-full py-[17px] px-10 flex items-center ">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="flex items-center  pr-3 min-w-fit"
                    >
                      <div className="flex items-center gap-4  ">
                        <span className="">
                          <Image
                            src={selectedCountryForPhone.flag}
                            alt=""
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="text-[#685AAD] text-xl">
                          {selectedCountryForPhone.code}
                        </span>
                      </div>

                      <ChevronDown className="ml-5 w-5 h-5 text-[#685aad5e] font-bold" />
                    </button>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-transparent ml-6 w-full outline-none text-darkBlue bg-[#DBCAFF] placeholder-darkBlue font-medium truncate"
                      placeholder="Phone number"
                    />
                  </div>

                  {showDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-44 bg-[#DBCAFF] rounded-3xl shadow-lg py-2  max-h-[12.5rem] px-3 overflow-y-auto scrollbar-none">
                      {countryCodes.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setselectedCountryForPhone(country);
                            setShowDropdown(false);
                          }}
                          className="flex items-center space-x-3 w-full p-3 hover:bg-purple-50 transition-colors border-b border-[#0000004b] last:border-b-0  "
                        >
                          <span className="rounded-full relative  flex items-center justify-center">
                            <Image
                              src={country.flag}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />
                          </span>
                          <span className="text-[#685AAD]">{country.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div></div>
              {error && <p className="text-red-600 mt-2 pl-4">{error}</p>}

              <div>
                <button
                  type="submit"
                  className="bg-customBlue text-2xl text-white rounded-full w-full py-[17px] font-bold  px-5 mt-14 border-darkBlue border cursor-pointer text-center lg:text-xl lg:py-2 mb:text-sm mb:p-2 mb:mt-2 "
                >
                  {loading}
                </button>
              </div>
            </form>

            <p className="text-darkBlue text-base mt-5">
              By clicking “Continue with Google / Email“ you agree to our User{" "}
            </p>
            <span className="text-btnbg underline text-base">
              Terms of Service and Privacy Policy
            </span>
          </div>
        );
    }
  };

  return (
    <>
      {/* Show this section only if no level has been selected */}
      {!selectedLevel && (
        <div className="rounded-3xl bg-questionbg p-10 px-16 max-w-[40rem] custom-2xl:max-w-[53.4rem] w-full lg:p-8 mb:w-full mb:p-6    custom-lg:mt-3 mb-12 custom-2xl:mr-6 ">
          <h1 className="text-3xl 2xl:text-5xl font-extrabold text-darkBlue py-7 lg:text-2xl lg:py-3 mb:text-xl mb:py-2">
            What grade level is your child in?
          </h1>

          <div className="custom-lg:px-5 mt-14 flex flex-col gap-2 pb-10">
            <div onClick={() => handleOptionChange("middle")}>
              <QuestionBtn btnName="Middle school" />
            </div>
            <div onClick={() => handleOptionChange("high")}>
              <QuestionBtn btnName="High school" />
            </div>
            <div onClick={() => handleOptionChange("college")}>
              <QuestionBtn btnName="College / Graduate school" />
            </div>
          </div>
          {/* <div onClick={() => handleOptionChange('adult')}>
            <QuestionBtn btnName='Adult / professional' />
          </div> */}
        </div>
      )}
      {selectedLevel && !isGradeConfirmed && renderClassLevelOptions()}
      {isGradeConfirmed && renderQuestionNo()} {/* Render next question */}
    </>
  );
};

export default SingupQuestions;
