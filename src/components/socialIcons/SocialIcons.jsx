import { motion } from 'framer-motion';

export default function SocialIcons() {
  return (
    <div className='mt-10 mb-10 max-w-40 flex flex-row justify-between gap-3 text text-gray-700 dark:text-yellow-50'>
      <motion.a
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        transition={{ duration: 0.5, type: 'spring' }}
        href='https://www.facebook.com/profile.php?id=100086397636416'
        target='_blank'
      >
        <svg
          className={`cursor-pointer`}
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
        >
          <path
            d='M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z'
            fill='currentColor'
          />
        </svg>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        transition={{ duration: 0.5, type: 'spring' }}
        href='https://www.linkedin.com/in/prajwal-dhungana/'
        target='_blank'
      >
        <svg
          className={`cursor-pointer`}
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
          />
        </svg>
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        transition={{ duration: 0.5, type: 'spring' }}
        href='https://github.com/prajwl-dh'
        target='_blank'
      >
        <svg
          className={`cursor-pointer`}
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
        >
          <path
            d='M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'
            fill='currentColor'
          />
        </svg>
      </motion.a>
    </div>
  );
}
