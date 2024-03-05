'use client';
import ScrollToTheTop from '@/components/scrollToTop/ScrollToTop';
import githubProjects from '@/data/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Projects() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (type, value) => {
      const params = new URLSearchParams(searchParams);
      value !== 'clear' ? params.set(type, value) : params.delete(type);
      return params.toString();
    },
    [searchParams]
  );

  const filteredArray =
    searchParams.get('type') == null
      ? githubProjects
      : githubProjects.filter(
          (project) => project.type === searchParams.get('type')
        );
  const shuffleArray = filteredArray.sort((a, b) => 0.5 - Math.random());
  const allProjects = shuffleArray.map((project) => {
    return (
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: 'spring' }}
        href={project.link}
        target='_blank'
        key={uuidv4()}
      >
        <div
          className={`flex flex-col text font-bold bg-white dark:bg-neutral-700 bg-opacity-60 dark:border-yellow-50 rounded-lg shadow-xl h-full transition-all hover:scale-105 overflow-hidden`}
        >
          <div className='flex flex-row items-center p-5 justify-between gap-5'>
            <Image
              className='h-40 w-60 rounded-lg overflow-hidden'
              src={project.image}
              alt={project.name}
              height={600}
              width={400}
              priority
            />
            <p className='text font-bold text-3xl'>{project.name}</p>
          </div>
          <p className='text text-ellipsis px-5 pb-5'>{project.description}</p>
        </div>
      </motion.a>
    );
  });

  const moreOnGithub = (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      href='https://github.com/prajwl-dh?tab=repositories'
      target='_blank'
      key={uuidv4()}
    >
      <div
        className={`flex flex-col text font-bold bg-white dark:bg-neutral-700 bg-opacity-60 dark:border-yellow-50 rounded-lg shadow-xl h-full transition-all hover:scale-105 overflow-hidden justify-center text-center`}
      >
        <div className='text font-bold text-3xl mb-5 pt-5'>
          <q>View more on Github</q>
        </div>
        <div className='flex flex-row justify-center'>
          <button className='h-14 w-40 md:w-60 bg-gray-700 dark:bg-yellow-50 text text-yellow-50 dark:text-gray-700 font-bold text-2xl outline-none rounded-lg text-center p-3 mb-5'>
            Click Here
          </button>
        </div>
      </div>
    </motion.a>
  );

  const contactMe = (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      onClick={() => router.push('/contact')}
      key={uuidv4()}
      className='mt-2 sm:mt-0'
    >
      <div
        className={`flex flex-col text font-bold bg-white bg-opacity-60 dark:bg-neutral-700 dark:border-yellow-50 rounded-lg shadow-xl h-full transition-all hover:scale-105 overflow-hidden justify-center text-center cursor-pointer`}
      >
        <div className='text font-bold text-3xl mb-5 pt-5'>
          <q>Contact Me</q>
        </div>
        <div className='flex flex-row justify-center'>
          <motion.button className='h-14 w-40 md:w-60 bg-gray-700 dark:bg-yellow-50 text text-yellow-50 dark:text-gray-700 font-bold text-2xl outline-none rounded-lg text-center p-3 mb-5'>
            Click Here
          </motion.button>
        </div>
      </div>
    </motion.a>
  );

  allProjects.push(moreOnGithub);
  allProjects.push(contactMe);

  return (
    <>
      <div className='w-full md:w-9/12 md:max-w-screen-xl self-center flex flex-col p-5 md:mt-10 md:p-0 mb-10'>
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: 'spring' }}
          className='text text-2xl md:text-3xl font-bold text-gray-500 dark:text-yellow-50 mb-5'
        >
          Explore my personal projects
        </motion.p>
        <div className='w-full'>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: 'spring' }}
            className='flex flex-row md:gap-5 gap-3 flex-wrap md:mt-2 text font-bold'
          >
            <button
              onClick={() =>
                router.push(pathname + '?' + createQueryString('type', 'web'))
              }
              className={`${
                searchParams.get('type') === 'web'
                  ? 'bg-gray-600 text-yellow-50 border-0 dark:bg-yellow-50 dark:text-neutral-700'
                  : 'border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50'
              } h-8 min-w-24 rounded-lg hover:bg-gray-600 hover:text-yellow-50 dark:hover:bg-yellow-50 dark:hover:text-neutral-700`}
            >
              Web
            </button>
            <button
              onClick={() =>
                router.push(pathname + '?' + createQueryString('type', 'game'))
              }
              className={`${
                searchParams.get('type') === 'game'
                  ? 'bg-gray-600 text-yellow-50 border-0 dark:bg-yellow-50 dark:text-neutral-700'
                  : 'border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50'
              } h-8 min-w-24 rounded-lg hover:bg-gray-600 hover:text-yellow-50 dark:hover:bg-yellow-50 dark:hover:text-neutral-700`}
            >
              Games
            </button>
            <button
              onClick={() =>
                router.push(
                  pathname + '?' + createQueryString('type', 'robotics')
                )
              }
              className={`${
                searchParams.get('type') === 'robotics'
                  ? 'bg-gray-600 text-yellow-50 border-0 dark:bg-yellow-50 dark:text-neutral-700'
                  : 'border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50'
              } h-8 min-w-24 rounded-lg hover:bg-gray-600 hover:text-yellow-50 dark:hover:bg-yellow-50 dark:hover:text-neutral-700`}
            >
              Robotics
            </button>
            <button
              onClick={() =>
                router.push(pathname + '?' + createQueryString('type', 'clear'))
              }
              className='text underline text-gray-500 dark:text-yellow-50 font-normal'
            >
              Clear Filter
            </button>
          </motion.div>
          <div className='mt-0 md:mt-10 w-full p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 text-gray-600 dark:text-yellow-50 gap-10'>
            {allProjects}
          </div>
        </div>
      </div>
      <ScrollToTheTop />
    </>
  );
}
