import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BasicsOfMotion.css';
//https://www.youtube.com/watch?v=znbCa4Rr054
const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container">
      <button className="example-button">Show/Hide</button>
      <motion.div
        className="box"
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '180deg' }}
        exit={{ rotate: '0deg' }}
        transition={{ duration: 1, ease: 'backInOut' }}
        style={{ width: 150, height: 150, background: 'black' }}
      ></motion.div>
    </div>
  );
};

export default BasicsOfMotion;
