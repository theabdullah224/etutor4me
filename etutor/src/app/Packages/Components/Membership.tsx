import Headings from '@/components/Headings'
import React from 'react'
import balance from "../../../../public/assets/homepage/balance.png"
import trial from "../../../../public/assets/homepage/trial.png"
import flexible from "../../../../public/assets/homepage/flexible.png"
import Image from 'next/image'
const Membership = () => {
  return (
    <>
    <div className='bg-cardbg  flex flex-col justify-center items-center py-16 mb-3 mb:text-center mb:p-6'>
      <h2 className='text-[65px] 2xl:text-[80px] font-extrabold text-[#685AAD] mb:text-2xl'>Customise your membership</h2>
      <p className='text-xl 2xl:text-[35px] leading-none max-w-screen-lg w-[80%] mt-8 text-[#534988] text-center mb:text-sm'>
        Experience customized tutoring with eTutors: affordable rates, 1:1 sessions from 
        expert-matched tutors, flexible lesson packages, and convenient scheduling options.
      </p>
    </div>
    <div className='w-[80%] m-auto gap-12 items-center flex py-56  xl:py-44 mb:py-24 mb:flex-col mb:gap-10 lg:py-32'>
        <div className='w-1/3 flex flex-col gap-3 items-center text-center mb:w-full'>
            <Image className='' alt='pricing' src={balance}/>
            <h2 className='text-darkBlue 2xl:mt-8 text-3xl 2xl:text-5xl font-extrabold'> Sensible Pricing</h2>
            <p className='text-xl text-[#473171] 2xl:text-3xl leading-6 2xl:mt-2 text-center'>
                Our sensible pricing ensures flexible and affordable rates for both college 
                students and parents aiming to help their children achieve their goals.
            </p>
        </div>
        <div className='w-1/3 flex flex-col gap-3 items-center text-center mb:w-full'>
            <Image className='' alt='pricing' src={trial}/>
            <h2 className='text-darkBlue 2xl:mt-8 text-3xl 2xl:text-5xl font-extrabold'> 2 Free Trials</h2>
            <p className='text-xl text-[#473171] 2xl:text-3xl leading-6 2xl:mt-2 text-center'>
            You get 2 free trials every 6 months 
to find the perfect eTutor, with only 1
 free trial per eTutor
            </p>
        </div>
        <div className='w-1/3 flex flex-col gap-3 items-center text-center mb:w-full'>
            <Image className='' alt='pricing' src={flexible}/>
            <h2 className='text-darkBlue 2xl:mt-8 text-3xl 2xl:text-5xl font-extrabold'> Flexibility</h2>
            <p className='text-xl text-[#473171] 2xl:text-3xl leading-6 2xl:mt-2 text-center'>
            Enjoy the flexibility of rescheduling or
choosing to complete your
purchased sessions with a different 
eTutor 
            </p>
        </div>
    </div>
    </>

  )
}

export default Membership
