export interface CaseStudyData {
  id: string;
  title: string;
  tagline: string;
  isPrimaryFeatured?: boolean;
  status: string;
  role: string;
  period?: string;
  overview: string;
  context: string;
  whatIBuilt: string[];
  architectureDescription: string;
  keyChallenges: string[];
  engineeringDecisions: string[];
  technologies: string[];
  whatILearned: string[];
  outcome: string;
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export const projectsData: CaseStudyData[] = [
  {
    id: "daikcell",
    title: "Daikcell",
    tagline: "Multi-Channel Sales & Inventory Management Platform",
    isPrimaryFeatured: true,
    status: "Delivered Production Platform",
    role: "Full-Stack Software Engineer",
    period: "Jan 2026 – Present",
    overview: "Daikcell is an end-to-end enterprise sales and inventory management system designed to unify product listings, warehouse operations, inventory tracking, purchase workflows, and sales order lifecycles across multiple sales channels.",
    context: "Operating a multi-channel e-commerce business requires real-time synchronization between sales marketplaces, logistics providers, and internal inventory databases. Daikcell replaces fragmented manual processes with a centralized, automated platform.",
    whatIBuilt: [
      "End-to-end enterprise sales management system covering listings, warehouse operations, inventory, and order lifecycles",
      "Real-time order synchronization and inventory tracking integrated with Amazon SP-API, Saleor, and Shiprocket API",
      "Returns, replacements, and refund modules with filter-based analytics dashboards (graphical + tabular)",
      "Multi-warehouse inventory allocation algorithms and purchase workflow processing",
      "Relational data model using MySQL and Prisma ORM for transaction consistency"
    ],
    architectureDescription: "Built with Node.js, Express, and TypeScript on the backend with a React.js frontend. MySQL managed via Prisma ORM ensures transactional data integrity for order handling. The platform integrates with Amazon SP-API, Saleor (headless commerce), and Shiprocket (logistics) via resilient REST and webhook integration pipelines, fully containerized using Docker.",
    keyChallenges: [
      "Synchronizing multi-channel inventory and order states across asynchronous external APIs (Amazon SP-API, Shiprocket, Saleor)",
      "Eliminating fulfillment lag and manual cross-platform data entry through automated Webhook architectures",
      "Building flexible graphical and tabular analytics dashboards for operational visibility without external BI tools",
      "Handling concurrent stock allocation updates across multi-warehouse logistics locations"
    ],
    engineeringDecisions: [
      "Used Prisma ORM over raw queries to enforce strict TypeScript type safety across relational database operations",
      "Architected event-driven Webhook handlers to process real-time shipment status updates from Shiprocket",
      "Containerized backend micro-services and database instances using Docker for environment consistency",
      "Implemented modular integration adapters separating external API contracts from core business logic"
    ],
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
    whatILearned: [
      "Designing multi-channel e-commerce synchronization pipelines",
      "Handling third-party enterprise integrations (Amazon SP-API, Shiprocket, Saleor) in production",
      "Building operational analytics dashboards directly into full-stack applications",
      "Managing complex relational data constraints for e-commerce order fulfillment"
    ],
    outcome: "Successfully launched an end-to-end enterprise platform that eliminated manual cross-platform data entry, reduced fulfillment lag, and provided operations teams with real-time business metrics.",
    highlights: [
      "Integrated Amazon SP-API, Saleor, and Shiprocket APIs",
      "End-to-end sales order lifecycle & multi-warehouse inventory tracking",
      "Filter-based graphical & tabular analytics dashboards for returns & refunds",
      "Containerized backend architecture with Docker, TypeScript & Prisma"
    ]
  },
  {
    id: "pitchlynx",
    title: "PitchLynx",
    tagline: "Voice-Based AI Conversation Practice Platform with Sub-200ms Latency",
    isPrimaryFeatured: false,
    status: "Active AI Platform",
    role: "Creator & Lead Engineer",
    period: "Jan 2026 – Present",
    overview: "PitchLynx is a real-time voice platform designed for AI-driven interview and sales pitch coaching, leveraging bidirectional WebSockets and OpenAI API for live conversation analysis.",
    context: "Voice-based AI coaching requires extremely low network latency for natural conversational interaction. PitchLynx was architected to achieve sub-200ms round-trip latency while delivering real-time feedback and session progress tracking.",
    whatIBuilt: [
      "Low-latency real-time voice platform utilizing bidirectional WebSockets via Socket.IO achieving sub-200ms round-trip latency",
      "OpenAI API integration for real-time conversation analysis and context-aware feedback generation",
      "MySQL relational schema via Prisma ORM for session tracking, analytics, and user progress history",
      "JWT-secured authentication endpoints and AWS deployment with Docker containers and GitHub Actions CI/CD pipelines"
    ],
    architectureDescription: "Built with Next.js and TailwindCSS on the frontend and Node.js/Express with Socket.IO on the backend. WebSockets handle live audio stream payloads with sub-200ms round-trip latency. OpenAI API analyzes conversation context, persisting session history in MySQL via Prisma ORM. Deployed on AWS using Docker containers with automated GitHub Actions CI/CD.",
    keyChallenges: [
      "Achieving sub-200ms round-trip latency across bidirectional Socket.IO WebSocket connections for seamless voice interaction",
      "Managing real-time conversation state and context buffers for OpenAI API analysis",
      "Configuring environment-isolated Docker containers and automated CI/CD deployment on merge to main"
    ],
    engineeringDecisions: [
      "Selected Socket.IO over HTTP polling to enable low-latency bidirectional voice streams",
      "Designed a modular session state manager to buffer live transcripts before sending structured prompts to OpenAI",
      "Automated build, test, and deploy steps via GitHub Actions pipelines to AWS EC2 instances"
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Socket.IO",
      "TailwindCSS",
      "MySQL",
      "Prisma",
      "OpenAI API",
      "AWS",
      "Docker",
      "CI/CD"
    ],
    whatILearned: [
      "Engineering low-latency WebSocket infrastructure for voice applications",
      "Integrating OpenAI API for real-time conversational analysis and feedback",
      "Setting up automated containerized deployment pipelines on AWS with Docker & GitHub Actions"
    ],
    outcome: "Delivered a functional, low-latency AI conversation coaching platform featuring sub-200ms WebSocket streams, real-time OpenAI feedback, and automated cloud deployments.",
    githubUrl: "https://github.com/aliakib",
    highlights: [
      "Bidirectional WebSocket layer (Socket.IO) with sub-200ms round-trip latency",
      "Real-time OpenAI API integration for personalized speech feedback",
      "Deployed on AWS with Docker & automated GitHub Actions CI/CD",
      "Session analytics & progress tracking in MySQL via Prisma ORM"
    ]
  },
  {
    id: "master-o",
    title: "Master-O (InspireOne Technologies)",
    tagline: "B2B SaaS Enterprise Learning Platform powering 500+ enterprise clients & 10,000+ daily active users",
    isPrimaryFeatured: false,
    status: "Professional Work — Award Winner",
    role: "Software Development Engineer II",
    period: "Aug 2023 – Dec 2025",
    overview: "Engineering contributions as SDE II across the Master-O B2B SaaS enterprise microlearning platform, owning the React.js CMS dashboard, Azure OpenAI (GPT-4) pipelines, Redis caching, and RBAC authentication.",
    context: "Master-O serves over 500+ enterprise clients and 10,000+ daily active users. As SDE II, I had full-stack ownership from system design to production deployment, earning the Engineering Masterpiece Award for core platform contributions.",
    whatIBuilt: [
      "Architected & owned full-stack delivery of a React.js CMS dashboard powering microlearning content for 500+ enterprise clients",
      "Azure OpenAI (GPT-4) content automation pipeline using Node.js — automated content processing, accelerating publishing cycles",
      "Redis caching layer across high-frequency REST API endpoints handling 100,000+ daily requests, reducing database query load",
      "JWT-based authentication and RBAC system integrated with client HRMS infrastructure, onboarding 10,000+ users securely",
      "Real-time analytics and MIS reporting dashboard with scheduled email distribution for 500+ enterprise stakeholders",
      "Multilingual content delivery system with dynamic locale switching for international market expansion",
      "Gamified interactive learning modules (Point to Shoot, Rotate to Match, Crazy Cars, Pac-Man style) in React.js for 10,000+ DAUs"
    ],
    architectureDescription: "Built with React.js, TypeScript, and Redux on the frontend, and Node.js, Express, and Redis on the backend. Integrated Azure OpenAI (GPT-4) for automated content generation, Redis for high-throughput API caching (100K+ daily requests), and JWT/RBAC for enterprise security.",
    keyChallenges: [
      "Optimizing REST API endpoints under heavy load (100,000+ daily requests) without adding infrastructure scaling costs",
      "Integrating Azure OpenAI GPT-4 into existing publishing workflows safely and reliably",
      "Eliminating unauthorized access incidents while onboarding 10,000+ users across enterprise HRMS systems"
    ],
    engineeringDecisions: [
      "Implemented a Redis caching layer for critical read paths to absorb peak query volume",
      "Established a reusable React component library, accelerating feature velocity across the engineering team",
      "Designed a JWT/RBAC middleware layer enforcing strict role permissions across enterprise clients"
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redis",
      "Azure OpenAI (GPT-4)",
      "JWT / RBAC",
      "Redux",
      "Socket.IO",
      "TailwindCSS"
    ],
    whatILearned: [
      "Full system design ownership for enterprise B2B SaaS platforms serving 500+ clients",
      "High-throughput API optimization with Redis handling 100K+ daily requests",
      "Integrating LLM pipelines (Azure OpenAI GPT-4) for enterprise content automation",
      "Building enterprise RBAC and HRMS authentication integrations for 10,000+ users"
    ],
    outcome: "Recognized with the Engineering Masterpiece Award for platform contributions that accelerated publishing velocity, reduced API latency under 100K+ daily requests, and supported 500+ enterprise client deployments.",
    githubUrl: "https://github.com/aliakib",
    highlights: [
      "Winner of Engineering Masterpiece Award for core CMS platform architecture",
      "Sole engineer owning React.js CMS dashboard for 500+ enterprise clients",
      "Azure OpenAI (GPT-4) content automation pipeline in Node.js",
      "Redis caching handling 100,000+ daily API requests",
      "JWT & HRMS RBAC onboarding for 10,000+ daily active users"
    ]
  },
  {
    id: "iqra-learning-tree",
    title: "Iqra Learning Tree",
    tagline: "Architected & built a complete institute management platform from scratch as sole full-stack engineer",
    isPrimaryFeatured: false,
    status: "Archived (Software Completed)",
    role: "Solo Full-Stack Developer / Architect",
    overview: "Iqra Learning Tree was a custom institute management platform built from scratch to serve as the technological foundation for a proposed educational institute.",
    context: "Commissioned as a paid project by trainer Mr. Sakir, the goal was to develop a complete full-stack web platform supporting student, teacher, and administrator portals. Although Mr. Sakir later decided not to launch the institute, the software was fully completed.",
    whatIBuilt: [
      "Role-based authenticated portals for administrators, teachers, and students",
      "RESTful API backend for managing user accounts, courses, and schedules",
      "Role-Based Access Control (RBAC) security middleware and JWT authentication",
      "File management system integrating binary file storage and Google Drive API for public/private asset delivery",
      "Database schema and data relationships modeling in MongoDB with Mongoose"
    ],
    architectureDescription: "Architected with a React/Next.js frontend communicating with a Node.js/Express REST API. Secured with JWT authentication and RBAC middleware. Persistence handled via MongoDB and Mongoose, with file assets stored via Google Drive API.",
    keyChallenges: [
      "Designing a flexible database schema capable of handling multi-tier user roles and permissions",
      "Implementing secure file upload mechanisms and cloud storage integration for educational resources",
      "Building a custom frontend state management flow using Redux to manage complex user sessions"
    ],
    engineeringDecisions: [
      "Selected MongoDB for rapid iteration on evolving educational data structures",
      "Implemented strict JWT middleware for route-level access control",
      "Used Google Drive API for scalable cloud storage of institute media files"
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
    whatILearned: [
      "How software systems operate end-to-end beyond UI component creation",
      "Core principles of backend system architecture, API design, and security",
      "Database data modeling and relationships for real business domain entities"
    ],
    outcome: "This project changed my perspective on software development from creating frontend screens to architecting complete, multi-layered software systems.",
    githubUrl: "https://github.com/aliakib",
    highlights: [
      "First major paid full-stack project architected as sole engineer",
      "Complete RBAC authentication & role-based portal views",
      "MongoDB relational modeling & REST API development",
      "Google Drive API storage integration for public/private assets"
    ]
  }
];
