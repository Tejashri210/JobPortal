import React from 'react'
import NavBar from '../../components/NavBar'
import SearchJob from '../../components/SearchJob'
import Stripes from '../../components/Stripes'

const LandingPage = () => {
  return (
    <>
      <div className=''>
        <NavBar />
        <div className='w-full px-8 py-16 flex flex-col'>
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-4xl font-semibold'>Find your Dream Job today!</h1>
            <h2 className='text-md font-semibold'>Connecting Talent with Opportunity: Your Gateway to Career Success</h2>
          </div>
          <div className='flex items-center justify-center mt-10' >
            <SearchJob />
          </div>
          <div className='flex items-center justify-center'>
            <Stripes />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage