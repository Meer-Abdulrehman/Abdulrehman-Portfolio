import gharImg from './projectsImges/ghar.png'
import prescriptoImg from './projectsImges/prescripto.png'
import multivendorImg from './projectsImges/multivendor.png'
import quickaiImg from './projectsImges/quickai.png'
import quickshowImg from './projectsImges/quickshow.png'
import quickstayImg from './projectsImges/quickstay.png'
import fastBasketImg from './projectsImges/fastBasket.png'
import dairytohomeImg from './projectsImges/dairytohome.png'
import junkyBitesImg from './projectsImges/junkyBites.png'
import TrippyTravelImg from './projectsImges/trippyTravle.png'
import colorCraftImg from './projectsImges/colorCraft.png'
export const featuredProject = {
  name: 'CareerPulse',
  tagline: 'AI-Powered Job Portal & Skill Analytics Platform',
  description:
    'A modern full-stack job portal built with Next.js 16 and NestJS, featuring real-time job notifications, AI-powered skill analyzer, resume builder, blog platform, and comprehensive admin dashboard. Supports OAuth and JWT-based role management.',
  tech: ['Next.js 16', 'NestJS', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  github: 'https://github.com/Meer-Abdulrehman/CareerPulse',
  demo: 'https://career-pulse-drab.vercel.app/',
}

export const projects = [
  {
    name: 'GharBazaar Real Estate',
    description: 'Full-featured real estate marketplace for property listing, buying, and renting.',
    problem: 'Simplifies property search and real-time listing management for buyers and agents.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Meer-Abdulrehman/GharBazaar-ReatEstate',
    demo: 'https://real-estate-app-gilt.vercel.app',
    category: 'Fullstack',
    image: gharImg,
    caseStudy: null,
  },
  {
    name: 'Prescripto Appointment Booking App',
    description: 'Streamlined scheduling system for booking services with instant confirmation.',
    problem: 'Eliminates scheduling conflicts and automates client booking workflows.',
    tech: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Meer-Abdulrehman/Appointment-Booking-App',
    demo: 'https://appointment-booking-app-seven.vercel.app',
    category: 'Fullstack',
    image: prescriptoImg,
    caseStudy: null,
  },
  {
    name: 'Multivendor E-Commerce Marketplace',
    description: 'A scalable multi-vendor marketplace where sellers operate independent storefronts with real-time messaging, order payouts, and admin analytics.',
    problem: 'Enables multi-seller commerce with isolated vendor catalogs, automated payment splitting, and real-time buyer-seller communication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Socket.io'],
    github: 'https://github.com/Meer-Abdulrehman/E-commerce-store-with-basic-backend-',
    demo: 'https://client-eight-coral.vercel.app/',
    category: 'Fullstack',
    image: multivendorImg,
    caseStudy: null,
  },
  {
    name: 'Quick.AI Content & Image Generator',
    description: 'An all-in-one AI productivity suite offering instant article writing, HD image generation, background removal, code synthesis, and automated resume analysis.',
    problem: 'Consolidates multi-modal AI capabilities into a unified, high-speed workspace with token consumption tracking and one-click exports.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'OpenAI API', 'Clerk Auth'],
    github: 'https://github.com/Meer-Abdulrehman',
    demo: 'https://quickai-gs.vercel.app/',
    category: 'Fullstack',
    image: quickaiImg,
    caseStudy: null,
  },
  {
    name: 'QuickShow Ticket Booking Platform',
    description: 'A full-featured movie and event ticket booking platform — featuring real-time seat selection, showtime scheduling, payment integration, and instant digital QR ticket generation.',
    problem: 'Streamlines venue ticketing workflows with interactive visual seating layouts, real-time booking locks, and instant mobile ticket verification.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com/Meer-Abdulrehman',
    demo: 'https://quickshow.vercel.app/',
    category: 'Fullstack',
    image: quickshowImg,
    caseStudy: null,
  },
  {
    name: 'QuickStay Hotel & Villa Booking Platform',
    description: 'A modern hospitality booking platform providing instant room reservations, dynamic pricing, amenity filtering, and comprehensive property management dashboards.',
    problem: 'Eliminates friction in accommodation searches with real-time availability sync, interactive date pickers, and instant booking confirmation.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux'],
    github: 'https://github.com/Meer-Abdulrehman',
    demo: 'https://quickstay.vercel.app/',
    category: 'Fullstack',
    image: quickstayImg,
    caseStudy: null,
  },
  {
    name: 'FastBasket Grocery & Retail E-Commerce',
    description: 'A high-performance online grocery & retail storefront featuring real-time inventory sync, instant search, coupon discount engine, and secure Stripe checkout.',
    problem: 'Delivers a frictionless online grocery shopping experience with lightning-fast product filtering, live cart persistence, and automated order status tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com/Meer-Abdulrehman',
    demo: 'https://fastbasket.vercel.app/',
    category: 'Fullstack',
    image: fastBasketImg,
    caseStudy: null,
  },
  {
    name: 'Dairy To Home Farm-Fresh Delivery Platform',
    description: 'A direct-to-consumer fresh dairy subscription & delivery platform — featuring recurring daily milk orders, flexible quantity scheduling, location tracking, and automated billing.',
    problem: 'Eliminates dairy supply chain delays by connecting households directly with local farms through automated daily delivery scheduling and transparent order management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Netlify'],
    github: 'https://github.com/Meer-Abdulrehman',
    demo: 'https://dairyfarmmilk-service.netlify.app/',
    category: 'Fullstack',
    image: dairytohomeImg,
    caseStudy: null,
  },
  {
    name: 'JunkyBites Fast-Food Ordering Platform',
    description: 'A vibrant fast-food delivery web application — featuring interactive menu navigation, custom topping add-ons, live cart calculations, and smooth checkout workflows.',
    problem: 'Streamlines online restaurant ordering with instant meal customization, visual food selection, and frictionless customer checkout.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    github: 'https://github.com/Meer-Abdulrehman',
    demo: 'https://junkybites.netlify.app/',
    category: 'Fullstack',
    image: junkyBitesImg,
    caseStudy: null,
  },
  {
    name: 'Trippy Travels Tour & Destination Experience',
    description: 'An immersive travel & tour discovery platform — featuring interactive destination guides, custom trip package booking, smooth parallax animations, and itinerary planners.',
    problem: 'Elevates travel planning with engaging visual destination showcases, interactive trip itineraries, and effortless booking workflows.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    github: 'https://github.com/Meer-Abdulrehman',
    demo: 'https://trippytours-travels.netlify.app/',
    category: 'Fullstack',
    image: TrippyTravelImg,
    caseStudy: null,
  },
  {
    name: 'ColorCraft UI Palette & Color Utility',
    description: 'An intuitive color design utility — featuring dynamic palette generation, live alpha transparency sliders, contrast ratio checking, and one-click HEX/RGB/HSL code copying.',
    problem: 'Empowers designers and frontend engineers with instant color scheme generation, opacity tuning, and instant clipboard exports for modern web design workflows.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'CSS3', 'Netlify'],
    github: 'https://github.com/Meer-Abdulrehman/color-craft',
    demo: 'https://colorcraft-new.netlify.app/',
    category: 'Frontend',
    image: colorCraftImg,
    caseStudy: null,
  },
]
