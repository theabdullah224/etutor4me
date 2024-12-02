import React from 'react'

const StartJourney = () => {
  return (
    <div className='bg-cardbg flex flex-col justify-center items-center py-24 my-10 mb-3 mb:text-center'>
    <h2 className='text-5xl 2xl:text-[80px] font-extrabold text-blue mb:text-2xl mb:px-3 xl:text-3xl lg:text-3xl'>Getting started is simple with eTutor4Me</h2>
    
 
    <div className='flex w-[90%] justify-around items-stretch space-x-4 py-20 pt-28 mb:flex-col mb:gap-10 mb:py-8 mb:justify-center mb:items-center tb:flex-wrap'>
      <div className='relative  mb:w-4/5  w-[28%] lg:w-[30%]'>
        <div className='absolute inset-0 bg-[#BBB4D5] rounded-xl transform translate-x-6 translate-y-4 shadow-lg z-0 mb:-translate-x-3'></div>
        <div className='relative bg-white h-full rounded-xl border-darkBlue border px-8 py-10  flex flex-col justify-between z-10'>
          <div className='flex flex-col items-start justify-start flex-grow mb:text-start'>
            <h2 className='text-3xl font-extrabold leading-tight text-darkpurple 2xl:text-[50px] mb:text-xl'>
              Take 1 to 2 Free Trial Sessions
            </h2>
            <p className='text-xl  2xl:text-[32px] text-[#473171] leading-tight mt-2 mb:text-sm mb:leading-normal'>
              Begin your journey with a free trial session from one of our eTutors. Experience firsthand how eTutor4Me works, with no obligation.
            </p>
          </div>
        </div>
      </div>
      <div className='relative  mb:w-4/5  w-[28%] lg:w-[30%] mb:!ml-0'>
        <div className='absolute inset-0 bg-[#BBB4D5] rounded-xl transform translate-x-6 translate-y-6 shadow-lg z-0 mb:-translate-x-3'></div>
        <div className='relative bg-white h-full rounded-xl border-darkBlue border px-8 py-10 lg:p-6 flex flex-col justify-between z-10'>
          <div className='flex flex-col items-start justify-start flex-grow mb:text-start'>
            <h2 className='text-3xl font-extrabold leading-tight text-darkpurple 2xl:text-[50px] mb:text-xl'>
            Unsure of your
            Package?
            </h2>
            <p className='text-xl  2xl:text-[32px] text-[#473171] leading-tight mt-2 mb:text-sm mb:leading-normal'>
            Set up a meeting with on of 
our advisors to discuss your 
learning goals to ensure we find
the perfect eTutor match and
package for you
            </p>
          </div>
        </div>
      </div>
      <div className='relative mb:w-4/5  w-[28%] lg:w-[30%] mb:!ml-0'>
        <div className='absolute inset-0 bg-[#BBB4D5] rounded-xl transform translate-x-5 translate-y-6 shadow-lg z-0 mb:-translate-x-3'></div>
        <div className='relative bg-white h-full rounded-xl border-darkBlue border px-8 py-10 lg:p-6 flex flex-col justify-between z-10'>
          <div className='flex flex-col items-start justify-start flex-grow mb:text-start'>
            <h2 className='text-3xl font-extrabold leading-tight text-darkpurple 2xl:text-[50px] mb:text-xl'>
            Start your 
            journey
            </h2>
            <p className='text-xl 2xl:text-[32px] text-[#473171] leading-tight mt-2 mb:text-sm mb:leading-normal'>
            Book your personalized 
session package abd begin
achieving your academic goals
with eTutor4Me
            </p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default StartJourney




