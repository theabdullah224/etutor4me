import React from 'react'
import logo from "../../public/assets/signup/signuplogo.svg"
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='px-20 bg-cardbg py-12 mb:p-5 lg:px-10'>
      <div className='flex justify-between items-start mb:flex-col mb:gap-5'>
        <div className='flex flex-col justify-between gap-12 mb:py-4 xl:gap-5 mb:gap-4'>
          <div className='flex flex-col gap-9 text-xl text-[#473171] lg:gap-5 xl:text-lg xl:gap-7 lg:text-base mb:text-sm mb:gap-4'>
          <Link  href=''> <Image alt='' src={logo} /></Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-lg mb:text-sm' href=''>contact@etutor4me.com</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-lg mb:text-sm' href='' >Contact us on: <span className='text-green-500'>Whatsapp</span></Link>
          </div>
         
        </div>
        <div className='flex flex-col gap-12 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-[28px] text-[#534988] font-bold mb:text-base xl:text-xl xl:row-gap-5 lg:text-xl'>Additional Resources</h2>
          <div className='flex flex-col gap-9 text-xl text-[#473171] lg:gap-5 xl:text-lg xl:gap-7 lg:text-base mb:text-sm mb:gap-4'>
          <Link className='' href=''>Question Bank</Link>
          <Link className='' href=''>Terms and Conditions</Link>
          <Link className='' href=''>Privacy Policy</Link>
          <Link className='' href=''>Cookie Policy</Link>
          </div>
        
        </div>
        <div className='flex flex-col gap-12 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-[28px] text-[#534988] font-bold mb:text-base xl:text-xl xl:row-gap-5 lg:text-xl'>Our Services</h2>
          <div className='flex flex-col gap-9 text-xl text-[#473171] lg:gap-5 xl:text-lg xl:gap-7 lg:text-base mb:text-sm mb:gap-4'>
          <Link className='' href=''>Online Tutoring</Link>
          <Link className='' href=''>For Employees</Link>
          <Link className='' href=''>GCSE Exam</Link>
          <Link className='' href=''>MarkMyGCSE</Link>
          </div>
        
        </div>
        <div className='flex flex-col gap-12 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-[28px] text-[#534988] font-bold mb:text-base xl:text-xl xl:row-gap-5 lg:text-xl'>Private Tutoring</h2>
          <div className='flex flex-col gap-9 text-xl text-[#473171] lg:gap-5 xl:text-lg xl:gap-7 lg:text-base mb:text-sm mb:gap-4'>
          <Link className='' href=''>Math Tutors</Link>
          <Link className='' href=''>English Tutors</Link>
          <Link className='' href=''>Physics Tutor</Link>
          <Link className='' href=''>GCSE Tutors</Link>
          </div>
        
        </div>
        <div className='flex flex-col gap-12 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-[28px] text-[#534988] font-bold mb:text-base xl:text-xl xl:row-gap-5 lg:text-xl'>More Information</h2>
          <div className='flex flex-col gap-9 text-xl text-[#473171] lg:gap-5 xl:text-lg xl:gap-7 lg:text-base mb:text-sm mb:gap-4'>
          <Link className='' href=''>Frequently Asked Questions</Link>
          <Link className='' href=''>About etutor4me</Link>
          <Link className='' href=''>Join Us</Link>
          <Link className='' href=''>Blog</Link>
          </div>
        
        </div>

      </div>
      <div className=' text-xl text-[#473171] lg:gap-5 xl:text-lg xl:gap-7 lg:text-base mb:text-sm'>
        {/* <Link href=''>contact@etutor4me.com</Link>
        <Link href='' className='mt-3'>Contact us on: <span className='text-green-500'>Whatsapp</span></Link> */}
        <p className='mt-16 mb:mt-10'>Copyright 2024 / etutor4me</p>
      </div>
    </div>
  )
}

export default Footer
