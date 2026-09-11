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
    summary: "Worked on Master-O, a B2B SaaS enterprise learning platform serving 500+ enterprise clients and 10,000+ daily active users.",
    highlights: [
      "Owned full-stack delivery of the React.js CMS dashboard from system design through production deployment.",
      "Built an Azure OpenAI-powered content automation pipeline using Node.js.",
      "Implemented Redis caching across high-frequency REST endpoints handling 100K+ daily requests.",
      "Designed JWT/RBAC authentication integrated with client HRMS infrastructure.",
      "Built real-time analytics and MIS reporting with scheduled email distribution.",
      "Developed multilingual content delivery capabilities.",
      "Built gamified React learning modules used by the platform's user base.",
      "Received the Engineering Masterpiece Award."
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "Redis",
      "Azure OpenAI",
      "JWT",
      "RBAC",
      "Redux",
      "Tailwind CSS"
    ]
  },
  {
    company: "Daikcell",
    role: "Full-Stack Software Engineer",
    location: "Production Platform",
    period: "Jan 2026 – Present",
    statusBadge: "Multi-Channel Commerce Platform",
    summary: "Designed and implemented backend services, business workflows, database models, API integrations, and production application features for a multi-channel commerce platform.",
    highlights: [
      "Designed and implemented backend services, inventory workflows, order lifecycles, and returns modules for a multi-channel commerce platform.",
      "Integrated Amazon SP-API, Saleor, and Shiprocket APIs to automate order synchronization, inventory tracking, and shipment updates.",
      "Delivered filter-based graphical and tabular analytics dashboards providing operational visibility into business metrics.",
      "Architected backend microservices with Node.js, Express, TypeScript, MySQL, and Prisma ORM, containerized with Docker."
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Express",
      "MySQL",
      "Prisma",
      "Amazon SP-API",
      "Saleor",
      "Shiprocket",
      "Docker"
    ]
  },
  {
    company: "PitchLynx",
    role: "Creator & Lead Engineer",
    location: "Real-Time AI Platform",
    period: "Jan 2026 – Present",
    statusBadge: "Real-Time AI & WebSockets",
    summary: "Architected and developed the platform's real-time communication layer, AI integration, session management, backend APIs, data layer, and deployment infrastructure.",
    highlights: [
      "Architected a low-latency real-time voice platform using a bidirectional WebSocket layer via Socket.IO achieving sub-200ms round-trip latency.",
      "Integrated OpenAI API for real-time conversation analysis and context-aware personalized feedback generation.",
      "Designed MySQL relational schemas via Prisma ORM for session tracking, user progress history, and analytics.",
      "Deployed containerized services on AWS with automated GitHub Actions CI/CD pipelines and JWT security."
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Express",
      "Socket.IO",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
      "OpenAI API",
      "AWS",
      "Docker"
    ]
  }
];
