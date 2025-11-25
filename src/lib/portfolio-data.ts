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
    {
      name: 'E-commerce Recommendation Engine',
      description:
        'A machine learning-powered recommendation engine for an e-commerce site. By analyzing user behavior and purchase history, it provides personalized product suggestions. This was developed using Python with Pandas and Scikit-learn, and integrated into a web app via a Flask API.',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      skills: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'REST API', 'SQL'],
      demoUrl: '#',
      sourceUrl: '#',
      dataAiHint: 'online shopping'
    },
    {
      name: 'Full-Stack MERN Blog',
      description:
        'A feature-rich blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). It includes secure user authentication with JWT, a rich text editor for creating posts, and a responsive design for a seamless experience across all devices.',
      images: [
        'https://placehold.co/600x400.png',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Redux'],
      demoUrl: '#',
      sourceUrl: '#',
      dataAiHint: 'tech blog'
    },
     {
      name: 'Sentiment Analysis API',
      description:
        'A RESTful API that performs sentiment analysis on a given text. It leverages Natural Language Processing (NLP) techniques to determine if the sentiment is positive, negative, or neutral. The API is built with Flask and the NLTK library, and containerized with Docker for easy deployment.',
      images: [
        'https://placehold.co/600x400.png',
      ],
      skills: ['Python', 'Flask', 'NLTK', 'Docker', 'REST API', 'NLP'],
      demoUrl: '#',
      sourceUrl: '#',
      dataAiHint: 'data analytics'
    },
  ],
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
