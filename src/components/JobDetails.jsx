import React from 'react'

import { CiBookmarkPlus } from "react-icons/ci";

function JobDetails({ className }) {
    return (
        <div className={`${className} shadow-md`}>
            <div className='flex justify-between'>
                <span className='bg-slate-100 px-2 py-1 rounded-xl text-gray-600'>10 min ago</span>
                <CiBookmarkPlus className='mr-1' size={30} />
            </div>
            <div>
                <span></span>
            </div>
        </div>
    )
}

export default JobDetails
