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
    tagline: "An enterprise sales and inventory management platform designed to unify product listings, warehouse operations, inventory tracking, purchasing, returns, refunds, and sales-order workflows across multiple sales channels.",
    isPrimaryFeatured: true,
    status: "Delivered Production System",
    role: "Full-Stack Software Engineer",
    period: "Jan 2026 – Present",
    overview: "An enterprise sales and inventory management platform designed to unify product listings, warehouse operations, inventory tracking, purchasing, returns, refunds, and sales-order workflows across multiple sales channels.",
    problem: "Operating across multiple sales channels required manual stock adjustments and separate platform workflows. This led to order fulfillment lags, inventory inconsistencies across marketplaces, and fragmented warehouse reporting.",
    solution: "Designed and implemented a centralized multi-channel business platform integrating external commerce APIs and logistics webhooks into unified inventory and order lifecycles.",
    myContribution: "Designed and implemented backend services, business workflows, database models, API integrations, and production application features across the platform.",
    engineering: "Built with Node.js, Express, and TypeScript on the backend with a React frontend. MySQL managed via Prisma ORM ensures relational data integrity for purchase and order transactions. Integrates Amazon SP-API, Saleor (headless commerce), and Shiprocket (logistics) via event-driven webhook handlers and REST endpoints.",
    impact: "Centralized multi-channel commerce operations into a single system, automating cross-platform order synchronization and providing visibility via graphical and tabular analytics.",
    keyEngineeringWork: [
      "Amazon SP-API integration for seller account & order data",
      "Saleor headless commerce store integration",
      "Shiprocket API integration for shipping status & webhook tracking",
      "Multi-warehouse inventory allocation & tracking workflows",
      "Sales-order lifecycle management and order processing",
      "Purchase order creation and supplier workflows",
      "Returns, replacements, and refund modules",
      "Filter-based analytics dashboards (graphical + tabular)",
      "Node.js / TypeScript RESTful backend architecture",
      "MySQL database design & Prisma ORM modeling",
      "Docker containerized local & production environments"
    ],
    keyChallenges: [
      "Synchronizing inventory and order states across asynchronous external APIs (Amazon SP-API, Shiprocket, Saleor)",
      "Maintaining database transactional consistency during concurrent multi-warehouse inventory updates",
      "Handling asynchronous third-party webhook payloads and rate-limited API endpoints"
    ],
    engineeringDecisions: [
      "Leveraged Prisma ORM over raw SQL queries to enforce strict TypeScript type safety across database operations",
      "Architected event-driven Webhook handlers to process real-time shipment status updates from Shiprocket",
      "Containerized microservices and database instances using Docker for consistent development and deployment"
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
      "Integrated Amazon SP-API, Saleor, and Shiprocket APIs",
      "Centralized multi-warehouse inventory tracking & sales-order workflows",
      "Relational backend architecture with MySQL, Prisma, and TypeScript",
      "Graphical & tabular analytics dashboards for returns and replacements"
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
    overview: "A voice-based platform designed for interview and sales-pitch practice through AI-driven conversation and feedback.",
    problem: "Traditional communication practice lacks real-time interactive evaluation. Building voice-based AI interaction requires ultra-low latency WebSocket streaming to enable natural speech exchanges.",
    solution: "Architected a low-latency real-time voice coaching application utilizing bidirectional Socket.IO WebSockets achieving sub-200ms round-trip latency combined with OpenAI API for live conversation analysis.",
    myContribution: "Architected and developed the platform's real-time communication layer, AI integration, session management, backend APIs, data layer, and deployment infrastructure.",
    engineering: "Constructed with Next.js and Tailwind CSS on the frontend, communicating with a Node.js/Express backend via Socket.IO. OpenAI API analyzes live audio session context, storing progress history in MySQL via Prisma ORM. Containerized with Docker and deployed on AWS via automated GitHub Actions CI/CD.",
    impact: "Delivered a low-latency real-time voice practice platform capable of processing speech streams with sub-200ms round-trip latency while generating context-aware AI evaluations.",
    keyEngineeringWork: [
      "Socket.IO / WebSocket bidirectional real-time communication",
      "OpenAI API integration for live transcript & feedback generation",
      "Real-time conversation processing & session context management",
      "Session analytics and progress history tracking",
      "MySQL database design + Prisma ORM data layer",
      "JWT-secured REST API endpoints",
      "Docker containerized environments",
      "AWS deployment infrastructure",
      "GitHub Actions automated CI/CD pipeline"
    ],
    keyChallenges: [
      "Maintaining sub-200ms round-trip latency over WebSocket connections during live voice streaming",
      "Structuring context buffers to feed OpenAI API for real-time conversation evaluations",
      "Automating environment-isolated Docker builds on merge to main via GitHub Actions"
    ],
    engineeringDecisions: [
      "Selected Socket.IO over HTTP polling to enable low-latency bidirectional voice streams",
      "Implemented modular session state managers to buffer live transcripts before sending structured prompts to OpenAI",
      "Automated CI/CD pipelines to deploy containerized services on AWS EC2 instances"
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
      "Socket.IO / WebSocket communication with sub-200ms round-trip latency",
      "Real-time OpenAI API integration for personalized speech & interview feedback",
      "MySQL relational schema via Prisma ORM for session progress analytics",
      "Containerized deployment on AWS with GitHub Actions CI/CD"
    ]
  },
  {
    id: "master-o",
    title: "Master-O",
    categoryTag: "Enterprise SaaS Platform",
    tagline: "Enterprise SaaS platform used by organizations to manage and optimize field operations, microlearning workflows, and business processes.",
    isPrimaryFeatured: false,
    status: "Professional Experience — Award Winner",
    role: "Software Development Engineer II",
    period: "Aug 2023 – Dec 2025",
    overview: "Enterprise SaaS platform used by organizations to manage and optimize field operations, microlearning workflows, and business processes.",
    problem: "Enterprise client administrators needed streamlined tools to author, publish, and analyze microlearning content across large workforces without causing API degradation under heavy query loads.",
    solution: "Engineered core platform features including a React.js CMS dashboard, Azure OpenAI (GPT-4) content automation pipelines, a high-throughput Redis caching layer, and JWT/RBAC security integrations.",
    myContribution: "Contributed to production features, backend services, APIs, authentication and authorization, data workflows, real-time functionality, and performance-sensitive application components for a platform serving 500+ enterprise clients and 10,000+ daily active users.",
    engineering: "Built with React.js, TypeScript, and Redux on the frontend, and Node.js, Express, and Redis on the backend. Integrated Azure OpenAI (GPT-4) for automated content generation and JWT/RBAC for enterprise client onboarding.",
    impact: "Recognized with the Engineering Masterpiece Award. The platform handled 100K+ daily API requests with improved cache response consistency across 500+ enterprise clients.",
    keyEngineeringWork: [
      "Owned full-stack delivery of the React.js CMS dashboard from system design through production deployment",
      "Built an Azure OpenAI-powered content automation pipeline using Node.js",
      "Implemented Redis caching across high-frequency REST endpoints handling 100K+ daily requests",
      "Designed JWT/RBAC authentication integrated with client HRMS infrastructure",
      "Built real-time analytics and MIS reporting with scheduled email distribution",
      "Developed multilingual content delivery capabilities with dynamic locale switching",
      "Built gamified React learning modules (Point to Shoot, Rotate to Match, Crazy Cars, Pac-Man style)",
      "Received the Engineering Masterpiece Award for platform infrastructure contributions"
    ],
    keyChallenges: [
      "Optimizing REST API response consistency under platform scale (100,000+ daily API requests) without extra infrastructure costs",
      "Integrating Azure OpenAI GPT-4 into existing enterprise publishing pipelines safely",
      "Enforcing strict multi-tenant RBAC permissions during client HRMS integrations"
    ],
    engineeringDecisions: [
      "Implemented a Redis caching strategy on critical read paths to absorb peak query volume",
      "Established a reusable React component library to accelerate frontend feature velocity",
      "Designed JWT/RBAC middleware layers enforcing strict tenant isolation across enterprise clients"
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
      "Winner of Engineering Masterpiece Award for core CMS platform architecture",
      "Sole engineer owning React.js CMS dashboard for 500+ enterprise clients",
      "Azure OpenAI (GPT-4) content automation pipeline in Node.js",
      "Redis caching layer optimizing high-frequency API endpoints (100K+ daily requests)"
    ]
  },
  {
    id: "iqra-learning-tree",
    title: "Iqra Learning Tree",
    categoryTag: "Institute Management Platform",
    tagline: "A full-stack platform designed to manage students, teachers, courses, attendance, administrative workflows, and role-specific operations.",
    isPrimaryFeatured: false,
    status: "Archived (Paid Project Completed)",
    role: "Solo Full-Stack Developer / Architect",
    overview: "A full-stack platform designed to manage students, teachers, courses, attendance, administrative workflows, and role-specific operations.",
    problem: "Educational institutes require centralized administration to handle student enrollments, course schedules, role-specific content visibility, and document distribution securely.",
    solution: "Architected and developed a full-stack paid platform from scratch featuring role-based portals, RESTful API backend, JWT authentication, RBAC middleware, and cloud asset delivery via Google Drive API.",
    myContribution: "Architected and developed the application independently from the ground up as the sole full-stack developer.",
    engineering: "Architected with a React/Next.js frontend communicating with a Node.js/Express REST API. Persistence handled via MongoDB and Mongoose with Google Drive API integrated for cloud asset storage.",
    impact: "Successfully delivered the complete paid technical platform for institute administration as a solo full-stack engineer.",
    keyEngineeringWork: [
      "Role-based authentication system",
      "Role-Based Access Control (RBAC) security middleware",
      "RESTful API backend for CRUD operations",
      "React / Next.js frontend portal UI",
      "Node.js / Express backend service architecture",
      "MongoDB / Mongoose database design & data relationships",
      "Redux state management for user sessions",
      "Google Drive API integration for cloud file delivery",
      "Binary file handling and upload pipelines"
    ],
    keyChallenges: [
      "Designing a flexible document database schema handling multi-tier user roles and dynamic permissions",
      "Implementing secure file upload mechanisms and cloud storage access rules",
      "Structuring clean API contracts for full CRUD operations across all administrative entities"
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
    githubUrl: "https://github.com/aliakib",
    highlights: [
      "Sole full-stack engineer architecting the paid platform from the ground up",
      "Complete RBAC authentication & role-based portal views",
      "MongoDB relational modeling & REST API development",
      "Google Drive API storage integration for asset delivery"
    ]
  }
];
