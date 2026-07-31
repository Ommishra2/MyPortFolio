import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const portfolioData = {
  name: 'Om Prakash Mishra',
  title: 'Backend Engineer | MLOps | Data Science',
  about:
    "Motivated Data Scientist and Backend Engineer pursuing an MSc in Information Technology at BBAU. Experienced in building and deploying ML/AI models for anomaly detection, advanced classification, and NLP pipelines using Python, Scikit-learn, TensorFlow, and PyTorch. Hands-on expertise in MLOps, cloud-native systems architecture, and production-ready AI application deployment on Google Cloud Platform (GCP) and Vertex AI.",
  projects: [
    {
      name: 'MealEase',
      description:
        'A full-stack web application with recipe search, meal planning calendar, and nutritional analytics. Integrated REST APIs and client-side data-fetching patterns.',
      images: [
        '/images/mealease-1.png',
        '/images/mealease-2.png',
        '/images/mealease-3.png',
        '/images/mealease-4.png',
      ],
      skills: ['React', 'Node.js', 'Express', 'TypeScript'],
      demoUrl: 'https://meal-ease.vercel.app/',
      sourceUrl: 'https://github.com/Ommishra2/MealEase',
      dataAiHint: 'analytics dashboard'
    },
    {
      name: 'CortexOps',
      description:
        'Vendor-neutral Operational Decision Support Platform. Transforms operational evidence into structured, AI-generated Situation Reports that reduce Time to Understanding (TTU) during production incidents.',
      images: [],
      skills: ['Go', 'React', 'Python', 'PostgreSQL', 'Docker', 'OpenTelemetry', 'gRPC'],
      demoUrl: '',
      sourceUrl: 'https://github.com/Ommishra2/CortexOps',
      dataAiHint: 'operational decision support platform'
    },
    {
      name: 'RAG Application - MongoDB Atlas',
      description:
        'Architected an end-to-end Retrieval-Augmented Generation pipeline using MongoDB Atlas Vector Search, achieving ~60% improvement in semantic query relevance.',
      images: [],
      skills: ['Python', 'MongoDB Atlas', 'Transformer Models', 'NLP', 'GCP Vertex AI'],
      demoUrl: '',
      sourceUrl: '',
      dataAiHint: 'AI integration'
    },
    {
      name: 'CareerCompass',
      description:
        'A tool to navigate and guide career paths.',
      images: [],
      skills: ['TypeScript', 'React'],
      demoUrl: '',
      sourceUrl: 'https://github.com/Ommishra2/CareerCompass',
      dataAiHint: 'career guidance'
    }
  ],
  skills: [
    { name: 'Python & FastAPI', proficiency: 95 },
    { name: 'Node.js & TypeScript', proficiency: 85 },
    { name: 'React & Tailwind CSS', proficiency: 90 },
    { name: 'Machine Learning (PyTorch, Scikit-learn)', proficiency: 88 },
    { name: 'MLOps (GCP, Vertex AI, Docker)', proficiency: 85 },
    { name: 'Databases (PostgreSQL, MongoDB Atlas)', proficiency: 90 },
    { name: 'Cloud & DevOps (Kubernetes, CI/CD)', proficiency: 80 },
    { name: 'NLP & RAG', proficiency: 85 },
  ],
  contact: {
    email: 'ommishra458@gmail.com',
  },
  education: [
    {
      degree: 'MSc Information Technology',
      institution: 'Babasaheb Bhimrao Ambedkar University (BBAU)',
      period: '2025 – 2027',
    },
    {
      degree: 'BSc Computer Science',
      institution: 'Gangadhar Meher University (GMU)',
      period: '2021 – 2024',
    },
  ],
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