import Header from '@/components/layout/Header'
import React from 'react'

export default function Page() {
  return (
    <>
        <Header
                wrapperClassName={"rounded-2xl bg-white"}
                className={"text-black!"}
            />
        {/* page content */}
        <div className='min-h-screen'></div>
    </>
  )
}
