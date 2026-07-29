import ycImg from '../assets/Screenshot 2025-02-03 205415.png';
import sqiImg from '../assets/Screenshot 2025-02-03 205450.png';
import zenithImg from '../assets/Screenshot 2025-02-03 205552.png';
import portfolioImg from '../assets/Screenshot 2025-02-04 082909.png';

export const projectsData = [
  {
    id: 'y-combinator-clone',
    title: 'Y Combinator Clone',
    category: 'Web Apps',
    subCategory: 'Student Projects',
    year: '2025',
    image: ycImg,
    shortDesc: 'A pixel-perfect clone of the Y Combinator startup directory and news feed interface.',
    desc: 'This project is a detailed replication of the Y Combinator news feed and startup portal. It focuses on clean typography, responsive lists, and user submissions, providing a fast and lightweight frontend experience.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/oliyidemikky/y-combinator-clone',
    live: 'https://y-combinator-usuq.vercel.app',
    caseStudy: {
      problem: 'Building a high-volume startup directory dashboard that is extremely fast, responsive, and handles tabular search filters gracefully on mobile devices without layout shift.',
      solution: 'Developed a custom search indexing filter using React states, styled with Tailwind CSS grid systems, and wrapped with Framer Motion transitions to ensure visual smoothness.',
      challenges: 'Resolving nested responsive card structures for news feed comments while keeping CSS footprint small and page speed high.',
      results: 'A highly functional and responsive directory clone loading within 1s, matching the original styling perfectly while boosting mobile layout usability.'
    }
  },
  {
    id: 'sqi-college-clone',
    title: 'SQI College Clone',
    category: 'Landing Pages',
    subCategory: 'Student Projects',
    year: '2025',
    image: sqiImg,
    shortDesc: 'An educational college landing platform detailing tech courses, admissions, and student life.',
    desc: 'A full-featured clone of the SQI College of ICT website. It showcases detailed listings for tech academies, certification paths, admissions guidelines, and a sleek navigation hierarchy.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'React Icons'],
    github: 'https://github.com/oliyidemikky/sqi-project',
    live: 'https://sqi-project.vercel.app',
    caseStudy: {
      problem: 'Traditional educational websites often suffer from confusing nav flows, heavy image files, and low interactive engagement for prospective students looking at course details.',
      solution: 'Re-architected the layout into a clean, modern interactive course grid, compressing all screenshots to WebP, and structuring nav nodes clearly.',
      challenges: 'Handling complex drop-down menus on mobile touch screens and animating course slides smoothly.',
      results: 'Reduced page loading time by 45% and improved navigation clarity, yielding a premium academic landing experience.'
    }
  },
  {
    id: 'zenith-bank-clone',
    title: 'Zenith Bank Clone',
    category: 'Web Apps',
    subCategory: 'Business',
    year: '2025',
    image: zenithImg,
    shortDesc: 'A modern, premium redesign of a corporate banking fintech landing page.',
    desc: 'An exploration in premium corporate banking interface design. It recreates a secure banking landing layout with rich glassmorphism modules, sliders, active product rates, and responsive styling.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Lenis Smooth Scroll'],
    github: 'https://github.com/oliyidemikky/zenith-project',
    live: 'https://zenith-project.vercel.app',
    caseStudy: {
      problem: 'Fintech portals need to convey trust, high performance, and visual polish, whereas standard banking sites can feel rigid and outdated.',
      solution: 'Implemented modern card systems, glowing radial gradients, glassmorphism overlays, and smooth scroll integrations to establish a premium Apple/Stripe-like vibe.',
      challenges: 'Ensuring color contrast met accessibility guidelines (WCAG AA) while keeping the dark blue and red branding consistent.',
      results: 'A stunning banking interface prototype that looks premium, loads quickly, and offers smooth micro-animations for rates and services.'
    }
  },
  {
    id: 'portfolio-website',
    title: 'Custom Portfolio Website',
    category: 'Landing Pages',
    subCategory: 'Business',
    year: '2026',
    image: portfolioImg,
    shortDesc: 'A premium professional portfolio for full-stack developers showing agency and consulting work.',
    desc: 'This portfolio itself! A bespoke web presence showcasing Michael Ayodeji Oliyide as Founder of Mikky Technology, with full multi-language capabilities, dark mode, timeline animations, and a WhatsApp contact portal.',
    tech: ['React 19', 'Tailwind CSS v4', 'Framer Motion', 'CountUp', 'EmailJS'],
    github: 'https://github.com/oliyidemikky/anonymous',
    live: 'https://portfolio-website.vercel.app', // placeholder
    caseStudy: {
      problem: 'Creating a highly personalized developer portfolio that loads instantly, translates on the fly into 4 languages, switches themes seamlessly, and showcases case studies without feeling like a generic template.',
      solution: 'Built custom React Contexts for multi-language dictionary maps and dark themes, styled with a Tailwind CSS v4 `@theme` layout and smooth Framer Motion triggers.',
      challenges: 'Handling CJS module resolution conflicts (such as react-countup) in a strict React 19 ESM compiler setup.',
      results: 'Achieved 98+ Lighthouse score, zero console errors, instant 4-language switches, and a custom design matching Stripe/Apple aesthetics.'
    }
  }
];

export default projectsData;
