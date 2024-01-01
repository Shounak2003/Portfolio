import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs as SiNext,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNext key="next" />,
          <SiFramer key="framer" />,
          
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
      {
        title: "Programming",
        icons: [
          <FaFigma key="c" />,
          <SiAdobexd key="c++" />,
          <SiAdobephotoshop key="java" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experences",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  // ... (other sections)
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-l flex flex-col justify-center">
          text
        </div>

        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`cursor-pointer capitalize xl:text-lg relative ${
                index === itemIndex
                  ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  : ""
              } after:w-8 after:h-[2px] after:bg-white after-absolute after:-bottom-1 after-left-0`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
          <div>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex}>
                {/* title */}
                <div>{item.title}</div>
                {/* icons */}
                <div>{item.icons}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
