'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

export default function Error() {
  const router = useRouter();

  function handleBackButtonClick() {
    router.back();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className='flex flex-col justify-center items-center mt-5'
    >
      <Image
        className='p-5 dark:hidden'
        src={'/errorLight.svg'}
        alt='Error Occured Image'
        height={800}
        width={800}
        priority
      ></Image>
      <Image
        className='p-5 hidden dark:block'
        src={'/errorDark.svg'}
        alt='Error Occured Image'
        height={800}
        width={800}
        priority
      ></Image>
      <h3 className='mt-5 text font-bold text-2xl md:text-3xl text-gray-600 dark:text-yellow-50'>
        Sorry, An error occured !
      </h3>
      <button
        onClick={() => handleBackButtonClick()}
        className='mt-3 text-gray-600 dark:text-yellow-50 hover:text-gray-900'
      >
        &#60;--{' '}
        <span className='underline underline-offset-4'>
          Back to previous page...
        </span>
      </button>
    </motion.div>
  );
}
