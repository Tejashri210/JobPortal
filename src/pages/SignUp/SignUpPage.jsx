import React from 'react'
import Button from '../../components/Button'
import { IoBagCheck } from 'react-icons/io5'
import { IoIosReturnRight } from 'react-icons/io'
import Stripe from '../../components/Stripes'
import Stripes from '../../components/Stripes'

const SignUpPage = () => {
  return (
    <div>
      <div className='navbar bg-tranparent px-6 py-6 lg:px-12 lg:py-6 bg-gradient-to-b from-[#231b17] to-[#222222] h-dvh'>
        <div className="navleft flex items-center gap-2">
          <IoBagCheck className='text-[24xl] font-semibold' />
          <h1 className='text-[24px] font-semibold'>Job Portal</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='h-[350px] w-[450px] px-4 bg-white text-black flex flex-col justify-center rounded-3xl mt-[50px]'>
            <input className='w-full my-3 border-b-2 outline-none p-1' type="text" placeholder='Your Company Name' />
            <input className='w-full my-3 border-b-2 outline-none p-1' type="text" placeholder='Full Name' />
            <input className='w-full my-3 border-b-2 outline-none p-1' type="email" placeholder='Email' />
            <input className='w-full my-3 border-b-2 outline-none p-1' type="password" placeholder='Password' />
            <Button title='Sign Up' className='self-center text-white w-full text-center my-5 h-10' innerClass='text-center text-xl ' />
          </div>
          <div className='mt-auto flex items-end '>
            <Stripes />
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default SignUpPage