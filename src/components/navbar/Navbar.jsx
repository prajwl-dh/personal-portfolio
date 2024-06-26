'use client';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [sticky, setSticky] = React.useState(false);

  function handleScroll() {
    if (scrollY == 0) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  function navigationToggle() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring' }}
      className={` h-[80px] py-10 lg:p-10 items-center w-screen flex flex-row justify-between ${
        isNavOpen ? 'bg-[#fffffc] dark:bg-neutral-800' : null
      } dark:text-white left-0 top-0 z-40 ${
        sticky
          ? `fixed top-0 z-[9999] ${
              !isNavOpen ? 'shadow-sm backdrop-blur-sm bg-opacity-40' : null
            }`
          : 'absolute'
      }`}
    >
      <Link
        onClick={() => {
          setIsNavOpen(false);
        }}
        href='/'
        className='pl-3'
      >
        <p
          className={`${
            pathName === '/'
              ? 'text-gray-500 underline decoration-4 underline-offset-8 dark:text-yellow-200'
              : null
          } text text-gray-500 dark:text-yellow-50 hover:cursor-pointer font-bold text-2xl hover:text-gray-800 dark:hover:text-yellow-200 hover:underline hover:underline-offset-8 hover:decoration-4`}
        >
          #prajwl-dh
        </p>
      </Link>
      <div className='flex flex-row gap-5 md:gap-10 text-gray-500 dark:text-yellow-50 text-lg font-bold items-center'>
        <Link
          className={`hidden md:inline hover:text-gray-800 dark:hover:text-yellow-200 ${
            pathName === '/about'
              ? 'text-gray-800 underline decoration-4 underline-offset-4 dark:text-yellow-200'
              : null
          }`}
          href='/about'
        >
          About
        </Link>
        <Link
          className={`hidden md:inline hover:text-gray-800 dark:hover:text-yellow-200 ${
            pathName === '/projects'
              ? 'text-gray-800 underline decoration-4 underline-offset-4 dark:text-yellow-200'
              : null
          }`}
          href='/projects'
        >
          Projects
        </Link>
        <Link
          className={`hidden md:inline hover:text-gray-800 dark:hover:text-yellow-200 ${
            pathName === '/contact'
              ? 'text-gray-800 underline decoration-4 underline-offset-4 dark:text-yellow-200'
              : null
          }`}
          href='/contact'
        >
          Contact
        </Link>
        {theme === 'dark' ? (
          <svg
            onClick={() => {
              setTheme('light');
            }}
            className='text text-2xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-125'
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z'
            ></path>
          </svg>
        ) : (
          <svg
            onClick={() => {
              setTheme('dark');
            }}
            className='text text-2xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-125'
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56'
            ></path>
          </svg>
        )}
        <div className='pr-3'>
          <motion.div
            animate={isNavOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ type: 'spring', duration: '0.8' }}
            className=''
          >
            <svg
              onClick={navigationToggle}
              className={`text text-2xl md:hidden hover:cursor-pointer`}
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z'
              />
            </svg>
          </motion.div>
        </div>
      </div>
      {isNavOpen &&
        MobileNavbar(isNavOpen, setIsNavOpen, pathName, sticky, router)}
    </motion.div>
  );
}

function MobileNavbar(isNavOpen, setIsNavOpen, pathName, sticky, router) {
  return (
    <div
      className={`md:hidden p-24 rounded-sm grid grid-col-1 place-items-center shadow-lg w-full h-[90vh] top-[80px] bg-[#fffffc] dark:bg-neutral-800 dark:text-white text text-4xl text-gray-600 z-[9999] ${
        !isNavOpen ? 'hidden' : null
      } ${sticky ? 'fixed top-0 z-[9999]' : 'absolute'}`}
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: 'spring' }}
        onClick={() => {
          setIsNavOpen(false);
          router.push('/about');
        }}
        className={`md:hidden ${
          isNavOpen ? null : 'hidden'
        } mb-2 hover:text-gray-800 dark:hover:text-yellow-200 ${
          pathName === '/about'
            ? 'text-gray-800 underline decoration-4 underline-offset-4 dark:text-yellow-200 hover:cursor-pointer'
            : 'no-underline'
        }`}
      >
        About
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: 'spring' }}
        onClick={() => {
          setIsNavOpen(false);
          router.push('/projects');
        }}
        className={`md:hidden ${
          isNavOpen ? null : 'hidden'
        } mb-2 hover:text-gray-800 dark:hover:text-yellow-200 ${
          pathName === '/projects'
            ? 'text-gray-800 underline decoration-4 underline-offset-8 dark:text-yellow-200 hover:cursor-pointer'
            : 'no-underline'
        }`}
        href='/projects'
      >
        Projects
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: 'spring' }}
        onClick={() => {
          setIsNavOpen(false);
          router.push('/contact');
        }}
        className={`md:hidden ${
          isNavOpen ? null : 'hidden'
        } mb-5 hover:text-gray-800 dark:hover:text-yellow-200 ${
          pathName === '/contact'
            ? 'text-gray-800 underline decoration-4 underline-offset-4 dark:text-yellow-200 hover:cursor-pointer'
            : 'no-underline'
        }`}
        href='/contact'
      >
        Contact
      </motion.p>
    </div>
  );
}
