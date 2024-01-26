'use client'

import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

export default function About() {
  return (
    <>
      <div className='w-full md:w-9/12 md:max-w-screen-xl self-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 text text-gray-500 dark:text-yellow-50 text-md md:text-lg p-5 mb-20 md:mt-10 md:p-0'>
          <p className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 rounded-sm shadow-2xl'>
            <span className='text font-bold'>Hi!</span><br/><br/> I&#39;m <span className='text text-red-400'>Prajwal Dhungana</span>, a passionate Frontend Developer from Grand Prairie, TX, deeply engaged in the dynamic world of web development with a strong foundation in the MERN stack, alongside Next.js and Tailwind CSS.
          </p>
          <p className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 rounded-sm shadow-2xl'>
            <span className='text text-blue-500'>Professional experience:<br/><br/></span>
            <ul>
              <li><span className='text text-red-400'>American Tracking Services</span><br/><span className='text italic'>Frontend Engineer, Present</span><br/><br/></li>
              <li><span className='text text-red-400'>Optum</span><br/>Frontend Engineer (2021-2022)<br/><br/></li>
              <li><span className='text text-red-400'>Northern Trust</span><br/>Frontend Developer (2019-2021)</li>
            </ul>
          </p>
          <p className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 rounded-sm shadow-2xl'>
            <span className='text text-blue-500'>Education : <br/><br/></span>
            <span className='text italic text-red-400'>Bachelors In Computer Science</span><br/>
            McNeese State University<br/> Lake Charles<br/>Louisiana<br/><br/>
          </p>
          <p className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 rounded-sm shadow-2xl'>
            As a self-taught learner, I dedicate myself to mastering new technologies and methodologies every day, ensuring my skills are both current and versatile. Soccer, a personal passion, has taught me the value of teamwork, strategic thinking, and resilience qualities that I seamlessly integrate into my professional endeavors.
            development.
          </p>
          <p className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 rounded-sm shadow-2xl'>
            Driven by curiosity and a relentless pursuit of excellence, I am committed to crafting intuitive and impactful digital experiences, continually pushing the boundaries of what&#39;s possible in web development.
          </p>
          
        </div>
      </div>
      <ScrollToTop smooth top="150" width="40" height="30" style={{marginBottom: "40px", backgroundColor: "#fefce8", outline: "4px white solid", borderRadius: "50%", cursor: "pointer"}}/>
    </>
  )
}
