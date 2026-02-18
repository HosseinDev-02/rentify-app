import React from 'react'
import FilterItemWrapper from './FilterItemWrapper'
import { PlusIcon } from 'lucide-react'
import { MinusIcon } from 'lucide-react'

export default function BedroomCountFIlter({ isOpen, handler }) {
  return (
    <FilterItemWrapper isOpen={isOpen} handler={handler} title={'تعداد اتاق'}>
        <div className='w-67 h-10 rounded-2xl flex items-center justify-between px-2 border border-[#D7D8DA]'>
            <button className='rounded-full w-6 h-6 bg-[#FAFAFA] flex items-center justify-center text-[#595C61]' type='button'>
                <PlusIcon size={12}/>
            </button>
            <span className='font-IranSansWeb-Regular text-xs'>0 اتاق</span>
            <button className='rounded-full w-6 h-6 bg-[#FAFAFA] flex items-center justify-center text-[#595C61]' type='button'>
                <MinusIcon size={12}/>
            </button>
        </div>
    </FilterItemWrapper>
  )
}
