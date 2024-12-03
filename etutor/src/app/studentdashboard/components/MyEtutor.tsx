"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ChatComponent from "./ChatComponent"; // Make sure to create this file
import tier from "../../../../public/tier.svg";
import messageicon from "../../../../public/messageicon.svg";
import folder from "../../../../public/foldericon.svg";
import profile from "../../../../public/profileicon.svg";
import sample from "../../../../public/assets/heroimg.png";

import level1 from "../../../../public/level-1.svg";
import level2 from "../../../../public/level-2.svg";
import level3 from "../../../../public/level-3.svg";
import level4 from "../../../../public/level-4.svg";
import level5 from "../../../../public/level-5.svg";
import level6 from "../../../../public/level-6.svg";
import level7 from "../../../../public/level-7.svg";
import level8 from "../../../../public/level-8.svg";
import level9 from "../../../../public/level-9.svg";
import level10 from "../../../../public/level-10.svg";


import { Send, MessageSquare, Folder, User, PaperclipIcon } from "lucide-react";
import chaticon from "../../../../public/chaticon (2).svg";
import sendicon from "../../../../public/sendicon.svg";
import purplechaticon from "../../../../public/purplechaticon.svg";
import foldericonpurple from "../../../../public/foldericonpurple.svg";
import profileicon from "../../../../public/profile icon purple.svg";
import sampleimg from "../../../../public/assets/heroimg.png";
import plusicon from "../../../../public/plusicon.svg";
import pdficon from "../../../../public/pdf icon.svg";
import { useSession } from "next-auth/react";

const TutorListItem = ({
  tutor,
  isActive,
  onClick,
  onChatClick,
  onFolderClick,
  onProfileClick,
}: any) => (
  <div
    className={` hidden sm:flex flex-row justify-between items-center py-2 sm:py-3 custom-2xl:py-6  pl-2 sm:pl-3 custom-2xl:pl-5 pr-4 custom-2xl:pr-9 cursor-pointer   rounded-lg md:rounded-xl  bg-[#A296CC]  `}
  >
    <div className="flex items-center" onClick={onClick}>
      <img
        src={tutor.user.profilePicture}
        alt={tutor.contactInformation.firstName}
        className="rounded-full mr-4 w-4 sm:w-7 h-4 sm:h-7  custom-2xl:h-[60px] custom-2xl:w-[60px]"
      />
      <div className="flex-grow">
        <p
          className={`font-semibold text-base custom-2xl:text-2xl hidden md:block  truncate  ${
            isActive ? "text-white" : "text-white"
          }`}
        >
          {tutor.contactInformation.firstName}
        </p>
      </div>
    </div>

    {/* icons */}
    <div className="flex  justify-between items-end   custom-2xl:mt-0 w-full max-w-[2.9rem] sm:max-w-[4rem] custom-2xl:max-w-[6.8rem]  ">
      <button onClick={onChatClick} className=" rounded-full ">
        <Image
          src={purplechaticon}
          alt=""
          className=" w-3 sm:w-4  h-3 sm:h-4 custom-2xl:w-7 custom-2xl:h-7"
        />
      </button>
      <button onClick={onFolderClick} className="  rounded-full">
        <Image
          src={foldericonpurple}
          alt=""
          className=" w-3 sm:w-4  h-3 sm:h-4 custom-2xl:w-7 custom-2xl:h-7"
        />
      </button>
      <button onClick={onProfileClick} className=" rounded-full">
        <Image
          src={profileicon}
          alt=""
          className=" w-3 sm:w-4  h-3 sm:h-4 custom-2xl:w-7 custom-2xl:h-7"
        />
      </button>
    </div>
  </div>
);

