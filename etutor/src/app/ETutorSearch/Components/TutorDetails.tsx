import React from 'react'
import Image from 'next/image'
import award from "../../../../public/assets/icons/award4.svg"
import award9 from "../../../../public/assets/icons/award9.svg"
import award7 from "../../../../public/assets/icons/award7.svg"
import tut1 from "../../../../public/assets/homepage/tut1.png"
import tut2 from "../../../../public/assets/homepage/tut2.png"
import tut3 from "../../../../public/assets/homepage/tut3.png"
import tut4 from "../../../../public/assets/homepage/tut4.png"
const TutorDetails = () => {
    const TutorsDetail = [
        {
            name:'Mr.Firstname',
            bookings:'100',
            sessionPrice:'40',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award,
            img:tut1,
        },
        {
            name:'Mr.Firstname',
            bookings:'40',
            sessionPrice:'35',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award9,
            img:tut2,

        },
        {
            name:'Mr.Firstname',
            bookings:'60',
            sessionPrice:'30',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award7,
            img:tut3,

        },
        {
            name:'Mr.Firstname',
            bookings:'90',
            sessionPrice:'40',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award,
            img:tut4,

            
        },
    ]
  return (
    <>
{

    TutorsDetail.map((tutor)=>(
  <div className=' flex w-100 gap-12 border-b justify-between border-[#9C8BBD] mx-12 lg:mx-6 py-16 mb:py-8 mb:flex-col mb:mx-0 mb:gap-4 tb:flex-col tb:w-full '>
   
        <div className='flex w-[35%] gap-8 justify-between items-center mb:justify-between mb:gap-4 mb:w-full tb:w-[60%] tb:m-auto'>
  <div className='w-56 h-56  rounded-2xl  mb:w-1/3 mb:h-auto xl:w-40 xl:h-40 lg:w-36 lg:h-36'>
        <Image src={tutor.img} className='w-full' alt='tutor' />
  </div>
  <div className='flex text-[44px] flex-col gap-3  xl:text-4xl lg:text-2xl mb:gap-1 mb:text-3xl'>
      <h3 className=' text-[#473171] font-semibold mb:text-xl '>{tutor.name}</h3>
      <p className=' text-customBlue mb:text-sm'>{tutor.bookings}+Booking</p>
      <p className=' text-[#473171] font-extrabold mb:text-sm'>${tutor.sessionPrice}<span className='text-[#A297B7] font-light text-[35px] mb:text-[16px]'>/session</span></p>
  </div>
</div>
<div className='flex items-center w-[55%] justify-between gap-24  mb:gap-4 mb:w-full mb:flex-col mb:justify-start mb:items-start tb:flex-row tb:w-[60%] tb:m-auto'>
  <div className='w-[70%] mb:w-full text-[#473171] lg:w-[85%]'> 
      <h2 className='text-[33px]  font-semibold xl:text-2xl lg:text-lg mb:text-xl'>About me</h2>
      <p className='text-[23px] leading-7 mt-3 mb:text-xs xl:text-lg lg:mt-1 xl:leading-5 lg:leading-4 xl:text-[18px] lg:text-sm tb:text-xs ' >
         {tutor.description}
      </p>
  </div>
  <div className=' mb:w-1/2'>
      <Image className='w-32 h-32' alt='award' src={tutor.award} />
  </div>
</div>
 
    
</div>
   ))
}






  </>
  )

}

export default TutorDetails;
