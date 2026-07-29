import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../UI/Heading';
import Card from '../UI/Card';
import experienceData from '../../data/experience';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="experience" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#090d16] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-black">
            Timeline
          </span>
          <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-light mb-2">
            My Journey &amp; Experience
          </Heading>
          <p className="text-grey dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A chronological timeline of my professional experience, growth milestones, and key corporate leadership paths.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-amber-500 to-transparent -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Visual Node Dot on line */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full border-4 border-slate-50 dark:border-[#090d16] bg-primary shadow-md -translate-x-1/2 z-20" />
                  
                  {/* Spacing holder for desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Experience Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10"
                  >
                    <Card className="p-6 md:p-8 space-y-3 relative hover:border-primary/30 transition-all border border-slate-100 dark:border-slate-800 shadow-sm">
                      {/* Year Indicator */}
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold font-mono">
                        {exp.year}
                      </span>
                      
                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-xl text-dark dark:text-light">
                          {t(exp.titleKey)}
                        </h3>
                        <p className="text-xs uppercase tracking-wider font-semibold text-grey dark:text-slate-400">
                          {exp.company}
                        </p>
                      </div>

                      <p className="text-sm text-grey dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                        {t(exp.descKey)}
                      </p>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