const ChatMessage = ({ message, isUser }: any) => {
  // Check if message exists and has content and timestamp
  if (!message || !message.content || !message.timestamp) return null;

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-2 custom-2xl:mb-4`}
    >
      <div
        className={`max-w-[70%] rounded-lg custom-2xl:rounded-2xl px-2 py-1 custom-2xl:p-3 ${
          isUser ? "bg-[#685AAD] text-white" : "bg-white text-[#473171]"
        }`}
      >
        <p className="text-sm sm:text-base custom-2xl:text-xl font-medium break-words transition-all">
          {message.content}
        </p>
        <span
          className={`text-xs custom-2xl:text-base opacity-70 custom-2xl:mt-1 block ${
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
  tutorimp: any;
  showchatvalue: boolean;
  setActiveFindEtutor: (item: string) => void;
  setTutor: any;
}

function MyEtutor({
  tutorimp,
  showchatvalue,
  setActiveFindEtutor,
  setTutor,
}: MyEtutorprops) {
  const { data: session } = useSession();
  const [showChat, setShowChat] = useState(false || showchatvalue);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTutor, setActiveTutor] = useState(0);
  const [activeView, setActiveView] = useState("chat");
  const [tutors, setTutors] = useState();
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [userId, setUserId] = useState(null);
  const fileInputRef = useRef(null);
  const [messages, setMessages] = useState([]); // State to hold messages
  const [newMessage, setNewMessage] = useState(""); // State for the input message
  const messagesEndRef = useRef(null); // Reference to scroll to the bottom
  const [recievedmessages, setRecievedmessages] = useState([]);
  const [tutor, settutor] = useState(tutorimp);

  // Fetch messages when the chat view is active and a tutor is selected

  console.log(recievedmessages);
  const userID = session?.user.id;
  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session, showChat]);

  useEffect(() => {
    if (userId) {
      fetchSenders();
    }
  }, [userId, showChat]);

  async function fetchSenders() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/recipient/messages?recipientId=${userID}`
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
  }, [showChat, session]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch(
          `/api/message/conversation?userId=${userID}&recipientId=${tutor.user._id}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (
          data.message === "No conversation found between these users" ||
          data.message === "No messages found for this conversation"
        ) {
          setMessages([]);
        } else {
          setMessages(data.messages); // Store messages in state
        }

        // Set the conversationId if it's not already set
        if (data.length > 0 && !conversationId) {
          setConversationId(data[0].conversationId); // Set the conversationId from the first message (or any message)
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }

    fetchMessages();
  }, [newMessage]);

  // Function to handle sending a new message
  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!newMessage.trim()) return; // Prevent sending empty messages

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderId: userID, // Replace with actual sender ID
          recipientId: tutor.user._id, // Replace with actual recipient ID (e.g., tutor ID)
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
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showChat]);

  useEffect(() => {
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [tutors, showChat]);

  // const handleFileUpload = (e:any) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const currentDate = new Date();
  //     const fileDate = currentDate.toLocaleDateString();
  //     const fileTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  //     const newFile = {
  //       id: tutors[activeTutor].files.length + 1,
  //       name: file.name,
  //       date: fileDate,
  //       time: fileTime,
  //       isReceived: false
  //     };

  //     const updatedTutors = [...tutors];
  //     updatedTutors[activeTutor].files.push(newFile);

  //     // Simulate receiving the same file
  //     setTimeout(() => {
  //       const receivedFile = {
  //         ...newFile,
  //         id: updatedTutors[activeTutor].files.length + 1,
  //         isReceived: true
  //       };
  //       updatedTutors[activeTutor].files.push(receivedFile);
  //       setTutors(updatedTutors);
  //     }, 1000); // Simulate a 1-second delay

  //     setTutors(updatedTutors);
  //   }
  // };

  // const handleFileDownload = (file:any) => {
  //   // Implement file download logic here
  //   console.log(`Downloading file: ${file.name}`);
  // };

  // const generateTutorResponse = (userMessage:any) => {
  //   const responses = [
  //     "That's an interesting point. Let's discuss it further.",
  //     "I understand your concern. Here's what we can do...",
  //     "Great question! The answer is...",
  //     "Let me clarify that for you.",
  //     "I'd be happy to help you with that.",
  //     "Can you provide more details about your question?",
  //   ];
  //   return responses[Math.floor(Math.random() * responses.length)];
  // };

  if (showChat) {
    return (
      <div className="bg-[#EDE8FA] w-full h-screen rounded-3xl p-6  mt-11 text-white">
        <div className="flex h-full  gap-3 custom-2xl:gap-4 overflow-hidden     ">
          {/* Sidebar */}
          <div className="hidden sm:block w-[30.2%]  bg-[#EDE8FA]  border-red-700 h-full  overflow-hidden">
            <h2 className="text-xl custom-2xl:text-4xl font-bold text-[#685AAD] px-4 py-4 ml-6">
              My eTutors
            </h2>

            <div className=" hidden pt-6  overflow-y-auto scrollbar-thin sm:flex flex-col gap-3 custom-2xl:gap-6  scrollbar-track-transparent scrollbar-thumb-[#685aad40]  scrollbar-thumb-rounded-3xl h-[90%]  ">
              {recievedmessages.length > 0 &&
                recievedmessages.map((message, index) => (
                  <TutorListItem
                    key={index}
                    // @ts-ignore
                    tutor={message?.details}
                    isActive={activeTutor === message}
                    // @ts-ignore
                    onClick={() => settutor(message?.details)}
                    onChatClick={() => setActiveView("chat")}
                    onFolderClick={() => setActiveView("folder")}
                    onProfileClick={() => {
                      setActiveFindEtutor("Find eTutor");
                      // @ts-ignore
                      setTutor(message?.details);
                    }} // Placeholder for profile functionality
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
                alt=""
                className=" mr-3 custom-2xl:mr-5 w-5 custom-2xl:w-8 h-5 custom-2xl:h-8 mt-1"
              />
              <h2 className="text-xl custom-2xl:text-3xl font-bold text-white">
                {tutor?.contactInformation?.firstName}
              </h2>
            </div>

            {activeView === "chat" && (
              <>
                {/* Messages */}
                <div className="flex-grow p-1 custom-2xl:p-3 bg-[#A296CC] border-t border-[#8b55ff51] mx-4 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#685aad40] scrollbar-thumb-rounded-3xl">
                  {Array.isArray(messages) && messages.length > 0
                    ? messages.map((msg, index) => (
                        <>
                          <ChatMessage
                            key={index}
                            message={msg}
                            // @ts-ignore
                            isUser={msg.senderId === userID}
                          />
                        </>
                      ))
                    : ""}

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
    <div className="bg-[#EDE8FA] w-full h-full rounded-3xl px-5 custom-xl:px-9 py-5 custom-xl:py-9  mt-[59px] text-white">
      <h1 className="text-xl custom-xl:text-4xl font-bold  text-[#685AAD] px-7 mb-4 sm:mb-6 custom-xl:mb-10">
        My eTutors
      </h1>

      <div className="flex flex-col gap-2 sm:gap-4 custom-lg:gap-10">
        {recievedmessages.length > 0 &&
          recievedmessages.map((message:any, index) => (
            <div
              key={index}
              className="flex  justify-between items-center  custom-xl:items-center  py-4 custom-xl:py-9 rounded-2xl bg-[#A296CC] pl-6 sm:px-11 pr-6  custom-xl:flex-row custom-xl:gap-0 gap-4"
            >
              {/* name and tier box */}
              <div className="flex  justify-start  w-fit custom-xl:w-fit  custom-xl:flex-row gap-2 custom-xl:gap-6 h-fit items-center  ">
                <div className="w-8 sm:h-16 custom-xl:h-[132px] h-8 sm:w-16 custom-xl:w-[132px] rounded-full bg-white relative ">
                  <div className="overflow-hidden  rounded-full h-full w-full">
                    <img
                      src={message?.details?.user?.profilePicture || ""}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="tier w-5 sm:w-8 custom-xl:w-14 h-5 sm:h-8 custom-xl:h-14 absolute -bottom-1 -left-2">
                    <Image
                    src={
                      message?.details?.level == "1"
                        ? level1
                        : message?.details?.level == "2"
                        ? level2
                        : message?.details?.level == "3"
                        ? level3
                        : message?.details?.level == "4"
                        ? level4
                        : message?.details?.level == "5"
                        ? level5
                        : message?.details?.level == "6"
                        ? level6
                        : message?.details?.level == "7"
                        ? level7
                        : message?.details?.level == "8"
                        ? level8
                        : message?.details?.level == "9"
                        ? level9
                        : message?.details?.level == "10"
                        ? level10
                        : level1
                    }
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className=" h-full flex flex-col items-center justify-center gap-6 max-w-48 truncate">
                  <h1 className="font-bold text-sm sm:text-lg custom-xl:text-2xl  w-full text-center custom-xl:text-start ">
                    {message?.details?.contactInformation?.firstName}
                  </h1>

                  <div className="w-full  text-center hidden custom-xl:block custom-xl:text-start">
                    <p className="text-xl">Availability:</p>
                    <span className="text-[#473171] text-lg truncate ">
                      {/* {message?.details?.experience?.availableHours} */}
                      { Object.entries(message?.details?.experience?.generalAvailability).map(([day, times]) => (
                        
          <div key={day} className="flex">
            <h3>{day} :</h3>  <p>{
            // @ts-ignore
            times?.join(', ')}</p>
          </div>
        ))}
                    </span>
                  </div>
                </div>
              </div>
              {/* subject and info box */}
              <div className="custom-xl:max-w-52  w-full  h-fit custom-2xl:flex flex-col items-center custom-xl:items-start hidden ">
                <span className="text-md">Subjects:</span>
                <p className="  text-[#473171] text-md text-center custom-xl:text-start">
                  {message?.details?.experience?.subjectsTutored.join(",")}
                </p>
              </div>

              {/* study and experience box */}
              <div className=" flex-col gap-2  custom-xl:max-w-52 w-full custom-xl:items-start  hidden custom-2xl:flex">
                <div className="flex flex-col items-center custom-xl:items-start">
                  <span className="text-md text-white">Study</span>
                  <p className="text-md text-[#473171]">
                    {message?.details?.education.degree}
                  </p>
                </div>

                <div className="flex flex-col items-center custom-xl:items-start">
                  <span className="text-md text-white">
                    Teaching Experience
                  </span>
                  <p className="text-md text-[#473171]">
                    {message?.details?.experience?.tutoringExperience || "Not Available"}
                  </p>
                </div>
              </div>

              {/* accept deny box */}

              <div className="flex flex-col items-end custom-2xl:items-start  w-full custom-xl:w-fit custom-xl:py-2">
                <div className=" h-full flex flex-col gap-6 w-fit custom-lg:w-fit">
                  <div className=" flex  h-fit w-full justify-between items-center custom-xl:items-start  gap-4 custom-xl:gap-14">
                    <Image
                      src={messageicon}
                      alt=""
                      className="w-3 sm:w-6 custom-xl:w-8 hover:cursor-pointer"
                      onClick={() => {
                        setShowChat(true);
                        settutor(message?.details);
                      }}
                    />
                    <Image
                      src={folder}
                      alt=""
                      className="w-3 sm:w-6 custom-xl:w-8 hover:cursor-pointer"
                    />
                    <Image
                      onClick={() => {
                        setActiveFindEtutor("Find eTutor");

                        setTutor(message?.details);
                      }}
                      src={profile}
                      alt=""
                      className="w-3 sm:w-6 custom-xl:w-6 hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyEtutor;
