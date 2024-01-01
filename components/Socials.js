//links
import Link from "next/link";
//icons
import {RiTwitterLine, RiInstagramLine,RiLinkedinLine,RiGithubLine,RiYoutubeLine,RiInboxLine} from 'react-icons/ri'

// ... (existing imports)


const Socials = () => {
  const iconSize = '2rem'; // Adjust the size as needed

  return (
    <div className="flex space-x-4">
      <Link href={'https://twitter.com/_shounakchandra'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine size={iconSize} />
      </Link>
      <Link href={'https://www.instagram.com/_shounakchandra/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine size={iconSize} />
      </Link>
      <Link href={'https://www.linkedin.com/in/shounakchandra/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine size={iconSize} />
      </Link>
      <Link href={'https://github.com/Shounak2003'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine size={iconSize} />
      </Link>
      <Link href={'https://www.youtube.com/@shounakchandra7263'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine size={iconSize} />
      </Link>
      <Link href={'mailto:waytoshounak@gmail.com'} className="hover:text-accent transition-all duration-300">
        <RiInboxLine size={iconSize} />
      </Link>
    </div>
  );
};

export default Socials;


