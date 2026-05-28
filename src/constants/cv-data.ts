import type { StatItem, Service, ExperienceItem, TechStack } from '@/types/cv.types'

export const OWNER = {
  name: 'Josué Daniel Merino Pineda',
  shortName: 'Josué Merino',
  initials: 'JM',
  title: { es: 'Desarrollador Full-Stack', en: 'Full-Stack Developer' },
  roles: ['Full-Stack Developer', 'AI & LLM Engineer', 'Computer Vision Specialist'],
  location: 'Santander, España',
  email: 'josue091201@gmail.com',
  phone: '+34 603 52 86 95',
  linkedin: 'https://www.linkedin.com/in/josue-merino-program',
  website: 'josuemerino.dev',
} as const

export const STATS: StatItem[] = [
  { value: 5, suffix: '+', labelKey: 'stats.years' },
  { value: 4, suffix: '', labelKey: 'stats.companies' },
  { value: 2, suffix: '', labelKey: 'stats.countries' },
  { value: 10, suffix: '+', labelKey: 'stats.techs' },
]

export const SERVICES: Service[] = [
  {
    id: 'fullstack',
    icon: 'Code2',
    titleKey: 'services.fullstack.title',
    descKey: 'services.fullstack.desc',
    stack: ['PHP', 'Laravel', 'ReactJS', 'TypeScript'],
  },
  {
    id: 'ai',
    icon: 'BrainCircuit',
    titleKey: 'services.ai.title',
    descKey: 'services.ai.desc',
    stack: ['LLMs', 'RAG', 'Python', 'FastAPI'],
  },
  {
    id: 'vision',
    icon: 'Camera',
    titleKey: 'services.vision.title',
    descKey: 'services.vision.desc',
    stack: ['OpenCV', 'Real-time', 'Segmentation', 'Model Training'],
  },
  {
    id: 'backend',
    icon: 'Server',
    titleKey: 'services.backend.title',
    descKey: 'services.backend.desc',
    stack: ['MySQL', 'Docker', 'Express.js', 'REST APIs'],
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'ICloudCompliance',
    role: { es: 'Programador', en: 'Programmer' },
    location: 'Valencia, Spain',
    period: 'Jul 2025 – Dec 2025',
    tags: ['AI Chatbot', 'LLM', 'Document Manager', 'Compliance'],
    highlightKey: 'exp.icloud.highlight',
  },
  {
    company: 'SIALI IT',
    role: { es: 'Analista de Software', en: 'Analyst Software' },
    location: 'Guarnizo, Spain',
    period: 'Dec 2024 – Jul 2025',
    tags: ['Computer Vision', 'Real-time', 'Mercadona', 'GSK', 'FastAPI'],
    highlightKey: 'exp.siali.highlight',
  },
  {
    company: 'VIACORE IT',
    role: { es: 'Desarrollador Fullstack', en: 'Fullstack Developer' },
    location: 'Santander, Spain',
    period: 'Nov 2023 – May 2024',
    tags: ['Healthcare', 'React/TS', 'Dashboards', 'Express.js'],
    highlightKey: 'exp.viacore.highlight',
  },
  {
    company: 'FUNIBER',
    role: { es: 'Desarrollador Backend', en: 'Backend Developer' },
    location: 'Santander, Spain',
    period: 'Jan 2020 – Jul 2023',
    tags: ['PHP/Laravel', 'MySQL', 'Docker', 'React', 'Vue'],
    highlightKey: 'exp.funiber.highlight',
  },
]

export const TECH_STACK: TechStack = {
  Backend: ['PHP', 'Laravel', 'Express.js', 'FastAPI', 'MySQL'],
  Frontend: ['React', 'TypeScript', 'Vue.js', 'Material UI', 'Tailwind CSS'],
  'AI / ML': ['LLMs', 'RAG', 'OpenCV', 'Python', 'Data Acquisition'],
  DevOps: ['Docker', 'GitHub', 'Agile', 'Scrum'],
}
