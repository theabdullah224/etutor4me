"use client";
import React, { useState } from "react";
import calendaricon from "../../../public/calendaricongray.svg";
import StepperControl from "./components/StepperControl";
import Stepper from "./components/Stepper";
import SignUpNavbar from "@/components/SignUpNavbar";
import ContactInformation from "../TutorSignup/components/ContactInformation";
import Education from "./components/Steps/Education";
import Experience from "./components/Steps/Experience";
import Review from "./components/Steps/Review";
import FormSteps from "./components/FormSteps";
import "./components/ScrollBar.css";
import ThankYou from "./components/Steps/ThankYou";
import FormHeading from "../ETutorSignup/components/FormHeading";
import InputHeading from "../ETutorSignup/components/InputHeading";
import Image from "next/image";
import dropdown from "../../../public/assets/icons/downarrow.svg";
import uparrow from "../../../public/assets/icons/uparrow.svg";
import ContinueBtn from "@/app/ETutorSignup/components/ContinueBtn";
import ConfirmBtn from "@/app/ParentSignup/Components/ConfirmBtn";
import RadioInput from "./components/RadioInput";

import CheckboxInput from "./components/CheckboxInput";
import Dropdown from "@/components/Dropdonw";
// import DaysHeading from "@/components/DaysHeading";
import tick from "../../../../../../public/assets/icons/tickicon.svg";
import DaysOfWeek from "./components/DaysOfWeek";
import DayRow from "./components/DayRow";

import ReviewFormHead from "./components/ReviewFormHead";
import ReviewContactInfo from "./components/ReviewComponents/ReviewContactInfo";
import ReviewEducation from "./components/ReviewComponents/ReviewEducation";
import ReviewExperience from "./components/ReviewComponents/ReviewExperience";
import EnteredInfo from "./components/ReviewComponents/EnteredInfo";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
  
} from "lucide-react";

