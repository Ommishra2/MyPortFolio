import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const portfolioData = {
  name: 'Om Prakash Mishra',
  title: 'Full Stack Developer & Data Analytics Specialist',
  about:
    "I am a Full-Stack Developer in training with a strong focus on building clean, scalable web applications using modern technologies. My current work focuses on: Frontend development with Next.js, React, Tailwind CSS, Backend APIs using FastAPI and PostgreSQL, Data-driven dashboards and analytics, and Preparing for applied Machine Learning and AI systems. I believe in learning by building real products, not just completing courses.",
  projects: [
    {
      name: 'FinDash — Financial Analytics Dashboard',
      role: 'Full-Stack Developer',
      skills: ['Next.js', 'TypeScript', 'Tailwind', 'React Query'],
      problem: 'A clean dashboard to visualize financial metrics and analytics.',
      features: [
        'Reusable UI components',
        'Dashboard layout with sidebar & header',
        'Client-side data fetching',
        'Analytics-ready architecture',
      ],
      status: 'In Progress',
      demoUrl: '#',
      sourceUrl: '#',
      images: ['/images/findash-1.png'],
      dataAiHint: 'financial dashboard analytics'
    },
    {
      name: 'MealEase',
      role: 'Full-Stack Developer',
      skills: ['React', 'Node.js', 'Express', 'ES6+'],
      problem: 'Helps people plan meals, find recipes, and track nutrition.',
      features: [
        'Recipe searching and filtering',
        'Meal planning calendar',
        'Nutritional information tracking'
      ],
      status: 'Completed',
      demoUrl: 'https://meal-ease.vercel.app/',
      sourceUrl: 'https://github.com/Ommishra2/MealEase',
      images: [
        '/images/mealease-1.png',
        '/images/mealease-2.png',
        '/images/mealease-3.png',
        '/images/mealease-4.png',
      ],
      dataAiHint: 'recipe app'
    },
  ],
  skills: [
    { "name": "Next.js", "proficiency": 85, "category": "Frontend" },
    { "name": "React", "proficiency": 90, "category": "Frontend" },
    { "name": "TypeScript", "proficiency": 80, "category": "Frontend" },
    { "name": "Tailwind CSS", "proficiency": 95, "category": "Frontend" },
    { "name": "FastAPI", "proficiency": 75, "category": "Backend" },
    { "name": "PostgreSQL", "proficiency": 70, "category": "Backend" },
    { "name": "Python", "proficiency": 85, "category": "Data & Tools" },
    { "name": "Pandas", "proficiency": 60, "category": "Data & Tools" },
    { "name": "Git & GitHub", "proficiency": 80, "category": "Data & Tools" },
    { "name": "Docker", "proficiency": 65, "category": "Data & Tools" }
  ],
  contact: {
    email: 'ommishra458@gmail.com',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/Ommishra2',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/om-prakash-mishra-b20766201',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/OMPRAKASHM74960',
      icon: Twitter,
    },
     {
      name: 'Instagram',
      url: 'https://www.instagram.com/om.1205_?igsh=MWplN3lhYno5cWJ2MQ==',
      icon: Instagram,
    },
  ],
};

export type PortfolioData = typeof portfolioData;
export type Project = typeof portfolioData.projects[0];
export type Skills = typeof portfolioData.skills;