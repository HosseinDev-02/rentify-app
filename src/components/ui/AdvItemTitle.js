import React from 'react'

export default function AdvItemTitle({title, className}) {
  return (
    <h5 className={`inline-block text-black text-xl font-IranYekan-ExtraBold pb-4 relative after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-primary after:h-0.5 after:w-full ${className}`}>
        {title}
    </h5>
  )
}
