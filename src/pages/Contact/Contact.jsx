import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{t('nav_contact')}</h1>
        <p className="text-lg text-grey dark:text-gray-400">{t('contact_desc')}</p>
      </div>
    </motion.div>
  );
};

export default ContactPage;
