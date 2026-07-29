import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiBriefcase, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Heading from '../UI/Heading';
import avatarImg from '../../assets/web-developer-digital-avatar.jpg';

const About = () => {
  const { t } = useLanguage();

  const details = [
    { label: 'Role', value: 'Founder & Full Stack Dev' },
    { label: 'Location', value: 'Nigeria / Remote' },
    { label: 'Availability', value: 'Open to Work / Freelance' },
    { label: 'Focus', value: 'Custom Web Apps & Dashboards' },
  ];

  const cards = [
    {
      icon: <FiBriefcase className="text-primary text-xl" />,
      title: 'Experience',
      items: [
        'CEO & Founder, Mikky Technology',
        'Freelance Web Developer (3+ Years)',
      ]
    },
    {
      icon: <FiBookOpen className="text-amber-500 className text-xl" />,
      title: 'Education',
      items: [
        'Software Engineering Certification',
        'SQI College of ICT & Tech Alum',
      ]
    },
    {
      icon: <FiAward className="text-green-500 text-xl" />,
      title: 'Key Milestones',
      items: [
        'Built & deployed 20+ full-stack projects',
        'Successfully served 10+ global clients',
      ]
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-white dark:bg-[#0b0f19] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Image and details */}
        <div className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-start text-left">
          
          {/* Animated Avatar Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img 
              src={avatarImg} 
              alt="Michael Oliyide Profile" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Quick info glass metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-sm glass p-6 rounded-3xl space-y-4 shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <h3 className="font-heading font-bold text-lg text-dark dark:text-light border-b border-slate-200 dark:border-slate-800 pb-2">
              Profile Summary
            </h3>
            <div className="space-y-3">
              {details.map((detail, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-grey dark:text-slate-400">{detail.label}:</span>
                  <span className="font-bold text-dark dark:text-light text-right">{detail.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative Biography & Grid Cards */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-black">
              About Michael
            </span>
            <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-light mb-2">
              {t('about_title')}
            </Heading>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-300">
              {t('about_subtitle')}
            </h4>
            <p className="text-grey dark:text-slate-400 leading-relaxed text-base">
              {t('about_desc')}
            </p>
          </motion.div>

          {/* Core sections cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full p-5 space-y-3 flex flex-col justify-start">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h4 className="font-heading font-bold text-base text-dark dark:text-light">
                    {card.title}
                  </h4>
                  <ul className="text-xs text-grey dark:text-slate-400 space-y-2 flex-grow">
                    {card.items.map((item, idy) => (
                      <li key={idy} className="list-disc list-inside leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Action Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <a href="/Michael_Oliyide_CV.pdf" target="_blank" className="inline-block">
              <Button variant="outline">
                Download Full Resume <FiDownload />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
