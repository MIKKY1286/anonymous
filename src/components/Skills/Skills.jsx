import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../UI/Heading';
import Card from '../UI/Card';
import skillsData from '../../data/skills';

const Skills = () => {
  const { t } = useLanguage();
  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section 
      id="skills" 
      className="py-24 relative overflow-hidden bg-white dark:bg-[#0b0f19] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-black">
            {t('skills_label')}
          </span>
          <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-light mb-2">
            {t('skills_title2')}
          </Heading>
          <p className="text-grey dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('skills_desc')}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'glass text-grey dark:text-slate-400 hover:text-dark dark:hover:text-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills List inside AnimatePresence */}
        <Card className="p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <AnimatePresence mode="wait">
              {skillsData[activeCategory].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="space-y-3"
                  >
                    {/* Skill Info Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${skill.color}`}>
                          <Icon size={18} />
                        </div>
                        <span className="font-bold text-sm sm:text-base text-dark dark:text-light">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-primary">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-amber-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
