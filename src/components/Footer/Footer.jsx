import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUp, FiGithub, FiInstagram, FiFacebook, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import socialsData from '../../data/socials';

const Footer = () => {
  const { t } = useLanguage();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#090d16] text-grey dark:text-slate-400 py-16 border-t border-slate-200 dark:border-slate-850 relative overflow-hidden transition-colors duration-300">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 items-start text-left">
          
          {/* Brand Info (Col span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading font-black text-2xl tracking-tight text-dark dark:text-light">
              Michael Oliyide
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              CEO of Mikky Technology &amp; Full Stack Architect
            </p>
            <p className="text-sm text-grey dark:text-slate-400 leading-relaxed max-w-sm">
              {t('footer_desc') || 'Crafting premium web applications with clean, scaleable code structures and robust database integrations.'}
            </p>
          </div>

          {/* Quick Navigation (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-black text-dark dark:text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  {t('nav_home')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t('nav_about')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t('nav_services')}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  {t('nav_skills')}
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-primary transition-colors">
                  {t('nav_projects')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Docs (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-black text-dark dark:text-slate-200">
              Resources
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="/Michael_Oliyide_CV.pdf" target="_blank" className="hover:text-primary transition-colors">
                  {t('btn_resume')}
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-primary transition-colors">
                  {t('nav_workflow')}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  {t('nav_experience')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social connections (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-black text-dark dark:text-slate-200">
              Social Links
            </h4>
            <div className="flex items-center gap-3">
              <a href={socialsData.github} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-dark dark:text-white hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark flex items-center justify-center transition-colors">
                <FiGithub size={16} />
              </a>
              <a href={socialsData.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-dark dark:text-white hover:bg-pink-500 hover:text-white flex items-center justify-center transition-colors">
                <FiInstagram size={16} />
              </a>
              <a href={socialsData.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-dark dark:text-white hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
                <FiFacebook size={16} />
              </a>
              <a href={socialsData.whatsapp} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-dark dark:text-white hover:bg-green-500 hover:text-white flex items-center justify-center transition-colors">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-semibold">
          
          {/* Copyright text */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center text-center">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-grey dark:text-slate-400">{t('copyright') || 'Mikky Technology. All rights reserved.'}</span>
            <span className="hidden sm:inline">|</span>
              {/* <span className="flex items-center gap-1">
                Built with <FiHeart className="text-primary fill-primary" /> and Mikky Technology
              </span> */}
          </div>

          {/* Legal references */}
          <div className="flex items-center gap-6">
            <Link to="https://mikky-technology.vercel.app/privacy-and-terms/privacy-and-terms.html" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="https://mikky-technology.vercel.app/privacy-and-terms/privacy-and-terms.html" className="hover:text-primary transition-colors">Terms of Service</Link>
            
            {/* Back to Top */}
            <button 
              onClick={handleBackToTop}
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-dark dark:text-white flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary transition-all shadow-md active:scale-95 cursor-pointer"
              title="Back to Top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
