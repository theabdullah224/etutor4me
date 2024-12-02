import React from 'react';
import SoonNavbar from '../components/SoonNavbar';
import SoonFooter from '../components/SoonFooter';
import Image from 'next/image';
import img1 from '../../../../public/assets/comingsoon/awardpic.svg';
import img2 from '../../../../public/assets/comingsoon/earnmore.svg';
import img3 from '../../../../public/assets/comingsoon/levelup.svg';
import img4 from '../../../../public/assets/comingsoon/flexible.svg';

const Data = [
  {
    id: 1,
    heading: 'Tutor',
    para: 'Start tutoring students with a fully automated system, providing engaging and effective lessons.',
    img: img1,
  },
  {
    id: 2,
    heading: 'Earn More',
    para: 'Enjoy continuous pay increases as you advance through the levels.',
    img: img2,
  },
  {
    id: 3,
    heading: 'Level Up',
    para: 'Increase your level based on tutoring success, activity, and community involvement.',
    img: img3,
  },
  {
    id: 4,
    heading: 'Flexible Work',
    para: 'Schedule sessions at your convenience and work from anywhere in the world.',
    img: img4,
  },
];

const Page = () => {
  return (
    <div className='level4'>
      <SoonNavbar />
      <div className='w-[80%] mx-auto text-center xl:w-[85%] lg:w-[90%] mb:w-[90%]'>
        <h2 className='max-w-[75rem] mt-36 text-6xl leading-tight xl:text-5xl lg:text-4xl mb:text-3xl text-white font-roboto_medium font-bold mx-auto'>
          Look Forward To These Exciting Features with eTutor4Me!
        </h2>
        <div className='grid grid-cols-2 mb:grid-cols-1 place-items-center  justify-between gap-10 my-16  mb:justify-center'>
          {Data.map(({ id, heading, para, img }) => (
            <div key={id} className={`flex items-start w-[85%] xl:w-[90%]  gap-10 lg:gap-6 lg:w-full mb:gap-4 mb:w-[90%]`}>
              <div className='relative w-[100px] h-[85px]  rounded-2xl bg-white mr-6'>
                <Image
                  src={img}
                  alt={heading}
                  className='absolute right-[-20px] bottom-[-10px] w-20 h-20'
                />
              </div>
              <div className='flex flex-col justify-start items-start w-[90%] '>
                <h3 className='text-5xl font-roboto_medium text-white mb:text-2xl lg:text-3xl  mb-2'>{heading}</h3>
                <p className='text-[#A9AFAF] font-roboto_medium mb:text-lg !font-thin text-[27px] leading-tight max-w-lg text-start lg:text-xl '>{para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SoonFooter />
    </div>
  );
};

export default Page;
