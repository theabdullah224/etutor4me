'use client'
import React from 'react'
import Image from 'next/image'

// Import icon images
import tiktok from "../../../../public/assets/comingsoon/tiktok.svg"
import instagram from "../../../../public/assets/comingsoon/instagram.svg"
import twitter from "../../../../public/assets/comingsoon/twitter.svg"
import youtube from "../../../../public/assets/comingsoon/youtuve.svg"
import facebook from "../../../../public/assets/comingsoon/facebook.svg"

// Array of icons
const icons = [
  tiktok,
  instagram,
  twitter,
  youtube,
  facebook
];

const SoonFooter = () => {
  return (
    <footer className=''>
      <div>
        <div className='flex justify-center items-center gap-3 pt-10 mb:flex-col mb:pt-12 tb:flex-row'>
          <div className='bg-[#FFF] h-14 flex items-center justify-center rounded-full px-10 py-3 w-[28rem] text-darkBlue text-2xl xl:w-[24rem] lg:w-[20rem] mb:max-w-72 mb:text-xl mb:h-12'>
            <input type="text" className='bg-transparent border-none w-full placeholder:text-[#AD9DCF] focus:outline-none' placeholder='Email Address' />
          </div>
          <div className='w-48 h-16 flex items-center justify-center cursor-pointer rounded-full text-2xl font-bold text-white bg-[#8653FF] lg:w-40 mb:w-32 mb:h-12 mb:text-xl'>
            Notify me
          </div>
        </div>
        <div className='flex justify-center gap-14 py-12 mb:gap-8'>
          {icons.map((icon, index) => (
            <div key={index} className='flex items-center justify-center'>
              <Image
                src={icon}
                alt={`Icon ${index + 1}`}
                className='cursor-pointer hover:scale-125 ease-in-out duration-300 hover:shadow-[0 4px 6px rgba(255, 255, 255, 0.5), 0 1px 3px rgba(255, 255, 255, 0.3)]  '
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SoonFooter
