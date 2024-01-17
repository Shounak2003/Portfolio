//components
import Circles from '/components/Circles'; 
import { useEffect } from 'react';

//icons
import {BsArrowRight} from 'react-icons/bs';

//framer
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../../variants';
import Head from 'next/head'; // Import Head from next/head

const Contact = () => {
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className='h-full bg-primary/30 '>
      <Head>
    <title>COntact me</title>
    <link rel="icon" href="/logome.png" />
  </Head>
      <div className='container-mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/**text & form  */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/**text */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 text-center mb-12'>
            Let&apos;s <span className='text-accent'> connect. </span>
          </motion.h2>
          {/**form */}
          <motion.form variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" method="POST" action="https://getform.io/f/f45bd1f0-ff32-4c30-8f86-837dc3db7c0c" className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/**input group */}
            <div className='flex gap-x-6 w-full '>
              <input type="text" name="name" placeholder='name' className='input'/>
              <input type="text" name="email" placeholder='email' className='input'/>
            </div>
            <input type="text" name="subject" placeholder='subject' className='input'/>
            <textarea name="message" placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[-170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
            {/* Typeform button */}
            <div data-tf-live="01HM9Z9YQ9VZFQSEGKDG7JBQ49"></div>
          {/*Copyright*/}
          <div className="text-center pt-4">
        <p className="text-sm font-bold">&copy; 2024 Shounak Chandra. All Rights Reserved.</p>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
