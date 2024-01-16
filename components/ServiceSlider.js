import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

const serviceData = [

  {
    icon: 'Unity.png',
    title: 'Unity 3D',
    description: 'Developing games out of passion. Check out more',
    githubLink: 'https://github.com/Shounak2003/Unity-Tetris',
  },
  {
    icon: 'Python.png',
    title: 'Python',
    description: 'A Versatile, powerful and dynamic project currently in talks to be published in a journal',
    githubLink: 'https://github.com/Shounak2003/Route-Learning-and-Spatial-Navigation',
  },
  {
    icon: 'ARRV.png',
    title: 'AR/VR',
    description: 'An Immersive, interactive, transformative project. A must check!!',
    githubLink: 'https://github.com/Shounak2003/Route-Learning-and-Spatial-Navigation',
  },
  {
    icon: 'React.png',
    title: 'React',
    description: 'A Declarative, component-based library very commonly used now a days',
    githubLink: 'https://github.com/Shounak2003',
  },
  {
    icon: 'NodeJS.png',
    title: 'Node',
    description: 'Event-driven, non-blocking, scalable, server-side JavaScript runtime.',
    githubLink: 'https://github.com/Shounak2003',
  },
  {
    icon: 'aws.png',
    title: 'AWS',
    description: 'A leading Cloud computing platform. Just started learning. Any suggestions welcomed',
    githubLink: 'https://github.com/Shounak2003/AWS-Project',
  },
  {
    icon: '/Mern.png',
    title: 'Mern Stack',
    description: 'A JavaScript-based full-stack development framework.',
    githubLink: 'https://github.com/Shounak2003',
  },
  {
    icon: '/GameDev.png',
    title: 'Game Development',
    description: 'Passionate Game Developer. Should check out',
    githubLink: 'https://github.com/Shounak2003/Unity-Tetris',
  },
  {
    icon: 'Blockchain.png',
    title: 'Blockchain',
    description: 'Decentralized, secure, transparent, immutable, distributed. Leave a star.',
    githubLink: 'https://github.com/Shounak2003/blockchain-crowd-funding',
  },
  {
    icon: 'Designing.png',
    title: 'Designing',
    description: 'Plan, Make and Develop....',
    githubLink: 'https://www.figma.com/',
  },
  
  {
    icon: 'creativity.png',
    title: 'Creativity',
    description: 'An ability to make new things.....',
    githubLink: 'https://www.canva.com/',
  },
  {
    icon: 'Next.png',
    title: 'Next',
    description: 'React-based, server-rendered, efficient, extensible, developer-friendly.',
    githubLink: 'https://github.com/Shounak2003',
  },
];



const ServiceSlider = () => {
  const handleServiceClick = (githubLink) => {
    window.open(githubLink, '_blank');
  };

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      modules={[FreeMode, Pagination]}
      className='h-96 sm:h-[340px] mx-auto' // Adjust height for mobile
      spaceBetween={20}
      slidesPerView={1}
      freeMode={true}
      // Remove pagination prop to remove bullets
      // pagination={{ clickable: true }}
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            onClick={() => handleServiceClick(item.githubLink)}
            className='bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col gap-4 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'
            style={{ height: '100%' }} // Set a fixed height for the container
          >
            <div className='text-4xl text-accent mb-4'>
              {typeof item.icon === 'string' ? (
                <img src={item.icon} alt={item.title} className='text-accent' />
              ) : (
                item.icon
              )}
            </div>
            <div className='text-lg font-semibold'>{item.title}</div>
            <div className='text-sm text-gray-600'>{item.description}</div>

            {/** Wrapper div for icon and arrow */}
            <div className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'>
              <RxArrowTopRight />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;