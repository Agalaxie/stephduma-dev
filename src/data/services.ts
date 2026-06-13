export interface Service {
  label: string;
  href: string;
  description: string;
  /** Clé d'icône résolue côté composant (voir le menu déroulant du Layout) */
  icon: 'react' | 'wordpress' | 'api' | 'perf';
}

export const services: Service[] = [
  {
    label: 'React & Next.js',
    href: '/developpeur-react-nextjs',
    description: 'Applications web modernes et performantes',
    icon: 'react',
  },
  {
    label: 'WordPress',
    href: '/creation-site-wordpress',
    description: 'Sites sur-mesure, thèmes & headless',
    icon: 'wordpress',
  },
  {
    label: 'Intégrations & APIs',
    href: '/integration-api',
    description: 'Connecter vos outils et services',
    icon: 'api',
  },
  {
    label: 'Performance & Accessibilité',
    href: '/audit-performance-accessibilite',
    description: 'Audits, optimisations & Core Web Vitals',
    icon: 'perf',
  },
];
