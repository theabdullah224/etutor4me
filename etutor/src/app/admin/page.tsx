"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import logo from "../../../public/etutorAdminLogo.svg";
import Image from "next/image";
import Home1 from "../../../public/homeicon.svg";
import transactionActive from "../../../public/activeTransaction.svg";
import transactionInActive from "../../../public/Inactive_transection.svg";
import activePricing from "../../../public/activePricing.svg";
import inactivePricing from "../../../public/inactivePricing.svg";
import activeGroup from "../../../public/activeGroup.svg";
import inactivegroup from "../../../public/inactiveGroup.svg";

import activeTutor from "../../../public/activeEtutor.svg";
import inactivetutor from "../../../public/inactiveEtutor.svg";

import ActiveActivity from "../../../public/activeActivity.svg";
import inactiveactivity from "../../../public/inactiveActivity.svg";

import InactiveLogActivity from "../../../public/inactiveLogActivity.svg";
import activeLogactivity from "../../../public/ActiveLogActivity.svg";

import setting from "../../../public/settingicon.svg";
import link from "../../../public/linkicons.svg";
import bell from "../../../public/bellicon.svg";
import translate from "../../../public/translateicon.svg";
import dark from "../../../public/darkicon.svg";
import ContactSupport from "./components/ContactSupport";
import Setting from "./components/Settings";
import UsefulLinks from "./components/UsefulLinks";

import homeinactive from "../../../public/home inactive.svg";

import supportinactive from "../../../public/support inactive.svg";
import activeSupport from "../../../public/contactandsupporticon.svg";

import settinginactive from "../../../public/settings inactive.svg";
import linksinactive from "../../../public/links inactive.svg";
import levellogo from "../../../public/level5 logo.svg";
import level1 from "../../../public/level-1.svg";
import level2 from "../../../public/level-2.svg";
import level3 from "../../../public/level-3.svg";
import level4 from "../../../public/level-4.svg";
import level5 from "../../../public/level-5.svg";
import level6 from "../../../public/level-6.svg";
import level7 from "../../../public/level-7.svg";
import level8 from "../../../public/level-8.svg";
import level9 from "../../../public/level-9.svg";
import level10 from "../../../public/level-10.svg";
import useSWR from "swr";
import Link from "next/link";



import { useRouter } from "next/navigation";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
  isSameDay,
  endOfWeek,
  eachWeekOfInterval,
  isSameMonth,
  isToday,
} from "date-fns";
import Transaction from "./components/Transaction";
import Pricing from "./components/Pricing";
import Students from "./components/Students";
import Etutors from "./components/Etutors";
import Activity from "./components/Activity";


interface Student {
  profile: {
    firstName: String;
  };
  email: string;
  contactInformation: {
    country: string;
    phone: string;
    address: string;
  };
}

interface Teacher {
  name: string;
  email: string;
  contactInformation: {
    firstName: string;
    country: string;
    phone: string;
    address: string;
  };
}

interface BookingRequest {
  studentdetails: any;
  startLink: string;
  meetingCompleted: boolean;
  joinLink: string | undefined;
  _id: string;
  student: Student;
  teacher: Teacher;
  subjects: string[];
  level: string;
  date: string;
  time: string;
  status: string;
}

