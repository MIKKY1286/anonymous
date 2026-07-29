import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm sm:text-base";
  
  const variants = {
    primary: "bg-primary text-white hover:shadow-[0_8px_20px_-6px_rgba(255,107,107,0.6)] shadow-primary/20",
    secondary: "bg-dark text-white dark:bg-light dark:text-dark hover:shadow-lg",
    outline: "border-2 border-dark text-dark dark:border-white dark:text-white bg-transparent hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark",
    glass: "glass text-dark dark:text-white hover:bg-white/50 dark:hover:bg-dark/50",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
