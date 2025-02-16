import React from 'react'
import Stripe from './Stripe'
import { IoLogoSass } from "react-icons/io5";
import { IoLogoSoundcloud } from "react-icons/io5";
import { IoLogoSkype } from "react-icons/io";
const Stripes = ({ className }) => {

  const data = [
    { text: <IoLogoSass />, num: 102, title: "Frontend" },
    { text: <IoLogoSoundcloud />, num: 220, title: "Backend" },
    { text: <IoLogoSkype />, num: 308, title: "Full_Stack" },
  ]
  return (
    <div className={`flex ml-0 mt-2 justify-center absolute gap-6 bottom-5 ${className}`}>
      {
        data.map((elem, index) => (
            <Stripe key={index} val={elem} />
        ))
      }
    </div>
  )
}

export default Stripes