'use client';

import ScrollToTheTop from '@/components/scrollToTop/ScrollToTop';
import SocialIcons from '@/components/socialIcons/SocialIcons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: 'spring' }}
        className=' min-h-[80vh] w-full h-max md:w-10/12 md:max-w-screen-xl self-center grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 justify-items-center place-content-start md:place-content-center place-items-center mt-[80px] p-5 md:p-0'
      >
        {Intro(router)}
        {Images()}
      </motion.div>
      <ScrollToTheTop />
    </>
  );
}

function Images() {
  return (
    <>
      <Image
        className='p-10 md:p-0 w-fit h-fit stroke dark:hidden'
        src={'/landingLight.svg'}
        alt=''
        height={800}
        width={800}
        priority
      />
      <Image
        className='hidden p-10 md:p-0 w-fit h-fit stroke dark:block'
        src={'/landingDark.svg'}
        alt=''
        height={800}
        width={800}
        priority
      />
    </>
  );
}

function Intro(router) {
  return (
    <div className='relative flex flex-col order-last text-center md:-order-none place-self-center md:top-10 md:text-start'>
      <p className='text-xl text-gray-500 text dark:text-yellow-50'>Hello,</p>
      <p className='mt-3 text-2xl font-bold text-gray-700 text dark:text-yellow-50 sm:text-3xl'>
        I&apos;m Prajwal Dhungana
      </p>
      <p className='mt-3 text-lg text-gray-600 text dark:text-yellow-50'>
        Full Stack Developer | Open Source Contributor
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        transition={{ duration: 0.5, type: 'spring' }}
        onClick={() => router.push('/about')}
        className='h-10 w-32 max-w-40 mt-5 bg-gray-700 dark:bg-yellow-50 text text-[#fffffc] dark:text-gray-700 font-bold outline-none rounded-lg self-center md:self-start'
      >
        About Me
      </motion.button>
      <div className='self-center -mt-4 md:self-start'>
        <SocialIcons />
      </div>
    </div>
  );
}
