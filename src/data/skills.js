import { 
  SiHtml5, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiFirebase, 
  SiMongodb, 
  SiMysql, 
  SiVercel, 
  SiNetlify, 
  SiRender, 
  SiGit, 
  SiGithub, 
  SiPostman 
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';

export const skillsData = {
  Frontend: [
    { name: 'HTML5', percentage: 95, icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', percentage: 90, icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', percentage: 92, icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'React.js', percentage: 88, icon: SiReact, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', percentage: 95, icon: SiTailwindcss, color: 'text-sky-400' },
  ],
  Backend: [
    { name: 'Node.js', percentage: 80, icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Express.js', percentage: 78, icon: SiExpress, color: 'text-neutral-500' },
  ],
  Database: [
    { name: 'Firebase', percentage: 85, icon: SiFirebase, color: 'text-amber-500' },
    { name: 'MongoDB', percentage: 75, icon: SiMongodb, color: 'text-green-600' },
    { name: 'MySQL', percentage: 70, icon: SiMysql, color: 'text-blue-600' },
  ],
  Cloud: [
    { name: 'Vercel', percentage: 90, icon: SiVercel, color: 'text-black dark:text-white' },
    { name: 'Netlify', percentage: 85, icon: SiNetlify, color: 'text-teal-500' },
    { name: 'Render', percentage: 75, icon: SiRender, color: 'text-indigo-500' },
  ],
  Tools: [
    { name: 'Git', percentage: 88, icon: SiGit, color: 'text-orange-600' },
    { name: 'GitHub', percentage: 90, icon: SiGithub, color: 'text-neutral-800 dark:text-neutral-200' },
    { name: 'VS Code', percentage: 95, icon: FiCode, color: 'text-blue-500' },
    { name: 'Postman', percentage: 80, icon: SiPostman, color: 'text-orange-500' },
  ],
};

export default skillsData;
