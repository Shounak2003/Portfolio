//next image
import Image from "next/image";
import Head from 'next/head'; // Import Head from next/head

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from 'framer-motion'; 

//variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* Add Head component for custom title */}
      <Head>
        <title>Shounak&rsquo;s{' '} Portfolio</title>
      </Head>

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" 
            className='h1'>
            <span className='text-white'>A Code Composer :</span><br /> Building Tomorrow&rsquo;s{' '}
            <span className='text-accent'>
              <br />
              Digital Frontiers
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Passionate and versatile software developer based in India, with expertise spanning diverse tech stacks. 
            Proficient in game development, web development, Web 3.0 technologies, and the immersive realms of AR/VR. 
            Adept at navigating the blockchain landscape. Dedicated to crafting innovative and impactful digital solutions, 
            combining technical acumen with a creative approach. Committed to pushing boundaries and contributing to the evolution of 
            technology. Eager to bring a dynamic skill set to collaborative projects and make meaningful contributions to the ever-evolving world of 
            software development
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative"> 
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" 
            className="hidden xl:flex">
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* background image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/** particles */}
        <ParticlesContainer />
        {/**avatar image */}
        <motion.div 
          variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" 
          transition={{ duration: 1, ease: 'easeInOut' }} 
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
