import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const portfolioData = {
  name: 'Om Prakash Mishra',
  title: 'Full Stack Developer & Data Analytics Specialist',
  about:
    "I am a Full-Stack Developer in training with a strong focus on building clean, scalable web applications using modern technologies. My current work focuses on: Frontend development with Next.js, React, Tailwind CSS, Backend APIs using FastAPI and PostgreSQL, Data-driven dashboards and analytics, and Preparing for applied Machine Learning and AI systems. I believe in learning by building real products, not just completing courses.",
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'KIET Group of Institutions, Delhi-NCR, Ghaziabad',
      period: '2023 – 2025',
      details: [
        'Specializing in advanced computer science topics, including algorithms, data structures, and software engineering.',
        'CGPA: 9.2 (up to 2nd Semester)',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Allahabad, Prayagraj, Uttar Pradesh',
      period: '2020 – 2023',
      details: [
        'Built a strong foundation in core computer science principles.',
        'Percentage: 72.4%',
      ],
    },
  ],
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
    { name: 'TypeScript', proficiency: 80, category: 'Languages' },
    { name: 'JavaScript (ES6+)', proficiency: 85, category: 'Languages' },
    { name: 'Python', proficiency: 90, category: 'Languages' },
    { name: 'Next.js (App Router)', proficiency: 85, category: 'Frontend Development' },
    { name: 'React', proficiency: 90, category: 'Frontend Development' },
    { name: 'Tailwind CSS', proficiency: 95, category: 'Frontend Development' },
    { name: 'HTML5', proficiency: 95, category: 'Frontend Development' },
    { name: 'CSS3', proficiency: 90, category: 'Frontend Development' },
    { name: 'FastAPI', proficiency: 75, category: 'Backend & APIs' },
    { name: 'REST API Design', proficiency: 80, category: 'Backend & APIs' },
    { name: 'PostgreSQL', proficiency: 70, category: 'Databases' },
    { name: 'SQL (Joins, Aggregations)', proficiency: 75, category: 'Databases' },
    { name: 'Data Visualization (Charts, Dashboards)', proficiency: 80, category: 'Data & Visualization' },
    { name: 'Pandas (Basic)', proficiency: 60, category: 'Data & Visualization' },
    { name: 'Matplotlib, Seaborn', proficiency: 65, category: 'Data & Visualization' },
    { name: 'Git & GitHub', proficiency: 85, category: 'Tools & Workflow' },
    { name: 'pnpm', proficiency: 70, category: 'Tools & Workflow' },
    { name: 'Figma (AI-assisted UI design)', proficiency: 75, category: 'Tools & Workflow' },
    { name: 'DevOps', proficiency: 65, category: 'Tools & Workflow' },
    { name: 'DevSecOps', proficiency: 60, category: 'Tools & Workflow' },
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
export type Social = typeof portfolioData.socials[0];
export type Education = typeof portfolioData.education[0];
