import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-16 text-center"
    >
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-grey dark:text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-primary text-white rounded-full font-medium inline-block shadow-lg hover:shadow-[0_8px_20px_-6px_rgba(255,107,107,0.6)] transition-all hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
