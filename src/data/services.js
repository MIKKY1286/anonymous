import { FiCode, FiBriefcase, FiLayout, FiUser, FiGrid, FiDatabase, FiSettings, FiCpu } from 'react-icons/fi';

export const servicesData = [
  {
    id: 'web-dev',
    titleKey: 'service_web_dev_title',
    descKey: 'service_web_dev_desc',
    icon: FiCode,
    color: 'text-primary bg-primary/10 border-primary/20',
  },
  {
    id: 'biz-web',
    titleKey: 'service_biz_web_title',
    descKey: 'service_biz_web_desc',
    icon: FiBriefcase,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    id: 'landing',
    titleKey: 'service_landing_title',
    descKey: 'service_landing_desc',
    icon: FiLayout,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
  {
    id: 'portfolio',
    titleKey: 'service_portfolio_title',
    descKey: 'service_portfolio_desc',
    icon: FiUser,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  },
  {
    id: 'dashboard',
    titleKey: 'service_dashboard_title',
    descKey: 'service_dashboard_desc',
    icon: FiGrid,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    id: 'firebase',
    titleKey: 'service_firebase_title',
    descKey: 'service_firebase_desc',
    icon: FiDatabase,
    color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
  },
  {
    id: 'maintenance',
    titleKey: 'service_maintenance_title',
    descKey: 'service_maintenance_desc',
    icon: FiSettings,
    color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
  },
  {
    id: 'api-integration',
    titleKey: 'service_api_title',
    descKey: 'service_api_desc',
    icon: FiCpu,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
  },
];

export default servicesData;
