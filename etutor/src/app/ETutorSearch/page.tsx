import React from 'react'
import FindEtutor from './Components/FindEtutor'
import SearchTutor from './Components/SearchTutor'
import TutorDetails from './Components/TutorDetails'
import SeeTutorsList from './Components/SeeTutorsList'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar/>
    <div className='px-10 mb:px-5'>
      <FindEtutor/>
       <SearchTutor/>
      <TutorDetails/>
    <SeeTutorsList/> 
    </div>
     <Footer/>
    </>
  )
}

export default page
