'use client'

import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { motion, useScroll, useSpring } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className='w-full md:w-9/12 md:max-w-screen-xl self-center'>
        <p className='text text-gray-600 dark:text-yellow-50 text-2xl pt-10 px-10'>
          Hello! I&#39;m Prajwal Dhungana, a Frontend Developer based in Grand Prairie, TX. My passion for technology manifests through my expertise in the MERN stack, alongside skills in Next.js, React, JavaScript, and Tailwind CSS. These tools are my paintbrush for the digital canvas of the web.
        </p>
        <p className='text text-gray-600 dark:text-yellow-50 text-2xl pt-10 px-10'>
          During my academic tenure at McNeese State University, I had the thrilling opportunity to contribute to a NASA-funded LaSpace Rover Project. This experience not only honed my technical skills but also fueled my curiosity and ambition. My educational journey in computer science laid the foundation for my career, blending theory with practical, hands-on experience.
        </p>
        <p className='text text-gray-600 dark:text-yellow-50 text-2xl pt-10 px-10'>
          When I&#39;m not coding, you can find me on the soccer field. Playing soccer has been a vital part of my life, teaching me the importance of teamwork, strategy, and resilience. These skills transcend the field and resonate deeply in my professional life.
        </p>
        <p className='text text-gray-600 dark:text-yellow-50 text-2xl pt-10 px-10'>
        Swimming is another pursuit that keeps me balanced. It&#39;s not just a physical exercise for me; it&#39;s a practice in discipline, focus, and pushing personal boundaries. These qualities mirror in my approach to tackling complex tech challenges.
        </p>
      </div>
      <ScrollToTop smooth top="200" width="40" height="30" style={{marginBottom: "40px", backgroundColor: "#fefce8", outline: "4px white solid", borderRadius: "50%", cursor: "pointer"}}/>
    </>
  )
}
