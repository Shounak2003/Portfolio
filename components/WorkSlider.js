import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';


const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'BLockchain Crowd Funding',
          path: '/Blockchaincrowd.png',
          githubLink: 'https://crowd-funding-web3.web.app/',
        },
        {
          title: 'Disney plus CLone',
          path: '/Disney.jpg',
          githubLink: 'https://my-disney-plus.netlify.app',

        },
        {
          title: 'Crypto Hub X Clone',
          path: '/CryptoHub.jpeg',
          githubLink: 'https://crypto-hub-gamma.vercel.app/',
        },
        {
          title: 'My Portfolio',
          path: '/Portfolio.png',
          githubLink: 'https://github.com/Shounak2003/Portfolio',
        },
      ],
    },
    {
      images: [
        {
          title: 'PodHub',
          path: '/Podhub.png',
          githubLink: 'https://github.com/Shounak2003/PodHub',
        },
        {
          title: 'Route learning and Spatial Navigation',
          path: '/Routelearning.jpg',
          githubLink: 'https://github.com/Shounak2003/Route-Learning-and-Spatial-Navigation',
        },
        {
          title: 'Tetris',
          path: '/tetris-unity.png',
          githubLink: 'https://github.com/Shounak2003/Unity-Tetris',
        },
        {
          title: 'Architecture Planning',
          path: '/Christ.png',
          githubLink: 'https://github.com/Shounak2003/Christ-University',
        },
      ],
    },
  ],
};



const WorkSlider = () => {
  return (
    <Swiper
      loop={false}
      spaceBetween={10}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px] mx-auto'
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {workSlides.slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {item.images.map((image, index) => (
              <Link href={image.githubLink} key={index}>
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/* Images */}
                    <Image src={image.path} alt='' width={500} height={300} />
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                      {/* Title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2  text-[13px] tracking-[0.2em]'>
                          {/* Title part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* Title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          {/* Icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 '><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
