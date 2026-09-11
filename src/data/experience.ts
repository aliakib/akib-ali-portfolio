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
    summary: "Designed and implemented backend services, business workflows, database models, API integrations and production application features for a multi-channel commerce platform.",
    highlights: [
      "Designed and implemented backend services, inventory tracking, order processing and returns handling for a multi-channel commerce system.",
      "Connected Amazon SP-API, Saleor and Shiprocket APIs to update orders, inventory levels and shipping statuses automatically.",
      "Built graphical and tabular analytics dashboards to give operations teams clear views into key business metrics.",
      "Architected backend services using Node.js, Express, TypeScript, MySQL and Prisma ORM, containerized with Docker."
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
    summary: "Architected and developed the platform's real-time communication layer, AI integration, session management, backend APIs, data layer and deployment infrastructure.",
    highlights: [
      "Built a real-time voice practice platform using Socket.IO WebSockets achieving sub-200ms round-trip latency.",
      "Connected OpenAI API to evaluate live conversation transcripts and generate real-time feedback.",
      "Designed MySQL database schemas using Prisma ORM to track user practice history and session analytics.",
      "Deployed containerized services on AWS using GitHub Actions CI/CD pipelines."
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
