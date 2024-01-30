'use client'
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import githubProjects from '@/data/data'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

export default function Projects() {
  const router = useRouter()

  const shuffleArray = githubProjects.sort((a, b) => 0.5 - Math.random())
  const allProjects = shuffleArray.map((project) => {
    let gridStyle = ''
    if(project.type === 'web'){
      gridStyle = 'bg-cyan-500 dark:bg-cyan-600'
    }else if(project.type === 'game'){
      gridStyle = 'bg-green-500 dark:bg-green-600'
    }else{
      gridStyle = 'bg-rose-500 dark:bg-rose-700'
    }
    return(
      <a href={project.link} target="_blank" key={uuidv4()}>
        <div className={`flex p-5 ${gridStyle} dark:border-yellow-50 border-2 border-gray-500 rounded-2xl shadow-xl h-60 items-center justify-center text-center`}>
          <div className='text font-bold text-3xl text-yellow-50 dark:text-yellow-50'><q>{project.name}</q></div>
        </div>
      </a>
    )
  })

  return(
    <>
      <div className='w-full md:w-9/12 md:max-w-screen-xl self-center flex flex-col p-5 md:mt-10 md:p-0 mb-10'>
        <p className='text text-2xl md:text-3xl font-bold text-gray-500 dark:text-yellow-50 mb-5'>Explore my personal projects</p>
        <div className='w-full min-h-screen'>
          <div className='flex flex-row md:gap-5 gap-3 flex-wrap md:mt-2'>
            <button className='border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50 h-8 min-w-24 rounded-md'>Web</button>
            <button className='border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50 h-8 min-w-24 rounded-md'>Games</button>
            <button className='border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50 h-8 min-w-24 rounded-md'>Robotics</button>
            <button className='text underline text-gray-500 dark:text-yellow-50'>Clear Filters</button>
          </div>
          <div className='mt-5 md:mt-10 w-full p-5 md:p-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {allProjects}
          </div>
        </div>
      </div>
      <ScrollToTop smooth top="150" width="40" height="30" style={{marginBottom: "40px", backgroundColor: "#fefce8", outline: "4px white solid", borderRadius: "50%", cursor: "pointer"}}/>
    </>
  )
}
