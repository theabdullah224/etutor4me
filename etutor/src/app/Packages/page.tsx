import React from 'react'
import PackageHero from './Components/PackageHero'
import Membership from './Components/Membership'
import Package from './Components/Package'
import OnlineTutoring from './Components/OnlineTutoring'
import StartJourney from './Components/StartJourney'
import PackageFaqs from './Components/PackageFaqs'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='mb:px-5 '>
        <PackageHero/>
        <Membership/>
       <Package/>
          <OnlineTutoring/>
      <StartJourney/>
         <PackageFaqs/>
    </div>
    <Footer/>
    </>
  )
}

export default page
