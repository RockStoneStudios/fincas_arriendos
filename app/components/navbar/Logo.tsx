'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
   const [message,setMessage] = useState(false);
   const router = useRouter();

   const handleMessage = () => {
     setMessage(!message)
   }
  return (
    <>
        <Image 
          alt='Logo'
          className='hidden md:block cursor-pointer'
          height= '100'
          width= '100'
          src= '/images/logo.png'
          onClick={()=> router.push('/')}
        />
        {
           message  ? (<h1>Hello</h1>) : (<h1>Que pasa</h1>)
        }
     </>
  )
}

export default Logo;