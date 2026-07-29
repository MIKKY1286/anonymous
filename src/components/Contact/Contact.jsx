import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiClock, FiCheckCircle, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import Heading from '../UI/Heading';
import Card from '../UI/Card';
import Button from '../UI/Button';
import socialsData from '../../data/socials';

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    msg: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Michael,\n\nMy name is ${formData.name}. I am contacting you regarding: "${formData.subject}".\n\n${formData.message}\n\nEmail: ${formData.email}`;
    const url = `${socialsData.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, msg: '' });

    // Environment variables with fallback check
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
      // Demo/Fallback mode - redirect to WhatsApp
      setTimeout(() => {
        setStatus({
          submitting: false,
          success: false,
          error: true,
          msg: t('contact_error') || 'Redirecting to WhatsApp...'
        });
        handleWhatsAppRedirect();
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    })
      .then(
        () => {
          setStatus({
            submitting: false,
            success: true,
            error: false,
            msg: t('contact_success') || 'Thank you! Your message was sent successfully.'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus({
            submitting: false,
            success: false,
            error: true,
            msg: t('contact_error') || 'Failed to send message. Redirecting to WhatsApp...'
          });
          setTimeout(() => {
            handleWhatsAppRedirect();
          }, 1500);
        }
      );
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-light dark:bg-[#090d16] transition-colors duration-300"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-primary font-black">
            {t('contact_label')}
          </span>
          <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-dark dark:text-light mb-2">
            {t('contact_title')}
          </Heading>
          <p className="text-grey dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('contact_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Social/Meta Details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                  <FiMail size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-dark dark:text-light">Email Address</h4>
                  <a href={socialsData.email} className="text-sm text-grey dark:text-slate-400 hover:text-primary transition-colors block">
                    {socialsData.rawEmail}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-green-500/5 border border-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-dark dark:text-light">WhatsApp Direct</h4>
                  <a href={socialsData.whatsapp} target="_blank" rel="noreferrer" className="text-sm text-grey dark:text-slate-400 hover:text-green-500 transition-colors block">
                    +234 907 579 3786
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <FiPhone size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-dark dark:text-light">Call Me</h4>
                  <a href={socialsData.phone} className="text-sm text-grey dark:text-slate-400 hover:text-blue-500 transition-colors block">
                    +234 907 579 3786
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-dark dark:text-light">Location</h4>
                  <p className="text-sm text-grey dark:text-slate-400">
                    {socialsData.location}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                  <FiClock size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-dark dark:text-light">Working Hours &amp; Availability</h4>
                  <p className="text-xs text-green-500 font-bold uppercase tracking-wider">
                    {socialsData.availability}
                  </p>
                  <p className="text-xs text-grey dark:text-slate-400">
                    {socialsData.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons row */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs uppercase tracking-wider font-bold text-grey dark:text-slate-500 mb-4 text-left">
                Connect on Socials
              </h4>
              <div className="flex items-center gap-3">
                <a href={socialsData.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark flex items-center justify-center transition-colors">
                  <FaGithub size={18} />
                </a>
                <a href={socialsData.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-pink-500 hover:text-white flex items-center justify-center transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href={socialsData.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
                  <FaFacebook size={18} />
                </a>
                <a href={socialsData.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-green-500 hover:text-white flex items-center justify-center transition-colors">
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 border border-slate-100 dark:border-slate-800 shadow-sm text-left h-full">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-grey dark:text-slate-400">
                    {t('contact_name') || 'Full Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact_placeholder_name') || 'John Doe'}
                    className="w-full glass px-4 py-3 rounded-2xl outline-none text-sm font-medium text-dark dark:text-light focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                {/* Email address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-grey dark:text-slate-400">
                    {t('contact_email') || 'Email Address'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact_placeholder_email') || 'john@example.com'}
                    className="w-full glass px-4 py-3 rounded-2xl outline-none text-sm font-medium text-dark dark:text-light focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-wider font-bold text-grey dark:text-slate-400">
                    {t('contact_subject') || 'Subject'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact_placeholder_subject') || 'Project inquiry'}
                    className="w-full glass px-4 py-3 rounded-2xl outline-none text-sm font-medium text-dark dark:text-light focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-bold text-grey dark:text-slate-400">
                    {t('contact_message') || 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact_placeholder_message') || 'Tell me about your project...'}
                    className="w-full glass px-4 py-3 rounded-2xl outline-none text-sm font-medium text-dark dark:text-light focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full py-4 text-center justify-center font-bold"
                    disabled={status.submitting}
                  >
                    {status.submitting 
                      ? (t('contact_sending') || 'Sending...') 
                      : (
                        <>
                          Send Message <FiSend className="ml-1" />
                        </>
                      )
                    }
                  </Button>
                </div>

                {/* Status Indicator Toasts */}
                {status.success && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 rounded-2xl text-xs font-semibold flex items-center gap-2 border border-green-200 dark:border-green-800"
                  >
                    <FiCheckCircle size={16} />
                    <span>{status.msg}</span>
                  </motion.div>
                )}
                {status.error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 rounded-2xl text-xs font-semibold flex items-center gap-2 border border-rose-200 dark:border-rose-800"
                  >
                    <span className="text-base">💬</span>
                    <span>{status.msg}</span>
                  </motion.div>
                )}

              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
