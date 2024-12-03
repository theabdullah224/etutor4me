"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ChatComponent from "./ChatComponent"; // Make sure to create this file
import tier from "../../../../public/tier.svg";
import messageicon from "../../../../public/chatChaticonLightPurple.svg";
import folder from "../../../../public/chatfoldericonLightpurple.svg";
import profile from "../../../../public/profileicon.svg";
import sample from "../../../../public/assets/heroimg.png";

import {
  Send,
  MessageSquare,
  Folder,
  User,
  PaperclipIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import chaticon from "../../../../public/chaticon (2).svg";
import sendicon from "../../../../public/sendicon.svg";
import purplechaticon from "../../../../public/purplechaticon.svg";
import foldericonpurple from "../../../../public/foldericonpurple.svg";
import profileicon from "../../../../public/profile icon purple.svg";
import sampleimg from "../../../../public/assets/heroimg.png";
import plusicon from "../../../../public/plusicon.svg";
import pdficon from "../../../../public/pdf icon.svg";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const TutorListItem = ({
  tutor,
  isActive,
  onClick,
  onChatClick,
  onFolderClick,
  onProfileClick,
}: any) => (
  <div
    className={`flex flex-col custom-2xl:flex-row justify-between items-center py-6 px-4 cursor-pointer mr-[3%] rounded-xl my-4 bg-[#A296CC]  border-red-700`}
  >
    <div className="flex items-center" onClick={onClick}>
      <img
        src={tutor.user.profilePicture}
        alt={tutor.firstName}
        width={44}
        height={44}
        className="rounded-full mr-3 border"
      />
      <div className="flex-grow">
        <p
          className={`font-semibold text-lg ${
            isActive ? "text-white" : "text-white"
          }`}
        >
          {tutor.firstName}
        </p>
      </div>
    </div>

    {/* icons */}
    <div className="flex  justify-between items-end  mt-2 custom-2xl:mt-0 w-full max-w-[7rem]  ">
      <button onClick={onChatClick} className=" rounded-full ">
        <Image src={purplechaticon} alt="" className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button onClick={onFolderClick} className="  rounded-full">
        <Image
          src={foldericonpurple}
          alt=""
          className="w-4 h-4 sm:w-6 sm:h-6"
        />
      </button>
      <button onClick={onProfileClick} className=" rounded-full">
        <Image src={profileicon} alt="" className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    </div>
  </div>
);

const ChatMessage = ({ message, isUser }:any) => {
  // Check if message exists and has content and timestamp
  if (!message || !message.content || !message.timestamp) return null;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[70%] rounded-2xl p-3 ${
          isUser ? "bg-[#685AAD] text-white" : "bg-white text-[#473171]"
        }`}
      >
        <p className="text-sm sm:text-md custom-xl:text-xl font-medium break-words">
          {message.content}
        </p>
        <span
          className={`text-xs sm:text-sm custom-xl:text-md opacity-70 mt-1 block ${
            isUser ? "text-white float-right" : "text-[#9B85C8]"
          }`}
        >
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

const FileItem = ({ file, onDownload }: any) => (
  <div className="flex items-center justify-between bg-[#8a7db7] rounded-xl p-3 mb-2">
    <div className="flex items-center">
      <PaperclipIcon size={20} color="white" className="mr-2" />
      <span className="text-white">{file.name}</span>
    </div>
    <button onClick={() => onDownload(file)} className="text-white underline">
      Download
    </button>
  </div>
);

interface MyEtutorprops {
  tutor: any;
  showchatvalue: boolean;
}

function MyEtutor({ tutor, showchatvalue }: MyEtutorprops) {
  const { data: session } = useSession();
  const [showChat, setShowChat] = useState(false || showchatvalue);

  const [activeTutor, setActiveTutor] = useState(0);
  const [activeView, setActiveView] = useState("chat");
  const [tutors, setTutors] = useState();
  const [conversationId, setConversationId] = useState<string | null>(null);

  const fileInputRef = useRef(null);
  const [messages, setMessages] = useState([]); // State to hold messages
  const [newMessage, setNewMessage] = useState(""); // State for the input message
  const messagesEndRef = useRef(null); // Reference to scroll to the bottom
  const [recievedmessages, setRecievedmessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //@ts-ignore
  const [showmessages, setshowmessages] = useState([] || tutor);
  const [isExpanded, setIsExpanded] = useState(false);


  console.log(recievedmessages)
  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session]);

  useEffect(() => {
    if (userId) {
      fetchSenders();
    }
  }, [userId]);

  async function fetchSenders() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/recipient/messages?recipientId=${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch senders");
      }
      const senders = await response.json();
      setRecievedmessages(senders);
      console.log("Users who messaged the recipient:", senders);
    } catch (error) {
      console.error("Error fetching senders:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchSenders();
  }, []);

  const fetcher = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();

    // Handle the specific response cases
    if (
      data.message === "No conversation found between these users" ||
      data.message === "No messages found for this conversation"
    ) {
      return { messages: [], data: [] };
    }

    return data;
  };

  // Use SWR hook
  const { data: messageData } = useSWR(
    session
    //@ts-ignore
      ? `/api/message/conversation?userId=${userId}&recipientId=${showmessages.user?._id}`
      : null,
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      onSuccess: (data) => {
        setMessages(data.messages || []); // Set messages or empty array if no messages

        // Set the conversationId if it's not already set
        if (data.length > 0 && !conversationId) {
          setConversationId(data[0].conversationId);
        }
      },
      onError: (error) => {
        console.error("Error fetching messages:", error);
        setMessages([]); // Set empty array on error
      },
    }
  );

  // Function to handle sending a new message
  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!newMessage.trim()) return; // Prevent sending empty messages

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderId: userId, // Replace with actual sender ID
          //@ts-ignore
          recipientId: showmessages.user._id, // Replace with actual recipient ID (e.g., tutor ID)
          content: newMessage,
        }),
      });

      const savedMessage = await response.json();

      // After sending the message, set the conversationId
      const newConversationId = savedMessage.conversationId; // Get conversationId from the response

      // If there was no conversationId previously, set it now
      setConversationId(newConversationId);

      // Update message list with the new message and conversationId
      // @ts-ignore
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...savedMessage, conversationId: newConversationId }, // Include conversationId
      ]);

      setNewMessage(""); // Clear the message input field
      scrollToBottom(); // Scroll to the bottom of the chat
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  // Scroll to the latest message
  const scrollToBottom = () => {
    //@ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [tutors]);

  if (showChat) {
    return (
      <div className="bg-[#EDE8FA] w-full h-screen rounded-3xl p-6  mt-11 text-white">
        <div className="flex h-full  gap-3 custom-2xl:gap-4 overflow-hidden     ">
          {/* Sidebar */}
          <div className="hidden sm:block w-[30.2%]  bg-[#EDE8FA]  border-red-700 h-full  overflow-hidden">
            <h2 className="text-xl custom-2xl:text-4xl font-bold text-[#685AAD] px-4 py-4 ml-6">
              My Students
            </h2>

            <div className=" hidden pt-6  overflow-y-auto scrollbar-thin sm:flex flex-col gap-3 custom-2xl:gap-6  scrollbar-track-transparent scrollbar-thumb-[#685aad40]  scrollbar-thumb-rounded-3xl h-[90%]  ">
              {recievedmessages.length > 0 &&
                recievedmessages.map((message:any, index) => (
                  <TutorListItem
                    key={index}
                    tutor={message.details}
                    isActive={activeTutor === message}
                    onClick={() => setshowmessages(message.details)}
                    onChatClick={() => setActiveView("chat")}
                    onFolderClick={() => setActiveView("folder")}
                    onProfileClick={() => {}} // Placeholder for profile functionality
                  />
                ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-grow flex flex-col rounded-3xl  bg-[#A296CC]  h-full    max-w-full">
            {/* Chat Header */}
            <div className="bg-[#A296CC] py-3 custom-2xl:py-5  px-4 flex rounded-t-3xl  pl-6 custom-2xl:pl-10   ">
              <Image
                src={chaticon}
                //@ts-ignore
                alt={showmessages?.firstName}
                className=" mr-3 custom-2xl:mr-5 w-5 custom-2xl:w-8 h-5 custom-2xl:h-8 mt-1"
              />
              <h2 className="text-xl custom-2xl:text-3xl font-bold text-white">
                {
                //@ts-ignore
                showmessages?.firstName}
              </h2>
            </div>

            {activeView === "chat" && (
              <>
                {/* Messages */}
                <div className="flex-grow p-1 custom-2xl:p-3 bg-[#A296CC] border-t border-[#8b55ff51] mx-4 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#685aad40] scrollbar-thumb-rounded-3xl">
                  {messages.map((msg, index) => (
                    <>
                      <ChatMessage
                        key={index}
                        message={msg}
                        //@ts-ignore
                        isUser={msg.senderId === userId}
                      />
                    </>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <form
                  onSubmit={handleSendMessage}
                  className="py-2 sm:py-4 px-2 sm:px-10 bg-[#A296CC]  flex items-center justify-center  rounded-b-3xl"
                >
                  <div className="flex items-center bg-[#8a7db7] rounded-full  relative w-full">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="send a message"
                      className="flex-grow py-1 sm:py-2 custom-2xl:py-4 pl-8 custom-2xl:pl-16 pr-8 custom-2xl:pr-16  bg-transparent text-white placeholder-[#b0a9d2] text-sm sm:text-base custom-2xl:text-xl focus:outline-none"
                    />
                    <button type="submit" className="">
                      <Image
                        src={sendicon}
                        alt="Send Icon"
                        className="h-4  custom-2xl:h-6 w-4  custom-2xl:w-6 absolute right-9 top-1/2 transform -translate-y-1/2"
                      />
                    </button>
                  </div>
                </form>
              </>
            )}

            {activeView === "folder" && (
              <>
                {/* <div className=" relative flex-grow p-4 bg-[#A296CC] border-t border-[#8b55ff51] mx-4 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#685aad40] scrollbar-thumb-rounded-3xl">
    {tutors[activeTutor].files.map((file: any) => (
      <div
      key={file.id}
      onClick={() => handleFileDownload(file)}
      className={`bg-[#8170B1] max-w-[34rem] flex items-center p-6  rounded-xl my-3 ${
        file.isReceived ? 'mr-auto' : 'ml-auto'
        }`}
        >
        <Image src={pdficon} alt="PDF Icon" className='w-12 h-12' />
        <div className='ml-3 flex  items-center justify-between  w-full'>
          <span className='max-w-[10rem] text-2xl overflow-hidden text-nowrap font-medium'>
            {file.name}
          </span>
          <span className='text-xs text-gray-300'>
            {file.date} {file.time}
          </span>
        </div>
      </div>
    ))}




    <div className=' absolute bottom-5 right-0  w-full flex justify-end'>

    <button
      onClick={() => fileInputRef.current.click()}
      className="mt-4 text-white py-2 px-4 rounded-full flex items-center gap-3"
      >
      <span className='text-xl text-[#DBD8EF] font-medium'>Add attachment</span>
      <Image src={plusicon} alt="" className='w-8 h-8' />
    </button>
    <input
      ref={fileInputRef}
      type="file"
      onChange={handleFileUpload}
      style={{ display: 'none' }}
      />

      </div>


  </div> */}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EDE8FA] w-full h-full rounded-3xl px-5 custom-xl:px-9 py-5 custom-xl:py-9  mt-[52px] text-white">
      <h1 className="text-xl custom-xl:text-4xl font-bold  text-[#685AAD] px-7 mb-4 sm:mb-6 custom-xl:mb-11">
        My Students
      </h1>

      <div className="flex flex-col gap-2 sm:gap-4 custom-lg:gap-10">
        {recievedmessages.length > 0 &&
          recievedmessages.map((message, index) => (
            <div
              key={index}
              className="bg-[#B4A5D7] rounded-2xl px-4 sm:px-8 custom-2xl:px-12 pt-4 sm:pt-6 custom-2xl:pt-9 pb-4 sm:pb-6 custom-2xl:pb-9 transition-all duration-300"
            >
              <div className="flex flex-col space-y-0">
                {/* Top section */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
                  {/* Left Section (Profile, Name, Courses, Subjects) */}
                  <div className="col-span-full sm:col-span-7 flex flex-col sm:flex-row gap-4 sm:gap-8">
                    {/* Profile Image */}
                    <div className="w-16 h-16 sm:min-w-16 sm:min-h-16 custom-2xl:w-[132px] custom-2xl:h-[132px] rounded-full border relative overflow-hidden mx-auto sm:mx-0">
                      <img
                        src={
                          //@ts-ignore
                          message?.details?.user?.profilePicture ||
                          "/api/placeholder/64/64"
                        }
                        alt="Profile"
                        className="w-full h-full"
                      />
                    </div>

                    {/* Name and Courses */}
                    <div className="flex-grow text-center sm:text-left">
                      <h2 className="font-bold text-base sm:text-lg custom-2xl:text-2xl mb-2">
                        {
                        //@ts-ignore
                        message?.details?.firstName || ""}
                      </h2>
                      <div className="text-white">
                        <p className="mb-1 text-base sm:text-lg custom-2xl:text-xl">
                          Courses:
                        </p>
                        <p className="text-[#473171] text-base sm:text-lg">
                          {
                          //@ts-ignore
                          message.details?.availability || ""}
                        </p>
                      </div>
                    </div>

                    {/* Subjects */}
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-white text-base sm:text-lg custom-2xl:text-xl mb-2">
                        Subjects:
                      </h3>
                      <ul className="space-y-1 text-[#473171] text-base sm:text-lg">
                      {
                      //@ts-ignore
                      message?.details?.subjectChildNeeds?.slice(0, 3).map((subject, index) => (
  <li key={index}>{subject}</li>
))}
                       
                      </ul>
                    </div>
                  </div>

                  {/* Right Section (Grade, School, Icons) */}
                  <div className="col-span-full sm:col-span-5 flex flex-col sm:flex-row justify-between mt-4 sm:mt-0">
                    {/* Grade & School */}
                    <div className="text-center sm:text-left">
                      <div className="mb-4">
                        <h3 className="text-white text-base sm:text-lg custom-2xl:text-xl mb-1">
                          Grade
                        </h3>
                        <p className="text-[#473171] text-base sm:text-lg">
                          {
                          //@ts-ignore
                          message.details?.grade || ""}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-white text-base sm:text-lg custom-2xl:text-xl mb-1">
                          School
                        </h3>
                        <p className="text-[#473171] text-base sm:text-lg">
                          {
                          //@ts-ignore
                          message.details?.Institution || ""}
                        </p>
                      </div>
                    </div>

                    {/* Icons */}
                    <div className="flex sm:flex-col justify-center gap-4 sm:gap-6 mt-4 sm:mt-0">
                      <div className="flex gap-8 sm:gap-12">
                        <Image
                          src={messageicon}
                          alt=""
                          className="w-6 sm:w-6 custom-2xl:w-8 hover:cursor-pointer"
                          onClick={() => {
                            setShowChat(true);
                            //@ts-ignore
                            setshowmessages(message.details);
                          }}
                        />
                        <Image
                          src={folder}
                          alt=""
                          className="w-6 sm:w-6 custom-2xl:w-8 hover:cursor-pointer"
                        />
                      </div>

                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`flex items-center justify-center gap-2 text-[#8653FF] hover:text-[#8653FF] transition-colors text-base sm:text-lg custom-2xl:text-xl ${
                          isExpanded &&
                          "text-transparent hover:text-transparent transition-none"
                        }`}
                      >
                        {isExpanded ? (
                          <>
                            Less info
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            More info
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="pt-6 border-t border-white/20 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                      {/* Additional Information - Left Side */}
                      <div className="col-span-full sm:col-span-7">
                        <h3 className="text-white mb-4 text-center sm:text-left">
                          Additional Information:
                        </h3>
                        <p className="text-[#473171] leading-relaxed text-base sm:text-lg">
                        {
                        //@ts-ignore
                        message.details?.additionalInformation || ""}
                        </p>
                      </div>

                      {/* Right Side Information */}
                      <div className="col-span-full sm:col-span-5 space-y-4 text-center sm:text-left">
                        <div>
                          <h3 className="text-white/90 mb-1 text-base sm:text-lg">
                            Signup date
                          </h3>
                          <p className="text-[#473171] text-base sm:text-lg">
                            {
                            //@ts-ignore
                            message.details?.user?.createdAt ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(new Date(message.details.user.createdAt)) : 'Date not available' || ""}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-white/90 mb-1 text-base sm:text-lg">
                            Free trials left
                          </h3>
                          <p className="text-[#473171] text-base sm:text-lg">
                            1/2 free trial
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Toggle Button */}
                {isExpanded && (
                  <div className="flex justify-center sm:justify-end p-0 mt-6 mb-6 sm:mb-12">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex items-center gap-2 text-[#8653FF] hover:text-[#8653FF] transition-colors text-base sm:text-lg custom-2xl:text-xl"
                    >
                      {isExpanded ? (
                        <>
                          Less info
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          More info
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyEtutor;
