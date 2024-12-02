import Headings from '@/components/Headings'
import React from 'react'
import blackbg from "../../../../public/assets/homepage/listbackpic.png"
import Button from '@/components/Button'
import Link from 'next/link'
import  './TutorsList.css'
const SeeTutorsList = () => {
  return (
    <div   className='tutor_list flex  items-center gap-10 justify-center  flex-col bg-cover py-32 my-64  bg-center  w-full rounded-[30px]    mb:gap-3 text-center mb:px-0 mb:py-16 mb:my-8 xl:py-50'
    >
        <h2 className='text-[72px] text-[#8179A7] mb:text-xl lg:text-[40px] xl:text-[50px]'>600+ More eTutors found</h2>
      <Headings className='mb:mt-2 ' heading='Sign up to see the full list'/>
     <Link href='/SignupAs'><Button className='py-7 px-24 mt-12 lg:text-[25px]' btnName='SEE THE FULL LIST'/></Link> 
    </div>
  )
}

export default SeeTutorsList
