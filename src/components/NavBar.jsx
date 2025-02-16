{/* <div id="google_translate_element"></div> */ }
import React from 'react'
import { IoBagCheck } from "react-icons/io5";
import Button from './Button';
import { IoIosReturnRight } from 'react-icons/io';
import { Link } from 'react-router'


const NavBar = () => {
  return (
    <>
      <div className='navbar bg-tranparent flex justify-between px-6 py-6 lg:px-12 lg:py-6 '>
        <div className="navleft flex items-center gap-2">
          <IoBagCheck className='text-[24px] font-semibold' />
          <h1 className='text-[23px] font-semibold'>Job Portal</h1>
        </div>
        <div className='flex'>
          <div className='navright '>
            <Link to='/login'>
              <Button title='Login' icon={<IoIosReturnRight />}
                className='bg-transparent' />
            </Link>
          </div>
          <div className='navright '>
            <Link to='/sign-up'>
              <Button title='Register' icon={<IoIosReturnRight />} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar