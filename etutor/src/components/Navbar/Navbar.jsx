'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/logo.png"
import icon from "../../../public/assets/icons/darkmode.svg"
import hamburger from "../../../public/assets/icons/hamburger-button.svg"
import cross from "../../../public/assets/icons/crossicon.svg"
import Link from 'next/link'
import Button from '../Button'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  const router = useRouter()
  const navigate =(link)=>{
    router.push(link)
  }

  return (
    <div className='flex justify-between items-center py-11  px-[100px] mx-auto  mb:p-5 mb:flex-col xl:px-16 lg:px-10 lg:py-8'>
      
      <div className="mb:hidden">
      <Link href='/' > <Image className='w-[10rem]' src={logo} alt="" /></Link>
      </div>
      
      <div className='mb:hidden flex  items-center justify-between gap-8 xl:gap-6 lg:gap-6 w-[80%]'>
      <ul className='flex text-2xl w-[55%]  justify-between font-medium text-[#473171]  xl:text-xl lg:w-[50%] lg:gap-1 lg:text-[15px]'>
        <Link href="/" passHref><li>How it works</li></Link>
        <Link href="/ETutorSearch"> <li>eTutors</li> </Link>
        <Link href="/Packages"><li  >Packages</li></Link>
        <Link href="/Faqs" > <li >FAQs</li></Link>
        <li>|</li>
        <li>  <Link href="/Student"> For eTutors</Link></li>
      </ul>
      <div className='cursor-pointer'>
        <Image className='w-[7rem] lg:w-[5rem]' src={icon}  />
      </div>

    <Link href='/signin' >  <button className= '  font-medium text-customBlue !text-[27px] focus:outline-none	xl:!text-2xl lg:!text-lg'>SIGN IN</button></Link>
      {/* <button className='bg-customBlue '>SIGN UP</button> */}
     <Link href='/SignupAs' ><Button className='!text-[27px]  px-[44px] py-3 font-extrabold  xl:!text-2xl xl:px-6 xl:py-3 lg:!text-lg lg:px-6 lg:py-2' btnName='SIGN UP' /></Link> 
      </div>

{/* //mobile navbar */}


<div className='hidden mb:block w-full relative'>
  <div className="flex justify-between items-center w-full">
    <div>
      <Link href='/'>
        <Image className='w-[160px] h-[30px]' src={logo} alt="Logo" />
      </Link>
    </div>
    <div>
      {isOpen ? (
        <Image className='h-8 w-8 cursor-pointer' src={cross} alt="Close Menu" onClick={toggleMenu} />
      ) : (
        <Image className='h-8 w-8 cursor-pointer' src={hamburger} alt="Open Menu" onClick={toggleMenu} />
      )}
    </div>
  </div>
  
  <div className={`absolute top-0 left-0 w-full transition-all duration-300 transform ${isOpen ? 'translate-y-12 opacity-100' : '-translate-y-full opacity-0'} bg-white z-50`}>
    <ul className='flex font-bold text-darkBlue mb:flex-col mb:gap-3 py-4'>
      <Link href="/"><li>How it works</li></Link>
      <Link href="/ETutorSearch"><li>eTutors</li></Link>
      <Link href="/Packages"><li>Packages</li></Link>
      <Link href="/Faqs"><li>FAQs</li></Link>
      <li className='hidden'>|</li>
      <Link href="/Student"><li>For eTutors</li></Link>
    </ul>
    <div className='flex flex-col gap-4'>
      <Link href='/signin'><button className='text-customBlue focus:outline-none font-bold w-full'>SIGN IN</button></Link>
      <Link href='/SignupAs'><Button className='mb:text-sm font-bold text-xs w-full' btnName='SIGN UP' /></Link> 
    </div>
  </div>
</div>


     
      
    </div>
  )
}

export default Navbar