const SessionsDashboard = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Transaction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [previousSidebarItem, setPreviousSidebarItem] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const { data: session } = useSession(); // Get the session data
  const [teacher, setTeacher] = useState(null); // State to store teacher data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const targetRef = useRef<HTMLDivElement>(null); // Reference to your component
  const [eTokis, setETokis] = useState(0);
  const [earnedThisMonthEtokis, setearnedThisMonthEtokis] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [profilepicture, setProfilepicture] = useState("");
  const [tutorlevelleft, settutorlevelleft] = useState(0);
  const [completeprofilestatus, setCompleteprofilestatus] = useState(0);
  const [confirmedState, setConfirmedState] = useState(false);
  const [unconfirmedState, setUnconfirmedState] = useState(false);
  const [canceledState, setCanceledState] = useState(false);
  const [redeem, setredeem] = useState(false);
  const [view, setView] = useState("month"); // 'month' or 'week'
  const [popup, setpopup] = useState(null);
  const [sessionData, setRequests] = useState<BookingRequest[]>([]);
  const [level, setlevel] = useState("");


  // fetching incoming requests
  useEffect(() => {
    const fetchRequests = async () => {
      if (!session) return;

      try {
        const response = await fetch(
          "/api/get-incoming-requests-from-student",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }

        const data = await response.json();
        setRequests(data.bookingRequests);
      
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [session]);



  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const weeks = eachWeekOfInterval(
    { start: monthStart, end: monthEnd },
    { weekStartsOn: 1 } // Monday as week start
  );
  // Filter sessions based on states
  const filteredSessions = useMemo(() => {
    
      return sessionData;
   
  }, [sessionData]);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start, end });

    // Add previous month days to start from Sunday
    const firstDay = startOfWeek(start);
    const preDays = eachDayOfInterval({ start: firstDay, end: start });

    return [...preDays.slice(0, -1), ...days];
  }, [currentDate, view]);

  const getSessionForDate = (date:any) => {
    return filteredSessions.find((session) =>
      isSameDay(new Date(session.date), date)
    );
  };

  const userID = session?.user.id;

  // fetching the user data----------------------------
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Teacher not found or internal server error");
    }
    return response.json();
  };

  // Use SWR hook
  const { data: teacherData, isLoading } = useSWR(
    "/api/Teacher-Apis/teacher-data",
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      onSuccess: (data) => {
        setTeacher(data);
      },
      onError: (err) => {
        setError(err.message);
      },
    }
  );

  // Update states based on SWR data
  useEffect(() => {
    setLoading(isLoading);
    if (error) {
      //@ts-ignore
      setError(error.message);
    }
  }, [isLoading, error, session]);

  useEffect(() => {
    //@ts-ignore
    setETokis(teacher?.user?.etokis);
    //@ts-ignore
    setlevel(teacher?.level);
    //@ts-ignore
    setearnedThisMonthEtokis(teacher?.EarnedThisMonth);
    //@ts-ignore
    setFirstname(teacher?.contactInformation?.firstName);
    //@ts-ignore
    setProfilepicture(teacher?.user?.profilePicture);
    settutorlevelleft(80);
    setCompleteprofilestatus(90);
  }, [session]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is outside the component (targetRef), close the dropdown/modal/etc.
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: activeSidebarItem === "Dashboard" ? Home1 : homeinactive,
    },
    {
      name: "Transaction",
      icon:
        activeSidebarItem === "Transaction" ? transactionActive : transactionInActive,
    },
    {
      name: "Pricing",
      icon: activeSidebarItem === "Pricing" ? activePricing : inactivePricing,
    },
    {
      name: "Students",
      icon: activeSidebarItem === "Students" ? activeGroup : inactivegroup,
    },

    {
      name: "eTutors",
      icon: activeSidebarItem === "eTutors" ? activeTutor : inactivetutor,
    },
    {
      name: "Activity",
      icon: activeSidebarItem === "Activity" ? ActiveActivity : inactiveactivity,
    },
    {
      name: "Log activity",
      icon: activeSidebarItem === "Log activity" ? activeLogactivity : InactiveLogActivity,
    },
    {
      name: "Support",
      icon: activeSidebarItem === "Support" ? activeSupport : supportinactive,
    },
    // { name: "Activity", icon: activity },
    {
      name: "Settings",
      icon: activeSidebarItem === "Settings" ? setting : settinginactive,
    },
    {
      name: "Useful links",
      icon: activeSidebarItem === "Useful links" ? link : linksinactive,
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1849px)");

    // Set initial value based on the media query match
    setIsLargeScreen(mediaQuery.matches);

    // Define a listener for changes
    const handleMediaChange = (e: any) => setIsLargeScreen(e.matches);

    // Add the event listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);
  const renderContent = () => {
    switch (activeSidebarItem) {
      // ---------------------------DashBoard--------------------------------------------------------------
      case "Dashboard":
       return null

      // ---------------------------My session--------------------------------------------------------------
      case "Transaction":
        return <Transaction/>
      case "Pricing":
        return <Pricing/>
      case "Students":
        return <Students/>
      case "eTutors":
        return <Etutors/>
      case "Activity":
        return <Activity/>

     

     
      
    
   
    
      
      default:
        return null
    }
  };




    return (
      <div className="flex min-h-screen bg-white relative z-0 max-w-[1920px] w-full mx-auto">
        {/* Sidebar */}
        <aside
          className={` ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } 2xl:translate-x-0 fixed 2xl:static inset-y-0 left-0 z-50 max-w-[20rem] sm:max-w-[25rem] w-full min-h-screen 2xl:h-screen  rounded-tr-3xl rounded-br-3xl bg-[#E6E4F2] text-white flex flex-col transition-transform duration-300 ease-in-out pl-5 pr-9 pt-8 custom-2xl:pt-11 pb-4`}
        >
          <div className="flex items-center mb-[23.5%] pb-2 pl-7">
            <Image src={logo} alt="" className="w-52 sm:w-[17rem]" />
          </div>
          <nav className="flex-grow flex flex-col">
            <ul className="space-y-2 flex-grow">
              {sidebarItems
                .filter(
                  (item) => !["Settings", "Useful links"].includes(item.name)
                )
                .map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        setPreviousSidebarItem(activeSidebarItem);
                        setActiveSidebarItem(item.name);
                        if (window.innerWidth < 1600) {
                          setIsSidebarOpen(false);
                        }
                      }}
                      className={`flex    hover:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.3)] hover:transition-all duration-1000  items-center w-full px-6 custom-2xl:px-9 py-3 sm:py-[18px] rounded-[22px]  transition-all  ${
                        activeSidebarItem === item.name
                          ? "bg-white  transition-all"
                          : "hover:bg-darkpurple hover:bg-transparent transition-all"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        className="w-5 sm:w-6 h-5 sm:h-6 mr-7"
                        alt=""
                      />
                      <p
                        className={`text-[#cac7d8] text-xl font-medium ${
                          activeSidebarItem === item.name
                            ? "text-customBlue"
                            : "text-darkpurple"
                        }`}
                      >
                        {item.name}
                      </p>
                    </button>
                  </li>
                ))}
            </ul>
            <ul className="space-y-2 mt-6 ">
              {sidebarItems
                .filter((item) =>
                  ["Settings", "Useful links"].includes(item.name)
                )
                .map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        setActiveSidebarItem(item.name);
                        if (window.innerWidth < 1600) {
                          setIsSidebarOpen(false);
                        }
                      }}
                      className={`flex   hover:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.3)] hover:transition-all duration-1000  items-center w-full px-6 custom-2xl:px-9 py-3 sm:py-[18px] rounded-[22px]  transition-all  ${
                        activeSidebarItem === item.name
                          ? "bg-white text-customBlue"
                          : "hover:bg-darkpurple hover:bg-transparent"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        className="w-5 sm:w-6 h-5 sm:h-6 mr-7"
                        alt=""
                      />
                      <p
                        className={`text-[#cac7d8] text-xl font-medium ${
                          activeSidebarItem === item.name
                            ? "text-customBlue"
                            : "text-darkpurple"
                        }`}
                      >
                        {item.name}
                      </p>
                    </button>
                  </li>
                ))}
            </ul>
          </nav>
        </aside>
  
        {/* Main content */}
        <main className="flex-1 px-4 custom-lg:px-[42px] py-4 overflow-auto  bg-transparent">
          <header
            className={`flex justify-between items-center  ${
              activeSidebarItem === "Session overview" ? "mb-2" : "mb-8"
            }`}
          >
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="2xl:hidden mr-4 text-darkBlue"
              >
                <Menu size={24} />
              </button>
  
              {activeSidebarItem === "Dashboard" ? (
                <></>
              ) : (
               ""
              )}
              {activeSidebarItem === "My Sessions" && (
                <h1 className="text-[#685AAD]  text-sm sm:text-md custom-lg:text-5xl  font-extrabold ml-0 sm:ml-6 absolute top-16 left-16 sm:static">
                  My&nbsp;Sessions
                </h1>
              )}
            </div>
  
            <div
              ref={targetRef}
              className="flex items-center space-x-4 relative -right-4 select-none "
            >
              {/* <Bell size={24} className="cursor-pointer text-darkBlue" /> */}
              <div className="flex gap-4 custom-2xl:gap-6 mr-2">
                <Image
                  src={dark}
                  alt=""
                  className="w-5 h-5 custom-2xl:w-6 custom-2xl:h-6"
                />
                <Image
                  src={translate}
                  alt=""
                  className="w-5 h-5 custom-2xl:w-6 custom-2xl:h-6"
                />
                <Image
                  src={bell}
                  alt=""
                  className="w-5 h-5 custom-2xl:w-6 custom-2xl:h-6"
                />
              </div>
  
             
  
              <div
                onClick={toggleProfile}
                className={`flex bg-[#EDE8FA] hover:cursor-pointer  px-2 py-1 justify-between w-[9rem] custom-2xl:w-[12.5rem]   h-10 custom-2xl:h-11 items-center rounded-md ${
                  isProfileOpen ? "border border-[#685aad7a]" : "border-0"
                }`}
              >
                <div className="w-6 custom-2xl:w-7 h-6 custom-2xl:h-7  rounded-full overflow-hidden">
                  <img src={profilepicture} alt="" className="h-full w-full" />
                </div>
                {/* <div className="flex items-center  w-full  gap-2 custom-2xl:gap-4">
  
                </div> */}
                <span className="text-sm custom-2xl:text-base font-bold text-[#685AAD]">
                  {firstname}
                </span>
  
                {isProfileOpen ? (
                  <ChevronUp
                    size={18}
                    className="cursor-pointer  text-[#685AAD] "
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="cursor-pointer  text-[#685AAD] "
                  />
                )}
              </div>
  
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 hover:cursor-pointer  bg-[#EDE8FA] font-bold rounded-md shadow-lg py-1 z-10 top-full w-[9rem] custom-2xl:w-[12.5rem] px-4 border border-[#685aad7a]">
                  <Link
                    href="/etutor/profile"
                    className="block px-2 py-2 custom-2xl:py-3 text-sm text-[#685AAD]  border-b border-[#685aad7a] "
                  >
                    Profile
                  </Link>
  
                  <a
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="block px-2 py-2 custom-2xl:py-3 text-sm text-[#685AAD] "
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </header>
          {renderContent()}
        </main>
      </div>
    );
  



};

export default SessionsDashboard;
