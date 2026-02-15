import { Project, Service, Leader, Office, MediaMention } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Panvel Multi-Modal Urban System',
    location: 'Navi Mumbai, India',
    category: 'Urban Infrastructure & Systems',
    imageUrl: 'https://alfaren.ae/images/Panvel-Bus-Port1.jpg',
    year: '2023',
    status: 'Completed',
    description: 'A visionary masterplan originating from our Dubai studio, integrating complex transit flows with high-density commercial ecosystems.'
  },
  {
    id: '2',
    name: 'National Athletic Landmark',
    location: 'New Delhi, India',
    category: 'Cultural & Civic Architecture',
    imageUrl: 'https://alfaren.ae/images/Indira%20Gandhi%20Stadium%20-%20Copy.jfif',
    year: '2022',
    status: 'Completed',
    description: 'The translation of a global design concept into a buildable civic icon, optimized through rigorous local project management.'
  },
  {
    id: '3',
    name: 'The Executive Nexus',
    location: 'Dubai, UAE',
    category: 'Vertical Masterplanning',
    imageUrl: 'https://alfaren.ae/images/Khoory-1.JPG',
    year: '2024',
    status: 'Completed',
    description: 'Advanced architectural thinking applied to hospitality, defining the new skyline of the Dubai innovation corridor.'
  },
  {
    id: '4',
    name: 'Elysium Private Estates',
    location: 'Dubai, UAE',
    category: 'Residential Masterplanning',
    imageUrl: 'https://alfaren.ae/images/Villa-4.jpg',
    year: '2023',
    status: 'Completed',
    description: 'Part of a 3,000-villa legacy, these estates represent the intersection of global luxury and local cultural tradition.'
  },
  {
    id: '5',
    name: 'Sector 356 Corporate Hub',
    location: 'Business Bay, Dubai',
    category: 'Commercial Systems',
    imageUrl: 'https://alfaren.ae/images/P356-1.jpg',
    year: '2022',
    status: 'Completed',
    description: 'Precision engineering meets visionary design in this corporate landmark focused on sustainability and structural efficiency.'
  },
  {
    id: '6',
    name: 'Institutional Knowledge Campus',
    location: 'Greater Noida, India',
    category: 'Educational Masterplanning',
    imageUrl: 'https://alfaren.ae/images/VBPS-Dec2020.img02B1.jpg',
    year: '2021',
    status: 'Completed',
    description: 'A future-proofed educational ecosystem designed for scale, flexibility, and long-term institutional value.'
  }
];

export const OFFICES: Office[] = [
  {
    region: 'Dubai Studio: Global Hub',
    address: 'Innovation Suite, Emirates Financial Towers, DIFC, Dubai, UAE',
    email: 'studio@alfaren.com',
    phone: '+971 4 000 000',
    image: 'https://alfaren.ae/images/IMG_4291.JPG'
  },
  {
    region: 'India: Implementation Center',
    address: 'Strategic Operations, Statesman House, Connaught Place, New Delhi',
    email: 'india@alfaren.com',
    phone: '+91 11 0000 0000',
    image: 'https://alfaren.ae/images/IMG_4331.JPG'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Architectural Vision',
    description: 'Conceptualization and high-level design leadership originating from our Dubai Innovation Hub.',
    iconName: 'Building'
  },
  {
    title: 'Urban Systems',
    description: 'Large-scale masterplanning that integrates urban innovation with local tradition.',
    iconName: 'Map'
  },
  {
    title: 'Technical Implementation',
    description: 'Translating visionary concepts into practical, buildable solutions through rigorous technical oversight.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Project Governance',
    description: 'Strict cost control, financial discipline, and quality monitoring across all development phases.',
    iconName: 'Layers'
  },
  {
    title: 'Environmental Design',
    description: 'Sustainable frameworks that respect local context while pushing global design boundaries.',
    iconName: 'PenTool'
  },
  {
    title: 'Turnkey Stewardship',
    description: 'Seamless transition from visionary idea to real-world implementation through precision management.',
    iconName: 'Key'
  }
];

export const LEADERSHIP: Leader[] = [
  {
    name: 'Atul Prabhu',
    role: 'Principal & Visionary Partner',
    image: 'https://alfaren.ae/images/Atul-prabhu.png',
    bio: 'Overseeing the firm’s global design strategy, Atul Prabhu bridges the gap between high-level conceptualization and structural reality with an unparalleled track record in global architecture.'
  },
  {
    name: 'Dr. Sarah Mehta',
    role: 'Director of Urban Innovation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
    bio: 'Leading the Dubai Studio, Dr. Mehta focuses on advanced architectural thinking and masterplanning for the cities of the future.'
  }
];

export const MEDIA: MediaMention[] = [
  {
    id: 'm1',
    title: 'The Dubai Hub: Reimagining Global Masterplanning',
    source: 'Financial Times Architecture',
    date: 'Dec 2023',
    link: '#'
  },
  {
    id: 'm2',
    title: 'Translating Vision: The Al Faren Implementation Model',
    source: 'Bloomberg Business',
    date: 'Oct 2023',
    link: '#'
  },
  {
    id: 'm3',
    title: '3000 Villas and Counting: A Legacy of Excellence',
    source: 'The National',
    date: 'Aug 2023',
    link: '#'
  }
];