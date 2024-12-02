import Button from '@/components/Button'
import React from 'react'
import Link from 'next/link'
const Package = () => {
  return (
    <div className='w-[80%] lg:w-[90%]   m-auto mb:w-full mb:py-5 py-24 lg:py-8 xl:py-4'>
      <h2 className='text-[#5553C4] 2xl:text-6xl max-w-[500px]  mx-auto text-3xl text-center font-extrabold mb:text-2xl'>
        Our most <br /> popular Package
      </h2>

      <div className="w-100 flex justify-between gap-10 h-full py-20 mt-5 mb:flex-col lg:gap-5 mb:justify-center mb:items-center mb:py-0 mb:gap-16 mb:pt-10">
  <div className="relative w-[30%] mb:w-11/12 flex flex-col min-h-full">
    <div className="absolute inset-0 transform -translate-x-6 translate-y-6 bg-[#CFCCDD] rounded-3xl shadow-lg "></div>
    <div className="relative bg-white rounded-3xl border-[#646493] border-2 flex flex-col min-h-full">
      <h2 className="bg-[#646493] 2xl:text-5xl text-center xl:text-4xl text-white font-bold py-4 rounded-t-2xl mb:text-base lg:text-3xl">
        Standard
      </h2>
      <div className="p-6 pt-10 mb:p-4 text-center xl:p-5 lg:p-4 lg:pt-6 flex-grow flex flex-col justify-between">
        <div className="text-customBlue flex items-end justify-center text-end gap-3 xl:gap-1 lg:gap-1">
          <h3 className="text-6xl font-extrabold xl:text-5xl lg:text-4xl mb:text-4xl">4</h3>
          <p className="text-5xl font-extrabold xl:text-4xl lg:text-3xl mb:text-3xl">Sessions</p>
          <p className="text-4xl font-medium xl:text-3xl lg:text-2xl mb:text-2xl">/ month</p>
        </div>
        <p className="text-[#584A91] 2xl:text-2xl lg:my-2 text-lg my-4 mb:my-2 mb:text-sm xl:my-4 xl:text-xl lg:text-lg">
          <span className="font-bold">Session duration:</span> 60 minutes
        </p>
        <p className="text-[#584A91] 2xl:text-2xl text-lg my-4 lg:my-2 mb:my-2 mb:text-sm xl:my-4 xl:text-xl lg:text-lg">
          <span className="font-bold">Membership duration:</span> Flexible
        </p>
        <p className="text-[#584A91] 2xl:text-2xl text-lg my-4 lg:my-2 mb:my-2 mb:text-sm xl:my-4 xl:text-xl lg:text-lg">
          <span className="font-bold">Average cost per session:</span> $34.75
        </p>
        <div className="text-customBlue flex items-end py-8 justify-center text-end gap-3 lg:py-4">
          <h3 className="text-6xl font-extrabold xl:text-5xl lg:text-4xl mb:text-4xl">$139</h3>
          <p className="text-5xl font-medium xl:text-4xl lg:text-3xl mb:text-3xl">/ month</p>
        </div>
        <Link href="/SignupAs">
          <Button className="text-sm 2xl:text-2xl xl:text-lg text-black w-full lg:p-3 lg:text-xl" btnName="BOOK A FREE TRIAL" />
        </Link>
      </div>
    </div>
  </div>

  <div className="relative w-[30%] mb:w-11/12 flex flex-col min-h-full bottom-10 mb:bottom-0">
    <div className="absolute inset-0 transform translate-y-6 bg-[#CFCCDD] rounded-3xl shadow-lg mb:-translate-x-6"></div>
    <div className="relative bg-white rounded-3xl border-[#646493] border-2 flex flex-col min-h-full">
      <h2 className="bg-[#5553C4] 2xl:text-5xl text-center xl:text-4xl text-white font-bold py-4 rounded-t-2xl mb:text-base lg:text-3xl">
        Premium
      </h2>
      <div className="p-6 pt-10 mb:p-4 text-center xl:p-5 lg:p-4 lg:pt-6 flex-grow flex flex-col justify-between">
        <div className="text-customBlue flex items-end justify-center text-end gap-3 xl:gap-1 lg:gap-1">
          <h3 className="text-6xl font-extrabold xl:text-5xl lg:text-4xl mb:text-4xl">4</h3>
          <p className="text-5xl font-extrabold xl:text-4xl lg:text-3xl mb:text-3xl">Sessions</p>
          <p className="text-4xl font-medium xl:text-3xl lg:text-2xl mb:text-2xl">/ month</p>
        </div>
        <p className="text-[#584A91] 2xl:text-2xl lg:my-2 text-lg my-4 mb:my-2 mb:text-sm xl:my-4 xl:text-xl lg:text-lg">
          <span className="font-bold">Session duration:</span> 60 minutes
        </p>
        <p className="text-[#584A91] 2xl:text-2xl text-lg my-4 lg:my-2 mb:my-2 mb:text-sm xl:my-4 xl:text-xl lg:text-lg">
          <span className="font-bold">Membership duration:</span> Flexible
        </p>
        <p className="text-[#584A91] 2xl:text-2xl text-lg my-4 lg:my-2 mb:my-2 mb:text-sm xl:my-4 xl:text-xl lg:text-lg">
          <span className="font-bold">Average cost per session:</span> $30.75
        </p>
        <div className="text-customBlue flex items-end py-8 justify-center text-end gap-3 lg:py-4">
          <h3 className="text-6xl font-extrabold xl:text-5xl lg:text-4xl mb:text-4xl">$249</h3>
          <p className="text-5xl font-medium xl:text-4xl lg:text-3xl mb:text-3xl">/ month</p>
        </div>
        <Link href="/SignupAs">
          <Button className="text-sm 2xl:text-2xl xl:text-lg text-black w-full lg:p-3 lg:text-xl" btnName="BOOK A FREE TRIAL" />
        </Link>
      </div>
    </div>
  </div>

  <div className="relative w-[30%] mb:w-11/12 flex flex-col min-h-full">
    <div className="absolute inset-0 transform translate-x-6 translate-y-6 bg-[#CFCCDD] rounded-3xl shadow-lg mb:-translate-x-6"></div>
    <div className="relative bg-white rounded-3xl border-darkBlue border-2 flex flex-col min-h-full">
      <h2 className="bg-[#646493] text-center text-xl 2xl:text-5xl text-white xl:text-4xl font-bold py-4 rounded-t-2xl mb:text-base lg:text-3xl">
        Pay as you go
      </h2>
      <div className="p-8 mb:p-4 lg:pt-6 lg:p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-customBlue text-2xl text-cen flex items-center justify-center gap-2 font-extrabold">
          <span className="text-4xl 2xl:text-5xl mb:text-2xl lg:text-3xl"> Free Package </span>
        </h3>
        <p className="text-darkBlue 2xl:text-[28px] leading-tight 2xl:py-6 xl:my-6 text-xl my-4 text-center font-medium mb:text-sm lg:text-[16px] lg:my-2">
          Book an eTutor at any time, paying only the fees listed for each session. No upfront costs or subscription fees
        </p>
        <p className="text-[#887CC4] text-center 2xl:text-2xl lg:my-2 text-lg my-0 mb:text-sm lg:text-[16px]">
          Ideal for upcoming exams and quick revisions.
        </p>
        <p className="text-[#584A91] text-base 2xl:text-xl lg:text-xs my-8 text-center font-bold mb:text-xs lg:my-6">
          <span className="text-customBlue underline">Contact us</span> for a personalized one with a discount
        </p>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Package
