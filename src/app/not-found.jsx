'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  function handleBackButtonClick() {
    router.back();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className='flex flex-col justify-center items-center mb-5 mt-[80px]'
    >
      <Image
        className='p-5 dark:hidden'
        src={'/notFoundLight.svg'}
        alt='Not Found Page'
        height={800}
        width={800}
        priority
      ></Image>
      <Image
        className='p-5 hidden dark:block'
        src={'/notFoundDark.svg'}
        alt='Not Found Page'
        height={800}
        width={800}
        priority
      ></Image>
      <h3 className='mt-5 text font-bold text-2xl md:text-3xl text-gray-600 dark:text-yellow-50'>
        404 - Page Not Found !
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
