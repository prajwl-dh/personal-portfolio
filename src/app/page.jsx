'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ScrollToTop from 'react-scroll-to-top';
import SocialIcons from '@/components/socialIcons/SocialIcons';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: 'spring' }}
        className=' min-h-[80vh] w-full h-max md:w-9/12 md:max-w-screen-xl self-center grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 justify-items-center place-content-start md:place-content-center place-items-center md:mt-0'
      >
        <div className='flex flex-col order-last md:-order-none place-self-center relative md:top-10'>
          <p className='text text-gray-500 dark:text-yellow-50 text-xl'>
            Hello,
          </p>
          <p className='text text-gray-700 dark:text-yellow-50 text-2xl sm:text-3xl font-bold mt-3'>
            I&apos;m Prajwal Dhungana
          </p>
          <p className='text text-gray-600 dark:text-yellow-50 text-2xl mt-3'>
            Frontend Engineer
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            transition={{ duration: 0.5, type: 'spring' }}
            onClick={() => router.push('/about')}
            className='h-10 w-32 max-w-40 mt-5 bg-gray-700 dark:bg-yellow-50 text text-yellow-50 dark:text-gray-700 font-bold outline-none rounded-lg'
          >
            About Me
          </motion.button>
          <SocialIcons />
        </div>
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
            className='p-10 md:p-0 w-fit h-fit stroke hidden dark:block'
            src={'/landingDark.svg'}
            alt=''
            height={800}
            width={800}
            priority
          />
        </>
      </motion.div>
      <ScrollToTop
        smooth
        top='200'
        width='40'
        height='30'
        style={{
          marginBottom: '40px',
          backgroundColor: '#fefce8',
          outline: '4px white solid',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      />
    </>
  );
}
