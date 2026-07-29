import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Workflow from '../../components/Workflow/Workflow';
import ProjectsSection from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Workflow />
      <ProjectsSection />
      <Contact />
    </div>
  );
};

export default Home;
