import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Register", icon = ""}) => {
  return (
    <div className='w-fit px-4 py-2 gap-2 bg-[#309689] rounded-lg flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <span>{icon}</span>
    </div>
  )
}

export default Button