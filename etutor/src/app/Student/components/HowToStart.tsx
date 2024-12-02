import Headings from '@/components/Headings'
import React from 'react'
import Image from 'next/image'
import icon1 from "../../../../public/assets/icons/applyicon.svg"
import icon2 from "../../../../public/assets/icons/tutoricon.svg"
import icon3 from "../../../../public/assets/icons/levelupicon.svg"
import icon4 from "../../../../public/assets/icons/earnicon.svg"
import icon5 from "../../../../public/assets/icons/flexibleicon.svg"
const HowToStart = () => {
  return (
    <div className='px-10 pt-40 mb:px-0  lg:px-0 mb:pt-8 lg:pt-16 xl:pt-16'>
      <Headings heading='How to get started' className={''}/>
      <div className='flex justify-between lg:gap-4 gap-12 py-20 mb:py-12 mb:flex-col'>
        
        <div className='w-[50%] flex flex-col gap-24 mb:w-full mb:gap-10'>
        <div className='flex w-full  items-center gap-[8%] mb:gap-6'>
      <div className='w-[85px] h-[84px] lg:w-[75px] lg:h-[75px] mb:w-16 mb:h-16 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-[20px] bottom-[-15px] mb:bottom-[-10px] w-20 h-20 mb:h-12 mb:w-12' src={icon1} alt={''} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-[47px] font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Apply</h2>
                <p className=' text-[25px] xl:text-xl mb:text-xs lg:text-base'>
                Sign up and complete our selection process to become an eTutor.               </p>
            </div>
      </div>
        <div className='flex w-full  items-center gap-[8%] mb:gap-6'>
      <div className='w-[85px] h-[84px] lg:w-[75px] lg:h-[75px] mb:w-16 mb:h-16 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-[20px] bottom-[-15px] mb:bottom-[-10px] w-20 h-20 mb:h-12 mb:w-12' src={icon2} alt={''} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-[47px] font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Tutor</h2>
                <p className=' text-[25px] xl:text-xl mb:text-xs lg:text-base'>
                Start tutoring students, providing engaging and effective lessons.             </p>
            </div>
      </div>
        <div className='flex w-full  items-center gap-[8%] mb:gap-6'>
      <div className='w-[85px] h-[84px] lg:w-[75px] lg:h-[75px] mb:w-16 mb:h-16 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-[20px] bottom-[-15px] mb:bottom-[-10px] w-20 h-20 mb:h-12 mb:w-12' src={icon3} alt={''} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-[47px] font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Level Up</h2>
                <p className=' text-[25px] xl:text-xl mb:text-xs lg:text-base'>
                Increase your level based on tutoring success, activity, and community
                involvement.            </p>
            </div>
      </div>
        
       
      
        </div>
        <div className='w-[50%] flex flex-col gap-24 mb:w-full mb:gap-10'>
        <div className='flex w-full  items-center gap-[8%] mb:gap-6'>
      <div className='w-[85px] h-[84px] lg:w-[75px] lg:h-[75px] mb:w-16 mb:h-16 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-[20px] bottom-[-15px] mb:bottom-[-10px] w-20 h-20 mb:h-12 mb:w-12' src={icon4} alt={''} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-[47px] font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Earn More</h2>
                <p className=' text-[25px] xl:text-xl mb:text-xs lg:text-base'>
                Enjoy continuous pay increases as you advance through
the levels..            </p>
            </div>
      </div>
      <div className='flex w-full  items-center gap-[8%] mb:gap-6'>
      <div className='w-[85px] h-[84px] lg:w-[75px] lg:h-[75px] mb:w-16 mb:h-16 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-[20px] bottom-[-15px] mb:bottom-[-10px] w-20 h-20 mb:h-12 mb:w-12' src={icon5} alt={''} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-[47px] font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Flexible Work</h2>
                <p className=' text-[25px] xl:text-xl mb:text-xs lg:text-base'>
                Schedule sessions at your convenience and work from
 anywhere in the world.          </p>
            </div>
      </div>
       
      
        </div>
      
      
      </div>
      
    </div>
  )
}

export default HowToStart
