export const navItems = ["about", "skills", "experience", "projects", "education", "contact"];

export const skills = {
  Languages: ["JavaScript (ES6+)", "Dart", "SQL", "HTML5", "CSS3", "Kotlin"],
  Frontend: ["React.js", "React Native", "Flutter", "Redux Toolkit", "Redux Saga", "Tailwind CSS", "Material-UI", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST API", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Bitbucket", "CI/CD Pipelines", "QuickBooks API", "Google Maps API"],
  Practices: ["Clean Architecture", "Agile", "RESTful Design", "Database Optimization", "ERP Systems"],
};

export const experience = {
  title: "Full Stack Software Engineer",
  company: "Text Private Ltd",
  location: "Karachi, Pakistan",
  period: "July 2024 – Present",
  bullets: [
    "Developed BusCaro, a cross-platform mobile application (Flutter) for B2B and B2B2C markets with real-time Google Maps tracking and in-app chat.",
    "Optimized PostgreSQL queries and Node.js backend APIs, reducing response times and improving system performance.",
    "Implemented CI/CD pipelines to streamline deployment workflows and reduce release cycle times.",
    "Built and deployed Nets4You, a full-featured ERP system integrating QuickBooks API for automated invoicing.",
    "Integrated password reset flows, mailing services, and role-based access control (RBAC) across full stack.",
    "Designed comprehensive financial reporting dashboards using React, Redux Toolkit, and Redux Saga.",
    "Applied native mobile functionalities using Kotlin following clean architecture principles.",
  ],
};

export const projects = [
  {
    name: "BusCaro Mobile App",
    sub: "Captain & Passenger",
    stack: ["Flutter", "Dart", "Kotlin", "Google Maps API"],
    color: "#00e5c3",
    icon: "📱",
    bullets: [
      "Cross-platform B2B & B2B2C mobile app",
      "Real-time GPS tracking via Google Maps SDK",
      "In-app chat support system",
      "CI/CD pipeline with clean architecture",
    ],
  },
  {
    name: "BusCaro Web Portal",
    sub: "Admin & Client Dashboard",
    stack: ["React", "Redux Toolkit", "Redux Saga", "MUI"],
    color: "#3b82f6",
    icon: "💻",
    bullets: [
      "Financial reporting dashboards",
      "Complex state with Redux Toolkit + Saga",
      "Responsive UI with Material-UI",
      "Record tracking & data visualization",
    ],
  },
  {
    name: "BusCaro Backend API",
    sub: "Node.js + PostgreSQL",
    stack: ["Node.js", "Express.js", "PostgreSQL"],
    color: "#a78bfa",
    icon: "⚙️",
    bullets: [
      "Scalable RESTful APIs with clean separation",
      "Optimized PostgreSQL queries under high traffic",
      "Isolated service layers for reliability",
      "B2B and B2B2C support",
    ],
  },
  {
    name: "Nets4You ERP",
    sub: "Full Stack Management System",
    stack: ["Node.js", "React", "PostgreSQL", "QuickBooks API"],
    color: "#f59e0b",
    icon: "🏢",
    bullets: [
      "Full ERP with Node.js + PostgreSQL backend",
      "React + Redux responsive frontend",
      "QuickBooks API for automated invoicing",
      "Mailing services & password reset flows",
    ],
  },
];

export const education = {
  university: "Muhammad Ali Jinnah University",
  degree: "Bachelor of Science – Computer Science",
  location: "Karachi, Pakistan",
  from: "Sep 2020",
  to: "Jul 2024",
  honors: ["President's Honor List – Fall 2023", "Dean's Honor List – Spring 2024"],
};

export const contact = [
  { label: "Email",    value: "basimafzal65@gmail.com", href: "mailto:basimafzal65@gmail.com" },
  { label: "Phone",    value: "+92-3063987638",         href: "tel:+923063987638" },
  { label: "WhatsApp", value: "+92-3433499229",         href: "https://wa.me/923433499229" },
  { label: "LinkedIn", value: "BASIM AFZAL",            href: "https://linkedin.com/in/basim-afzal-8743701b8" },
  { label: "GitHub",   value: "Basim56",                href: "https://github.com/Basim56" },
];
