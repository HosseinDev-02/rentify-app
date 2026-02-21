import React from 'react'

export default function FloorPlanProgressBar({ title, value, rate }) {
  return (
    <div className='flex items-center justify-between px-4 py-2 rounded-lg bg-[#FAFAFA]'>
        <span className='text-lg'>{title}</span>
        <div className='flex items-center gap-6'>
            <div className='w-46 bg-white h-1 rounded-md overflow-hidden'>
                <div style={{ width: `${value}%` }} className='bg-primary-shade-2 h-full float-left'></div>
            </div>
            <div className='font-IranSansWeb-Regular'>{rate}/10</div>
        </div>
    </div>
  )
}
