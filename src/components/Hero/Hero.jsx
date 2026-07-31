import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../UI/Button';
import avatarImg from '../../assets/michaeloliyide.jpg';
import heroIllustration from '../../assets/WhatsApp_Image-removebg-preview.png';

const Hero = () => {
  const { t } = useLanguage();

  // Handle ESM/CJS interop for react-countup
  const CountUpComponent = CountUp.default || CountUp;

  const stats = [
    { value: 20, suffix: '+', label: 'Projects Completed' },
    { value: 10, suffix: '+', label: 'Happy Clients' },
    { value: 3, suffix: '+', label: 'Years Experience' },
  ];

  // Floating animations configuration
  const floatAnimation = (delay) => ({
    animate: {
      y: [0, -12, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-light dark:bg-[#090d16] transition-colors duration-300"
    >
      {/* Background soft glowing blur elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Badge/Pill Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full shadow-sm"
          >
            <img 
              src={avatarImg} 
              alt="Michael" 
              className="w-8 h-8 rounded-full object-cover border border-slate-300 dark:border-slate-700" 
            />
            <span className="text-sm font-semibold text-dark dark:text-light">
              Michael Ayodeji Oliyide
            </span>
          </motion.div>

          {/* Typography Header */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-dark dark:text-light"
            >
              {t('hero_title_prefix')} <br />
              <span className="gradient-text">{t('hero_title_suffix')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-grey dark:text-slate-400 text-base sm:text-lg max-w-xl font-medium leading-relaxed"
            >
              {t('hero_desc')}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#contact">
              <Button variant="primary">
                {t('btn_touch')} <FiArrowRight />
              </Button>
            </a>
            
            <a href="/Michael_Oliyide_CV.pdf" target="_blank">
              <Button variant="outline">
                {t('btn_resume')} <FiDownload />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Illustration / Profile Graphic */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main profile illustration container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full gradient-bg/10 flex items-center justify-center border border-primary/50"
          >
            <div className="absolute inset-4 rounded-full border border-dashed border-amber-500/80 animate-spin [animation-duration:40s]" />
            <img 
              src={heroIllustration} 
              alt="Michael Ayodeji Oliyide" 
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Floating cards / widgets */}
          {/* Badge 1: Top-notch */}
          <motion.div 
            {...floatAnimation(0)}
            className="absolute top-2 -left-4 sm:-left-8 glass py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl flex items-center gap-2 sm:gap-3 shadow-md z-20"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRD6Mlr2PmOBmJqfuPppH9PRA2lNZO2D7zA&s" 
              alt="Client" 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
            />
            <span className="text-xs sm:text-sm font-bold text-dark dark:text-light">"Top-notch!"</span>
          </motion.div>

          {/* Badge 2: Great work */}
          <motion.div 
            {...floatAnimation(1.2)}
            className="absolute bottom-16 -left-8 sm:-left-12 glass py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl flex items-center gap-2 sm:gap-3 shadow-md z-20"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WWJEImdtBVeLhMDBgSTAfvvju5KltNqo2A&s" 
              alt="Client" 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
            />
            <span className="text-xs sm:text-sm font-bold text-dark dark:text-light">"Great work!"</span>
          </motion.div>

          {/* Badge 3: Exceptional */}
          <motion.div 
            {...floatAnimation(0.6)}
            className="absolute top-16 -right-4 sm:-right-8 glass py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl flex items-center gap-2 sm:gap-3 shadow-md z-20"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lAmPoJQMdU7UfYDg3nea3yE4frdL8IXmog&s" 
              alt="Client" 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
            />
            <span className="text-xs sm:text-sm font-bold text-dark dark:text-light">"Exceptional!"</span>
          </motion.div>

          {/* Badge 4: Tech Indicator (JS) */}
          <motion.div 
            {...floatAnimation(1.8)}
            className="absolute bottom-4 right-2 sm:right-6 glass py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl flex items-center gap-2 shadow-md z-20"
          >
            <span className="text-2xl text-amber-400">⚡</span>
            <span className="text-xs sm:text-sm font-bold text-dark dark:text-light">React Architect</span>
          </motion.div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-16 sm:mt-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-slate-200 dark:border-slate-800">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="text-center sm:text-left space-y-1"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary">
                <CountUpComponent 
                  end={stat.value} 
                  duration={2.5} 
                  enableScrollSpy={true} 
                  scrollSpyOnce={true} 
                />
                {stat.suffix}
              </h3>
              <p className="text-sm font-semibold tracking-wide uppercase text-grey dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
