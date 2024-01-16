import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

// testimonial data
const testimonialData = [
  {
    image: '/Shaurya.jpeg',
    name: 'Shaurya Srinet',
    position: 'IoT Developer || AI/ML Developer @ Stick & Dot || Software Developer || Networking & DevOps Enthusiast || AWS Geek || Ex Data Analyst @ ONEMi.in (kissht.com)',
    linkedin:'https://www.linkedin.com/in/shaurya-srinet/?originalSubdomain=in',
    message:
      `I am pleased to wholeheartedly recommend Shounak Chandra, a colleague who stands out as one of the best individuals I've collaborated with. Shounak's exceptional productivity, hardworking nature, and forward-thinking approach make him a remarkable asset to any team. His dedication to meeting deadlines and ensuring smooth operations reflects a level of focus that guarantees success.`,
  },
  {
    image: '/Sambath.jpeg',
    name: 'Dr. Sambath RD',
    position: 'Visual Ergonomics, Assistant Professor, Department of Architecture, TKM College of Engineering, Kollam, Kerala.',
    linkedin:'https://www.linkedin.com/in/sambathrd/',
    message:
      'Shounak Chandra is a very sincere and hardworking young programmer and UX-UI Designer. He has excellent coding proficiency and problem-solving skills. He is a very productive person and is a multi-skilled person with a high level of patience. He associated with me in one of my Virtual reality-based research projects. Shounak made a custom-made program using Vizard (world viz), a python based virtual stimulation for psychophysiological analysis. His desire for proficiency and education makes him a valuable asset to the team. ',
  },
  {
    image: '/Shynu.jpeg',
    name: 'Ar. Shynu Robert',
    position: 'Assistant Professor, School of Architecture Christ University, Bangalore',
    linkedin:'https://drive.google.com/file/d/1thqFj333mQ_LSZFiovikSIgc0GFY2RLg/view?usp=drive_link',
    message:
      `Exploring "Understanding Human Cognition towards Urban Environment through Neuroscience and Empirical Approach" since January 26th has been nothing short of amazing. Conducting a seminar on Gaming Platforms in Architectural research was a highlight on July 31, 2023.

     Shounak has contributed to generating crucial behavioral data for our empirical analysis. Grasping complex concepts, designing rigorous experiments, and meticulous data analysis have been rewarding aspects of this journey.`,
  },
];

const TestimonialSlider = () => {
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
      {testimonialData.map((person, index) => (
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
            {/* quote and message */}
            <div className=' flex-1 flex  flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute  xl:before:left-0 xl:before:h-[200px] relative  xl:pl-20'>
              {/* quote icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
              {/* message */}
              <div className='xl:text-[12px]  text-center md:text-left'>{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
