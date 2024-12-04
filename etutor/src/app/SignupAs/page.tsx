"use client"
import SignUpNavbar from '@/components/SignUpNavbar'
import React, { useEffect } from 'react'
import Image from 'next/image'
import img from "../../../public/assets/signupAs.png"
import QuestionBtn from '../ParentSignup/Components/QuestionBtn'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
const Page = () => {

  // const searchParams = useSearchParams();
  // const refId = searchParams.get('ref');
  
  
  // useEffect(() => {
  //   if (refId) {
  //     localStorage.setItem('referIdPerson', refId);
  //   }
  // }, [refId]);
  return (
    

    <div>
      <SignUpNavbar/>
      <div className='flex 2xl:mt-10 w-full items-center custom-2xl:items-start justify-center 2xl:w-[90%] mr-auto gap-24 custom-2xl:justify-between h-full mt-auto mb:gap-5 mb:w-full mb:p-8 mb:flex-col-reverse'>
        <div className=' mb:w-full custom-2xl:mt-28 hidden custom-2xl:block'>

        <Image className='w-full h-full' src={img} alt=''/>
        </div>
        <div className='max-w-[48rem] w-full pt-10 text-center mb:w-full mb:pt-4   h-fit custom-2xl:mt-32 custom-2xl:mr-10  custom-2xl:mx-auto '>
           <Link href='/ParentSignup' > 
           <h1 className='font-extrabold py-5 custom-2xl:py-8 border-none mb-7 bg-purpleBtn text-2xl text-[#534988] 2xl:text-4xl rounded-full w-full  px-5 mt-4  border-darkBlue border cursor-pointer text-center lg:text-xl mb:text-sm mb:p-2 mb:mt-2 '>I’m a Parent</h1>
           </Link>
           <Link href='/StudentSignup' >
           <h1 className='font-extrabold py-5 custom-2xl:py-8 border-none mb-7 bg-purpleBtn text-2xl text-[#534988] 2xl:text-4xl rounded-full w-full  px-5 mt-4  border-darkBlue border cursor-pointer text-center lg:text-xl mb:text-sm mb:p-2 mb:mt-2 '>I’m a Student</h1>
            </Link>
           <Link href='/ETutorSignup' > <div className='text-4xl font-medium  py-6 text-customOrange mb:text-sm mb:py-3 mt-7'>I’m an eTutor</div></Link>
           
        </div>
      </div>
    </div>
  
  )
}

export default Page
