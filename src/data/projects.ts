export interface CaseStudyData {
  id: string;
  title: string;
  categoryTag: string;
  tagline: string;
  isPrimaryFeatured?: boolean;
  status: string;
  role: string;
  period?: string;
  overview: string;
  problem: string;
  solution: string;
  myContribution: string;
  engineering: string;
  impact?: string;
  keyEngineeringWork: string[];
  keyChallenges: string[];
  engineeringDecisions: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export const projectsData: CaseStudyData[] = [
  {
    id: "daikcell",
    title: "Daikcell",
    categoryTag: "Multi-Channel Commerce & Inventory Platform",
    tagline: "An enterprise sales and inventory management platform designed to unify product listings, warehouse operations, inventory tracking, purchasing, returns, refunds and sales-order workflows across multiple sales channels.",
    isPrimaryFeatured: true,
    status: "Delivered Production System",
    role: "Full-Stack Software Engineer",
    period: "Jan 2026 – Present",
    overview: "Daikcell is a business platform built to manage sales orders, inventory, purchase orders, warehouse operations and returns across multiple sales channels in one place.",
    problem: "Managing sales across multiple marketplaces meant manual inventory adjustments and separate admin tools, which caused order processing lags and stock discrepancies between platforms.",
    solution: "Built a centralized system that connects marketplace APIs and shipping webhooks to track inventory levels, order statuses and return processing automatically.",
    myContribution: "Designed and implemented backend services, business workflows, database models, API integrations and production application features across the platform.",
    engineering: "Built using Node.js, Express and TypeScript on the backend with a React frontend. Database operations are handled by MySQL and Prisma ORM. Amazon SP-API, Saleor (headless commerce) and Shiprocket (shipping) integrations handle external data updates via REST endpoints and webhooks.",
    impact: "Centralized multi-channel operations into one system, removing manual cross-platform data entry and giving operations teams clear visibility over inventory and orders.",
    keyEngineeringWork: [
      "Amazon SP-API integration for product listings and sales order data",
      "Saleor headless commerce store integration",
      "Shiprocket API integration for shipping tracking and webhook updates",
      "Multi-warehouse inventory allocation and tracking workflows",
      "Sales-order lifecycle processing and order fulfillment logic",
      "Purchase order creation and supplier workflows",
      "Returns, replacements and refund tracking modules",
      "Analytics dashboards with graphical and tabular views",
      "Node.js and TypeScript REST API backend architecture",
      "MySQL database design and Prisma ORM schemas",
      "Docker setup for local development and production environments"
    ],
    keyChallenges: [
      "Keeping stock numbers consistent across external sales APIs (Amazon SP-API, Shiprocket, Saleor) when orders come in simultaneously",
      "Handling database transactions reliably during multi-warehouse stock allocations",
      "Processing incoming third-party webhooks cleanly when external services experience rate limits"
    ],
    engineeringDecisions: [
      "Used Prisma ORM with TypeScript to catch data model mismatches early during backend development",
      "Built event-driven webhook handlers to update shipping statuses automatically when Shiprocket sends tracking events",
      "Used Docker to keep local developer setups aligned with production environments"
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
    ],
    highlights: [
      "Amazon SP-API, Saleor and Shiprocket API integrations",
      "Multi-warehouse inventory tracking and sales-order workflows",
      "Node.js backend with MySQL, Prisma ORM and TypeScript",
      "Graphical and tabular analytics views for returns and replacements"
    ]
  },
  {
    id: "pitchlynx",
    title: "PitchLynx",
    categoryTag: "AI-Powered Real-Time Conversation Platform",
    tagline: "A voice-based platform designed for interview and sales-pitch practice through AI-driven conversation and feedback.",
    isPrimaryFeatured: false,
    status: "Active AI Platform",
    role: "Creator & Lead Engineer",
    period: "Jan 2026 – Present",
    overview: "PitchLynx is a voice-based practice platform where users can have real-time conversation sessions with an AI interviewer.",
    problem: "Practicing interviews or sales pitches requires real-time conversational timing. Standard HTTP requests introduce too much latency for natural voice exchanges.",
    solution: "Built a real-time communication layer using bidirectional Socket.IO WebSockets to achieve sub-200ms round-trip latency, integrated with OpenAI API for live conversation evaluation.",
    myContribution: "Architected and developed the platform's real-time communication layer, AI integration, session management, backend APIs, data layer and deployment infrastructure.",
    engineering: "Built with Next.js and Tailwind CSS on the frontend, connected to a Node.js and Express backend via Socket.IO. OpenAI API processes transcript context during sessions, storing user history in MySQL with Prisma ORM. Containerized with Docker and deployed on AWS using GitHub Actions CI/CD.",
    impact: "Delivered a working real-time voice practice tool capable of processing audio streams with sub-200ms round-trip latency while generating actionable feedback.",
    keyEngineeringWork: [
      "Socket.IO and WebSocket real-time communication layer",
      "OpenAI API integration for live audio transcript evaluation and feedback",
      "Real-time conversation processing and session state handling",
      "Session analytics and user progress history tracking",
      "MySQL database design and Prisma ORM data schemas",
      "JWT-secured REST API endpoints",
      "Docker container setup",
      "AWS cloud deployment",
      "GitHub Actions automated CI/CD pipeline"
    ],
    keyChallenges: [
      "Maintaining sub-200ms round-trip latency over WebSockets during live audio streaming",
      "Structuring context buffers so OpenAI API receives clear session transcripts for evaluation",
      "Setting up automated Docker builds on merge to main using GitHub Actions"
    ],
    engineeringDecisions: [
      "Chose Socket.IO WebSockets over HTTP polling to keep speech response latency low",
      "Built session state managers to buffer live transcripts before sending structured prompts to OpenAI",
      "Used GitHub Actions pipelines to deploy containerized code directly to AWS EC2 instances"
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
    ],
    githubUrl: "https://github.com/aliakib",
    highlights: [
      "Socket.IO real-time voice streaming with sub-200ms round-trip latency",
      "OpenAI API integration for real-time transcript analysis and feedback",
      "MySQL relational schemas via Prisma ORM for session progress tracking",
      "Containerized deployment on AWS with GitHub Actions CI/CD"
    ]
  },
  {
    id: "master-o",
    title: "Master-O",
    categoryTag: "Enterprise SaaS Platform",
    tagline: "Enterprise SaaS platform used by organizations to manage and optimize field operations, microlearning workflows and business processes.",
    isPrimaryFeatured: false,
    status: "Professional Experience — Award Winner",
    role: "Software Development Engineer II",
    period: "Aug 2023 – Dec 2025",
    overview: "Master-O is a B2B SaaS learning platform serving 500+ enterprise clients and 10,000+ daily active users.",
    problem: "Enterprise client teams needed intuitive admin dashboards to create, manage and analyze microlearning content across large teams without slowing down API performance.",
    solution: "Worked across frontend and backend systems to build the admin CMS dashboard, an Azure OpenAI content pipeline, a Redis cache for high-frequency API endpoints and HRMS authentication flows.",
    myContribution: "Contributed to production features, backend services, APIs, authentication, data workflows, real-time functionality and performance-sensitive application components for a platform serving 500+ enterprise clients and 10,000+ daily active users.",
    engineering: "Built with React, TypeScript and Redux on the frontend and Node.js, Express and Redis on the backend. Used Azure OpenAI (GPT-4) for automated content generation and JWT/RBAC for enterprise client onboarding.",
    impact: "Received the Engineering Masterpiece Award for platform contributions. The platform handled 100K+ daily API requests with improved cache response consistency across 500+ enterprise clients.",
    keyEngineeringWork: [
      "Owned full-stack delivery of the React.js CMS dashboard from system design through production deployment",
      "Built an Azure OpenAI-powered content automation pipeline using Node.js",
      "Implemented Redis caching across high-frequency REST endpoints handling 100K+ daily requests",
      "Designed JWT/RBAC authentication integrated with client HRMS infrastructure",
      "Built real-time analytics and MIS reporting with scheduled email distribution",
      "Developed multilingual content delivery capabilities",
      "Built gamified React learning modules used by the platform's user base",
      "Received the Engineering Masterpiece Award"
    ],
    keyChallenges: [
      "Keeping API response times consistent when traffic reaches 100,000+ daily requests without adding extra server costs",
      "Connecting Azure OpenAI GPT-4 into existing publishing workflows reliably",
      "Configuring multi-tenant RBAC permissions cleanly during corporate HRMS integrations"
    ],
    engineeringDecisions: [
      "Used Redis caching on frequent read paths to reduce database load during peak usage",
      "Created a shared React component library to speed up frontend feature development across the team",
      "Built JWT and RBAC middleware layers to keep client data separated securely"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Redis",
      "Azure OpenAI",
      "JWT",
      "RBAC",
      "Redux",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/aliakib",
    highlights: [
      "Received Engineering Masterpiece Award for CMS platform architecture",
      "Full-stack ownership of React.js CMS dashboard for 500+ enterprise clients",
      "Azure OpenAI (GPT-4) content automation pipeline in Node.js",
      "Redis caching layer for endpoints handling 100K+ daily API requests"
    ]
  },
  {
    id: "iqra-learning-tree",
    title: "Iqra Learning Tree",
    categoryTag: "Institute Management Platform",
    tagline: "A full-stack platform designed to manage students, teachers, courses, attendance, administrative workflows and role-specific operations.",
    isPrimaryFeatured: false,
    status: "Archived (Paid Project Completed)",
    role: "Solo Full-Stack Developer / Architect",
    overview: "Iqra Learning Tree is a full-stack institute management platform I built independently from the ground up as a paid project.",
    problem: "Managing an educational institute requires distinct views for students, teachers and admins to handle course materials, attendance and student profiles securely.",
    solution: "Architected and built a complete full-stack web application from scratch with role-based permissions, REST APIs, MongoDB data models and Google Drive file storage.",
    myContribution: "Architected and developed the application independently from the ground up as the sole full-stack developer.",
    engineering: "Built with a React/Next.js frontend communicating with a Node.js and Express REST API backend. Data is stored in MongoDB via Mongoose, with educational files hosted through Google Drive API integration.",
    impact: "Completed and delivered the entire paid web application as a solo full-stack software engineer.",
    keyEngineeringWork: [
      "Role-based authentication system",
      "Role-Based Access Control (RBAC) security middleware",
      "RESTful API backend for CRUD operations",
      "React and Next.js frontend admin and user portal UI",
      "Node.js and Express backend service architecture",
      "MongoDB database design and Mongoose schemas",
      "Redux state management for user login sessions",
      "Google Drive API integration for cloud file delivery",
      "Binary file handling and upload pipelines"
    ],
    keyChallenges: [
      "Designing a MongoDB document schema to support multiple user roles and permissions cleanly",
      "Setting up Google Drive API file upload pipelines with proper access permissions",
      "Designing structured REST API endpoints for administrative CRUD workflows"
    ],
    engineeringDecisions: [
      "Used MongoDB to iterate quickly on evolving educational data structures",
      "Implemented strict JWT middleware for route-level access control",
      "Integrated Google Drive API to store media files reliably without clogging database storage"
    ],
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
    githubUrl: "https://github.com/aliakib",
    highlights: [
      "Sole full-stack engineer building the paid platform from scratch",
      "RBAC authentication and role-based portal views",
      "MongoDB document schemas and REST API development",
      "Google Drive API integration for cloud file storage"
    ]
  }
];
