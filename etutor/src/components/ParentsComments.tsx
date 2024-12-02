import React from 'react'
import Headings from './Headings'
import img1 from "../../public/assets/homepage/img1.png"
import img2 from "../../public/assets/homepage/img2.png"
import img3 from "../../public/assets/homepage/img3.png"
import Image from 'next/image'
const ParentsComments = () => {
  const content = [
    {
      id: 1,
      title: 'Priscilla',
      date: ' Oct 16 2023',
      img: img1,
      paragraph: `"eTutor4Me has completely changed the way 
I approach my studies. The sessions are 
engaging and my grades have improved 
significantly!" – Sarah, High School Student`
    },
    {
      id: 2,
      title: 'Priscilla',
      date: ' Oct 16 2023',
      img: img2,
      paragraph: `"My eTutor understands exactly what I need 
help with and explains things in a way that 
makes sense to me. Highly recommend!" – 
James, College Student`
    },
    {
      id: 3,
      title: 'Priscilla',
      date: ' Oct 16 2023',
      img: img3,
      paragraph: `"As a parent, I've seen such an amazing 
improvement in my child's grades and 
confidence. Big thanks to Emily, our fantastic 
eTutor!" – Lisa, Parent`
    }

  ]
  return (


    <div className=' px-10 my-56 mb-64 mb:px-0 lg:px-5 mb:my-4 lg:my-24 xl:my-36'>
      <Headings className='' heading=' “ Loved by parents & students' />
      <p className='text-darkBlue mt-6 text-[27px] mb:text-base' >98% of our parents say their students made significant progress</p>

      <div className='w-full flex gap-8 py-20 mb:flex-col tb:grid tb:grid-cols-2 lg:py-16 mb:py-10'>
        {
          content.map((content) => (
            <div className=' bg-cardbg p-8 w-1/3 rounded-3xl lg:p-5 mb:w-full' key={content.id}>
              <div className='flex flex-col row-gap-2' >
                <div className='flex items-center gap-12'>
                  <div className='rounded-full w-32 h-32 mb:w-20 mb:h-20'>
                    <Image alt='img' src={content.img} />
                  </div>
                  <div>
                    <h2 className=' font-semibold text-[33px] text-darkBlue lg:text-2xl'>{content.title}</h2>
                    <p className='text-[18px] mb:text-xs text-[#6B5692] lg:text-xs xl:text-lg'>Published:{content.date}</p>
                  </div>
                </div>
                <p className='text-[#473171] text-[26px] pt-4  mb:text-xs lg:text-lg xl:text-xl'>
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

export default ParentsComments
