'use client'

import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function About() {
  const router = useRouter()
  return (
    <>
      <div className='w-full md:w-9/12 lg:max-w-screen-xl self-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-10 text text-gray-500 dark:text-yellow-50 text-md md:text-lg p-5 mb-10 md:mt-10 md:p-0'>
          <motion.span initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text font-bold text-xl'>Hi!</span><br/><br/> I&#39;m <span className='text text-blue-500'>Prajwal Dhungana</span>, a passionate <span className='text text-red-400'>Frontend Engineer</span> from Grand Prairie, TX, deeply engaged in the dynamic world of web development with a strong foundation in the MERN stack, alongside Next.js and Tailwind CSS.<br/><br/>
            As a self-taught learner, I dedicate myself to mastering new technologies and methodologies every day, ensuring my skills are both current and versatile.
          </motion.span>
          <motion.span initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-blue-500 text-xl'>Professional experience:<br/><br/></span>
            <ul>
              <li><span className='text text-red-400'>American Tracking Services</span><br/><span className='text italic'>Frontend Engineer, Present</span><br/><br/></li>
              <li><span className='text text-red-400'>Optum</span><br/>Frontend Engineer (2021-2022)<br/><br/></li>
              <li><span className='text text-red-400'>Northern Trust</span><br/>Frontend Developer (2019-2021)</li>
            </ul>
          </motion.span>
          <motion.span initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-blue-500 text-xl'>Education : <br/><br/></span>
            <span className='text italic text-red-400'>Bachelors In Computer Science</span><br/>
            McNeese State University<br/> Lake Charles<br/>Louisiana<br/><br/>Experience: Web development, Robotics, Programming, Software Engineering<br/><br/>
            <span className='text italic text-red-400'>Diploma of Information and Technology</span><br/>
            Queensford College<br/> Parramatta<br/>New South Wales<br/>Australia<br/><br/>Experience: IT Helpdesk Support, Teaching Assistant<br/>
          </motion.span>
          <motion.span initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-blue-500 text-xl'>Skills:</span><br/><br/>
            <span className='text text-red-400'>Languages: </span>Javascript, HTML5, CSS3, Python, Java, C, Golang<br/>
            <span className='text text-red-400'>Frontend Development: </span>React.js (Hooks, ContextAPI), TailwindCSS, React Router, Redux, MobX, Axios, Responsive Web Design, SEO, WCAG<br/>
            <span className='text text-red-400'>UI/UX Tools: </span>Figma, Adobe Creative Suite (Photoshop, Illustrator), Sketch, Prototyping, Wireframing<br/>
            <span className='text text-red-400'>Backend: </span>Node.js, Express.js, Nginx, RESTful API Development, Next.js, Next.auth<br/>
            <span className='text text-red-400'>Databases: </span>MongoDB, MySQL, NoSQL, SQL<br/>
            <span className='text text-red-400'>Cloud Services: </span>Firebase, Google Cloud Platform(GCP), Amazon Web Services(AWS)<br/>
            <span className='text text-red-400'>Version Control: </span>Git, GitHub, GitLab<br/>
            <span className='text text-red-400'>Testing: </span>Jest, Enzyme<br/>
            <span className='text text-red-400'>CI/CD: </span>Docker, Jenkins, CircleCI<br/>
            <span className='text text-red-400'>General Tools: </span>Power BI, Microsoft Office, VsCode <br/>
          </motion.span>
          <motion.span initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-blue-500 text-xl'>Engagements & Hobbies:</span><br/><br/>
            <span className='text text-red-400'>Sports: </span>Soccer, Table Tennis, Swimming<br/>
            <span className='text text-red-400'>Soft skills: </span>Public speaking, Communication, Leadership, Teamwork, Collaboration<br/>
          </motion.span>
          <motion.span initial={{ opacity: 0, y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{duration: 2, type:"spring"}} className='text font-bold text-start border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 p-5 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'>
            <span className='text text-blue-500 text-xl'>Personal Projects : </span><br/><br/>
            <div className='flex flex-row justify-center'><motion.button whileHover={{scale: 1.1}} onHoverStart={e => {}} onHoverEnd={e => {}} transition={{duration: 0.5, type:"spring"}} className='h-14 w-60 bg-gray-700 dark:bg-yellow-50 text text-yellow-50 dark:text-gray-700 font-bold text-2xl outline-none rounded-lg' onClick={() => router.push('/projects')}>Click Here</motion.button></div>
          </motion.span>
        </div>
      </div>
      <ScrollToTop smooth top="150" width="40" height="30" style={{marginBottom: "40px", backgroundColor: "#fefce8", outline: "4px white solid", borderRadius: "50%", cursor: "pointer"}}/>
    </>
  )
}
