import ycImg from '../assets/Screenshot 2025-02-03 205415.png';
import sqiImg from '../assets/Screenshot 2025-02-03 205450.png';
import zenithImg from '../assets/Screenshot 2025-02-03 205552.png';
import portfolioImg from '../assets/anonymous.png';
import companyImg from '../assets/Screenshot 2025-02-04 082909.png';
import xupChatImg from '../assets/xupchat.png';
import chopswiftImg from '../assets/chopswift.png';
import weddingWebsiteImg from '../assets/wedding.png';
import lectureSyncImg from '../assets/timetable.png';

export const projectsData = [
  {
    id: 'y-combinator-clone',
    title: 'Y Combinator Clone',
    category: 'Web Apps',
    subCategory: 'Student Projects',
    year: '2024',
    image: ycImg,
    shortDesc: 'A pixel-perfect clone of the Y Combinator startup directory and news feed interface.',
    desc: 'This project is a detailed replication of the Y Combinator news feed and startup portal. It focuses on clean typography, responsive lists, and user submissions, providing a fast and lightweight frontend experience.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/MIKKY1286/Y-COMBINATOR',
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
    year: '2024',
    image: sqiImg,
    shortDesc: 'An educational college landing platform detailing tech courses, admissions, and student life.',
    desc: 'A full-featured clone of the SQI College of ICT website. It showcases detailed listings for tech academies, certification paths, admissions guidelines, and a sleek navigation hierarchy.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'React Icons'],
    github: 'https://github.com/MIKKY1286/SQI',
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
    year: '2024',
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
    id: 'company-website',
    title: 'Company Official Website',
    category: 'Landing Pages',
    subCategory: 'Business',
    year: '202',
    image: companyImg,
    shortDesc: 'A premium professional company website for full-stack developers showing agency and consulting work.',
    desc: 'This website itself! A bespoke web presence showcasing Mikky Technology, with full multi-language capabilities, timeline animations, and a WhatsApp contact portal.',
    tech: ['React 19', 'Tailwind CSS v4', 'Framer Motion', 'CountUp', 'EmailJS'],
    github: 'https://github.com/oliyidemikky/anonymous',
    live: 'https://mikky-technology.vercel.app/',
    caseStudy: {
      problem: 'Creating a highly professional website that loads fast, translates on the fly into 4 languages, switches themes seamlessly, and showcases case studies without feeling like a generic template.',
      solution: 'Built custom React Contexts for multi-language dictionary maps and dark themes, styled with a Tailwind CSS v4 `@theme` layout and smooth Framer Motion triggers.',
      challenges: 'Handling CJS module resolution conflicts (such as react-countup) in a strict React 19 ESM compiler setup.',
      results: 'Achieved 98+ Lighthouse score, zero console errors, instant 4-language switches, and a custom design matching Stripe/Apple aesthetics.'
    }
  },
    {
    id: 'portfolio-website',
    title: 'Custom Portfolio Website',
    category: 'Portfolio Website',
    subCategory: 'Business',
    year: '2026',
    image: portfolioImg,
    shortDesc: 'A premium professional portfolio for full-stack developers showing agency and consulting work.',
    desc: 'This portfolio itself! A bespoke web presence showcasing Michael Ayodeji Oliyide as Founder of Mikky Technology, with full multi-language capabilities, dark mode, timeline animations, and a WhatsApp contact portal.',
    tech: ['React 19', 'Tailwind CSS v4', 'Framer Motion', 'CountUp', 'EmailJS'],
    github: 'https://github.com/MIKKY1286/anonymous',
    live: 'https://anony-mous.vercel.app',
    caseStudy: {
      problem: 'Creating a highly personalized developer portfolio that loads instantly, translates on the fly into 4 languages, switches themes seamlessly, and showcases case studies without feeling like a generic template.',
      solution: 'Built custom React Contexts for multi-language dictionary maps and dark themes, styled with a Tailwind CSS v4 `@theme` layout and smooth Framer Motion triggers.',
      challenges: 'Handling CJS module resolution conflicts (such as react-countup) in a strict React 19 ESM compiler setup.',
      results: 'Achieved 98+ Lighthouse score, zero console errors, instant 4-language switches, and a custom design matching Stripe/Apple aesthetics.'
    }
  },
  {
   id: 'xup-chat',
   title: 'Xup Chat',
   category: 'Messaging Platform',
   subCategory: 'Communication',
   year: '2025',
   image: xupChatImg,
   shortDesc: 'A modern real-time messaging web app built for fast, secure, and seamless communication across devices.',
   desc: 'Xup Chat is a WhatsApp-inspired messaging platform developed by Michael Ayodeji Oliyide. It enables users to chat instantly, share media, create group conversations, manage contacts, receive real-time notifications, and enjoy a clean, responsive interface across desktop, tablet, and mobile devices.',
   tech: ['HTML','JavaScript','Firebase Authentication','Cloud Firestore','Firebase Storage','Tailwind CSS','Vercel'],
   github: 'https://github.com/MIKKY1286/xupChat',
   live: 'https://xup-chat.vercel.app/',
   caseStudy: {
     problem: 'Many messaging applications are either overloaded with unnecessary features or require native installation. The goal was to build a lightweight, responsive, and real-time chat application that works directly in the browser while delivering a familiar experience similar to WhatsApp.',
     solution: 'Built Xup Chat using HTML, JavaScript, Firebase Authentication, Cloud Firestore, Firebase Storage, Tailwind CSS, Vercel.  Firebase Authentication handles secure user login, Cloud Firestore synchronizes conversations in real time, Firebase Storage manages media uploads, and Tailwind CSS provides a responsive interface optimized for every screen size.',
    challenges: 'Managing real-time message synchronization, online presence, typing indicators, unread message counters, media uploads, responsive layouts, and maintaining smooth performance while minimizing Firestore reads.',
    results: 'Delivered a fast Progressive Web App with real-time messaging, secure authentication, responsive design, group conversations, media sharing, notifications, and a modern user experience that feels familiar to WhatsApp while remaining lightweight and scalable.'
    } 
  },  
  {
  id: 'chopswift',
  title: 'ChopSwift',
  category: 'Food Ordering Platform',
  subCategory: 'Food Delivery',
  year: '2026',
  image: chopswiftImg,
  shortDesc: 'A fast and modern food ordering and delivery web application connecting customers with restaurants and delivery riders.',
  desc: 'ChopSwift is a responsive food ordering and delivery platform inspired by Chowdeck and Glovo. The application enables users to discover nearby restaurants, browse menus, place orders, track deliveries, and enjoy a smooth checkout experience. Built with HTML, Tailwind CSS, and JavaScript, it delivers a clean, mobile-first interface optimized for speed and usability.',
  tech: ['HTML5','Tailwind CSS','JavaScript (ES6)','Firebase Authentication','Cloud Firestore','Firebase Storage','Paystack','AOS Animations'],
  github: 'https://github.com/MIKKY1286/chopswift',
  live: 'https://chopswift.vercel.app',
  caseStudy: {
    problem:'Many local food delivery platforms have slow interfaces, complicated ordering flows, and poor mobile experiences. The goal was to create a lightweight, user-friendly web application that makes ordering food quick and effortless.',
    solution:'Developed a responsive food delivery platform using HTML, Tailwind CSS, and JavaScript. Integrated Firebase Authentication for user accounts, Cloud Firestore for managing restaurants and orders, Firebase Storage for food images, and Paystack for secure online payments. The interface was designed with a mobile-first approach and smooth animations for an engaging user experience.',
    challenges:'Building responsive restaurant listings, managing shopping cart state, implementing real-time order updates, optimizing performance across devices, and designing an intuitive ordering experience without relying on heavy frontend frameworks.',
    results:'Delivered a modern food ordering platform featuring restaurant discovery, category filtering, menu browsing, shopping cart management, secure checkout, order tracking, user authentication, responsive layouts, and fast page performance comparable to leading food delivery platforms.'
  }
},
{
  id: 'wedding-website',
  title: 'Wedding & Anniversary Website',
  category: 'Event Website',
  subCategory: 'Wedding',
  year: '2026',
  image: weddingWebsiteImg,
  shortDesc: 'A beautiful and responsive wedding website for celebrating weddings and anniversaries with event details and memorable photo galleries.',
  desc: 'A modern wedding and anniversary website built with React, designed to help couples share their love story, event details, countdown timer, venue information, RSVP options, and a stunning photo gallery. The website provides guests with all the information they need while creating a memorable digital experience for special occasions.',
  tech: ['React 19','React Router','Tailwind CSS','Framer Motion','React Icons','Lightbox Gallery'],
  github: 'https://github.com/MIKKY1286/OlamideEfemenaWedding',
  live: 'https://olamideefemenawedding.vercel.app/',
  caseStudy: {
    problem:'Couples often rely on printed invitations or multiple social media posts to share wedding and anniversary information, making it difficult for guests to access event details, schedules, and memorable photos in one place.',
    solution:'Developed a responsive React-based website that serves as a digital invitation and event hub. The platform includes a beautiful landing page, love story timeline, countdown timer, event schedule, venue information with maps, RSVP section, and an interactive photo gallery that showcases memorable moments.',
    challenges:'Creating an elegant and responsive design across all devices, implementing smooth page transitions and gallery animations, optimizing image loading for large photo collections, and maintaining fast performance while delivering a premium user experience.',
    results:'Delivered a visually appealing event website featuring responsive layouts, animated sections, interactive photo galleries, RSVP functionality, event countdown, venue details, and an engaging experience that allows family and friends to celebrate and relive special moments online.'
  }
},
{
  id: 'lecture-sync',
  title: 'LectureSync',
  category: 'Education Platform',
  subCategory: 'Productivity',
  year: '2026',
  image: lectureSyncImg,

  shortDesc: 'A smart timetable management platform that helps students and lecturers organize and sync lecture schedules with their calendars.',

  desc: 'LectureSync is a web application designed to simplify academic scheduling for students and lecturers. The platform allows users to create, upload, and manage lecture timetables, then seamlessly sync them with their personal calendars. With automatic reminders, schedule organization, and a responsive interface, LectureSync helps users stay on top of lectures, exams, and academic activities.',

  tech: [
    'HTML5',
    'Tailwind CSS',
    'JavaScript (ES6)',
    'Firebase Authentication',
    'Cloud Firestore',
    'Google Calendar API',
    'FullCalendar.js'
  ],

  github: 'https://github.com/MIKKY1286/TimetableSync',

  live: 'https://unitimetablesync.vercel.app/',

  caseStudy: {
    problem:
      'Students and lecturers often struggle to keep track of lecture schedules because timetables are shared as static documents that cannot easily be integrated into their daily calendars. This leads to missed classes, scheduling conflicts, and poor time management.',

    solution:
      'Developed LectureSync using HTML, Tailwind CSS, and JavaScript to provide an intuitive platform where users can upload or manually create lecture timetables and synchronize them with their personal calendars. The application also organizes schedules, sends reminders, and makes it easier to manage academic commitments from one place.',

    challenges:
      'Designing a responsive timetable interface, handling recurring lecture schedules, implementing calendar synchronization, preventing duplicate events, and ensuring the platform remains fast and easy to use across desktop and mobile devices.',

    results:
      'Delivered a lightweight academic scheduling platform that enables students and lecturers to manage lecture timetables, sync events with their calendars, receive reminders for upcoming classes, reduce scheduling conflicts, and improve productivity throughout the semester.'
  }
}
];

export default projectsData;
