import { Github, Linkedin, Twitter } from 'lucide-react';
import type { Project as ProjectType } from '@/components/project-card';

export const portfolioData = {
  name: 'Alex Doe',
  title: 'Python & Flask Developer',
  about:
    "I'm a passionate developer with a knack for creating elegant solutions with Python and Flask. With a background in web development and data science, I enjoy building scalable web applications and working on challenging problems. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
  projects: [
    {
      name: 'E-commerce Analytics Dashboard',
      description:
        'A comprehensive analytics dashboard for an e-commerce platform, providing insights into sales, customer behavior, and product performance. Built with Flask, Plotly, and Pandas, this tool helps businesses make data-driven decisions by visualizing key metrics in an interactive and user-friendly interface.',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      skills: ['Python', 'Flask', 'Plotly', 'Pandas', 'JavaScript', 'SQL'],
      demoUrl: '#',
      sourceUrl: '#',
      dataAiHint: 'dashboard charts'
    },
    {
      name: 'Task Management API',
      description:
        'A robust RESTful API for a task management application, featuring secure user authentication, task creation, updates, and status tracking. Developed using Flask-RESTX and SQLAlchemy, it provides a scalable backend for any modern to-do list or project management tool.',
      images: [
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
      ],
      skills: ['Python', 'Flask', 'Flask-RESTX', 'SQLAlchemy', 'PostgreSQL', 'Docker'],
      demoUrl: '#',
      sourceUrl: '#',
      dataAiHint: 'code api'
    },
    {
      name: 'Personal Blog Platform',
      description:
        'A fully-functional blogging platform that allows users to create, edit, and publish articles with a rich text editor. It includes features like user accounts, comment sections, and content management. Built from the ground up with Flask and a relational database.',
      images: [
        'https://placehold.co/600x400.png',
      ],
      skills: ['Python', 'Flask', 'SQLAlchemy', 'JavaScript', 'HTML/CSS', 'Authentication'],
      demoUrl: '#',
      sourceUrl: '#',
      dataAiHint: 'writing blog'
    },
     {
      name: 'AI-Powered Chatbot',
      description:
        'An intelligent chatbot for customer support, leveraging natural language processing (NLP) to understand and respond to user queries in real-time. This project is integrated with a Flask backend and can be connected to various messaging platforms to provide instant assistance.',
      images: [
        'https://placehold.co/600x400.png',
      ],
      skills: ['Python', 'Flask', 'NLTK', 'TensorFlow', 'React', 'Web Sockets'],
      demoUrl: '#',
      sourceUrl: '#',
      dataAiHint: 'robot chat'
    },
  ],
  skills: [
    { name: 'Python', proficiency: 95 },
    { name: 'Flask', proficiency: 90 },
    { name: 'SQLAlchemy', proficiency: 85 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React', proficiency: 75 },
    { name: 'Docker', proficiency: 70 },
    { name: 'PostgreSQL', proficiency: 85 },
    { name: 'API Design', proficiency: 90 },
  ],
  contact: {
    email: 'alex.doe@example.com',
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
