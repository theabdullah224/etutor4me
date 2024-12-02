import React from 'react'
import LevelsHeading from './LevelsHeading'

const Level1 = () => {
  return (
    <div className=' contai h-[90vh] w-[83%] mx-auto flex flex-col justify-center items-center my-auto' >
      <LevelsHeading headingText='Unlock Your Tutoring Potential with Us!' />

      <div
       className='text-[#A09EA7] text-[42px] xl:text-[30px] lg:text-[25px]  mt-1 tb:text-2xl mb:text-[18px] text-center font-roboto_medium font-medium  max-w-[96rem]' >
        <p>
        At eTutor4Me, we’re all about connecting awesome tutors with students eager to learn. Our platform is like the perfect classroom—but you can teach in your pajamas if you want! We make online tutoring flexible, fun, and super
        </p>
        <p className='max-w-[90rem]' >
        effective. Whether you’re teaching math, science, or even High Valyrian (okay, maybe not High Valyrian), we’ve got the tools and support you need to shine. Set your own schedule, teach from your favorite coffee shop, and help students from anywhere, anytime.
        </p>
    
      </div>
    </div>
  )
}

export default Level1
