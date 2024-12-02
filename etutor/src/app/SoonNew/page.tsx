import React from 'react'
import Level1 from './components/Level0'
import SoonNavbar from './components/SoonNavbar'
import SoonFooter from './components/SoonFooter'
import Level0 from './components/Level0'

const Page = () => {
  return (
    <div className='bg-level-1 ' >
      <SoonNavbar/>
      <Level0/>
      <SoonFooter/>
    </div>
  )
}

export default Page
