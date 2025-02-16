import React from 'react'

import { IoIosReturnRight } from "react-icons/io";

const Button = (
  {title = "Register",
    icon = "",
    className = "",
    innerClass = "",
    onClick = ""
  }
) => {
  return (
    <div onClick={onClick} className={`w-fit px-4 py-2 gap-2 bg-[#309689] rounded-lg flex items-center justify-center  ${className}`}>
        <span className={`text-sm ${innerClass} text-center text-xl font-medium `}>{title}</span>
    </div>
  )
}

export default Button