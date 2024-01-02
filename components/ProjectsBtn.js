// next/image
import Image from "next/image";

// next/link
import Link from "next/link";

// react-icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const openCVInNewTab = () => {
    // Update the file path if needed
    const cvFilePath = '/resume.pdf';

    // Open the CV in a new tab
    window.open(cvFilePath, '_blank');
  };

  return (
    <div className="mx-auto xl:mx-0 text-white">
      <div
        className="relative w-[185px] h-[185px] flex flex-col justify-center items-center bg-circleStar bg-cover bg-no-repeat group"
        onClick={openCVInNewTab}
        role="button"
      >
        {/* Rounded Text Above the Arrow */}
        
        
        {/* <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        /> */}
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />

        {/* Rounded Text Below the Arrow */}
        <div className="text-sm text-center  mt-12  w-full h-full group-hover:translate-x-2 transition-all">Check my CV </div>
      </div>
    </div>
  );
};

export default ProjectsBtn;
