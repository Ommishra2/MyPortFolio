import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const portfolioData = {
  name: 'Om Prakash Mishra',
  title: 'Full Stack Developer & Data Analytics Specialist',
  about:
    "I’m a passionate Full Stack Developer in training with a growing expertise in Data Analytics. As a student, I enjoy building dynamic, user-friendly web applications and discovering meaningful patterns in data. I’m always learning, experimenting, and refining my craft to deliver impactful solutions..",
  projects: [
    {
      name: 'MealEase',
      description:
        ' a web app I built to help people plan their meals, find new recipes, and keep track of nutrition in an easy way.',
      images: [
        '/images/mealease-1.png',
        '/images/mealease-2.png',
        '/images/mealease-3.png',
        '/images/mealease-4.png',
      ],
      skills: ['React', 'Node.js', 'Express','ES6+'],
      demoUrl: 'https://meal-ease.vercel.app/',
      sourceUrl: 'https://github.com/Ommishra2/MealEase',
      dataAiHint: 'analytics dashboard'
    },
     
  skills: [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'React', proficiency: 85 },
    { name: 'Node.js', proficiency: 80 },
    { name: 'Python', proficiency: 95 },
    { name: 'Pandas & NumPy', proficiency: 90 },
    { name: 'SQL & NoSQL', proficiency: 88 },
    { name: 'Flask', proficiency: 80 },
    { name: 'REST APIs', proficiency: 90 },
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
export type Skill = typeof portfolioData.skills[0];
