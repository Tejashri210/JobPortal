import React from 'react'
import Stripe from './Stripe'
import { IoLogoSass } from "react-icons/io5";
import { IoLogoSoundcloud } from "react-icons/io5";
import { IoLogoSkype } from "react-icons/io";
const Stripes = () => {

  const data = [
    {text : <IoLogoSass />, num: 102 ,title: "Frontend"},
    {text : <IoLogoSoundcloud />, num: 220, title: "Backend"},
    {text : <IoLogoSkype />, num: 308, title: "Full Stack"},
  ]
  return (
    <div className='flex items-center justify-between mt-4'>
        {
          data.map((elem,index)=>(
            <Stripe key={index} val={elem}/>
          ))
        }
    </div>
  )
}

export default Stripes