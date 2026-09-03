export const allSkills = [
  // Languages & Web Fundamentals
  { name: 'C++', category: 'Languages & Fundamentals', iconType: 'Code2', color: '#38BDF8' },
  { name: 'JavaScript', category: 'Languages & Fundamentals', iconType: 'Code2', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages & Fundamentals', iconType: 'Cpu', color: '#3178C6' },
  { name: 'Python', category: 'Languages & Fundamentals', iconType: 'Terminal', color: '#38BDF8' },
  { name: 'SQL', category: 'Languages & Fundamentals', iconType: 'Database', color: '#60A5FA' },
  { name: 'HTML', category: 'Languages & Fundamentals', iconType: 'Code2', color: '#E34F26' },
  { name: 'CSS', category: 'Languages & Fundamentals', iconType: 'Code2', color: '#1572B6' },
  { name: 'Tailwind CSS', category: 'Languages & Fundamentals', iconType: 'Sparkles', color: '#06B6D4' },

  // Frontend & Mobile
  { name: 'React.js', category: 'Frontend & Mobile', iconType: 'Code2', color: '#00D8FF' },
  { name: 'Redux Toolkit', category: 'Frontend & Mobile', iconType: 'Layers', color: '#A855F7' },
  { name: 'Next.js', category: 'Frontend & Mobile', iconType: 'Flame', color: '#818CF8' },
  { name: 'React Native', category: 'Frontend & Mobile', iconType: 'Code2', color: '#61DAFB' },
  { name: 'Expo', category: 'Frontend & Mobile', iconType: 'Smartphone', color: '#C084FC' },

  // Backend & Real-time
  { name: 'Node.js', category: 'Backend & APIs', iconType: 'Server', color: '#10B981' },
  { name: 'Express.js', category: 'Backend & APIs', iconType: 'Server', color: '#34D399' },
  { name: 'GraphQL', category: 'Backend & APIs', iconType: 'Network', color: '#F43F5E' },
  { name: 'REST APIs', category: 'Backend & APIs', iconType: 'Workflow', color: '#10B981' },
  { name: 'WebSocket', category: 'Backend & APIs', iconType: 'Activity', color: '#F7DF1E' },
  { name: 'Socket.io', category: 'Backend & APIs', iconType: 'Activity', color: '#38BDF8' },
  { name: 'Axios', category: 'Backend & APIs', iconType: 'Workflow', color: '#818CF8' },
  { name: 'Nodemailer', category: 'Backend & APIs', iconType: 'Mail', color: '#22B573' },

  // Databases & Caching
  { name: 'MongoDB', category: 'Databases & Cloud', iconType: 'Database', color: '#10B981' },
  { name: 'Oracle', category: 'Databases & Cloud', iconType: 'Database', color: '#EF4444' },
  { name: 'Redis', category: 'Databases & Cloud', iconType: 'Cpu', color: '#F87171' },
  { name: 'PostgreSQL', category: 'Databases & Cloud', iconType: 'Database', color: '#60A5FA' },
  { name: 'SQLite', category: 'Databases & Cloud', iconType: 'Database', color: '#38BDF8' },

  // Cloud & Infrastructure
  { name: 'AWS', category: 'Databases & Cloud', iconType: 'Cloud', color: '#F59E0B' },
  { name: 'AWS EC2', category: 'Databases & Cloud', iconType: 'Cloud', color: '#F59E0B' },
  { name: 'AWS S3', category: 'Databases & Cloud', iconType: 'Cloud', color: '#10B981' },
  { name: 'AWS Lambda', category: 'Databases & Cloud', iconType: 'Cloud', color: '#F59E0B' },
  { name: 'GCP', category: 'Databases & Cloud', iconType: 'Cloud', color: '#60A5FA' },
  { name: 'Firebase', category: 'Databases & Cloud', iconType: 'Flame', color: '#FBBF24' },
  { name: 'Docker', category: 'Databases & Cloud', iconType: 'Container', color: '#38BDF8' },
  { name: 'Nginx', category: 'Databases & Cloud', iconType: 'Server', color: '#10B981' },
  { name: 'CI/CD', category: 'Databases & Cloud', iconType: 'Workflow', color: '#60A5FA' },
  { name: 'Linux', category: 'Databases & Cloud', iconType: 'Terminal', color: '#FBBF24' },
  { name: 'Vercel', category: 'Databases & Cloud', iconType: 'Zap', color: '#818CF8' },
  { name: 'Netlify', category: 'Databases & Cloud', iconType: 'Zap', color: '#2DD4BF' },
  { name: 'Render', category: 'Databases & Cloud', iconType: 'Zap', color: '#34D399' },
  { name: 'Heroku', category: 'Databases & Cloud', iconType: 'Zap', color: '#C084FC' },

  // Developer Tools & Services
  { name: 'Git', category: 'Tools & Services', iconType: 'GitBranch', color: '#F87171' },
  { name: 'GitHub', category: 'Tools & Services', iconType: 'Github', color: '#94A3B8' },
  { name: 'Postman', category: 'Tools & Services', iconType: 'Send', color: '#FB923C' },
  { name: 'VS Code', category: 'Tools & Services', iconType: 'Code2', color: '#38BDF8' },
  { name: 'Stripe', category: 'Tools & Services', iconType: 'CreditCard', color: '#818CF8' },
  { name: 'Cloudinary', category: 'Tools & Services', iconType: 'Image', color: '#60A5FA' },
  { name: 'ImageKit', category: 'Tools & Services', iconType: 'Image', color: '#38BDF8' },
  { name: 'OpenAI API', category: 'Tools & Services', iconType: 'Sparkles', color: '#34D399' },
  { name: 'Clerk', category: 'Tools & Services', iconType: 'ShieldCheck', color: '#A855F7' },

  // Architecture & Security Concepts
  { name: 'JWT', category: 'Architecture & Concepts', iconType: 'Lock', color: '#F43F5E' },
  { name: 'OAuth', category: 'Architecture & Concepts', iconType: 'Key', color: '#FB923C' },
  { name: 'Bcrypt', category: 'Architecture & Concepts', iconType: 'ShieldCheck', color: '#10B981' },
  { name: 'Microservices', category: 'Architecture & Concepts', iconType: 'Layers', color: '#C084FC' },
  { name: 'REST Architecture', category: 'Architecture & Concepts', iconType: 'Workflow', color: '#818CF8' },
  { name: 'Redis Caching', category: 'Architecture & Concepts', iconType: 'Cpu', color: '#F87171' },
  { name: 'Rate Limiting', category: 'Architecture & Concepts', iconType: 'ShieldCheck', color: '#F59E0B' },
  { name: 'Load Balancing', category: 'Architecture & Concepts', iconType: 'Network', color: '#34D399' },
  { name: 'Database Indexing', category: 'Architecture & Concepts', iconType: 'Database', color: '#10B981' },
  { name: 'RBAC', category: 'Architecture & Concepts', iconType: 'Lock', color: '#818CF8' },
]

export const skillCategories = [
  'All',
  'Languages & Fundamentals',
  'Frontend & Mobile',
  'Backend & APIs',
  'Databases & Cloud',
  'Tools & Services',
  'Architecture & Concepts',
]
