// Import necessary modules and components
import TestimonialSlider from '../../components/TestimonialSlider';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* Title */}
        <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 mb-8 xl:mb-0 sm:mb-4 '>
          What People <span className='text-accent'>say.</span>
        </motion.h2>

        {/* Testimonial Slider Section */}
        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden">
          {/* Add the scroll button */}
          <div className="scroll-button">
            {/* Use ScrollLink to enable smooth scrolling to the TestimonialSlider */}
            <ScrollLink to="testimonialSlider" smooth={true} duration={500} />
          </div>

          {/* Wrap your TestimonialSlider with Element and apply styles for scrolling */}
          <Element name="testimonialSlider" style={{ overflowY: 'auto', maxHeight: '500px' }}>
            <TestimonialSlider />
          </Element>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
