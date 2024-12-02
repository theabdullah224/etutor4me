'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import sortIcon from "../../../../public/assets/icons/sorticon.svg"
import uparrow from "../../../../public/assets/icons/uparrowpurple.svg"
import searchIcon from "../../../../public/assets/icons/searchicon.svg"

const SearchTutor = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const subjects = ['Joining Date','Alphabetical order','Age','Grade','Option 5'];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className='text-[#685AAD]  w-[65%] pr-10 xl:w-[65%] lg:w-[70%] lg:text-2xl text-3xl ml-auto flex mt-32 mb-10 items-end justify-end gap-8  mb:gap-4 mb:text-xs mb:flex-col mb:justify-center mb:items-start mb:my-12 mb:w-full mb:pr-0'>
      <div onClick={toggleDropdown} className='bg-[#DBCAFF] text-[#A192D5] w-[45%] relative rounded-full items-center  cursor-pointer px-20 py-6 flex  justify-between gap-16 mb:gap-4 mb:rounded-3xl mb:px-4 mb:py-3 mb:text-sm mb:w-full xl:px-12 xl:py-4 lg:px-10 lg:py-3 '>
        <p className='text-[#A192D5] text-[32px] lg:text-[22px] mb:text-[14px] '>Sort By</p>
      {isDropdownOpen ? (<Image alt='sort' className='w-6 text-[#A192D5] h-10 mb:w-3 mb:h-auto'  src={uparrow}/>):(<Image alt='sort' className='w-6 h-10 mb:w-3 mb:h-auto'  src={sortIcon}/>)}  
        {isDropdownOpen && (
            <div className="absolute z-10 w-[90%]  top-8 mt-16 right-6 mx-auto  rounded-3xl shadow-lg bg-[#DBCAFF] mb:mt-0 mb:left-0 mb:top-12 mb:w-full ">
              <div className="py-4 px-5   ">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center text-[30px] p-5 lg:text-xl text-[#685AAD] border-b border-[#A192D5]    px-5 py-2   cursor-pointer mb:text-sm">
                    
                    <span className='pb-3 mb:pb-1' >{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
      <div className='bg-[#DBCAFF] w-[55%] rounded-full px-20 py-6 flex justify-between   gap-16 mb:gap-2 mb:rounded-3xl mb:px-4 mb:py-3 mb:text-sm mb:w-full  xl:px-12 xl:py-4 lg:px-10 lg:py-3'>
        {/* <p>Search by eTutor's</p> */}
        <input type="text"  placeholder='Search by eTutors' className='placeholder:text-3xl text-[#A192D5] mb:placeholder:text-xs lg:placeholder:text-[20px] lg:text-[20px] w-[70%] placeholder-[#A192D5] bg-transparent focus:outline-none' />
        <Image alt='search' className='w-6 h-10 mb:w-3 mb:h-auto' src={searchIcon}/>
      </div>
    </div>
  )
}

export default SearchTutor
