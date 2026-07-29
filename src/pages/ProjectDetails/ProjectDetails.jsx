import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft, FiClock, FiGrid, FiSettings } from 'react-icons/fi';
import projectsData from '../../data/projects';
import Heading from '../../components/UI/Heading';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find current project index
  const projectIdx = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIdx];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <div className="pt-32 pb-16 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-grey dark:text-slate-400 mb-6">The project you are looking for does not exist.</p>
        <Link to="/projects">
          <Button variant="primary">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  // Calculate Next and Previous projects
  const prevProject = projectsData[(projectIdx - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIdx + 1) % projectsData.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 relative overflow-hidden bg-slate-50 dark:bg-[#090d16] min-h-screen transition-colors duration-300"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Back Link */}
        <div className="text-left">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm font-bold text-grey hover:text-primary transition-colors"
          >
            <FiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Header / Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Summary Info */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs uppercase tracking-widest text-primary font-black">
              Case Study
            </span>
            <Heading level={1} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-dark dark:text-light mb-2">
              {project.title}
            </Heading>
            <p className="text-grey dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              {project.desc}
            </p>

            {/* Quick Metadata Indicators */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-grey dark:text-slate-400">
                <FiClock className="text-primary text-sm" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-grey dark:text-slate-400">
                <FiGrid className="text-primary text-sm" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-grey dark:text-slate-400">
                <FiSettings className="text-primary text-sm" />
                <span>{project.subCategory}</span>
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <Button variant="primary">
                    Launch Site <FiExternalLink />
                  </Button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="outline">
                    View Code <FiGithub />
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Visual Showcase Screenshot */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full object-cover max-h-[360px] group-hover:scale-101 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Card 1: Problem */}
          <Card className="p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-start">
            <span className="text-xs uppercase tracking-wider text-primary font-black mb-2">01 / The Challenge</span>
            <h3 className="font-heading font-black text-xl text-dark dark:text-light mb-4">The Problem</h3>
            <p className="text-sm text-grey dark:text-slate-400 leading-relaxed flex-grow">
              {project.caseStudy.problem}
            </p>
          </Card>

          {/* Card 2: Solution */}
          <Card className="p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-start">
            <span className="text-xs uppercase tracking-wider text-amber-500 font-black mb-2">02 / The Approach</span>
            <h3 className="font-heading font-black text-xl text-dark dark:text-light mb-4">The Solution</h3>
            <p className="text-sm text-grey dark:text-slate-400 leading-relaxed flex-grow">
              {project.caseStudy.solution}
            </p>
          </Card>

          {/* Card 3: Challenges Faced */}
          <Card className="p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-start">
            <span className="text-xs uppercase tracking-wider text-rose-500 font-black mb-2">03 / Roadblocks</span>
            <h3 className="font-heading font-black text-xl text-dark dark:text-light mb-4">Obstacles &amp; Constraints</h3>
            <p className="text-sm text-grey dark:text-slate-400 leading-relaxed flex-grow">
              {project.caseStudy.challenges}
            </p>
          </Card>

          {/* Card 4: Results */}
          <Card className="p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-start">
            <span className="text-xs uppercase tracking-wider text-green-500 font-black mb-2">04 / Evaluation</span>
            <h3 className="font-heading font-black text-xl text-dark dark:text-light mb-4">The Results</h3>
            <p className="text-sm text-grey dark:text-slate-400 leading-relaxed flex-grow">
              {project.caseStudy.results}
            </p>
          </Card>
        </div>

        {/* Sidebar details: Tech details */}
        <div className="text-left glass p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
          <h3 className="font-heading font-black text-lg text-dark dark:text-light mb-4">
            Project Technical Specifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-grey dark:text-slate-400 font-bold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Navigation Footer links */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <Link 
            to={`/project/${prevProject.id}`}
            className="group inline-flex items-center gap-2 text-sm font-bold text-grey hover:text-primary transition-all duration-300"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            <div className="text-left">
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-black">Previous</span>
              <span className="hidden sm:inline">{prevProject.title}</span>
            </div>
          </Link>
          
          <Link 
            to={`/project/${nextProject.id}`}
            className="group inline-flex items-center gap-2 text-sm font-bold text-grey hover:text-primary transition-all duration-300"
          >
            <div className="text-right">
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-black">Next</span>
              <span className="hidden sm:inline">{nextProject.title}</span>
            </div>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
