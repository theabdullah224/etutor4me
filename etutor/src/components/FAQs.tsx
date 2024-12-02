'use client'
import React, { useState } from 'react';
import downarrow from "../../public/assets/icons/downarrow.svg";
import uparrow from "../../public/assets/icons/uparrow.svg";
import Image from 'next/image';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqData: FAQItem[]; // Array of FAQ items
  display:string;
}

const FAQ: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-[#B5B1D1]'>
      <div className="py-12 xl:py-8 lg:py-6 mb:py-4 ">
        <div className='flex  items-center gap-6 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Image className='w-8 h-5 mb:h-3 mb:w-3' src={uparrow} alt="Up Arrow" /> : <Image className='w-8 h-5  mb:h-3 mb:w-3'  src={downarrow} alt="Down Arrow" />}
          <h2 className="text-[28px] text-[#473171] mb:text-xs xl:text-[23px] lg:text-xl">{question}</h2>
        </div>
      </div>
      {isOpen && <p className="text-[28px]  text-[#473171] pl-12 pb-10 xl:text-[23px] lg:text-xl mb:text-xs mb:pl-10">{answer}</p>}
    </div>
  );
};

const FAQs: React.FC<{ faqData: any[],display:string,morequestion:string }> = ({ faqData,display,morequestion }) => {
  // Check if faqData is valid
  if (!faqData || !Array.isArray(faqData)) {
    console.log('faqData:', faqData);
    return <div>No FAQs available</div>;
  }

  return (
    <div className={`  pt-8 relative pr-0  flex justify-between w-full m-auto gap-10 mb:flex-col-reverse mb:px-0 mb:pb-16  `}>
      <div className='w-1/2  mb:w-[60%]'>
        {faqData.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className={`bg-cardbg w-[40%] tb:w-1/2 tb:pr-14 tb:ml-auto absolute  mb:relative h-fit right-0 left-auto px-16 py-8 rounded-l-3xl flex flex-col items-end mb:w-full mb:top-0 lg:w-2/5 mb:p-5  mb:right-0 ${display}`} style={{ marginRight: '-60px' }}>
  <h2 className='text-[70px] text-darkBlue font-extrabold mb:text-2xl lg:text-3xl xl:text-3xl'>Frequently Asked Questions</h2>
  <Link href="" className={` ${morequestion} text-customBlue text-xl underline font-bold mt-6 lg:text-base`}>More questions?</Link>
</div>







    </div>
  );
};

export default FAQs;