const ExperienceQuestions = ({ question, className, span }: any) => {
  return (
    <div>
      <h2
        className={`${className} text-[#534988] py-5 text-[26px] font-medium `}
      >
      
        {question} <span className="!font-light">{span}</span>
      </h2>
    </div>
  );
};
const graduationYears: string[] = [];
for (let year = 1950; year <= 2026; year++) {
  if (!graduationYears.includes(String(year))) {
    graduationYears.push(String(year));
  }
}

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
const languageoptions = [
  { value: "English", label: "English" },
  { value: "Mandarin Chinese", label: "Mandarin Chinese" },
  { value: "Spanish", label: "Spanish" },
  { value: "Hindi", label: "Hindi" },
  { value: "Arabic", label: "Arabic" },
  { value: "French", label: "French" },
  { value: "Bengali", label: "Bengali" },
  { value: "Russian", label: "Russian" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Urdu", label: "Urdu" },
  { value: "Indonesian", label: "Indonesian" },
  { value: "German", label: "German" },
  { value: "Japanese", label: "Japanese" },
  { value: "Turkish", label: "Turkish" },
  { value: "Korean", label: "Korean" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Italian", label: "Italian" },
  { value: "Thai", label: "Thai" },
  { value: "Farsi (Persian)", label: "Farsi (Persian)" },
  { value: "Polish", label: "Polish" },
];
const subjects = [
  "Mathematics",
  "Algebra",
  "Geometry",
  "Calculus",
  "Trigonometry",
  "Statistics",
  "Science",
  "Biology",
  "Chemistry",
  "Physics",
  "Environmental Science",
  "Earth Science",
  "English Language Arts",
  "Grammar",
  "Literature",
  "Writing",
  "Reading Comprehension",
  "Social Studies",
  "History (World, U.S., Ancient)",
  "Geography",
  "Economics",
  "Political Science",
  "Foreign Languages",
  "Spanish",
  "French",
  "German",
  "Chinese (Mandarin)",
  "Japanese",
  "Arabic",
  "Russian",
  "Specialized & Advanced Subjects",
  "Advanced Mathematics",
  "Differential Equations",
  "Linear Algebra",
  "Discrete Math",
  "Computer Science & Technology",
  "Programming (Python, Java, C++)",
  "Web Development",
  "Data Science",
  "Cybersecurity",
  "AI and Machine Learning",
  "Business & Economics",
  "Accounting",
  "Marketing",
  "Finance",
  "Entrepreneurship",
  "Microeconomics/Macroeconomics",
];
const degrees = [
  // Undergraduate Degrees
  "Associate Degree (AA, AS)",
  "Bachelor's Degree (BA, BS, BFA, BBA)",
  // Graduate Degrees
  "Master's Degree (MA, MS, MBA, MEd, MFA)",
  "Doctoral Degree (PhD, EdD, DBA)",
  // Professional Degrees
  "Juris Doctor (JD) - Law",
  "Doctor of Medicine (MD)",
  "Doctor of Dental Surgery (DDS)",
  "Doctor of Pharmacy (PharmD)",
  "Master of Architecture (MArch)",
  // Other Degrees
  "Certificate Programs",
  "Diploma Programs",
  "Postgraduate Diploma",
  "Higher National Diploma (HND)",
];
const Page = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [country, setCountry] = useState(""); // State for selected country
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Zip, setZip] = useState("");
  const [email, setemail] = useState("");
  const [hasTutoringExperience, setHasTutoringExperience] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedLevelsexp, setselectedLevelsexp] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedInstructionsexp, setselectedInstructionsexp] = useState<
    string[]
  >([]);
  const [selectedHoursexp, setselectedHoursexp] = useState("");
  const [availabilityexp, setavailabilityexp] = useState<
    Record<string, string[]>
  >({});
  const [classroomteachingexp, setclassroomteachingexp] = useState("");
  const [isVisibleedu, setisVisibleedu] = useState(false);
  const [majoredu, setmajoredu] = useState(false); // Dropdown toggle state
  const [selectedmajoredu, setSelectedmajoredu] = useState(""); // State for selected majoredu
  const [isDropdownOpenedu, setisDropdownOpenedu] = useState(false); // Dropdown toggle state
  const [selectedYearedu, setselectedYearedu] = useState(""); // State for selected year
  const [degree, setDegree] = useState(false); // Dropdown toggle state
  const [selectedDegree, setSelectedDegree] = useState(""); // State for selected degree

  const [EditActive, setEditActive] = useState(false);
  const [password, setpassword] = useState("");
  const [school, setschool] = useState("");
  const [universityCollage, setUniversityCollage] = useState("");
  const [phone, setphone] = useState("");
  // const [language, setlanguage] = useState<string[]>([]);
  const [agreeterms, setagreeterms] = useState(false);
  // const [tutoredIN, setTutoredIN] = useState<string[]>([]);
  const [error, seterror] = useState("");
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [tutoredIN, setTutoredIN] = useState([]);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [language, setlanguage] = useState([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    "Berlin, GMT +02:200"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("Berlin, GMT +02:00");
  const [isOpentime, setIsOpentime] = useState(false);
  const [startDateexp, setstartDateexp] = useState("");
  const [loading, setLoading] = useState("Submit Application")
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

  const handlePrevMonth = (e: any) => {
    e.preventDefault();
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = (e: any) => {
    e.preventDefault();
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleStartTutoringDateChange = (date: any) => {
    setSelectedDate(date);
    // setdate(date);
    setIsOpen(false);
  };

  // -------------------------------------------

  // select language functions---------
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  const handleLanguageClick = (subject: any) => {
    // Toggle the subject in language array
    if (language.includes(subject)) {
      setlanguage(language.filter((item) => item !== subject));
    } else {
      setlanguage([...language, subject]);
    }
  };

  const removeLanguage = (subject: never) => {
    setlanguage(language.filter((item) => item !== subject));
  };

  // select subject functions---------
  const toggleSubjectDropdown = () => {
    setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
  };
  const handleSubjectClick = (subject: any) => {
    // Toggle the subject in tutoredIN array
    if (tutoredIN.includes(subject)) {
      setTutoredIN(tutoredIN.filter((item) => item !== subject));
    } else {
      setTutoredIN([...tutoredIN, subject]);
    }
  };

  const removeSubject = (subject: never) => {
    setTutoredIN(tutoredIN.filter((item) => item !== subject));
  };

  const formdata = {
    email: email,
    password: password,
    contactInformation: {
      country: country,
      firstName: firstname,
      lastName: lastname,
      phone: phone,
      zipCode: Zip,
      email: email,
    },
    education: {
      college: universityCollage,
      degree: selectedDegree,
      major: selectedmajoredu,
      graduation: selectedYearedu,
      school: school,
    },
    experience: {
      hasExperience: hasTutoringExperience,
      tutoringLevel: selectedLevelsexp,
      subjectsTutored: tutoredIN,
      languages: language,
      instructionTypes: selectedInstructionsexp,
      availableHours: selectedHoursexp,
      startDate: selectedDate,
      generalAvailability: availabilityexp,
      hasTeachingExperience: classroomteachingexp,
      is18OrAbove: agreeterms,
    },
    isApproved: true,
  };

  
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading("Please Wait...")
    try {
      const response = await axios.post("/api/auth/signup/teacher", formdata);
      alert(
        "Signup successful. A verification email has been sent to your email."
      );


      router.push("/signin/tutorsignin");
    } catch (error: any) {
      setLoading("Submit Application")
      // Check if error is an AxiosError and handle server responses
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error(
            "Server error:",
            error.response.data.message || error.response.statusText
          );
          seterror(error.response.data.message);
        } else if (error.request) {
          // Request was made but no response was received
          seterror(
            "No response from server. Please check your network connection."
          );
        } else {
          // Something happened while setting up the request
          seterror("Error during request setup:", error.message);
        }
      } else {
        // Handle non-Axios errors (e.g., unexpected errors)
        seterror("An unexpected error occurred:", error.message);
      }
    }
  };

  const handleDegreeSelect = (subject: any) => {
    setSelectedDegree(subject); // Set selected degree
    setDegree(false); // Close dropdown after selection
  };

  const toggleDropdownedu = (e: any) => {
    e.preventDefault();
    setDegree(!degree); // Toggle dropdown
  };

  const toggleDropdownedumajoredu = (e: any) => {
    e.preventDefault(); // Prevent default behavior
    setmajoredu(!majoredu); // Toggle dropdown
  };

  const handlemajoreduSelect = (subject: any) => {
    setSelectedmajoredu(subject); // Set the selected majoredu
    setmajoredu(false); // Close the dropdown
  };

  const toggleDropdownedugraduationyear = (e: any) => {
    e.preventDefault(); // Prevent default behavior (if needed)
    setisDropdownOpenedu(!isDropdownOpenedu); // Toggle the dropdown
  };

  const handleYearSelect = (year: any) => {
    setselectedYearedu(year); // Set the selected year
    setisDropdownOpenedu(false); // Close the dropdown
  };

  const countries = [
    "USA",
    // English-Speaking Countries (Americas & Europe)
    "United States",
    "United Kingdom",
    "Ireland",
    "Canada",
    "Malta",
    "Belize",
    // French-Speaking Countries (Americas & Europe)
    "France",
    "Canada (especially Quebec)",
    "Belgium",
    "Switzerland",
    "Luxembourg",
    "Monaco",
    "Haiti",
    // German-Speaking Countries (Europe)
    "Germany",
    "Austria",
    "Switzerland",
    "Belgium",
    "Luxembourg",
    "Liechtenstein",
  ];

  const handleCountrySelect = (selectedCountry: any) => {
    setCountry(selectedCountry); // Update the selected country
    setIsDropdownOpen(false); // Close dropdown after selection
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown open/close
  };

  const handleTimeSlotChange = (day: string, timeSlot: string) => {
    setavailabilityexp((prev) => {
      const currentDaySlots = prev[day] || [];
      if (currentDaySlots.includes(timeSlot)) {
        // If the time slot is already selected, remove it
        return {
          ...prev,
          [day]: currentDaySlots.filter((slot) => slot !== timeSlot),
        };
      } else {
        // Otherwise, add the time slot
        return { ...prev, [day]: [...currentDaySlots, timeSlot] };
      }
    });
  };

  // Function to handle the change of the radio input
  const handleHoursChange = (value: string) => {
    setselectedHoursexp(value); // Update the state with the selected value
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstartDateexp(e.target.value); // Update the state with the selected date
  };

  const levels = [
    "Pre-Kindergarten",
    "Kindergarten-2nd grade",
    "3rd-5th Grade",
    "Middle School",
    "High School",
    "College",
    "Graduate",
    "Adult",
  ];

  const handleCheckboxChange = (level: string) => {
    setselectedLevelsexp(
      (prevSelected) =>
        prevSelected.includes(level)
          ? prevSelected.filter((item) => item !== level) // Remove if already selected
          : [...prevSelected, level] // Add if not selected
    );
  };

  const languages = ["English", "Spanish", "French", "German"];

  const timeSlots = ["Morning", "Afternoon", "Evening"];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleLanguageSelect = (selectedLanguages: string[]) => {
    setlanguage(selectedLanguages);
  };

  const handleSubjectSelect = (selectedSubjects: string[]) => {
    setTutoredIN(selectedSubjects);
  };

  const handleRadioChange = (value: any) => {
    setHasTutoringExperience(value);
  };

  const handleCheckboxChangenumberofstudents = (label: string) => {
    setselectedInstructionsexp(
      (prev) =>
        prev.includes(label)
          ? prev.filter((item) => item !== label) // Remove if already selected
          : [...prev, label] // Add if not selected
    );
  };

  const handleEditToggle = () => {
    setEditActive(!EditActive);
  };
  const NextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const steps = [
    "Contact Information",
    "Education",
    "Experience",
    "Review & Submit",
  ];

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return (
          <>
            {/* <ContactInformation NextStep={NextStep} />; */}
            <div className="bg-questionbg px-4 py-6 sm:px-8 sm:py-8 md:px-12  md:py-10 custom-lg:px-16 custom-lg:py-12 custom-xl:px-[69px] custom-xl:py-12 rounded-[30px]">
              <FormHeading
                className=""
                heading="Contact Information"
                paragraph="Thank you for your interest in becoming an etutor! Complete this application and take the next step  toward empowering learners."
              />
              <form className="pt-12  flex flex-col gap-10" action="">
                <div>
                  <InputHeading text="Select a Country" />
                  <div className="relative  custom-2xl:max-w-[36rem] flex justify-center items-center">
                    <div
                      className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm"
                      onClick={toggleDropdown}
                    >
                      <button
                        className={`bg-purpleBtn focus:outline-none  ${
                          country ? "text-darkpurple" : "text-[#AD9DDE]"
                        }`}
                      >
                        {country ? country : "Select a country"}{" "}
                        {/* Show selected country */}
                      </button>
                      {isDropdownOpen ? (
                        <Image src={uparrow} alt="dropdown" />
                      ) : (
                        <Image src={dropdown} alt="uparrow" />
                      )}
                    </div>

                    {isDropdownOpen && (
                      <div
                        onMouseLeave={() => {
                          setIsDropdownOpen(false);
                        }}
                        className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-[#DBCAFF] py-4 px-10 "
                      >
                        <div
                          id="style-2"
                          className=" max-h-[20rem] overflow-y-auto"
                        >
                          {countries.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-center p-2 text-darkBlue border-b px-5 py-2 text-2xl border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple max-w-[80%] "
                              onClick={() => handleCountrySelect(subject)} // Handle country selection
                            >
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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

                <div className="w-full grid grid-cols-1 custom-2xl:grid-cols-3 gap-6  ">
                  <div className="">
                    <InputHeading text="First Name" />
                    <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                      <input
                        type="text"
                        className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <InputHeading text="Last Name" />
                    <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                      <input
                        type="text"
                        className="placeholder-darkpurple  text-2xl text-[#685AAD] placeholder:text-[#AD9DDE]  w-full bg-transparent outline-none mb:text-xs"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <InputHeading text="Phone" />
                    <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                      <input
                        type="text"
                        className="placeholder-darkpurple  text-2xl text-[#685AAD] placeholder:text-[#AD9DDE]  w-full bg-transparent outline-none mb:text-xs"
                        placeholder="phone"
                        value={phone}
                        onChange={(e) => {
                          setphone(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="">
                    <InputHeading text="Zip Code" />
                    <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                      <input
                        type="text"
                        className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs"
                        placeholder="Zip Code"
                        value={Zip}
                        onChange={(e) => {
                          setZip(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <InputHeading text="Email" />
                    <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                      <input
                        type="email"
                        required
                        className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <InputHeading text="Password" />
                    <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                      <input
                        type="password"
                        required
                        className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs"
                        placeholder="*********"
                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                {!country ||
                !firstname ||
                !lastname ||
                !email ||
                !password ||
                !Zip ||
                !phone ? (
                  <div className="max-w-[33.2rem] ">
                    <ConfirmBtn
                      btnName="Continue"
                      className="text-3xl font-medium ml-0 "
                      onClick={() => {
                        alert("Please Fill All the Fields");
                      }}
                    />
                  </div>
                ) : (
                  <div className="max-w-[33.2rem] ">
                    <ConfirmBtn
                      btnName="Continue"
                      className="text-3xl font-medium ml-0 "
                      onClick={NextStep}
                    />
                  </div>
                )}
              </form>
            </div>
          </>
        );
      case 2:
        return (
          <>
            {/* <Education NextStep={NextStep}/>; */}
            <div className="bg-questionbg px-4 py-6 sm:px-8 sm:py-8 md:px-12  md:py-10 custom-lg:px-16 custom-lg:py-12 custom-xl:px-[69px] custom-xl:py-12 rounded-[30px]">
              <FormHeading
                className=""
                heading="Education"
                paragraph="Tutors are required to be enrolled in or have a graduation from a four-year college program "
              />
              <form
                className="pt-[74px] w-full grid grid-cols-1 custom-2xl:grid-cols-2 gap-6 custom-2xl:gap-x-40 "
                action=""
              >
                <div className="">
                  <InputHeading text="University/College " />
                  <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                    <input
                      type="text"
                      className="placeholder-darkpurple text-2xl text-[#685AAD]   w-full bg-transparent outline-none mb:text-xs placeholder:text-[#AD9DDE]"
                      placeholder="Search for your school"
                      value={universityCollage}
                      onChange={(e) => {
                        setUniversityCollage(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="">
                  <InputHeading text="Degree" />
                  <div className="relative w-full flex justify-center items-center">
                    <div
                      className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm"
                      onClick={toggleDropdownedu}
                    >
                      <button
                        className={`bg-purpleBtn focus:outline-none truncate  ${
                          selectedDegree ? "text-darkpurple" : "text-[#AD9DDE]"
                        }`}
                      >
                        {selectedDegree ? selectedDegree : "Select a degree"}
                        {/* Display selected degree */}
                      </button>
                      {degree ? (
                        <Image src={uparrow} alt="dropdown" />
                      ) : (
                        <Image src={dropdown} alt="uparrow" />
                      )}
                    </div>

                    {degree && (
                      <div
                        onMouseLeave={() => {
                          setDegree(false);
                        }}
                        className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-[#DBCAFF] py-4 px-10"
                      >
                        <div
                          id="style-2"
                          className=" max-h-[20rem] overflow-y-auto"
                        >
                          {degrees.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-center p-2 text-darkBlue border-b  py-2 text-2xl max-w-[80%] border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple"
                              onClick={() => handleDegreeSelect(subject)} // Set degree and close dropdown
                            >
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="">
                  <InputHeading text="Major" />
                  <div className="relative w-full flex justify-center items-center">
                    <div
                      className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-[#AD9DDE] text-2xl mb:text-sm"
                      onClick={toggleDropdownedumajoredu}
                    >
                      <button
                        className={`bg-purpleBtn focus:outline-none  ${
                          selectedmajoredu
                            ? "text-darkpurple"
                            : "text-[#AD9DDE]"
                        }`}
                      >
                        {selectedmajoredu ? selectedmajoredu : "Select"}{" "}
                        {/* Show selected majoredu */}
                      </button>
                      {majoredu ? (
                        <Image src={uparrow} alt="dropdown" />
                      ) : (
                        <Image src={dropdown} alt="uparrow" />
                      )}
                    </div>

                    {majoredu && (
                      <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-purpleBtn  px-8 py-6 ">
                        <div
                          id="style-2"
                          className=" px-2 max-h-[15rem] overflow-y-auto overflow-x-hidden"
                        >
                          {subjects.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-center p-2 text-darkBlue border-b px-5 py-2 max-w-[80%] truncate text-2xl border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple"
                              onClick={() => handlemajoreduSelect(subject)} // Set majoredu and close dropdown
                            >
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="">
                  <InputHeading text="Graduation Year" />
                  <div className="relative w-full flex justify-center items-center">
                    <div
                      className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm"
                      onClick={toggleDropdownedugraduationyear}
                    >
                      <button
                        className={`bg-purpleBtn focus:outline-none  ${
                          selectedYearedu ? "text-darkpurple" : "text-[#AD9DDE]"
                        }`}
                      >
                        {selectedYearedu
                          ? selectedYearedu
                          : "Select a graduation year"}{" "}
                        {/* Display selected year */}
                      </button>
                      {isDropdownOpenedu ? (
                        <Image src={uparrow} alt="dropdown" />
                      ) : (
                        <Image src={dropdown} alt="uparrow" />
                      )}
                    </div>

                    {isDropdownOpenedu && (
                      <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-[#DBCAFF] py-4 px-10">
                        <div
                          id="style-2"
                          className=" max-h-[20rem] overflow-y-auto"
                        >
                          {graduationYears.map((year) => (
                            <div
                              key={year}
                              className="flex items-center p-2 text-darkBlue border-b  py-2 text-2xl max-w-[80%] border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple"
                              onClick={() => handleYearSelect(year)} // Set selected year and close dropdown
                            >
                              <span>{year}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="" onClick={() => setisVisibleedu(true)}>
                    <InputHeading
                      text="+ Add School "
                      className={`!text-[#AE92F9] cursor-pointer !text-4xl ${
                        isVisibleedu ? "!text-[#8653FF]" : "!text-[#AE92F9]"
                      }`}
                    />
                  </div>
                  {isVisibleedu && (
                    <div className=" w-full custom-2xl:max-w-[33.2rem]">
                      <div className="rounded-full bg-purpleBtn px-10 py-4">
                        <input
                          type="text"
                          className="placeholder-darkpurple text-2xl text-[#685AAD]   w-full bg-transparent outline-none mb:text-xs placeholder:text-[#AD9DDE]"
                          placeholder="Add School"
                          value={school}
                          onChange={(e) => {
                            setschool(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    {!universityCollage ||
                    !selectedDegree ||
                    !selectedmajoredu ||
                    !selectedYearedu ? (
                      <div className=" max-w-[33.2rem]">
                        <ConfirmBtn
                          btnName="Continue"
                          className="text-3xl font-medium ml-0"
                          onClick={() => {
                            alert("Please Fill All the Fields!");
                            window.scrollTo(0, 0);
                          }}
                        />
                      </div>
                    ) : (
                      <div className=" max-w-[33.2rem]">
                        <ConfirmBtn
                          btnName="Continue"
                          className="text-3xl font-medium ml-0"
                          onClick={() => {
                            NextStep();
                            window.scrollTo(0, 0);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </form>
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
          </>
        );
      case 3:
        return (
          <>
            {/* <Experience NextStep={NextStep}/>; */}
            <div className="bg-questionbg px-4 py-6 sm:px-8 sm:py-8 md:px-12  md:py-10 custom-lg:px-16 custom-lg:py-12 custom-xl:px-[69px] custom-xl:py-12 rounded-[30px]">
              <FormHeading
                className=""
                heading="Teaching & Tutoring"
                paragraph="Previous experience is not requirement. Experts with a variety of background have been successful on our  platform."
              />
              <form className="pt-12  flex flex-col " action="">
                <div>
                  <ExperienceQuestions question="Do you have tutoring experience?* " />
                  <RadioInput
                    id="experienceYes"
                    name="tutoringExperience"
                    value="yes"
                    checked={hasTutoringExperience === "yes"}
                    onChange={() => handleRadioChange("yes")}
                    label="Yes"
                  />
                  <RadioInput
                    id="experienceNo"
                    name="tutoringExperience"
                    value="no"
                    checked={hasTutoringExperience === "no"}
                    onChange={() => handleRadioChange("no")}
                    label="No"
                  />
                </div>

                <div>
                  <ExperienceQuestions
                    question="What level(s) are you interested in tutoring? "
                    span="(Select all that apply)*"
                  />

                  {levels.map((level) => {
                    const clicked = selectedLevelsexp.includes(level); // Check if selected

                    return (
                      <div
                        key={level}
                        className="flex items-center py-6 relative"
                      >
                        <div className="relative flex items-center justify-center w-7 h-7">
                          <input
                            type="checkbox"
                            id={`checkbox-${level}`} // Unique ID for each checkbox
                            checked={clicked}
                            onChange={() => handleCheckboxChange(level)}
                            className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                          />
                          <div
                            className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                              clicked ? "bg-[#685AAD]" : "bg-transparent"
                            }`}
                          >
                            {clicked && (
                              // eslint-disable-next-line react/jsx-no-undef
                              <Image
                                src={tick} // Replace with the correct path for the tick icon
                                alt="Tick"
                                className="w-10 h-10"
                              />
                            )}
                          </div>
                        </div>
                        <label
                          className="text-darkBlue  text-2xl pl-6"
                          htmlFor={`checkbox-${level}`}
                        >
                          {level}
                        </label>
                      </div>
                    );
                  })}

                  {/* You can display the selected levels array for debugging purposes */}
                  <div className="text-darkBlue">
                    Selected Levels: {selectedLevelsexp.join(", ")}
                  </div>
                </div>

                <div className="mt-5">
                  <ExperienceQuestions question="What subject(s) can you tutor in?" />
                  <div className="w-full  mx-auto mt-4 mb-4">
                    <div className="relative  select-none max-w-[30.5rem]">
                      <div
                        className="w-full bg-[#DBCAFF] text-[#a394d6]  text-sm  custom-2xl:text-lg pr-7 sm:pr-14 pl-10 sm:pl-20 py-2 custom-2xl:py-2.5 rounded-full cursor-pointer flex justify-between items-center"
                        onClick={toggleSubjectDropdown}
                      >
                        <span>
                          {tutoredIN.length > 0
                            ? `${tutoredIN.length} selected`
                            : "select subject(s)"}
                        </span>
                        {isSubjectDropdownOpen ? (
                          <ChevronUp size={30} className="text-[#a394d6] " />
                        ) : (
                          <ChevronDown size={30} className="text-[#a394d6] " />
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
                                onClick={() =>
                                  handleSubjectClick(subject.value)
                                }
                              >
                                <div className=" border-b-2 border-[#a394d682] py-3 flex  gap-4  w-full px-4 max-w-[80%] overflow-x-hidden">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={tutoredIN.includes(
                                        subject.value
                                      )}
                                      onChange={() => {}}
                                      className="absolute opacity-0 cursor-pointer"
                                    />
                                    <div
                                      className={`h-7 w-7 truncate  border-2 border-[#6C5BAA] hover:bg-[#a394d6] hover:border-[#a394d6] rounded-md flex items-center justify-center 
                     ${
                       tutoredIN.includes(subject.value) ? "bg-[#6c5baa]" : ""
                     }`}
                                    >
                                      {tutoredIN.includes(subject.value) && (
                                        <Check className="text-white" />
                                      )}
                                    </div>
                                  </div>
                                  <span className="ml-2 text-2xl text-[#6C5BAA] truncate ">
                                    {subject.label}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {tutoredIN.length > 0 && (
                      <div className="flex flex-wrap items-start justify-start gap-2 mt-8   px-6 mx-auto min-h-[3.4rem]">
                        {tutoredIN.map((subject) => (
                          <span
                            key={subject}
                            className="bg-[#6C5BAA] text-white px-5 py-2 custom-2xl:py-2 rounded-full flex items-center  gap-7  justify-between"
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
                </div>

                <div className="mt-10">
                  <ExperienceQuestions question="What languages can you tutor in?" />
                  <div className="w-full  mx-auto mt-4 mb-4">
                    <div className="relative  select-none max-w-[30.5rem] w-full">
                      <div
                        className="w-full bg-[#DBCAFF] text-[#a394d6]  text-sm  custom-2xl:text-lg pr-7 sm:pr-14 pl-10 sm:pl-20 py-2 custom-2xl:py-2.5 rounded-full cursor-pointer flex justify-between items-center"
                        onClick={toggleLanguageDropdown}
                      >
                        <span>
                          {language.length > 0
                            ? `${language.length} selected`
                            : "select Language(s)"}
                        </span>
                        {isLanguageDropdownOpen ? (
                          <ChevronUp size={30} className="text-[#a394d6] " />
                        ) : (
                          <ChevronDown size={30} className="text-[#a394d6] " />
                        )}
                      </div>

                      {isLanguageDropdownOpen && (
                        <div
                          onMouseLeave={() => {
                            setIsLanguageDropdownOpen(false);
                          }}
                          className="absolute top-full left-0 right-0 px-8 mt-2 bg-[#DBCAFF] rounded-3xl overflow-hidden z-10 w-[92%] mx-auto py-4 custom-2xl:py-7  "
                        >
                          <div
                            id="style-2"
                            className="max-h-[16.4rem] overflow-y-scroll  "
                          >
                            {languageoptions.map((subject) => (
                              <div
                                key={subject.value}
                                className=" py-2 cursor-pointer flex items-center"
                                onClick={() =>
                                  handleLanguageClick(subject.value)
                                }
                              >
                                <div className=" border-b-2 border-[#a394d682] py-3 flex  gap-4  w-full px-4 max-w-[80%] overflow-x-hidden">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={language.includes(subject.value)}
                                      onChange={() => {}}
                                      className="absolute opacity-0 cursor-pointer"
                                    />
                                    <div
                                      className={`h-7 w-7 truncate  border-2 border-[#6C5BAA] hover:bg-[#a394d6] hover:border-[#a394d6] rounded-md flex items-center justify-center 
                     ${language.includes(subject.value) ? "bg-[#6c5baa]" : ""}`}
                                    >
                                      {language.includes(subject.value) && (
                                        <Check className="text-white" />
                                      )}
                                    </div>
                                  </div>
                                  <span className="ml-2 text-2xl text-[#6C5BAA] truncate ">
                                    {subject.label}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {language.length > 0 && (
                      <div className="flex flex-wrap items-start justify-start gap-2 mt-8   px-6 mx-auto min-h-[3.4rem]">
                        {language.map((subject) => (
                          <span
                            key={subject}
                            className="bg-[#6C5BAA] text-white px-5 py-2 custom-2xl:py-2 rounded-full flex items-center  gap-7  justify-between"
                          >
                            {subject}
                            <X
                              className="ml-2 h-4 custom-2xl:h-7 w-4 custom-2xl:w-7 cursor-pointer"
                              onClick={() => removeLanguage(subject)}
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
                </div>

                <div className="mt-16">
                  <ExperienceQuestions
                    question="What type of instruction are you interested in? "
                    span="(Select all that apply)*"
                  />
                  <div className="flex items-center py-6 relative">
                    <div className="relative flex items-center justify-center w-7 h-7">
                      <input
                        type="checkbox"
                        id="instructionOne"
                        checked={selectedInstructionsexp.includes("1-on-1")}
                        onChange={() =>
                          handleCheckboxChangenumberofstudents("1-on-1")
                        }
                        className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                      />
                      <div
                        className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                          selectedInstructionsexp.includes("1-on-1")
                            ? "bg-[#685AAD]"
                            : "bg-transparent"
                        }`}
                      >
                        {selectedInstructionsexp.includes("1-on-1") && (
                          <Image src={tick} alt="Tick" className="w-10 h-10" />
                        )}
                      </div>
                    </div>
                    <label
                      className="text-[#685AAD] text-2xl pl-6"
                      htmlFor="instructionOne"
                    >
                      1-on-1
                    </label>
                  </div>

                  <div className="flex items-center py-6 relative">
                    <div className="relative flex items-center justify-center w-7 h-7">
                      <input
                        type="checkbox"
                        id="instructionGroup"
                        checked={selectedInstructionsexp.includes(
                          "Small group (5 to 15 students)"
                        )}
                        onChange={() =>
                          handleCheckboxChangenumberofstudents(
                            "Small group (5 to 15 students)"
                          )
                        }
                        className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                      />
                      <div
                        className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                          selectedInstructionsexp.includes(
                            "Small group (5 to 15 students)"
                          )
                            ? "bg-[#685AAD]"
                            : "bg-transparent"
                        }`}
                      >
                        {selectedInstructionsexp.includes(
                          "Small group (5 to 15 students)"
                        ) && (
                          <Image src={tick} alt="Tick" className="w-10 h-10" />
                        )}
                      </div>
                    </div>
                    <label
                      className="text-[#685AAD] text-2xl pl-6"
                      htmlFor="instructionGroup"
                    >
                      Small group (5 to 15 students)
                    </label>
                  </div>

                  {/* Debugging: Display selected instructions */}
                  {/* <div>Selected Instructions: {selectedInstructionsexp.join(", ")}</div> */}
                </div>

                <div className="mt-28">
                  <ExperienceQuestions question="How many hours are you available to tutor each week?* " />
                  <RadioInput
                    id="hoursLessThan5"
                    name="tutoringHours"
                    value="Less than 5 hours"
                    checked={selectedHoursexp === "Less than 5 hours"} // Check if selected
                    onChange={() => handleHoursChange("Less than 5 hours")} // Handle change
                    label="Less than 5 hours"
                  />
                  <RadioInput
                    id="hours5To10"
                    name="tutoringHours"
                    value="5-10 hours"
                    checked={selectedHoursexp === "5-10 hours"} // Check if selected
                    onChange={() => handleHoursChange("5-10 hours")} // Handle change
                    label="5-10 hours"
                  />
                  <RadioInput
                    id="hours10To20"
                    name="tutoringHours"
                    value="10-20 hours"
                    checked={selectedHoursexp === "10-20 hours"} // Check if selected
                    onChange={() => handleHoursChange("10-20 hours")} // Handle change
                    label="10-20 hours"
                  />
                  <RadioInput
                    id="hoursMoreThan20"
                    name="tutoringHours"
                    value="More than 20 hours"
                    checked={selectedHoursexp === "More than 20 hours"} // Check if selected
                    onChange={() => handleHoursChange("More than 20 hours")} // Handle change
                    label="More than 20 hours"
                  />
                </div>

                <div className="mt-8">
                  <ExperienceQuestions question="What date can you start tutoring?" />
                  <div className="w-full  mx-auto relative  mt-14">
                    <div className="relative  select-none max-w-[30.5rem] w-full">
                      {/* Input field */}
                      <div
                        className="w-full bg-[#DBCAFF] text-[#a394d6]  text-sm  custom-2xl:text-lg pr-7 sm:pr-14 pl-10 sm:pl-20 py-2 custom-2xl:py-2.5 rounded-full cursor-pointer flex justify-between items-center"
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
                            {["S", "M", "T", "W", "T", "F", "S"].map(
                              (day, index) => (
                                <div
                                  key={index}
                                  className="text-center text-[#76639b] text-sm sm:text-lg custom-2xl:text-2xl font-medium"
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
                                    handleStartTutoringDateChange(
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
                </div>

                <div className="mt-16">
                  <ExperienceQuestions
                    question="What’s your general availability? "
                    span="(Select all that apply)"
                  />

                  <div className="w-[85%]">
                    {days.map((day) => (
                      <div
                        key={day}
                        className="flex custom-xl:pl-8 flex-col custom-xl:flex-row items-start custom-xl:justify-between  custom-xl:items-center mb-2"
                      >
                        <span className="text-darkBlue text-[25px]   ">
                          {day}
                        </span>
                        <div className="flex gap-2 flex-col sm:flex-row sm:justify-between custom-xl:w-[72%] w-full  ">
                          {timeSlots.map((timeSlot) => {
                            const isChecked =
                              availabilityexp[day]?.includes(timeSlot) || false;

                            return (
                              <div
                                key={timeSlot}
                                className="flex items-center space-x-2"
                              >
                                <div className="flex items-center py-6 relative">
                                  <div className="relative flex items-center justify-center w-7 h-7">
                                    <input
                                      type="checkbox"
                                      id={`${day}-${timeSlot}`}
                                      checked={isChecked}
                                      onChange={() =>
                                        handleTimeSlotChange(day, timeSlot)
                                      }
                                      className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                                    />
                                    <div
                                      className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                                        isChecked
                                          ? "bg-[#685AAD]"
                                          : "bg-transparent "
                                      }`}
                                    >
                                      {isChecked && (
                                        <Image
                                          src={tick}
                                          alt="Tick"
                                          className="w-10 h-10"
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <label
                                    htmlFor={`${day}-${timeSlot}`}
                                    className="text-[#685AAD] text-2xl pl-6"
                                  >
                                    {timeSlot}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <ExperienceQuestions question="Do you have classroom teaching experience?* " />
                  <RadioInput
                    id="classroomexperienceYes"
                    name="tutoringExperience"
                    value="yes"
                    checked={classroomteachingexp === "yes"}
                    onChange={() => setclassroomteachingexp("yes")} // Corrected function name
                    label="Yes"
                  />
                  <RadioInput
                    id="classroomexperienceNo"
                    name="tutoringExperience"
                    value="no"
                    checked={classroomteachingexp === "no"}
                    onChange={() => setclassroomteachingexp("no")} // Corrected function name
                    label="No"
                  />
                </div>

                {!hasTutoringExperience ||
                selectedLevelsexp.length == 0 ||
                tutoredIN.length == 0 ||
                language.length == 0 ||
                selectedInstructionsexp.length == 0 ||
                !selectedHoursexp ? (
                  <div className=" max-w-[33.2rem]  ml-0 mt-20">
                    <ConfirmBtn
                      btnName="Continue"
                      className="text-3xl font-medium ml-0"
                      onClick={() => {
                        alert("Please Fill All the Fields!");
                      }}
                    />
                  </div>
                ) : (
                  <div className=" max-w-[33.2rem]  ml-0 mt-20">
                    <ConfirmBtn
                      btnName="Continue"
                      className="text-3xl font-medium ml-0"
                      onClick={() => {
                        NextStep();
                      }}
                    />
                  </div>
                )}
              </form>
            </div>
          </>
        );
      case 4:
        return (
          <>
            {/* <Review NextStep={NextStep}/>;    */}
            <div className="bg-questionbg px-4 py-6 sm:px-8 sm:py-8 md:px-12  md:py-10 custom-lg:px-16 custom-lg:py-12 custom-xl:px-[69px] custom-xl:py-12 rounded-[30px]">
              <FormHeading
                className=""
                heading="Review Appllication"
                paragraph="Please review each section of your application to insure your information is correct. once you’re ready click ‘’submit’’ to finalize this portion of the application process "
              />
              {/* <ReviewContactInfo /> */}
              <div className="bg-reviewbg p-8 px-10 rounded-[30px] mt-16">
                <ReviewFormHead
                  heading="Contact Information"
                  EditActive={EditActive}
                  handleEditToggle={handleEditToggle}
                />

                <div className="grid grid-cols-1 custom-2xl:grid-cols-2 gap-6 py-12 pl-5">
                  <div>
                    <EnteredInfo
                      name="Selected Country"
                      info={
                        EditActive ? (
                          <div className="relative  custom-2xl:max-w-[36rem] flex justify-center items-center">
                    <div
                      className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm"
                      onClick={toggleDropdown}
                    >
                      <button
                        className={`bg-purpleBtn focus:outline-none  ${
                          country ? "text-darkpurple" : "text-[#AD9DDE]"
                        }`}
                      >
                        {country ? country : "Select a country"}{" "}
                        {/* Show selected country */}
                      </button>
                      {isDropdownOpen ? (
                        <Image src={uparrow} alt="dropdown" />
                      ) : (
                        <Image src={dropdown} alt="uparrow" />
                      )}
                    </div>

                    {isDropdownOpen && (
                      <div
                        onMouseLeave={() => {
                          setIsDropdownOpen(false);
                        }}
                        className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-[#DBCAFF] py-4 px-10 "
                      >
                        <div
                          id="style-2"
                          className=" max-h-[20rem] overflow-y-auto"
                        >
                          {countries.map((subject) => (
                            <div
                              key={subject}
                              className="flex items-center p-2 text-darkBlue border-b px-5 py-2 text-2xl border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple max-w-[80%] "
                              onClick={() => handleCountrySelect(subject)} // Handle country selection
                            >
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
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
                        ) : (
                          country
                        )
                      }
                      info2={""}
                      info3={""}
                      info4={""}
                      span={""}
                    />
                  </div>
                  <EnteredInfo
                    name="ZIP Code"
                    info={
                      EditActive ? (
                        <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                          <input
                            type="text"
                            className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs"
                            placeholder="Zip Code"
                            value={Zip}
                            onChange={(e) => {
                              setZip(e.target.value);
                            }}
                          />
                        </div>
                      ) : (
                        Zip
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="First Name"
                    info={
                      EditActive ? (
                        <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                          <input
                            type="text"
                            className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => {
                              setFirstname(e.target.value);
                            }}
                          />
                        </div>
                      ) : (
                        firstname
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />

                  <EnteredInfo
                    name="Email"
                    info={
                      EditActive ? (
                        <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                          <input
                            type="email"
                            required
                            className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                          />
                        </div>
                      ) : (
                        email
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="Last Name"
                    info={
                      EditActive ? (
                        <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                          <input
                            type="text"
                            className="placeholder-darkpurple  text-2xl text-[#685AAD]  w-full bg-transparent outline-none mb:text-xs"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => {
                              setLastname(e.target.value);
                            }}
                          />
                        </div>
                      ) : (
                        lastname
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="Phone Number"
                    info={
                      EditActive ? (
                        <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                          <input
                            type="text"
                            className="placeholder-darkpurple  text-2xl text-[#685AAD]  w-full bg-transparent outline-none mb:text-xs"
                            placeholder="phone"
                            value={phone}
                            onChange={(e) => {
                              setphone(e.target.value);
                            }}
                          />
                        </div>
                      ) : (
                        phone
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                </div>
              </div>

              {/* Review education info */}
              {/* <ReviewEducation /> */}
              <div className="bg-reviewbg p-8 px-10 rounded-[30px] mt-16">
                <ReviewFormHead
                  heading="Education"
                  EditActive={EditActive}
                  handleEditToggle={handleEditToggle}
                />

                <div className="grid grid-cols-1 custom-2xl:grid-cols-2 gap-6 py-12 pl-5">
                  <EnteredInfo
                    name="University/college"
                    info={
                      EditActive ? (
                        <div className="rounded-full bg-purpleBtn px-10 py-4 ">
                          <input
                            type="text"
                            className="placeholder-darkpurple text-2xl text-[#685AAD]  placeholder:text-[#AD9DDE] w-full bg-transparent outline-none mb:text-xs placeholder:text-[#AD9DDE]"
                            placeholder="Search for your school"
                            value={universityCollage}
                            onChange={(e) => {
                              setUniversityCollage(e.target.value);
                            }}
                          />
                        </div>
                      ) : (
                        universityCollage
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="Major"
                    info={
                      EditActive ? (
                        <div className="relative w-full flex justify-center items-center">
                        <div
                          className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-[#AD9DDE] text-2xl mb:text-sm"
                          onClick={toggleDropdownedumajoredu}
                        >
                          <button
                            className={`bg-purpleBtn focus:outline-none  ${
                              selectedmajoredu
                                ? "text-darkpurple"
                                : "text-[#AD9DDE]"
                            }`}
                          >
                            {selectedmajoredu ? selectedmajoredu : "Select"}{" "}
                            {/* Show selected majoredu */}
                          </button>
                          {majoredu ? (
                            <Image src={uparrow} alt="dropdown" />
                          ) : (
                            <Image src={dropdown} alt="uparrow" />
                          )}
                        </div>
    
                        {majoredu && (
                          <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-purpleBtn  px-8 py-6 ">
                            <div
                              id="style-2"
                              className=" px-2 max-h-[15rem] overflow-y-auto overflow-x-hidden"
                            >
                              {subjects.map((subject) => (
                                <div
                                  key={subject}
                                  className="flex items-center p-2 text-darkBlue border-b px-5 py-2 max-w-[80%] truncate text-2xl border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple"
                                  onClick={() => handlemajoreduSelect(subject)} // Set majoredu and close dropdown
                                >
                                  <span>{subject}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      ) : (
                        selectedmajoredu
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="Degree"
                    info={
                      EditActive ? (
                        <div className="relative w-full flex justify-center items-center">
                        <div
                          className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm"
                          onClick={toggleDropdownedu}
                        >
                          <button
                            className={`bg-purpleBtn focus:outline-none truncate  ${
                              selectedDegree ? "text-darkpurple" : "text-[#AD9DDE]"
                            }`}
                          >
                            {selectedDegree ? selectedDegree : "Select a degree"}
                            {/* Display selected degree */}
                          </button>
                          {degree ? (
                            <Image src={uparrow} alt="dropdown" />
                          ) : (
                            <Image src={dropdown} alt="uparrow" />
                          )}
                        </div>
    
                        {degree && (
                          <div
                            onMouseLeave={() => {
                              setDegree(false);
                            }}
                            className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-[#DBCAFF] py-4 px-10"
                          >
                            <div
                              id="style-2"
                              className=" max-h-[20rem] overflow-y-auto"
                            >
                              {degrees.map((subject) => (
                                <div
                                  key={subject}
                                  className="flex items-center p-2 text-darkBlue border-b  py-2 text-2xl max-w-[80%] border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple"
                                  onClick={() => handleDegreeSelect(subject)} // Set degree and close dropdown
                                >
                                  <span>{subject}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      ) : (
                        selectedDegree
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="Graduation Year "
                    span="(or expected)"
                    info={
                      EditActive ? (
                        <div className="relative w-full flex justify-center items-center">
                    <div
                      className="flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm"
                      onClick={toggleDropdownedugraduationyear}
                    >
                      <button
                        className={`bg-purpleBtn focus:outline-none  ${
                          selectedYearedu ? "text-darkpurple" : "text-[#AD9DDE]"
                        }`}
                      >
                        {selectedYearedu
                          ? selectedYearedu
                          : "Select a graduation year"}{" "}
                        {/* Display selected year */}
                      </button>
                      {isDropdownOpenedu ? (
                        <Image src={uparrow} alt="dropdown" />
                      ) : (
                        <Image src={dropdown} alt="uparrow" />
                      )}
                    </div>

                    {isDropdownOpenedu && (
                      <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-[#DBCAFF] py-4 px-10">
                        <div
                          id="style-2"
                          className=" max-h-[20rem] overflow-y-auto"
                        >
                          {graduationYears.map((year) => (
                            <div
                              key={year}
                              className="flex items-center p-2 text-darkBlue border-b  py-2 text-2xl max-w-[80%] border-darkBlue cursor-pointer mb:text-sm placeholder-darkpurple"
                              onClick={() => handleYearSelect(year)} // Set selected year and close dropdown
                            >
                              <span>{year}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                      ) : (
                        selectedYearedu
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                  />
                </div>
              </div>

              {/* review exprerience */}
              <div className="bg-reviewbg p-8 px-10 rounded-[30px] mt-16">
                <ReviewFormHead
                  heading="Education"
                  EditActive={EditActive}
                  handleEditToggle={handleEditToggle}
                />

                <div className="grid grid-cols-1 gap-20 py-12 pl-5">
                  <EnteredInfo
                    name="Do you have tutoring experience?*"
                    info={
                      EditActive ? (
                        <div>
                          <RadioInput
                            id="experienceYes"
                            name="tutoringExperience"
                            value="yes"
                            checked={hasTutoringExperience === "yes"}
                            onChange={() => handleRadioChange("yes")}
                            label="Yes"
                          />
                          <RadioInput
                            id="experienceNo"
                            name="tutoringExperience"
                            value="no"
                            checked={hasTutoringExperience === "no"}
                            onChange={() => handleRadioChange("no")}
                            label="No"
                          />
                        </div>
                      ) : (
                        hasTutoringExperience
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="What level(s) are you interested in tutoring?"
                    info={
                      EditActive ? (
                        <>
                          {levels.map((level) => {
                            const clicked = selectedLevelsexp.includes(level); // Check if selected

                            return (
                              <div
                                key={level}
                                className="flex items-center py-6 relative"
                              >
                                <div className="relative flex items-center justify-center w-7 h-7">
                                  <input
                                    type="checkbox"
                                    id={`checkbox-${level}`} // Unique ID for each checkbox
                                    checked={clicked}
                                    onChange={() => handleCheckboxChange(level)}
                                    className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                                  />
                                  <div
                                    className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                                      clicked
                                        ? "bg-[#685AAD]"
                                        : "bg-transparent"
                                    }`}
                                  >
                                    {clicked && (
                                      // eslint-disable-next-line react/jsx-no-undef
                                      <Image
                                        src={tick} // Replace with the correct path for the tick icon
                                        alt="Tick"
                                        className="w-10 h-10"
                                      />
                                    )}
                                  </div>
                                </div>
                                <label
                                  className="text-darkBlue  text-2xl pl-6"
                                  htmlFor={`checkbox-${level}`}
                                >
                                  {level}
                                </label>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        selectedLevelsexp
                          .map((lang) => lang.toUpperCase())
                          .join(", ")
                      )
                    }
                    info2=""
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="What subject(s) can you tutor in?"
                    info={
                      EditActive ? (
                        <div className="w-full  mx-auto mt-4 mb-4">
                        <div className="relative  select-none max-w-[30.5rem]">
                          <div
                            className="w-full bg-[#DBCAFF] text-[#a394d6]  text-sm  custom-2xl:text-lg pr-7 sm:pr-14 pl-10 sm:pl-20 py-2 custom-2xl:py-2.5 rounded-full cursor-pointer flex justify-between items-center"
                            onClick={toggleSubjectDropdown}
                          >
                            <span>
                              {tutoredIN.length > 0
                                ? `${tutoredIN.length} selected`
                                : "select subject(s)"}
                            </span>
                            {isSubjectDropdownOpen ? (
                              <ChevronUp size={30} className="text-[#a394d6] " />
                            ) : (
                              <ChevronDown size={30} className="text-[#a394d6] " />
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
                                    onClick={() =>
                                      handleSubjectClick(subject.value)
                                    }
                                  >
                                    <div className=" border-b-2 border-[#a394d682] py-3 flex  gap-4  w-full px-4 max-w-[80%] overflow-x-hidden">
                                      <div className="relative">
                                        <input
                                          type="checkbox"
                                          checked={tutoredIN.includes(
                                            subject.value
                                          )}
                                          onChange={() => {}}
                                          className="absolute opacity-0 cursor-pointer"
                                        />
                                        <div
                                          className={`h-7 w-7 truncate  border-2 border-[#6C5BAA] hover:bg-[#a394d6] hover:border-[#a394d6] rounded-md flex items-center justify-center 
                         ${
                           tutoredIN.includes(subject.value) ? "bg-[#6c5baa]" : ""
                         }`}
                                        >
                                          {tutoredIN.includes(subject.value) && (
                                            <Check className="text-white" />
                                          )}
                                        </div>
                                      </div>
                                      <span className="ml-2 text-2xl text-[#6C5BAA] truncate ">
                                        {subject.label}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        {tutoredIN.length > 0 && (
                          <div className="flex flex-wrap items-start justify-start gap-2 mt-8   px-6 mx-auto min-h-[3.4rem]">
                            {tutoredIN.map((subject) => (
                              <span
                                key={subject}
                                className="bg-[#6C5BAA] text-white px-5 py-2 custom-2xl:py-2 rounded-full flex items-center  gap-7  justify-between"
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
                      ) : (
                        tutoredIN.map((lang) => lang.toUpperCase()).join(", ")
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="What languages can you tutor in?"
                    info={
                      EditActive ? (
                        <div className="w-full  mx-auto mt-4 mb-4">
                    <div className="relative  select-none max-w-[30.5rem] w-full">
                      <div
                        className="w-full bg-[#DBCAFF] text-[#a394d6]  text-sm  custom-2xl:text-lg pr-7 sm:pr-14 pl-10 sm:pl-20 py-2 custom-2xl:py-2.5 rounded-full cursor-pointer flex justify-between items-center"
                        onClick={toggleLanguageDropdown}
                      >
                        <span>
                          {language.length > 0
                            ? `${language.length} selected`
                            : "select Language(s)"}
                        </span>
                        {isLanguageDropdownOpen ? (
                          <ChevronUp size={30} className="text-[#a394d6] " />
                        ) : (
                          <ChevronDown size={30} className="text-[#a394d6] " />
                        )}
                      </div>

                      {isLanguageDropdownOpen && (
                        <div
                          onMouseLeave={() => {
                            setIsLanguageDropdownOpen(false);
                          }}
                          className="absolute top-full left-0 right-0 px-8 mt-2 bg-[#DBCAFF] rounded-3xl overflow-hidden z-10 w-[92%] mx-auto py-4 custom-2xl:py-7  "
                        >
                          <div
                            id="style-2"
                            className="max-h-[16.4rem] overflow-y-scroll  "
                          >
                            {languageoptions.map((subject) => (
                              <div
                                key={subject.value}
                                className=" py-2 cursor-pointer flex items-center"
                                onClick={() =>
                                  handleLanguageClick(subject.value)
                                }
                              >
                                <div className=" border-b-2 border-[#a394d682] py-3 flex  gap-4  w-full px-4 max-w-[80%] overflow-x-hidden">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={language.includes(subject.value)}
                                      onChange={() => {}}
                                      className="absolute opacity-0 cursor-pointer"
                                    />
                                    <div
                                      className={`h-7 w-7 truncate  border-2 border-[#6C5BAA] hover:bg-[#a394d6] hover:border-[#a394d6] rounded-md flex items-center justify-center 
                     ${language.includes(subject.value) ? "bg-[#6c5baa]" : ""}`}
                                    >
                                      {language.includes(subject.value) && (
                                        <Check className="text-white" />
                                      )}
                                    </div>
                                  </div>
                                  <span className="ml-2 text-2xl text-[#6C5BAA] truncate ">
                                    {subject.label}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {language.length > 0 && (
                      <div className="flex flex-wrap items-start justify-start gap-2 mt-8   px-6 mx-auto min-h-[3.4rem]">
                        {language.map((subject) => (
                          <span
                            key={subject}
                            className="bg-[#6C5BAA] text-white px-5 py-2 custom-2xl:py-2 rounded-full flex items-center  gap-7  justify-between"
                          >
                            {subject}
                            <X
                              className="ml-2 h-4 custom-2xl:h-7 w-4 custom-2xl:w-7 cursor-pointer"
                              onClick={() => removeLanguage(subject)}
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
                      ) : (
                        language.map((lang) => lang.toUpperCase()).join(", ")
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="What type of instruction are you interested in?"
                    info={
                      EditActive ? (
                        <div>
                          <div className="flex items-center py-6 relative">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="checkbox"
                                id="instructionOne"
                                checked={selectedInstructionsexp.includes(
                                  "1-on-1"
                                )}
                                onChange={() =>
                                  handleCheckboxChangenumberofstudents("1-on-1")
                                }
                                className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                              />
                              <div
                                className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                                  selectedInstructionsexp.includes("1-on-1")
                                    ? "bg-[#685AAD]"
                                    : "bg-transparent"
                                }`}
                              >
                                {selectedInstructionsexp.includes("1-on-1") && (
                                  <Image
                                    src={tick}
                                    alt="Tick"
                                    className="w-10 h-10"
                                  />
                                )}
                              </div>
                            </div>
                            <label
                              className="text-[#685AAD] text-2xl pl-6"
                              htmlFor="instructionOne"
                            >
                              1-on-1
                            </label>
                          </div>

                          <div className="flex items-center py-6 relative">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="checkbox"
                                id="instructionGroup"
                                checked={selectedInstructionsexp.includes(
                                  "Small group (5 to 15 students)"
                                )}
                                onChange={() =>
                                  handleCheckboxChangenumberofstudents(
                                    "Small group (5 to 15 students)"
                                  )
                                }
                                className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                              />
                              <div
                                className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                                  selectedInstructionsexp.includes(
                                    "Small group (5 to 15 students)"
                                  )
                                    ? "bg-[#685AAD]"
                                    : "bg-transparent"
                                }`}
                              >
                                {selectedInstructionsexp.includes(
                                  "Small group (5 to 15 students)"
                                ) && (
                                  <Image
                                    src={tick}
                                    alt="Tick"
                                    className="w-10 h-10"
                                  />
                                )}
                              </div>
                            </div>
                            <label
                              className="text-[#685AAD] text-2xl pl-6"
                              htmlFor="instructionGroup"
                            >
                              Small group (5 to 15 students)
                            </label>
                          </div>
                        </div>
                      ) : (
                        selectedInstructionsexp
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="How many hours are you available to tutor each week?"
                    info={
                      EditActive ? (
                        <>
                          <RadioInput
                            id="hoursLessThan5"
                            name="tutoringHours"
                            value="Less than 5 hours"
                            checked={selectedHoursexp === "Less than 5 hours"} // Check if selected
                            onChange={() =>
                              handleHoursChange("Less than 5 hours")
                            } // Handle change
                            label="Less than 5 hours"
                          />
                          <RadioInput
                            id="hours5To10"
                            name="tutoringHours"
                            value="5-10 hours"
                            checked={selectedHoursexp === "5-10 hours"} // Check if selected
                            onChange={() => handleHoursChange("5-10 hours")} // Handle change
                            label="5-10 hours"
                          />
                          <RadioInput
                            id="hours10To20"
                            name="tutoringHours"
                            value="10-20 hours"
                            checked={selectedHoursexp === "10-20 hours"} // Check if selected
                            onChange={() => handleHoursChange("10-20 hours")} // Handle change
                            label="10-20 hours"
                          />
                          <RadioInput
                            id="hoursMoreThan20"
                            name="tutoringHours"
                            value="More than 20 hours"
                            checked={selectedHoursexp === "More than 20 hours"} // Check if selected
                            onChange={() =>
                              handleHoursChange("More than 20 hours")
                            } // Handle change
                            label="More than 20 hours"
                          />
                        </>
                      ) : (
                        selectedHoursexp
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="What date can you start tutoring?"
                    info={
                      EditActive ? (
                        <div className="w-full  mx-auto relative  mt-14">
                    <div className="relative  select-none max-w-[30.5rem] w-full">
                      {/* Input field */}
                      <div
                        className="w-full bg-[#DBCAFF] text-[#a394d6]  text-sm  custom-2xl:text-lg pr-7 sm:pr-14 pl-10 sm:pl-20 py-2 custom-2xl:py-2.5 rounded-full cursor-pointer flex justify-between items-center"
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
                            {["S", "M", "T", "W", "T", "F", "S"].map(
                              (day, index) => (
                                <div
                                  key={index}
                                  className="text-center text-[#76639b] text-sm sm:text-lg custom-2xl:text-2xl font-medium"
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
                                    handleStartTutoringDateChange(
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
                      ) : (
                        // @ts-ignore
                        selectedDate?.toLocaleDateString()
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="What’s you general availability?"
                    info={
                      EditActive ? (
                        <div className="w-[85%]">
                    {days.map((day) => (
                      <div
                        key={day}
                        className="flex custom-xl:pl-8 flex-col custom-xl:flex-row items-start custom-xl:justify-between  custom-xl:items-center mb-2"
                      >
                        <span className="text-darkBlue text-[25px]   ">
                          {day}
                        </span>
                        <div className="flex gap-2 flex-col sm:flex-row sm:justify-between custom-xl:w-[72%] w-full  ">
                          {timeSlots.map((timeSlot) => {
                            const isChecked =
                              availabilityexp[day]?.includes(timeSlot) || false;

                            return (
                              <div
                                key={timeSlot}
                                className="flex items-center space-x-2"
                              >
                                <div className="flex items-center py-6 relative">
                                  <div className="relative flex items-center justify-center w-7 h-7">
                                    <input
                                      type="checkbox"
                                      id={`${day}-${timeSlot}`}
                                      checked={isChecked}
                                      onChange={() =>
                                        handleTimeSlotChange(day, timeSlot)
                                      }
                                      className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                                    />
                                    <div
                                      className={`w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                                        isChecked
                                          ? "bg-[#685AAD]"
                                          : "bg-transparent "
                                      }`}
                                    >
                                      {isChecked && (
                                        <Image
                                          src={tick}
                                          alt="Tick"
                                          className="w-10 h-10"
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <label
                                    htmlFor={`${day}-${timeSlot}`}
                                    className="text-[#685AAD] text-2xl pl-6"
                                  >
                                    {timeSlot}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                      ) : (
                        <div>
                          {Object.keys(availabilityexp).map((day, index) => (
                            <div key={index}>
                              <h3>
                                {day}:{" "}
                                {availabilityexp[day].length > 0
                                  ? availabilityexp[day].join(", ")
                                  : "No available time slots"}
                              </h3>
                            </div>
                          ))}
                        </div>
                      )
                    }
                    info2=""
                    info3={""}
                    info4={""}
                    span={""}
                  />
                  <EnteredInfo
                    name="Do you have classroom teaching experience?"
                    info={
                      EditActive ? (
                        <>
                          <RadioInput
                            id="experienceYes"
                            name="tutoringExperience"
                            value="yes"
                            checked={classroomteachingexp === "yes"}
                            onChange={() => setclassroomteachingexp("yes")} // Corrected function name
                            label="Yes"
                          />
                          <RadioInput
                            id="experienceNo"
                            name="tutoringExperience"
                            value="no"
                            checked={classroomteachingexp === "no"}
                            onChange={() => setclassroomteachingexp("no")} // Corrected function name
                            label="No"
                          />
                        </>
                      ) : (
                        classroomteachingexp
                      )
                    }
                    info2={""}
                    info3={""}
                    info4={""}
                    span={""}
                  />
                </div>
              </div>

              {/* checkbox input */}
              <div className="mt-24">
                {/* <CheckboxInput onChange={(e)=>{setagreeterms(e.target.value)}} label="I confirm that I am 18 years or older and agree to the eTutor4Me LLC Terms of Use and Privacy Policy." /> */}
                <div className={`flex items-center py-6 relative`}>
                  <div className="relative flex items-center justify-center w-7 h-7">
                    <input
                      type="checkbox"
                      id="checkbox"
                      onChange={(e) => {
                        setagreeterms(e.target.checked);
                      }}
                      className="absolute w-7 h-7 opacity-0 cursor-pointer hover:!bg-darkBlue"
                    />
                    <div
                      className={`  w-7 h-7 border-[3px] border-[#685AAD] rounded-md flex items-center justify-center ${
                        agreeterms === true ? "bg-[#685AAD]" : "bg-transparent "
                      }`}
                    >
                      {agreeterms === true && (
                        <Image src={tick} alt="Tick" className="w-10 h-10" />
                      )}
                    </div>
                  </div>
                  <label
                    className="text-[#685AAD] text-2xl pl-6"
                    htmlFor="checkbox"
                  >
                    I confirm that I am 18 years or older and agree to the
                    eTutor4Me LLC Terms of Use and Privacy Policy.
                  </label>
                </div>
                {error && <p className="text-red-600 text-base"> {error}</p>}
                <div className="max-w-[33.2rem]  ml-0 ">
                  <ConfirmBtn
                    btnName={loading}
                    onClick={handleSubmit}
                    className="text-3xl font-medium mt-4 ml-0"
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            {/* <ThankYou NextStep={NextStep}/>;    */}
            <div className="bg-questionbg px-4 py-6 sm:px-8 sm:py-8 md:px-12  md:py-10 custom-lg:px-16 custom-lg:py-12 custom-xl:px-[69px] custom-xl:py-12 rounded-[30px]">
              <FormHeading className="!text-[6.5rem]" heading="Thank you!" />
              <FormHeading
                className="!text-3xl"
                heading="We appreciate your interest in tutoring on eTutor4Me."
                paragraph="Working with us is going to be so much fun! you’ll see how quickly you can increase your pay while enjoying a constant income with the numerous offers we have. its flexible, and as a student, this will be very beneficial for you as well."
              />
              <FormHeading
                className=" !text-3xl !font-medium"
                heading="What comes next?"
              />
            </div>
          </>
        );
      default:
    }
  };

  return (
    <div className="flex flex-col">
      {/* Stepper */}
      <div>
        <SignUpNavbar />
      </div>
      <div className="flex justify-center  custom-xl:justify-between w-full custom-lg:w-[90%] mx-auto min-h-screen gap-3 mt-6 custom-xl:mt-1">
        <div className="  mt-32 ml-7 hidden custom-xl:block">
          <FormSteps steps={steps} currentStep={currentStep} />
        </div>
        {/* Navigation */}
        <div className="w-full custom-xl:w-[71.5%] pb-20 overflow-y-auto max-h-screen scrollbar-none">
          {displayStep(currentStep)}
        </div>
      </div>
    </div>
  );
};

export default Page;
