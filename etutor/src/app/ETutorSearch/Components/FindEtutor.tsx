import Button from '@/components/Button'
import React from 'react'
import Link from 'next/link'
const FindEtutor = () => {
  return (
    <div className=' flex flex-col justify-center items-center  gap-10  mb:gap-6 h-[80vh] lg:h-[70vh] mb:h-[60vh]' >
      <h2 className='text-darkBlue text-[6rem] font-extrabold mb:text-3xl xl:text-[4rem] lg:text-[3.5rem]'> Find your <span className='text-customOrange'>eTutor</span></h2>
      <p className='max-w-[950px] text-[2.8rem] font-medium leading-none text-[#473171]  mb:text-base xl:text-[2rem] lg:text-[1.5rem] text-center'>
        Find the best private tutors online, book a free trial and arrange a meeting
        with one of our vetted tutors.
      </p>
      
    <Link href='/SignupAs' className='mt-24 mb:mt-8' > <Button className='py-6 px-20 mb:py-4' btnName='BOOK A FREE SESSION'/></Link> 
    </div>
  )
}

export default FindEtutor
