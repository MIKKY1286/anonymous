import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: t('nav_home'), path: '/' },
    { id: 'about', label: t('nav_about'), path: '/#about' },
    { id: 'services', label: t('nav_services'), path: '/#services' },
    { id: 'skills', label: t('nav_skills'), path: '/#skills' },
    { id: 'experience', label: t('nav_experience'), path: '/#experience' },
    { id: 'workflow', label: t('nav_workflow'), path: '/#workflow' },
    { id: 'project', label: t('nav_projects'), path: '/#project' },
    { id: 'contact', label: t('nav_contact'), path: '/#contact' },
  ];

  // Scroll listener for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 100;
        
        for (const item of navItems) {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(item.id);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location, t]);

  const handleNavClick = (e, item) => {
    setIsMobileMenuOpen(false);
    
    if (item.path.startsWith('/#')) {
      const sectionId = item.path.substring(2);
      
      if (location.pathname === '/') {
        e.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
          setActiveSection(sectionId);
        }
      }
    } else if (item.path === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 glass-nav shadow-lg shadow-dark/5 dark:shadow-light/5' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-primary transition-transform duration-300 hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Michael Oliyide
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id && location.pathname === '/';
                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1 cursor-pointer ${
                        isActive 
                          ? 'text-primary' 
                          : 'text-grey dark:text-slate-400 hover:text-dark dark:hover:text-light'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span 
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700" />

            {/* Actions */}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <ThemeToggle />
              <a
                href="/public/Michael_Oliyide_CV.pdf"
                target="_blank"
                className="hidden xl:inline-flex px-5 py-2.5 bg-primary text-white font-semibold rounded-full text-sm hover:shadow-[0_8px_20px_-6px_rgba(255,107,107,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                {t('btn_resume')}
              </a>
            </div>
          </div>

          {/* Mobile Actions and Burger Button */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl text-dark dark:text-light p-1"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 w-full z-40 bg-white/95 dark:bg-dark/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-6 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id && location.pathname === '/';
                  return (
                    <li key={item.id}>
                      <a
                        href={item.path}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`block text-base font-semibold py-1.5 transition-colors ${
                          isActive 
                            ? 'text-primary' 
                            : 'text-grey dark:text-slate-400 hover:text-dark dark:hover:text-light'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-grey dark:text-slate-400">Language:</span>
                <LanguageSelector />
              </div>
              
              <a
                href="/public/Michael_Oliyide_CV.pdf"
                target="_blank"
                className="w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-full text-sm shadow-md hover:shadow-lg transition-all"
              >
                {t('btn_resume')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
