"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathName = usePathname()

  return (
    <div className='flex flex-row justify-between border border-red-500 h-16 p-10 items-center w-screen'>
      <Link href='/'><p className={`text text-gray-500 hover:text-slate-600 hover:cursor-pointer font-bold text-2xl ${pathName === '/' ? 'text-sky-800' : null}`}>#prajwl-dh</p></Link>
      <div className='flex flex-row gap-10 text-gray-500 text-lg hover:cursor-pointer font-bold'>
        <Link className={`hover:text-sky-800 ${pathName === '/about' ? 'text-sky-800' : null}`} href='/about'>About</Link>
        <Link className={`hover:text-sky-800 ${pathName === '/projects' ? 'text-sky-800' : null}`} href='/projects'>Projects</Link>
        <Link className={`hover:text-sky-800 ${pathName === '/contact' ? 'text-sky-800' : null}`} href='/contact'>Contact</Link>
      </div>
    </div>
  )
}
