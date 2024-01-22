import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row border border-red-500 h-16 p-5 items-center w-screen'>
      <Link href='/'><p className='text text-gray-500 font-bold text-2xl'>#prajwl-dh</p></Link>
      <div>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}
