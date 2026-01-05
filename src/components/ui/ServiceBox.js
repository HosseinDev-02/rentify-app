import Image from 'next/image'
import React from 'react'
import PrimaryButton from './buttons/PrimaryButton'

export default function ServiceBox({ title, desc, image, index, href, linkTitle }) {
  return (
    <div className={`bg-white p-4 rounded-2xl ${index === 0 ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''}`}>
        <div className='rounded-[10px] overflow-hidden'>
            <Image className='w-full h-full' alt={title} width={340} height={192} src={image}/>
        </div>
        <div className={`mt-6 text-center ${index === 1 ? 'mb-13 md:mb-20' : 'mb-13'}`}>
            <h5 className='text-lg font-IranYekan-ExtraBold mb-3 line-clamp-1'>{title}</h5>
            <p className='text-[#595C61] line-clamp-5'>{desc}</p>
        </div>
        <PrimaryButton href={href} title={linkTitle}/>
    </div>
  )
}
