'use state'
import React, { useState } from 'react';
import Image from 'next/image';
import edit from "../../../../public/assets/icons/editicon.svg";
// import save from "../../../../public/assets/icons/saveicon.svg"; // Add the save icon
// import cancel from "../../../../public/assets/icons/cancelicon.svg"; // Add the cancel icon
import FormHeading from './FormHeading';

const ReviewFormHead = ({ heading,handleEditToggle,EditActive }:any) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Add save logic here
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Add cancel logic here (e.g., reset form fields)
  };

  return (
    <div className={`flex justify-between pb-2 custom-xl:pb-4 custom-xl:pl-5 items-center border-b ${isEditing ? 'border-customBlue' : 'border-darkBlue'} `}>
      <FormHeading heading={heading} />
      <div className='flex gap-2'>
        {EditActive ? (
          <div className='flex custom-xl:font-bold items-center gap-3 custom-xl:gap-8' >
            <button 
              className='flex items-center gap-2 '
            onClick={()=>handleEditToggle()}
            >
              <span  className='text-sm custom-xl:text-[20px] text-customBlue '>Cancel</span>
            </button>
            <button 
              className='flex items-center justify-center gap-2 bg-customBlue custom-xl:px-0 px-6 custom-xl:py-0 py-1.5 custom-xl:w-28  custom-xl:h-14 rounded-full'
              onClick={()=>handleEditToggle()}
            >
            
              <span className='text-sm custom-xl:text-[20px] text-white '>Save</span>
            </button>
          </div>
        ) : (
          <button 
            className='flex items-center gap-1 custom-xl:gap-2 cursor-pointer'
            onClick={()=>handleEditToggle()}
          >
            <Image src={edit} alt='Edit' className='w-3 custom-xl:w-5' />
            <span className='text-sm custom-xl:text-[22px] text-customBlue underline'>Edit</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewFormHead;
