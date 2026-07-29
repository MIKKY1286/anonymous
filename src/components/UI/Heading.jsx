import React from 'react';

export const Heading = ({ children, level = 2, className = '', ...props }) => {
  const Tag = `h${level}`;
  
  const baseStyles = {
    1: "text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight",
    2: "text-2xl sm:text-3xl md:text-4xl font-bold mb-6",
    3: "text-xl sm:text-2xl font-semibold mb-4",
    4: "text-lg sm:text-xl font-medium mb-2",
  };

  return (
    <Tag className={`${baseStyles[level] || baseStyles[2]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
