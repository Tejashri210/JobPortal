import React from 'react'
import { IoBagCheck } from 'react-icons/io5'
import Button from '../../components/Button'
import Stripes from '../../components/Stripes'
import { Link } from 'react-router'
import { IoIosArrowBack } from 'react-icons/io'

const LoginPage = () => {
  return (
    <div>
      <div className='navbar h-[calc(100dvh-90dvh)] bg-tranparent flex justify-between px-6 py-6 lg:px-12 lg:py-6 '>
        <div className="navleft flex items-center gap-2">
          <Link to={"/"}>
            <IoIosArrowBack className='text-4xl' />
          </Link>
          <IoBagCheck className='text-[24px] font-semibold' />
          <h1 className='text-[23px] font-semibold'>Job Portal</h1>
        </div>
      </div>
      <div className='h-[calc(100dvh-10dvh)] bg-gradient-to-b from-[#231b17] to-[#222222] flex flex-col justify-center items-center '>
        <div className='flex flex-col '>
          <div className='border-2 border-yellow h-[250px] w-[450px] px-4 bg-white text-black flex flex-col items-center rounded-3xl '>
            <input className='w-full my-3 border-b-2 outline-none p-1' type="email" placeholder='Email' />
            <input className='w-full my-3 border-b-2 outline-none p-1' type="password" placeholder='Password' />
            <Button title='Sign Up' className='self-center text-white w-full text-center my-5 h-10' innerClass=' ' />
          </div>
          <div className='mt-auto '>
            <Stripes />
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage