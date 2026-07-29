import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../../components/UI/Heading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projects';
import { FiSearch } from 'react-icons/fi';

const ProjectsPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Business', 'Web Apps', 'Landing Pages', 'Student Projects'];

  const filteredProjects = projectsData.filter((project) => {
    // Category match
    let matchesCategory = true;
    if (selectedFilter !== 'All') {
      if (selectedFilter === 'Student Projects') {
        matchesCategory = project.subCategory === 'Student Projects';
      } else {
        matchesCategory = project.category === selectedFilter || project.subCategory === selectedFilter;
      }
    }

    // Search query match
    const textToSearch = `${project.title} ${project.desc} ${project.shortDesc} ${project.tech.join(' ')}`.toLowerCase();
    const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 relative overflow-hidden bg-light dark:bg-[#090d16] min-h-screen transition-colors duration-300"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-left space-y-4 max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-black">
            Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-dark dark:text-light">
            All Projects &amp; Archives
          </h1>
          <p className="text-grey dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive catalog of built products, client solutions, prototypes, and college engineering clones. Use search and filter to explore technology layers.
          </p>
        </div>

        {/* Filters and Search Bar Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-12">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'glass text-grey dark:text-slate-400 hover:text-dark dark:hover:text-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative max-w-sm w-full order-1 md:order-2">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-grey dark:text-slate-500">
              <FiSearch size={18} />
            </span>
            <input
              type="text"
              placeholder="Search by tech, name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass pl-11 pr-5 py-3 rounded-full text-sm font-semibold outline-none focus:ring-1 focus:ring-primary text-dark dark:text-light transition-all"
            />
          </div>
        </div>

        {/* Results grid */}
        {filteredProjects.length > 0 ? (
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
        ) : (
          <div className="text-center py-20 glass rounded-3xl max-w-md mx-auto">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">No Projects Found</h3>
            <p className="text-sm text-grey dark:text-slate-400">
              We couldn't find any projects matching "{searchQuery}" in category "{selectedFilter}".
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
