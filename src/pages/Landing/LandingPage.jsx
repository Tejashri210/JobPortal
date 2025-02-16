import React from 'react'
import NavBar from '../../components/NavBar'
import SearchJob from '../../components/SearchJob'
import Stripes from '../../components/Stripes'
import JobDetails from '../../components/JobDetails'

const LandingPage = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className='w-full h-[calc(100dvh-10dvh)] px-8 py-16 flex flex-col bg-gradient-to-b from-[#231b17] to-[#222222]'>
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-4xl font-semibold'>Find your Dream Job today!</h1>
            <h2 className='text-md font-semibold'>Connecting Talent with Opportunity: Your Gateway to Career Success</h2>
          </div>
          <div className='flex items-center justify-center mt-10' >
            <SearchJob />
          </div>
          <div className='flex justify-center'>
            <Stripes />
          </div>
        </div>
        <div className='bg-white text-black h-dvh flex flex-col items-center'>
            <p className='text-center text-4xl font-semibold mt-20 mb-5'>Recent Jobs Available</p>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <JobDetails className='mt-20 w-[350px] h-[500px] '/>
        </div>
      </div>
    </>
  )
}

export default LandingPage