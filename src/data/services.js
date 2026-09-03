import { Layers, Rocket, Plug, ShoppingCart, Cloud, Bot, Code2, ShieldCheck, Smartphone, Zap, MessageSquareCode, HeartHandshake } from 'lucide-react'

export const services = [
  {
    id: 'fullstack',
    icon: Layers,
    title: 'Full Stack Web Development',
    subtitle: 'End-to-end web applications built to scale',
    description:
      'High-performance, user-focused web platforms built with React, Next.js, Node.js, and MongoDB. From crisp UI animations to optimized database architecture.',
    tags: ['React / Next.js', 'Node.js', 'MongoDB', 'Type-Safe Architecture'],
    deliverables: ['Custom Web App', 'Responsive Design', 'Database Modeling', 'SEO & Performance'],
    accentColor: '#818CF8', // Indigo
  },
  {
    id: 'saas',
    icon: Rocket,
    title: 'SaaS Platform Development',
    subtitle: 'From MVP to production-ready multi-tenant systems',
    description:
      'Scalable SaaS architectures complete with multi-tenant authentication, automated subscription billing, user role permissions, and admin analytics dashboards.',
    tags: ['Multi-Tenant Auth', 'Stripe Billing', 'RBAC Security', 'Admin Dashboards'],
    deliverables: ['Subscription Billing', 'User Management', 'DRM / Video Protection', 'Analytics'],
    accentColor: '#C084FC', // Purple
  },
  {
    id: 'backend',
    icon: Plug,
    title: 'API & Backend Engineering',
    subtitle: 'Resilient REST & GraphQL backend services',
    description:
      'High-throughput backend systems, REST APIs, and microservices engineered for low latency, secure data flow, and 99.9% uptime under peak load.',
    tags: ['Microservices', 'REST & GraphQL', 'JWT & OAuth', 'Redis Caching'],
    deliverables: ['API Design & Docs', 'Rate Limiting', 'Database Indexing', 'Third-Party Webhooks'],
    accentColor: '#38BDF8', // Sky Blue
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce & Marketplaces',
    subtitle: 'Custom digital storefronts and multi-vendor hubs',
    description:
      'Tailored e-commerce platforms and multi-vendor marketplaces with instant checkout, split payments, inventory sync, and seller management portals.',
    tags: ['Stripe Connect', 'Multi-Vendor', 'Inventory Management', 'Order Tracking'],
    deliverables: ['Custom Storefront', 'Checkout Integration', 'Vendor Dashboards', 'Payment Splitting'],
    accentColor: '#F43F5E', // Rose/Pink
  },
  {
    id: 'devops',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    subtitle: 'Automated CI/CD and cloud deployment pipelines',
    description:
      'Automated deployment pipelines, Docker containerization, AWS cloud setups (EC2, S3, Lambda), and server configurations built for stability.',
    tags: ['AWS (EC2 / S3)', 'Docker Containers', 'Nginx & Linux', 'CI/CD Pipelines'],
    deliverables: ['Cloud Deployment', 'Containerization', 'SSL & Domain Setup', 'Server Hardening'],
    accentColor: '#F59E0B', // Amber
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Integrations & Automation',
    subtitle: 'Intelligent workflows powered by modern AI & LLMs',
    description:
      'Cutting-edge AI features including LLM model integration, Vector Databases, MCP architecture, automated email notifications, and smart prediction engines.',
    tags: ['LLM & OpenAI', 'Vector Databases', 'MCP Architecture', 'Text-to-Speech'],
    deliverables: ['Smart Search / RAG', 'Prediction Engines', 'Automated Email Workflows', 'AI Assistant'],
    accentColor: '#10B981', // Emerald
  },
]

export const whyWorkWithMe = [
  {
    id: 'clean-code',
    icon: Code2,
    title: 'Clean & Scalable Architecture',
    description: 'Battle-tested modular code structured for 10x scalability, zero technical debt, and effortless future expansion.',
    badge: 'Maintainable Code',
    accentColor: '#818CF8', // Indigo
  },
  {
    id: 'production-ready',
    icon: ShieldCheck,
    title: 'Production-Ready Security',
    description: 'Every endpoint, authentication flow, and database schema is rigorously hardened against vulnerabilities before deployment.',
    badge: '99.9% Uptime',
    accentColor: '#10B981', // Emerald
  },
  {
    id: 'responsive-ui',
    icon: Smartphone,
    title: 'Pixel-Perfect Responsive UI',
    description: 'Fluid, ultra-responsive layouts crafted to deliver a flawless visual experience across 4K displays down to mobile phones.',
    badge: '100/100 UX',
    accentColor: '#38BDF8', // Sky Blue
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Sub-Second Speed & Performance',
    description: 'Optimized bundle size, debounced state handling, and Redis caching for instant page loads and zero UI lag.',
    badge: 'Lightning Fast',
    accentColor: '#F59E0B', // Amber
  },
  {
    id: 'communication',
    icon: MessageSquareCode,
    title: 'Transparent Async Communication',
    description: 'Daily milestone updates, async video demos, clear documentation, and direct availability without ghosting.',
    badge: '100% Reliability',
    accentColor: '#C084FC', // Purple
  },
  {
    id: 'long-term',
    icon: HeartHandshake,
    title: 'Long-Term Growth Support',
    description: 'Post-launch code maintenance, feature updates, and technical advisory — I own outcomes, not just task tickets.',
    badge: 'Post-Launch Partner',
    accentColor: '#F43F5E', // Pink
  },
]
