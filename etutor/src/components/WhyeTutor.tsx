import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import img1 from "../../public/assets/homepage/engaging-session.png"
import img2 from "../../public/assets/homepage/efficient-learn.png"
import img3 from "../../public/assets/homepage/encourage-env.png"
const WhyeTutor = () => {
  const content = [
    {
      id: 1,
      heading: 'Engaging Lessons',
      paragraph: 'Our approach ensures that learning is interactive and captivating. Our eTutors use innovative teaching methods to make lessons interesting and enjoyable, keeping students motivated and eager to learn.',
      img:img1,
    },
    {
      id: 2,
      heading: 'Efficient Learning',
      paragraph: 'We value your time and aim to make every session as productive as possible. Our eTutors are trained to deliver concise and impactful lessons that help you understand concepts quickly and thoroughly.',
      img:img2,
    },
    {
      id: 3,
      heading: 'Encouraging Environment',
      paragraph: 'We believe in fostering a supportive and positive learning atmosphere. Our eTutors are dedicated to encouraging students, building their confidence, and helping them overcome academic challenges with ease.',
      img:img3,
    }

  ]
  return (
    <div className=' px-10 pt-24  mb:px-0 lg:px-5 lg:pt-16'>
      <Headings className='' heading='Why Choose eTutor4Me?' />

      <div className='w-full grid grid-cols-3 gap-4 py-8 pt-16 mb:flex-col mb:grid-cols-1 tb:grid-cols-2'>
        {
          content.map((content) => (
            <div className='bg-cardbg  p-10 w-full rounded-[30px] mb:rounded-2xl mb:w-full mb:p-6 lg:p-5 lg:rounded-2xl xl:p-6' key={content.id}>
              <div className='flex flex-col row-gap-2 mb:text-xs ' >
                <div className=' w-full  rounded-3xl mb:h-full'>
                  <Image className='w-full h-full ' alt='img' src={content.img} />
                </div>
                <h2 className='text-darkBlue text-3xl font-semibold mt-7  xl:text-2xl lg:text-2xl mb:text-xl'>{content.heading}</h2>
                <p className='text-darkBlue text-[27px] mt-3   xl:text-xl lg:text-base lg:leading-normal mb:text-sm mb:leading-normal'>
                  {content.paragraph}
                </p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default WhyeTutor
