import LoginForm from '@/components/ui/auth/LoginForm'
import Image from 'next/image'
import React from 'react'

export default function Login() {
  return (
    <div className='grid grid-cols-12 bg-primary-tint-6 p-4 w-full h-screen'>
        {/* login form */}
        <LoginForm />
        {/* login page picture */}
        <div className='col-span-8 relative flex items-center justify-center w-full h-full'>
            <Image width={636} height={392} alt='login_image' className='object-cover' src={'/images/login.png'} />
        </div>
    </div>
  )
}
