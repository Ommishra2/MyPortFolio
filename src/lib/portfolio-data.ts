import { Github, Linkedin, Twitter } from 'lucide-react';

export const portfolioData = {
  name: 'Om Prakash Mishra',
  title: 'Full Stack Developer & Data Analytics Specialist',
  about:
    "I'm a dedicated Full Stack Developer with a specialization in Data Analytics. I have a passion for building dynamic web applications and extracting meaningful insights from data. I thrive on solving complex problems and am constantly exploring new technologies to enhance my skills and deliver innovative solutions.",
  projects: [
    {
      name: 'Interactive Data Visualization Platform',
      description:
        'A web platform for creating and sharing interactive data visualizations. Users can upload datasets, generate various chart types, and customize dashboards. Built with a React frontend, Node.js backend, and D3.js for powerful data rendering. The platform helps users to discover and present data stories effectively.',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'D3.js', 'Python'],
      demoUrl: '#',
      sourceUrl: '#',
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
    email: 'om.mishra@example.com',
  },
  socials: [
    {
      name: 'GitHub',
      url: '#',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: '#',
      icon: Twitter,
    },
  ],
};

export type PortfolioData = typeof portfolioData;
export type Project = typeof portfolioData.projects[0];
export type Skill = typeof portfolioData.skills[0];
