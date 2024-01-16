import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
// myself
const me = [
  {
    image: '/logome.png',
    name: 'Shounak Chandra',
    position: 'Software Developer | Part Time Game Developer | Mern Stack & Blockchain enthusiast',
    //linkedin:'https://www.linkedin.com/in/shaurya-srinet/?originalSubdomain=in',
    message:
      `A remote software developer with a passion for embracing new ideas and trends. Enthusiastic, agile learner, and tech-savvy professional dedicated to evolving with the ever-changing landscape of technology. A fun-loving individual who appreciates and values a good sense of humor. Actively seeking remote opportunities to contribute skills and expertise to innovative projects.





` ,
  },

];
const Aboutme = () => {
    return (
      <Swiper
        loop={false}
        spaceBetween={10}
        modules={[Navigation]}
        className='h-[400px]'
        slidesPerView={1}
        navigation={true}
        autoHeight={true}
      >
        {me.map((person, index) => (
          <SwiperSlide key={index}>
            <div className='flex  flex-col  items-center md:flex-row gap-x-8  h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full  max-w-[300px] flex flex-col  xl:justify-center items-center relative mx-auto xl:mx-0  '>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' className="circular-image" />
                  </div>
                  {/* name with LinkedIn link */}
                  <div className='text-lg'>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                      {person.name}
                    </a>
                  </div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight  tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* message */}
              <div className=' flex-1 flex  flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute  xl:before:left-0 xl:before:h-[200px] relative  xl:pl-20'>
                {/* message */}
                <div className='xl:text-[15px]  text-center md:text-left'>{person.message}</div>
  
                {/* "Do connect with me" line (only on mobile) */}
                <div className='text-lg mt-4 text-center md:text-left hidden md:hidden '>
                  Do connect with me:
                </div>
  
                {/* Social icons on mobile */}
                <div className='flex justify-center items-center mt-2 md:hidden'>
                  <a href="https://twitter.com/_shounakchandra" target="_blank" rel="noopener noreferrer" className='mr-4'><FaTwitter size={32} /></a>
                  <a href="https://www.instagram.com/_shounakchandra/" target="_blank" rel="noopener noreferrer" className='mr-4'><FaInstagram size={32} /></a>
                  <a href="https://www.linkedin.com/in/shounakchandra/" target="_blank" rel="noopener noreferrer" className='mr-4'><FaLinkedin size={32} /></a>
                  <a href="https://github.com/Shounak2003" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default Aboutme;