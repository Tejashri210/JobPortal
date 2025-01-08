{/* <div id="google_translate_element"></div> */}
import React from 'react'
import { IoBagCheck } from "react-icons/io5";
import Button from './Button';

const NavBar = () => {
  return (
    <>
     <div className='navbar bg-tranparent flex justify-between px-6 py-6 lg:px-12 lg:py-6'>
      <div className="navleft flex items-center gap-2">
        <IoBagCheck className="" />
        <h1>Job Portal</h1>
      </div>
      <div className='navright '>
        <Button />
      </div>
     </div>
    </>
  )
}

export default NavBar