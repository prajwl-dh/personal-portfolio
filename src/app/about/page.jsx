'use client';

import ScrollToTheTop from '@/components/scrollToTop/ScrollToTop';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function About() {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='self-center w-full md:w-10/12 lg:max-w-screen-xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-10 text text-gray-500 dark:text-yellow-50 text-md md:text-lg p-5 mb-10 mt-[100px] md:p-0'>
          {AboutMe()}
          {Education()}
          {Skills()}
          {Engagements()}
          {MyProjects(router)}
        </div>
      </div>
      <ScrollToTheTop />
    </>
  );
}

function MyProjects(router) {
  return (
    <motion.a
      onClick={() => router.push('/projects')}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className='p-5 font-bold bg-white bg-opacity-50 rounded-lg shadow-2xl cursor-pointer text text-start dark:bg-neutral-700'
    >
      <span className='text-xl text-blue-500 text'>My Projects : </span>
      <br />
      <br />
      <span className='flex flex-row justify-center'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          transition={{ duration: 0.5, type: 'spring' }}
          className='h-14 w-60 bg-gray-700 dark:bg-yellow-50 text text-[#fffffc] dark:text-gray-700 font-bold text-2xl outline-none rounded-lg'
          onClick={() => router.push('/projects')}
        >
          Click Here
        </motion.button>
      </span>
    </motion.a>
  );
}

function Engagements() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className='p-5 font-bold bg-white bg-opacity-50 rounded-lg shadow-2xl text text-start dark:bg-neutral-700'
    >
      <span className='text-xl text-blue-500 text'>Engagements & Hobbies:</span>
      <br />
      <br />
      <span className='text-red-400 text'>Sports: </span>Soccer, Table Tennis,
      Swimming
      <br />
      <span className='text-red-400 text'>Soft skills: </span>Public speaking,
      Communication, Leadership, Teamwork, Collaboration
      <br />
    </motion.span>
  );
}

function Skills() {
  const windowWidth = window.innerWidth;

  let perline = 15; // default value for larger screens

  if (windowWidth < 450) {
    perline = 7;
  } else if (windowWidth < 1000) {
    perline = 9;
  } else if (windowWidth < 1080) {
    perline = 12;
  }
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className='p-5 font-bold bg-white bg-opacity-50 rounded-lg shadow-2xl text text-start dark:bg-neutral-700 lg:col-span-2'
    >
      <span className='text-xl text-blue-500 text'>Skills:</span>
      <br />
      <br />
      <img
        className='w-full'
        src={`https://skillicons.dev/icons?i=html,js,ts,css,tailwind,angular,react,redux,express,nodejs,nextjs,figma,materialui,ps,git,github,postgres,mongodb,sqlite,mysql,firebase,gcp,aws,azure,postman,jest,jquery,php,wordpress,bootstrap,regex,npm,vite,webpack,nginx,docker,go,graphql,jenkins,java,c,py,arduino,opencv,tensorflow,raspberrypi,linux,bash,redhat,vscode,atom,arch,mint,ubuntu,debian,apple,windows${
          perline ? `&perline=${perline}` : ''
        }`}
        alt='skills icons'
        loading='lazy'
      />
    </motion.span>
  );
}

function Education() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className='p-5 font-bold bg-white bg-opacity-50 rounded-lg shadow-2xl text text-start dark:bg-neutral-700'
    >
      <span className='text-xl text-blue-500 text'>
        Education : <br />
        <br />
      </span>
      <span className='italic text-red-400 text'>
        Bachelors In Computer Science
      </span>
      <br />
      McNeese State University
      <br /> Lake Charles
      <br />
      Louisiana
      <br />
      <br />
      <span className='text-red-400 text'>At McNeese: </span>Web development,
      Robotics, Programming, Software Engineering
    </motion.span>
  );
}

function AboutMe() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className='p-5 font-bold bg-white bg-opacity-50 rounded-lg shadow-2xl text text-start dark:bg-neutral-700'
    >
      <span className='text-xl font-bold text'>Hi!</span>
      <br />
      <br /> I&#39;m{' '}
      <span className='text-blue-500 text'>Prajwal Dhungana</span>, a passionate{' '}
      <span className='text-red-400 text'>Full Stack Developer</span> deeply
      engaged in the dynamic world of modern web development with a strong
      foundation in the MERN stack, alongside Next.js and Tailwind CSS.
      <br />
      <br />
      As a self-taught learner, I dedicate myself to mastering new technologies
      and methodologies every day, ensuring my skills are both current and
      versatile.
    </motion.span>
  );
}
