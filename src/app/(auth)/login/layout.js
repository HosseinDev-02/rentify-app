import React from 'react'
import '../../(main)/globals.css';

export default function LoginLayout({children}) {
  return (
    <html lang='fa' dir='rtl'>
        <body className='h-screen'>
            {children}
        </body>
    </html>
  )
}
