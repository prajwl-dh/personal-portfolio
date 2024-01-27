'use client'
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import githubProjects from '@/data/data'

export default function Projects() {
  return(
    <>
      <div className='w-full md:w-9/12 md:max-w-screen-xl self-center flex flex-col p-5 md:mt-5 md:p-0 mb-10'>
        <p className='text text-2xl md:text-3xl font-bold text-gray-500 dark:text-yellow-50 mb-5'>Explore my personal projects</p>
        <div className='w-full min-h-screen'>
          <div className='flex flex-row md:gap-5 gap-3 flex-wrap'>
            <button className='border-2 border-gray-400 text-gray-500 h-8 min-w-20 rounded-md'>Web</button>
            <button className='border-2 border-gray-400 text-gray-500 h-8 min-w-20 rounded-md'>Games</button>
            <button className='border-2 border-gray-400 text-gray-500 h-8 min-w-20 rounded-md'>Robotics</button>
            <button className='border-2 border-gray-400 text-gray-500 h-8 min-w-20 rounded-md'>AI</button>
            <button className='text underline text-gray-500'>Clear Filters</button>
          </div>
          <div className='mt-5 w-full border border-red-500 min-h-screen p-5'>
            Projects here
          </div>
        </div>
      </div>
      <ScrollToTop smooth top="150" width="40" height="30" style={{marginBottom: "40px", backgroundColor: "#fefce8", outline: "4px white solid", borderRadius: "50%", cursor: "pointer"}}/>
    </>
  )
}
