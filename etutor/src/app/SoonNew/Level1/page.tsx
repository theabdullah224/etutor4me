import React from 'react'
import SoonNavbar from '../components/SoonNavbar'
import SoonFooter from '../components/SoonFooter'
import Level1 from '../components/Level1'
import '../styles/level.css'
const page = () => {
  return (
    <div className='bg-level-2' >
      <SoonNavbar/>
      <Level1/>
      <SoonFooter/>
    </div>
  )
}

export default page
