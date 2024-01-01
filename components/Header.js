//next image
import Image from "next/image";
//next Link
import Link from "next/link";
//components
import Socials from '../components/Socials';
import React from 'react';
// ... (existing imports)

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex flex-col items-center px-4 xl:px-0 xl:h-[90px]'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          <div className="mt-7">
            {/** Heading */}
            <Link href={'/'}>
              <h1 className="cursor-pointer text-5xl font-bold text-white hover:text-accent">
                Shounak<span className="text-white text-5xl font-semibold hover:text-accent"> Chandra</span> <span className="text-accent hover:text-accent">.</span>
              </h1>
            </Link>

            {/** Slogan (visible on larger screens) */}
            <p className="hidden lg:block mt-1 text-4 font-semibold text-red-500 hover:text-white">
              Not your average developer
            </p>
          </div>

          {/** Socials (visible on larger screens) */}
          <div className="hidden lg:flex mt-4 lg:mt-0 lg:ml-auto">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
