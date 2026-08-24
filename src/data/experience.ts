export interface ExperienceItem {
  company: string;
  role: string;
  location?: string;
  period?: string;
  statusBadge: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "InspireOne Technologies (Master-O)",
    role: "Software Development Engineer II",
    location: "Gurgaon, India",
    period: "Aug 2023 – Dec 2025",
    statusBadge: "Engineering Masterpiece Award Winner",
    summary: "B2B SaaS Enterprise Learning Platform powering 500+ enterprise clients & 10,000+ daily active users. Owned full-stack delivery of the React.js CMS dashboard from system design to production deployment.",
    highlights: [
      "Architected and owned full-stack delivery of a React.js CMS dashboard powering the Master-O microlearning platform for 500+ enterprise clients; recognized with the Engineering Masterpiece Award",
      "Developed an Azure OpenAI (GPT-4)-powered content automation pipeline using Node.js — automated manual content workflows, accelerating enterprise publishing cycles",
      "Implemented a Redis caching layer across high-frequency REST API endpoints handling 100,000+ daily requests — reduced database query load on critical read paths",
      "Delivered a real-time analytics and MIS reporting dashboard with scheduled email distribution for 500+ enterprise stakeholders, eliminating manual reporting turnaround",
      "Designed and implemented a JWT-based authentication and RBAC system integrated with client HRMS infrastructure — streamlined onboarding for 10,000+ users with zero unauthorized access incidents",
      "Delivered a multilingual content delivery system with dynamic locale switching for international enterprise market expansion",
      "Developed gamified interactive learning modules in React.js for 10,000+ DAUs; established a reusable component library accelerating frontend delivery velocity across the team"
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js",
      "Redis",
      "Azure OpenAI (GPT-4)",
      "JWT / RBAC",
      "Redux",
      "Material UI",
      "TailwindCSS"
    ]
  },
  {
    company: "Daikcell",
    role: "Full-Stack Software Engineer",
    location: "Production Platform",
    period: "Jan 2026 – Present",
    statusBadge: "Multi-Channel Sales Platform",
    summary: "Designed and launched an end-to-end enterprise multi-channel sales and inventory management platform covering listings, warehouse operations, inventory tracking, purchase workflows, and sales order lifecycles.",
    highlights: [
      "Designed and launched an end-to-end enterprise sales management system replacing fragmented manual processes with a single unified platform",
      "Integrated Amazon SP-API, Saleor, and Shiprocket API to automate real-time order synchronization, inventory updates, and shipment tracking across sales channels",
      "Delivered returns, replacements, and refund modules with filter-based graphical and tabular analytics dashboards",
      "Architected backend services using Node.js, TypeScript, Express, MySQL, and Prisma ORM, containerized with Docker"
    ],
    technologies: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Express.js",
      "MySQL",
      "Prisma ORM",
      "Amazon SP-API",
      "Saleor",
      "Shiprocket API",
      "Docker"
    ]
  },
  {
    company: "PitchLynx",
    role: "Creator & Lead AI Engineer",
    location: "Real-Time AI Platform",
    period: "Jan 2026 – Present",
    statusBadge: "Real-Time AI & WebSockets",
    summary: "Architected a low-latency real-time voice platform for AI-driven interview and sales pitch coaching with sub-200ms round-trip latency.",
    highlights: [
      "Architected a low-latency real-time voice platform using a bidirectional WebSocket layer via Socket.IO achieving sub-200ms round-trip latency",
      "Integrated OpenAI API for real-time conversation analysis and context-aware personalized feedback generation",
      "Designed MySQL schema via Prisma ORM for session tracking, analytics, and user progress history",
      "Deployed on AWS with Docker and GitHub Actions CI/CD pipelines — JWT-secured endpoints, environment-isolated containers, and automated deployments"
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Socket.IO",
      "TailwindCSS",
      "MySQL",
      "Prisma ORM",
      "OpenAI API",
      "AWS",
      "Docker",
      "CI/CD"
    ]
  }
];
