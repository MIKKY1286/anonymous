import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import Card from '../UI/Card';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="p-0 overflow-hidden flex flex-col justify-between h-full border border-slate-100 dark:border-slate-800 shadow-sm relative group">
        
        {/* Project Image and Category Overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Category Pill Tag */}
          <span className="absolute top-4 left-4 px-3 py-1 bg-dark/60 backdrop-blur-md text-white rounded-full text-xs font-semibold">
            {project.category}
          </span>
          
          <span className="absolute bottom-4 right-4 text-xs font-bold text-slate-200 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            {project.year}
          </span>
        </div>

        {/* Card Details Content */}
        <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-dark dark:text-light group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-grey dark:text-slate-400 leading-relaxed line-clamp-3">
              {project.shortDesc}
            </p>
          </div>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-grey dark:text-slate-400 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Quick-action links footer */}
        <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-grey dark:text-slate-400 text-sm">
          
          {/* External Links */}
          <div className="flex items-center gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition-colors"
                title="GitHub Repository"
              >
                <FiGithub size={18} />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition-colors"
                title="Live Demo"
              >
                <FiExternalLink size={18} />
              </a>
            )}
          </div>

          {/* Case study navigation link */}
          <Link 
            to={`/project/${project.id}`} 
            className="flex items-center gap-1 text-xs font-bold text-primary hover:underline hover:gap-1.5 transition-all"
          >
            Case Study <FiArrowRight />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
