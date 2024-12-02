import React, { useEffect, useState } from 'react';
import tutorsData from "../data/data.json";
import tutor1 from "../../public/assets/homepage/tutor1.png";
import tutor2 from "../../public/assets/homepage/tutor2.png";
import tutor3 from "../../public/assets/homepage/tutor3.png";
import tutor4 from "../../public/assets/homepage/tutor4.png";
import award from "../../public/assets/homepage/award.png";
import Image from 'next/image';
import Link from 'next/link';
import Headings from './Headings';
import axios from 'axios';

const MeeteTutors = () => {

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("/api/fetchteachers"); // Adjust the API endpoint as necessary
        setTeachers(response.data);
      } catch (error) {
        setError("Error fetching teachers data");
        console.error("Error fetching teachers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const tutorsData = [
    {
      id: 1,
      image: tutor1,
      name: "Julie",
      bookings: "60+ Bookings",
      sessionPrice: "$30"
    },
    {
      id: 2,
      image: tutor2,
      name: "Koby",
      bookings: "100+ Bookings",
      sessionPrice: "$45"
    },
    {
      id: 3,
      image: tutor3,
      name: "Henry",
      bookings: "70+ Bookings",
      sessionPrice: "$40"
    },
    {
      id: 4,
      image: tutor4,
      name: "Scarlett",
      bookings: "46+ Bookings",
      sessionPrice: "$30"
    }
  ];

  return (
    <div className=' pt-44  mt-16 px-10  mb:p-0 lg:pt-16 lg:px-5 xl:pt-28'>
      <div className=' flex justify-between items-end  tb:flex-row'>
        <Headings className=''  heading='Meet Our eTutors' />
        <Link href="/ETutorSearch" className='text-customBlue underline mb:text-sm text-4xl font-extrabold lg:text-lg xl:text-lg tb:text-sm '>More eTutors</Link>
      </div>
      <div className='mt-8 mb:flex-wrap  justify-between  grid grid-cols-4 mb:grid-cols-1 tb:grid-cols-2 lg:grid-cols-4 mb:justify-center lg:flex-wrap lg:gap-5  items-center gap-10 py-5 '>
        {
          tutorsData.map((tutor) => (
            <div className='mb:w-full flex flex-col w-100  bg-cardbg px-10 py-8 rounded-3xl gap-3 lg:w-fu lg:rounded-2xl lg:p-4 lg:gap-2 xl:p-7 mb:rounded-2xl mb:px-5 mb:py-6' key={tutor.id}>
              <div className='relative'>
                <Image className='mb:w-full w-full' alt='' src={tutor.image} />
                <Image alt='' src={award} style={{ right: '-10%', bottom: '-12%' }} className='w-24 h-24 lg:w-16 lg:h-16 xl:w-20 xl:h-20 absolute' />
              </div>
              <h3 className='text-darkBlue pt-4 text-5xl font-extrabold lg:text-3xl xl:text-4xl mb:text-3xl'>{tutor.name}</h3>
              <p className='text-customBlue text-[36px]  lg:text-xl xl:text-2xl mb:text-2xl'>{tutor.bookings}</p>
              <p className='text-darkBlue text-[36px] font-extrabold lg:text-lg xl:text-xl mb:text-xl'>{tutor.sessionPrice}<span className='text-[#887CC4] font-light'>/session</span></p>
            </div>
          ))
        }
      </div>
      <div className='text-[#473171] text-[28px] leading-8   mb:py-5 mb:text-xs py-16 mb:leading-normal  xl:text-2xl lg:text-lg'>
        <p  >Our eTutors are top students selected for their exceptional knowledge and ability to connect with peers. They understand your challenges and
          provide practical, effective solutions. Always striving to level up, their progress is based on experience, student improvements, and reviews. This
          gamer-like drive ensures you get the best support possible.
        </p>
        <p className='mt-4 '>Want to become an eTutor? <Link href='' className='text-customBlue underline font-extrabold' > <span>Join us </span></Link> </p>
      </div>
    </div>
  );
}

export default MeeteTutors;
