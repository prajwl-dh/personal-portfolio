import { motion } from 'framer-motion';
import React from 'react';

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    const user = 'contact';
    const domain = 'prajwalonline.com';
    const { name, email, message } = formData;

    const mailToLink = `mailto:${user}@${domain}?subject=Hello from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Hi there!
    
    I just visited your portfolio website and wanted to get in touch with you. Here's a bit about me and what I'd like to discuss:
    
    - My Name: ${name}
    - My Email: ${email}
    
    My Message:
    ${message}
    
    I really appreciate you taking the time to look over my message. Looking forward to possibly chatting more!
    
    Cheers,
    ${name}
    `
    )}`;
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    window.location.href = mailToLink;
  }

  function handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className='flex flex-col gap-6 xl:gap-5 items-center mx-3 lg:mx-0 p-5 md:p-5 md:pb-2 order-last lg:order-1 border-4 border-b-[20px] border-r-[20px] dark:border-0 border-gray-700 bg-white dark:bg-neutral-700 dark:border-yellow-50 dark:rounded-2xl rounded-sm shadow-xl'
    >
      <p className='self-center text text-2xl font-bold text-gray-600 dark:text-yellow-50'>
        Contact Me
      </p>
      <input
        className='p-3 rounded-md border-2 outline-none border-gray-600 bg-inherit text-gray-600 placeholder:text-gray-600 dark:border-yellow-50 dark:text-yellow-50 dark:placeholder:text-yellow-50 text-xl w-full'
        type='name'
        name='name'
        placeholder='Your Name'
        value={formData.name || ''}
        onChange={handleFormChange}
        required
      />
      <input
        className='p-3 rounded-md border-2 outline-none border-gray-600 bg-inherit text-gray-600 placeholder:text-gray-600 dark:border-yellow-50 dark:text-yellow-50 dark:placeholder:text-yellow-50 text-xl w-full'
        type='email'
        name='email'
        placeholder='Your Email'
        value={formData.email || ''}
        onChange={handleFormChange}
        required
      />
      <textarea
        className='p-3 rounded-md border-2 outline-none border-gray-600 bg-inherit text-gray-600 placeholder:text-gray-600 dark:border-yellow-50 dark:text-yellow-50 dark:placeholder:text-yellow-50 text-xl w-full'
        name='message'
        cols={30}
        rows={5}
        placeholder='Your Message'
        value={formData.message || ''}
        onChange={handleFormChange}
        required
      />
      <motion.button
        type='sumbit'
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        transition={{ duration: 0.5, type: 'spring' }}
        className='p-3 bg-gray-700 font-bold rounded-xl cursor-pointer border-none outline-none text-yellow-50 dark:bg-yellow-50 dark:text-gray-700 mb-0'
      >
        Send Message
      </motion.button>
      <div className='flex flex-row gap-5 justify-between text text-gray-700 dark:text-yellow-50'>
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
    </form>
  );
}
