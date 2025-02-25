import React from 'react';
import { IoBagCheck } from "react-icons/io5";
import { IoIosReturnRight } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Button from './Button';

const NavBar = () => {
  return (
    <div className='navbar bg-transparent flex justify-between items-center px-6 py-4 lg:px-12 lg:py-6'>
      {/* Left Section: Logo */}
      <div className="navleft flex items-center gap-2">
        <IoBagCheck className='text-[24px] font-semibold' />
        <h1 className='text-[23px] font-semibold'>Job Portal</h1>
      </div>

      {/* Right Section: Buttons */}
      <div className='flex gap-4'>
        <Link to='/login'>
          <Button title='Login' icon={<IoIosReturnRight />} className='!bg-transparent border border-white hover:bg-white hover:text-black transition' />
        </Link>
        <Link to='/sign-up'>
          <Button title='Register' icon={<IoIosReturnRight />} className='bg-blue-600 hover:bg-blue-700 transition' />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
