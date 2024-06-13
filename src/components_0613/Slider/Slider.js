import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import image1 from './images/image01.jpg';
import image2 from './images/image02.jpg';
import image3 from './images/image03.jpg';
import image4 from './images/image04.jpg';
import image5 from './images/image05.jpg';
import './Slider.css';

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      {/* carousel : 회전목마(캐러셀) */}
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
          <motion.div className="item">
            <img src={image1} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image2} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image3} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image4} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image5} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={image5} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
