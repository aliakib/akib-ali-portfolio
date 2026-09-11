export interface JourneyStage {
  id: string;
  stageNumber: number;
  title: string;
  subtitle: string;
  role: string;
  period?: string;
  statusBadge: string;
  context: string;
  keyLearnings: string[];
  narrative: string;
  technologies: string[];
  caseStudyId?: string;
}

export const journeyStages: JourneyStage[] = [
  {
    id: "iqra-learning-tree",
    stageNumber: 1,
    title: "Iqra Learning Tree",
    subtitle: "My first major paid full-stack project",
    role: "Solo Full-Stack Developer / Architect",
    statusBadge: "Archived (Software Completed)",
    context: "Commissioned as a paid project by my trainer, to build the complete technical foundation for a proposed educational institute. I architected and developed the application from scratch as the sole developer. Although Mr. Sakir later decided not to pursue the institute, the software application was fully architected, developed and completed.",
    keyLearnings: [
      "Frontend role-based view rendering & navigation",
      "Backend system architecture & REST API design",
      "Authentication, authorization & Role-Based Access Control (RBAC)",
      "Database management & relational data modeling",
      "File system handling, binary storage & Google Drive integration",
      "End-to-end frontend/backend integration & state handling"
    ],
    narrative: "This was the project that changed how I thought about software development. I started understanding that building software was not just about creating screens — it involved authentication, authorization, APIs, databases, storage, business logic and the relationships between all of them.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Redux",
      "Google Drive API"
    ],
    caseStudyId: "iqra-learning-tree"
  },
  {
    id: "master-o",
    stageNumber: 2,
    title: "Master-O (InspireOne Technologies)",
    subtitle: "From frontend development to enterprise SaaS engineering",
    role: "Software Development Engineer II",
    period: "Aug 2023 – Dec 2025",
    statusBadge: "500+ Enterprise Clients",
    context: "Served as SDE II for Master-O, a B2B SaaS enterprise microlearning platform. Owned full-stack delivery of the React.js CMS dashboard, engineered Azure OpenAI (GPT-4) content pipelines, implemented high-throughput Redis caching (100K+ daily API requests) and built JWT/RBAC auth systems for 10,000+ daily active users. Recognized with the Engineering Masterpiece Award.",
    keyLearnings: [
      "Sole ownership of React.js CMS dashboard from system design to production deployment",
      "Azure OpenAI (GPT-4) LLM automation pipelines for content generation",
      "High-throughput Redis caching reducing query load on 100K+ daily API requests",
      "JWT & RBAC enterprise authentication integrated with client HRMS",
      "Gamified interactive learning modules (Point to Shoot, Rotate to Match, Crazy Cars, Pac-Man style)",
      "Real-time analytics & MIS reporting for 500+ enterprise clients"
    ],
    narrative: "At Master-O, my role expanded from building interfaces to working across the full feature lifecycle — from interactive frontend experiences to high-throughput backend APIs, AI automation and Redis performance optimizations.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redis",
      "Azure OpenAI (GPT-4)",
      "JWT / RBAC",
      "Redux",
      "TailwindCSS"
    ],
    caseStudyId: "master-o"
  },
  {
    id: "pitchlynx",
    stageNumber: 3,
    title: "PitchLynx",
    subtitle: "Voice-Based AI Conversation Practice Platform",
    role: "Creator & Lead Engineer",
    period: "Jan 2026 – Present",
    statusBadge: "Active AI Platform",
    context: "Architected a low-latency real-time voice platform for AI-driven interview and sales pitch coaching. Engineered a bidirectional WebSocket layer via Socket.IO achieving sub-200ms round-trip latency, integrated OpenAI API for real-time analysis and deployed on AWS using Docker containers and automated CI/CD pipelines.",
    keyLearnings: [
      "Bidirectional WebSocket architecture using Socket.IO achieving sub-200ms latency",
      "OpenAI API integration for real-time conversation analysis and feedback",
      "MySQL schema design and Prisma ORM data layer for session analytics",
      "AWS deployment with Docker containers and GitHub Actions CI/CD pipelines"
    ],
    narrative: "PitchLynx demonstrated my ability to independently conceptualize, architect and deploy production-grade real-time AI products with sub-200ms latency.",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Socket.IO",
      "OpenAI API",
      "MySQL",
      "Prisma",
      "AWS",
      "Docker",
      "CI/CD"
    ],
    caseStudyId: "pitchlynx"
  },
  {
    id: "daikcell",
    stageNumber: 4,
    title: "Daikcell",
    subtitle: "Multi-Channel Sales & Inventory Management Platform",
    role: "Full-Stack Software Engineer",
    period: "Jan 2026 – Present",
    statusBadge: "Delivered Production System",
    context: "Designed and launched an end-to-end enterprise multi-channel sales management platform covering product listings, warehouse operations, inventory tracking, purchase workflows and sales order lifecycles. Integrated Amazon SP-API, Saleor and Shiprocket for real-time multi-platform synchronization.",
    keyLearnings: [
      "Production multi-channel platform architecture with Node.js, Express & TypeScript",
      "Amazon SP-API, Saleor and Shiprocket API integrations for real-time order/inventory sync",
      "Relational database schema design and Prisma ORM modeling with MySQL",
      "Analytics dashboards (graphical + tabular) for returns, replacements and refunds",
      "Containerized deployment using Docker for production consistency"
    ],
    narrative: "Daikcell represents a major shift from building individual applications and features toward working with production business systems, multi-channel API integrations and real-time data synchronization.",
    technologies: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Express.js",
      "MySQL",
      "Prisma",
      "Amazon SP-API",
      "Saleor",
      "Shiprocket API",
      "Docker"
    ],
    caseStudyId: "daikcell"
  }
];
