import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 text-center"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-grey dark:text-gray-400 mb-8">Insights, technical updates, and articles by Michael Ayodeji Oliyide.</p>
        <div className="glass p-12 rounded-3xl inline-block max-w-md mx-auto">
          <span className="text-5xl mb-4 block">✍️</span>
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-grey dark:text-gray-400">I am currently writing some exciting articles about full-stack development. Stay tuned!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
