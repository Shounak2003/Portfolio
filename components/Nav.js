'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'skills', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

import { useEffect, useState } from 'react';
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`flex flex-col items-center xl:justify-center gap-y-10 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ${isMobile ? 'bg-transparent' : 'bg-[rgba(255,255,255,0.1) ] backdrop-blur-sm'}`}>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link, index) => (
          <Link
            className={`relative flex items-center group hover:text-accent transition-all duration-300 ${link.path === pathname ? 'text-accent' : ''}`}
            href={link.path}
            key={index}
          >
            <div className={`absolute pr-14 right-0 hidden xl:group-hover:flex ${link.path === pathname ? 'text-red-500' : 'text-primary'}`}>
              <div className='bg-white relative flex items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
              </div>
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute'></div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;