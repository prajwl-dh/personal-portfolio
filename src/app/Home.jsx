'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ScrollToTop from 'react-scroll-to-top';
import { Intro, Images } from './page';

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
        {Intro(router)}
        {Images()}
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
