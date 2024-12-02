import React from 'react'
import Headings from './Headings'
import Link from 'next/link'
const ContactUs = () => {
  return (
    <div className='px-10 pt-64 pb-20 lg:pt-32 mb:px-0 mb:py-10'>
      <Headings className='' heading='Contact Us' />
      <p className='text-[#473171] text-[27px] mt-5 mb:text-sm lg:text-xl xl:text-2xl'>Have questions or need more information? Reach out to us at<Link href='' className='text-customBlue underline'> contact@etutor4me.com</Link></p>
    </div>
  )
}

export default ContactUs
