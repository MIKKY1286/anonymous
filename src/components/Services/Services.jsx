import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../UI/Heading';
import Card from '../UI/Card';
import servicesData from '../../data/services';

const Services = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#090d16] transition-colors duration-300"
    >
      {/* Background glowing circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-black">
            What I Offer
          </span>
          <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-light mb-2">
            Professional Web Services
          </Heading>
          <p className="text-grey dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            I craft custom digital solutions designed to accelerate growth, elevate brand value, and deliver flawless interactive experiences.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full p-6 space-y-4 flex flex-col justify-start relative group">
                  {/* Glowing background on hover */}
                  <div className="absolute -inset-px bg-gradient-to-tr from-primary to-amber-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  {/* Icon container */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${service.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={22} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-heading font-bold text-lg text-dark dark:text-light group-hover:text-primary transition-colors duration-300">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-sm text-grey dark:text-slate-400 leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
