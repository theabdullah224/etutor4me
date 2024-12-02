"use client";
import React, { useState,useRef } from 'react';
import SoonNavbar from '../components/SoonNavbar';
import SoonFooter from '../components/SoonFooter';
import '../styles/level.css';
import COpyicon from '../../../../public/copyicon.svg';
import tick from '../../../../public/tickicon.svg';
import Image from 'next/image';

const Page = () => {
  const [icon, setIcon] = useState(COpyicon); 
  const emailRef = useRef();

  const handleCopy = () => {
    const emailText = emailRef.current.innerText; 
    navigator.clipboard.writeText(emailText) 
      .then(() => {
        setIcon(tick); 
        setTimeout(() => setIcon(COpyicon), 2000); 
      })
      .catch(err => console.error('Failed to copy text:', err));
  };
  return (
    <div className='level4'>
      <SoonNavbar />
      <div className='mx-auto sm:px-5 h-[74vh] flex items-center justify-center flex-col'>
        <h1 className='text-center text-white mx-auto text-5xl max-w-[84rem] px-3 sm:px-0 mb:text-2xl tb:text-3xl'>
          If you have any additional questions or need further assistance, our support team is here to help! Feel free to reach out to us for any queries or concerns you might have. We're just a click away and ready to assist you!
        </h1>
        <div className='flex gap-2 relative group px-4'>
          <h2 className='text-4xl py-8 text-white mb:text-xl tb:text-2xl '>
            Email Us: <span ref={emailRef} id='email-text' className='underline'>support@etutor4me.com</span>
          </h2>
          <Image
            className='w-7 mb-4 cursor-pointer img'
            src={icon}
            alt="Copy Icon"
            onClick={handleCopy} 
          />
          <div className='border-[1px] border-white h-fit absolute -right-28 py-1 px-2 rounded-md hidden group-hover:block '>
              <p className='text-sm text-white '>Copy to clipboard</p>
          </div>
        </div>
      </div>
      <SoonFooter />
    </div>
  );
}

export default Page;