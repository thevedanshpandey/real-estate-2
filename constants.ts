import { Project, Service, Leader, Office } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Al Faren Sky Tower',
    location: 'Downtown Dubai',
    category: 'Mixed-Use High-Rise',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600',
    year: '2023',
    status: 'Completed',
    description: 'A 92-story architectural landmark redefined through structural precision and luxury hospitality.'
  },
  {
    id: '2',
    name: 'The Imperial Estate',
    location: 'New Delhi, India',
    category: 'Ultra-Luxury Residential',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600',
    year: '2024',
    status: 'Completed',
    description: 'Bespoke residential sanctuary integrating traditional Indian craftsmanship with modern institutional standards.'
  },
  {
    id: '3',
    name: 'Meridian Masterplan',
    location: 'Mumbai Port Area',
    category: 'Urban Masterplanning',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600',
    year: '2022',
    status: 'Completed',
    description: 'A 450-acre integrated urban ecosystem designed for the next century of global commerce.'
  },
  {
    id: '4',
    name: 'Executive Central',
    location: 'Business Bay, Dubai',
    category: 'Commercial Development',
    imageUrl: 'https://images.unsplash.com/photo-1449156003053-c30653228302?q=80&w=1600',
    year: '2023',
    status: 'Completed',
    description: 'The premier corporate destination for multinational headquarters in the heart of Dubai.'
  }
];

export const OFFICES: Office[] = [
  {
    region: 'Dubai Associate',
    address: 'Level 32, Emirates Financial Towers, DIFC, Dubai, UAE',
    email: 'dubai@alfaren.com',
    phone: '+971 4 000 000',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1200'
  },
  {
    region: 'India Associate',
    address: 'Level 4, Statesman House, Connaught Place, New Delhi, India',
    email: 'india@alfaren.com',
    phone: '+91 11 0000 0000',
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=1200'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Masterplanning',
    description: 'Strategic urban frameworks that optimize land use and institutional value across vast parcels.',
    iconName: 'Map'
  },
  {
    title: 'Architecture & Design',
    description: 'Precision-driven aesthetic excellence adhering to rigorous international standards.',
    iconName: 'PenTool'
  },
  {
    title: 'Turnkey Development',
    description: 'End-to-end execution of multi-billion dollar real estate assets from vision to management.',
    iconName: 'Key'
  },
  {
    title: 'Project Management',
    description: 'Technical oversight and risk mitigation ensuring institutional-grade delivery cycles.',
    iconName: 'Layers'
  }
];

export const LEADERSHIP: Leader[] = [
  {
    name: 'Alistair Farren',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
    bio: 'With over 30 years of global real estate experience, Alistair leads the firm’s strategic vision and international expansion.'
  },
  {
    name: 'Dr. Sarah Mehta',
    role: 'Director of Masterplanning',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
    bio: 'A visionary in urban integration, Dr. Mehta oversees our large-scale development frameworks across India and the GCC.'
  }
];