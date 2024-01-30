'use client'
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import githubProjects from '@/data/data'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Projects() {
  const router = useRouter()

  const shuffleArray = githubProjects.sort((a, b) => 0.5 - Math.random())
  const allProjects = shuffleArray.map((project) => {
    return(
      <motion.a initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} href={project.link} target="_blank" key={uuidv4()}>
        <div className={`flex text font-bold border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl min-h-60 items-center justify-center text-center`}>
          <div className='text font-bold text-3xl'><q>{project.name}</q></div>
        </div>
      </motion.a>
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
          <div className='mt-0 md:mt-10 w-full p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-500 dark:text-yellow-50'>
            {allProjects}
          </div>
        </div>
      </div>
      <ScrollToTop smooth top="150" width="40" height="30" style={{marginBottom: "40px", backgroundColor: "#fefce8", outline: "4px white solid", borderRadius: "50%", cursor: "pointer"}}/>
    </>
  )
}
