import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMap, FiEdit3, FiCode, FiActivity, FiSend } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../UI/Heading';
import Card from '../UI/Card';

const Workflow = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      titleKey: 'step1_title',
      descKey: 'step1_desc',
      icon: FiSearch,
      color: 'text-primary border-primary/20 bg-primary/5',
      glow: 'group-hover:shadow-primary/20',
    },
    {
      id: 2,
      titleKey: 'step2_title',
      descKey: 'step2_desc',
      icon: FiMap,
      color: 'text-blue-500 border-blue-500/20 bg-blue-500/5',
      glow: 'group-hover:shadow-blue-500/20',
    },
    {
      id: 3,
      titleKey: 'step3_title',
      descKey: 'step3_desc',
      icon: FiEdit3,
      color: 'text-amber-500 border-amber-500/20 bg-amber-500/5',
      glow: 'group-hover:shadow-amber-500/20',
    },
    {
      id: 4,
      titleKey: 'step4_title',
      descKey: 'step4_desc',
      icon: FiCode,
      color: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5',
      glow: 'group-hover:shadow-emerald-500/20',
    },
    {
      id: 5,
      titleKey: 'step5_title',
      descKey: 'step5_desc',
      icon: FiActivity,
      color: 'text-rose-500 border-rose-500/20 bg-rose-500/5',
      glow: 'group-hover:shadow-rose-500/20',
    },
    {
      id: 6,
      titleKey: 'step6_title',
      descKey: 'step6_desc',
      icon: FiSend,
      color: 'text-indigo-500 border-indigo-500/20 bg-indigo-500/5',
      glow: 'group-hover:shadow-indigo-500/20',
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section 
      id="workflow" 
      className="py-24 relative overflow-hidden bg-white dark:bg-[#0b0f19] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-black">
            {t('workflow_label')}
          </span>
          <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-light mb-2">
            {t('workflow_title')}
          </Heading>
          <p className="text-grey dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('workflow_desc')}
          </p>
        </div>

        {/* Workflow Steps Line-Connected Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            
            return (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative flex flex-col items-center group text-center"
              >
                {/* Connecting animated line (Horizontal on desktop, ignored on tablet/mobile grids) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[2px] z-0 overflow-hidden">
                    <svg className="w-full h-full">
                      <line 
                        x1="0" y1="0" x2="100%" y2="0" 
                        className="stroke-slate-200 dark:stroke-slate-800 stroke-[2] stroke-dasharray-[6,6] [stroke-dashoffset:0] animate-[dash_20s_linear_infinite]" 
                        style={{ strokeDasharray: '6, 6' }}
                      />
                    </svg>
                  </div>
                )}

                {/* Step Circle Icon Wrapper */}
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-2 ${step.color} ${step.glow} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg mb-6`}>
                  <Icon size={24} />
                  
                  {/* Step Number Tag */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-dark text-white dark:bg-light dark:text-dark text-[10px] font-black flex items-center justify-center shadow-md">
                    {step.id}
                  </span>
                </div>

                {/* Content Card details */}
                <Card className="w-full p-4 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-start items-center hover:border-slate-200 dark:hover:border-slate-700 min-h-[160px]">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-dark dark:text-light mb-2 group-hover:text-primary transition-colors">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-xs text-grey dark:text-slate-400 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Embedded CSS animation for dashed connector lines */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
};

export default Workflow;
