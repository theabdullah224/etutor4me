'use client'
import React, { useState } from 'react'
import ReviewFormHead from '../ReviewFormHead'
import InputHeading from '../InputHeading'
import EnteredInfo from './EnteredInfo'
import ContactInformation from '@/app/TutorSignup/components/ContactInformation'

const ReviewContactInfo = () => {
    const [EditActive,setEditActive] = useState(false)
    const handleEditToggle = () => {
        setEditActive(!EditActive);
      };
  return (
    <div className='bg-reviewbg p-8 px-10 rounded-[30px] mt-16' >
      <ReviewFormHead heading='Contact Information' EditActive={EditActive} handleEditToggle={handleEditToggle} />
      {EditActive ? <ContactInformation/>:
      <div className='grid grid-cols-2 gap-20 py-12 pl-5' >
        <EnteredInfo name='Selected Country' info='United States' />
        <EnteredInfo name='ZIP Code' info='12345' />
        <EnteredInfo name='First Name' info='XXXXXXXXX' />
        <EnteredInfo name='Email' info='email@gmail.com' />
        <EnteredInfo name='Last Name' info='XXXXXXXXX' />
        <EnteredInfo name='Phone Number' info='+12345678912' />
      </div>}
      
    </div>
  )
}

export default ReviewContactInfo
