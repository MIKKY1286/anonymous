import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <motion.div
      className={`glass p-6 rounded-3xl ${hoverEffect ? 'hover:shadow-2xl transition-shadow duration-300' : ''} ${className}`}
      whileHover={hoverEffect ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
