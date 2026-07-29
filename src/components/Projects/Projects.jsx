import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../UI/Heading';
import Button from '../UI/Button';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsData from '../../data/projects';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Business', 'Web Apps', 'Landing Pages', 'Student Projects'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Student Projects') return project.subCategory === 'Student Projects';
    return project.category === filter || project.subCategory === filter;
  });

  return (
    <section 
      id="project" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#090d16] transition-colors duration-300"
    >
      <div className="absolute top-1/3 right-1/10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-primary font-black">
              {t('projects_pill')}
            </span>
            <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-light mb-2">
              {t('projects_title')}
            </Heading>
            <p className="text-grey dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {t('projects_desc')}
            </p>
          </div>
          
          <Link to="/projects">
            <Button variant="outline" className="shrink-0">
              {t('view_all')}
            </Button>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'glass text-grey dark:text-slate-400 hover:text-dark dark:hover:text-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
