import React from 'react'

const Stripe = ({ val }) => {
  return (
    <div className='w-[calc(100%/3)] px-1 py-5 items-center gap-4 font-semibold'>
      <div className='flex gap-3'>
        <div >
          <span className='inline-block text-2xl bg-[#309689] rounded-full p-2'>{val.text}</span>
        </div>
        <div >
          <p>{val.num}</p>
          <p>{val.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Stripe