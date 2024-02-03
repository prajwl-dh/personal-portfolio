'use client'
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { motion } from 'framer-motion'

export default function Contact() {
  return(
    <>
      <div className='w-full md:w-9/12 md:max-w-screen-xl self-center'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-10 text text-gray-500 dark:text-yellow-50 text-md md:text-lg p-5 mb-10 md:mt-10 md:p-0'>
          <motion.span initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text min-h-52 font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-2xl text-blue-500'>Contact Information: <br/><br/></span>
            <span className='text text-red-400'>Email: </span>
            <a className='underline underline-offset-4' href='ma&#105;lto&#58;prajw&#97;%6Cdhun%67an&#97;2%30&#64;%6&#55;mai%6C&#46;com' target='_blank'>&#112;rajwaldhung&#97;&#110;a&#50;0&#64;g&#109;&#97;il&#46;c&#111;m</a><br/><br/>
            <span className='text text-red-400'>LinkedIn: </span>
            <a className='underline underline-offset-4' href='https://www.linkedin.com/in/prajwal-dhungana-214248130/' target='_blank'>Prajwal Dhungana </a><br/>
          </motion.span>
          <motion.a href='https://github.com/prajwl-dh' target='_blank' initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text min-h-52 font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-2xl text-blue-500'>Github Profile: </span><br/><br/><br/>
            <span className='flex flex-row justify-center mb-0 lg:mb-10'><motion.button whileHover={{scale: 1.050}} onHoverStart={e => {}} onHoverEnd={e => {}} transition={{duration: 0.5, type:"spring"}} className='h-14 w-60 bg-gray-700 dark:bg-yellow-50 text text-yellow-50 dark:text-gray-700 font-bold text-2xl outline-none rounded-lg'>Click Here</motion.button></span>
          </motion.a>
          <motion.a href={'/resumePrajwalDhungana.pdf'} target='_blank' initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text min-h-52 font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-2xl text-blue-500'>Resume: </span><br/><br/><br/>
            <span className='flex flex-row justify-center mb-0 lg:mb-10'><motion.button whileHover={{scale: 1.050}} onHoverStart={e => {}} onHoverEnd={e => {}} transition={{duration: 0.5, type:"spring"}} className='h-14 w-60 bg-gray-700 dark:bg-yellow-50 text text-yellow-50 dark:text-gray-700 font-bold text-2xl outline-none rounded-lg'>Click Here</motion.button></span>
          </motion.a>
        </div>
      </div>
      <ScrollToTop smooth top="150" width="40" height="30" style={{marginBottom: "40px", backgroundColor: "#fefce8", outline: "4px white solid", borderRadius: "50%", cursor: "pointer"}}/>
    </>
  )
  
}
