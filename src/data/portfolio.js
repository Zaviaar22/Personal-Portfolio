/** Edit your portfolio content here, rather than searching through JSX. */
export const links = {
  email: 'zaviaar.r22@gmail.com',
  github: 'https://github.com/Zaviaar22',
  linkedin: 'https://www.linkedin.com/in/zaviaar-rizvi-5260a4264/',
  resume: '/assets/Zaviaar_Rizvi_Resume.pdf',
};

export const navigation = [
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Contact', href: '#contact' },
];

export const experience = [
  {
    title: 'AI & Automation Developer Co-op',
    company: 'Hammond Power Solutions',
    location: 'Guelph, ON',
    dates: 'SEP 2026 — DEC 2026',
    current: true,
    details: [
      'Developing AI-powered inventory management and sales history agents using Copilot Studio, connecting Dynamics 365 and Dataverse so teams can retrieve enterprise data and insights through natural-language queries.',
      'Building Power Automate cloud workflows across Dynamics 365, Dataverse, SharePoint and Microsoft 365 to streamline recurring business processes.',
    ],
    technologies: ['Copilot Studio', 'Power Automate', 'Dataverse', 'Dynamics 365'],
  },
  {
    title: 'BI & Data Analytics Co-op',
    company: 'Hammond Power Solutions',
    location: 'Guelph, ON',
    dates: 'MAY 2026 — AUG 2026',
    details: [
      'Optimized inventory Power BI models and SQL queries, repairing approximately 90% of broken measures and 75% of reports and visualizations to restore reporting accuracy.',
      'Reduced dataset refresh times by approximately 50% and built a Python script using the Azure Maps API to support inventory mapping and location analysis.',
    ],
    technologies: ['Power BI', 'SQL', 'Python', 'Azure Maps API'],
  },
  {
    title: 'IT Analyst Co-op',
    company: 'Pepper',
    location: 'Toronto, ON',
    dates: 'JAN 2025 — MAY 2025',
    details: [
      'Automated technical workflows with Python and Postman, investigated integration issues using SQL and AWS, and coordinated technical escalations across teams.',
      'Resolved 600+ support tickets with a 90% first-response rate, while documenting procedures and troubleshooting workflows.',
    ],
    technologies: ['Python', 'SQL', 'AWS', 'Postman', 'REST APIs'],
  },
  {
    title: 'Web Developer & Data Analytics Co-op',
    company: 'University of Guelph',
    location: 'Guelph, ON',
    dates: 'JUN 2024 — AUG 2024',
    details: [
      'Designed and developed a website prototype for a university sports institute, and translated sports analytics data into interactive dashboards for stakeholder presentations.',
    ],
    technologies: ['JavaScript', 'HTML / CSS', 'Tableau', 'Looker Studio'],
  },
];

export const projects = [
  {
    id: 'neuralinq',
    title: 'Neuralinq',
    eyebrow: 'FULL-STACK · AI / EDUCATION',
    description: 'An intelligent tutoring platform that generates personalized lessons and questions using the Gemini API. Built in an eight-person Agile team with adaptive question selection and progress tracking.',
    technologies: ['React', 'Flask', 'Python', 'Gemini API'],
    url: 'https://github.com/Zaviaar22/Neuralinq-ITS',
  },
  {
    id: 'treasure',
    title: 'Treasure Runner',
    eyebrow: 'SYSTEMS · GAME DEVELOPMENT',
    description: 'A terminal adventure game with a C engine and Python interface connected through ctypes. Features graph-based navigation, puzzles, persistent player profiles and automated tests.',
    technologies: ['C', 'Python', 'ctypes', 'curses', 'Docker'],
    url: 'https://github.com/Zaviaar22/Treasure-Collector',
  },
];

// Icon names are resolved to actual SVG brand marks in components/Skills.jsx.
export const skillGroups = [
  {
    title: 'Languages', symbol: '⌘',
    skills: ['Python', 'JavaScript', 'SQL', 'C', 'Java', 'HTML5', 'CSS3', 'MATLAB', 'VHDL'],
  },
  {
    title: 'Frameworks & Libraries', symbol: '{ }',
    skills: ['React', 'Tailwind CSS', 'Flask', 'Pandas', 'NumPy'],
  },
  {
    title: 'Cloud, Data & AI', symbol: '✳',
    skills: ['AWS', 'Power BI', 'Power Automate', 'Copilot Studio', 'Dataverse', 'Dynamics 365', 'Tableau'],
  },
  {
    title: 'Developer Tools', symbol: '↗',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Vite', 'Postman', 'REST APIs', 'Gemini API', 'Azure Maps API', 'Jira', 'Confluence'],
  },
];
