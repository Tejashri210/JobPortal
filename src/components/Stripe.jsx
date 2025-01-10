import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[calc(100%/3)] px-6 py-5 flex items-center gap-4 justify-between font-semibold'>
        <span className='inline-block text-2xl bg-[#309689] rounded-full p-2'>{val.text}</span>
        <span>{val.num}</span>
        <span>{val.title}</span>
    </div>
  )
}

export default Stripe