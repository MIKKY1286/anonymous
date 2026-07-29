import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../data/translations/en.json';
import es from '../data/translations/es.json';
import fr from '../data/translations/fr.json';
import yo from '../data/translations/yo.json';

const translations = { en, es, fr, yo };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('preferredLang');
    if (saved && translations[saved]) return saved;
    
    // Auto-detect browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
    return translations[browserLang] ? browserLang : 'en';
  });

  const setLanguage = (lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('preferredLang', lang);
    }
  };

  const t = (key) => {
    const currentTranslation = translations[language];
    if (currentTranslation && currentTranslation[key] !== undefined) {
      return currentTranslation[key];
    }
    // Fallback to English
    return translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
