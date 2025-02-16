import React from 'react'
import Button from './Button'

const SearchJob = () => {
  return (
    <>
      <div className='h-[250px] w-[450px] px-4 bg-white text-black flex flex-col justify-center rounded-3xl'>
        <input className='w-full my-3 border-b-2 outline-none p-1' type="text" placeholder='Job Title or Company' />
        <select className='w-full text-gray-400 my-3 border-b-2 outline-none' name="Select Jobs" id="">
          <option value="" disabled selected>Select Location</option>
          <option value="Ichalkaranji">Ichalkaranji</option>
          <option value="Sangli">Sangli</option>
        </select>
        <select  className='w-full text-gray-400 my-3 border-b-2 outline-none'name="" id="">
          <option value="" disabled selected>Select Category</option>
          <option value="FrontEnd">FrontEnd</option>
          <option value="BackEnd">BackEnd</option>
        </select>
        <Button className='w-full text-white justify-center' title='Search Job'/>
      </div>
    </>
  )
}

export default SearchJob