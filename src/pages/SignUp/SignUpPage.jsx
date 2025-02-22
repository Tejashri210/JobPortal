import React, { useState } from 'react';
import Button from '../../components/Button';
import { IoBagCheck } from 'react-icons/io5';
import Stripes from '../../components/Stripes';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router';

const SignUpPage = () => {
  const [role, setRole] = useState('');

  return (
    <div>
      <div className='navbar bg-tranparent px-6 py-6 lg:px-12 lg:py-6 bg-gradient-to-b from-[#231b17] to-[#222222] h-dvh'>
        <div className="navleft flex items-center gap-2">
          <Link to={"/"}>
              <IoIosArrowBack className='text-4xl'/>
          </Link>
          <IoBagCheck className='text-[24xl] font-semibold' />
          <h1 className='text-[24px] font-semibold'>Job Portal</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='h-auto w-[450px] px-4 bg-white text-black flex flex-col justify-center rounded-3xl mt-[50px] py-6'>
            <select 
              className='w-full my-3 border-b-2 outline-none p-1' 
              required
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="seeker">Job Seeker</option>
              <option value="hirer">Hirer</option>
            </select>

            {role === "hirer" && (
              <input className='w-full my-3 border-b-2 outline-none p-1' type="text" placeholder='Your Company Name' />
            )}

            <input className='w-full my-3 border-b-2 outline-none p-1' type="text" placeholder='Full Name' />
            <input className='w-full my-3 border-b-2 outline-none p-1' type="email" placeholder='Email' />
            <input className='w-full my-3 border-b-2 outline-none p-1' type="password" placeholder='Password' />
            <input className='w-full my-3 border-b-2 outline-none p-1' type="tel" placeholder='Phone Number' />

            {role === "hirer" && (
              <input className='w-full my-3 border-b-2 outline-none p-1' type="text" placeholder='Company ID' />
            )}

            <Button title='Sign Up' className='self-center text-white w-full text-center my-5 h-10' innerClass='text-center text-xl ' />
          </div>
          <div className='mt-auto flex items-end '>
            <Stripes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
