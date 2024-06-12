import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Main.css';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: 'spring' } }}
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        style={{ boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}
      >
        <motion.h2 layout="position">framer motion</motion.h2>
        {isOpen && (
          <motion.div className="expand">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique commodi voluptatibus atque quisquam accusantium perspiciatis, sed error aut accusamus, impedit at
              autem illo? Minus pariatur nulla amet, consequatur odit rem?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odit.</p>
            <button>Hello</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Main;
