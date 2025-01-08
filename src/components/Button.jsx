import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Register"}) => {
  return (
    <div className='w-fit px-4 py-2 gap-2 bg-[#309689] rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight /> 
    </div>
  )
}

export default Button