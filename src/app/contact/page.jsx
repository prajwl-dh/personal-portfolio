'use client';
import ContactForm from '@/components/contactForm/ContactForm';
import ScrollToTheTop from '@/components/scrollToTop/ScrollToTop';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: 'spring' }}
        className='min-h-[80vh] w-full h-max md:w-9/12 md:max-w-screen-xl self-center grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-20 justify-center place-items-center md:mt-10 lg:mt-0 mb-10 lg:mb-0'
      >
        <Image
          className='p-10 md:p-0 w-fit h-fit stroke dark:hidden'
          src={'/contactLight.svg'}
          alt=''
          height={800}
          width={800}
          priority
        />
        <Image
          className='p-10 md:p-0 w-fit h-fit stroke hidden dark:block'
          src={'/contactDark.svg'}
          alt=''
          height={800}
          width={800}
          priority
        />
        <div className='flex flex-col justify-center order-last lg:-order-none place-self-center md:top-10 w-full'>
          <ContactForm />
        </div>
      </motion.div>
      <ScrollToTheTop />
    </>
  );
}
