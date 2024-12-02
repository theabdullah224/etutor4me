import Headings from '@/components/Headings'
import React from 'react'
import img1 from "../../../../public/assets/homepage/blueaward.png"
import img2 from "../../../../public/assets/homepage/findtutor.png"
import img3 from "../../../../public/assets/homepage/packages.png"
import img4 from "../../../../public/assets/homepage/questions.png"
import img5 from "../../../../public/assets/homepage/generalquestion.png"
import img6 from "../../../../public/assets/homepage/booking.png"
import img7 from "../../../../public/assets/homepage/security.png"
import img8 from "../../../../public/assets/homepage/etutor.png"
import Image from 'next/image'
import Link from 'next/link';

const FAQHero = () => {

  const content = [
    { Text: `Become an eTutor`, img: img1, link: '#faq-etutor' },
    { Text: `For eTutors`, img: img2, link: '#faq-for-etutors' },
    { Text: `Packages`, img: img3, link: '#faq-packages' },
    { Text: `Technical questions`, img: img4, link: '#faq-technical-questions' },
    { Text: `General questions`, img: img5, link: '#faq-general-questions' },
    { Text: `Booking`, img: img6, link: '#faq-booking' },
    { Text: `Security`, img: img7, link: '#faq-security' },
    { Text: `eTutor4Me`, img: img8, link: '#faq-etutor4me' },
  ];
  
  return (
    <div className='w-100 '>
      <div className='h-[80vh] flex justify-center items-center flex-col lg:h-[60vh] xl:h-[70vh] mb:h-[60vh]'>
     <div className='w-3/4 m-auto flex items-center justify-center text-center my-10 '>
     <Headings className='text-[90px] font-extrabold max-w-3xl leading-normal xl:leading-normal mb:text-[35px] mb:leading-none' heading='Frequently Asked Questions'/>
        </div>
      
      <p className='text-[42px] text-center font-medium  text-darkBlue mt-4 mb:text-lg mb:w-4/5 mb:mx-auto lg:text-[30px] xl:text-[35px]'>Here you'll find answers to the most common questions about our services
      </p>
      </div>
      <div className='grid  grid-cols-4 gap-y-20 gap-10 m-auto content-center justify-items-center  w-[90%] xl:py-32 py-60 pb-80 mb:grid-cols-2 lg:py-32 mb:w-full mb:gap-5 mb:py-12 tb:grid-cols-3' >
      {content.map((item, index) => (
  <div key={index} className='w-full'>
    <Link href={item.link || '#'}>
      <div className='flex w-[85%] xl:w-[95%] mx-auto lg:w-full cursor-pointer py-8 flex-col items-center gap-2 justify-center h-[310px] xl:h-64 lg:h-52 bg-cardbg rounded-[2.5rem] p-6 mb:w-full mb:h-full tb:rounde-[2rem] mb:rounded-[2rem]  mb:p-5'>
        <Image className='lg:w-[40%] mb:w-auto' src={item.img} alt={item.Text} />
        <h2 className='text-center px-5 text-darkBlue font-bold text-[36px] mt-8 mb:text-base xl:text-2xl lg:text-xl lg:mt-4 mb:mt-2 mb:px-0'>{item.Text}</h2>
      </div>
    </Link>
  </div>
))}

    </div>
    </div>
  )
}

export default FAQHero
