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
          className={`flex flex-col text font-bold bg-white dark:bg-neutral-700 bg-opacity-50 dark:border-yellow-50 rounded-md shadow-2xl h-full transition-all hover:scale-105 overflow-hidden`}
        >
          <div className='flex flex-row justify-between items-center gap-5 p-5'>
            <p className='text font-bold text-3xl inline-block'>
              {project.name}
              <svg
                height={20}
                width={20}
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='inline-block ml-2'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  <path
                    fill='currentColor'
                    d='M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z'
                  ></path>
                </g>
              </svg>
            </p>
            <Image
              className='rounded-md overflow-hidden h-44 sm:h-40'
              src={project.image}
              alt={project.name}
              height={600}
              width={400}
              priority
            />
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
      href={'https://github.com/prajwl-dh?tab=repositories'}
      target='_blank'
      key={uuidv4()}
    >
      <div
        className={`flex flex-col text font-bold bg-white dark:bg-neutral-700 bg-opacity-50 dark:border-yellow-50 rounded-md shadow-2xl h-full transition-all hover:scale-105 overflow-hidden group`}
      >
        <div className='flex flex-row justify-between items-center gap-5 p-5'>
          <p className='text font-bold text-3xl inline-block'>
            GitHub
            <svg
              height={20}
              width={20}
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='inline-block ml-2'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  fill='currentColor'
                  d='M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z'
                ></path>
              </g>
            </svg>
          </p>
          <Image
            className='rounded-md overflow-hidden h-44 sm:h-40'
            src={'/GitHub.png'}
            alt={'Github Logo'}
            height={600}
            width={400}
            priority
          />
        </div>
        <p className='text text-ellipsis px-5 pb-5'>
          Feel free to check out more of my projects on GitHub!
        </p>
      </div>
    </motion.a>
  );

  allProjects.push(moreOnGithub);

  return (
    <>
      <div className='w-full md:w-10/12 md:max-w-screen-xl self-center flex flex-col p-5 mt-[100px] md:p-0 mb-10'>
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: 'spring' }}
          className='text text-2xl md:text-3xl font-bold text-gray-500 dark:text-yellow-50 mb-5'
        >
          Explore my projects
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
                  ? 'bg-gray-600 text-[#fffffc] border-0 dark:bg-yellow-50 dark:text-neutral-700'
                  : 'border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50'
              } h-8 min-w-24 rounded-lg hover:bg-gray-600 hover:text-[#fffffc] dark:hover:bg-yellow-50 dark:hover:text-neutral-700`}
            >
              Web
            </button>
            <button
              onClick={() =>
                router.push(pathname + '?' + createQueryString('type', 'game'))
              }
              className={`${
                searchParams.get('type') === 'game'
                  ? 'bg-gray-600 text-[#fffffc] border-0 dark:bg-yellow-50 dark:text-neutral-700'
                  : 'border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50'
              } h-8 min-w-24 rounded-lg hover:bg-gray-600 hover:text-[#fffffc] dark:hover:bg-yellow-50 dark:hover:text-neutral-700`}
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
                  ? 'bg-gray-600 text-[#fffffc] border-0 dark:bg-yellow-50 dark:text-neutral-700'
                  : 'border-2 border-gray-500 text-gray-500 dark:border-yellow-50 dark:text-yellow-50'
              } h-8 min-w-24 rounded-lg hover:bg-gray-600 hover:text-[#fffffc] dark:hover:bg-yellow-50 dark:hover:text-neutral-700`}
            >
              Robotics
            </button>
            <button
              onClick={() =>
                router.push(pathname + '?' + createQueryString('type', 'clear'))
              }
              className='text underline text-gray-500 dark:text-yellow-50 font-normal hover:text-gray-600 dark:hover:text-yellow-100'
            >
              Clear Filter
            </button>
          </motion.div>
          <div className='mt-0 md:mt-10 w-full p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-gray-600 dark:text-yellow-50 gap-10'>
            {allProjects}
          </div>
        </div>
      </div>
      <ScrollToTheTop />
    </>
  );
}
