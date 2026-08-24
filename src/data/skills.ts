export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface ExploringItem {
  title: string;
  description: string;
  tag: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Building responsive, high-performance, pixel-perfect user interfaces",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "TailwindCSS",
      "Redux / Redux-Saga",
      "Material UI",
      "HTML5 / CSS3"
    ]
  },
  {
    category: "Backend",
    description: "Architecting REST APIs, real-time WebSockets, and microservices",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Socket.IO / WebSockets",
      "JWT Authentication",
      "RBAC Systems",
      "Microservices Architecture"
    ]
  },
  {
    category: "Databases & Caching",
    description: "Relational, document, and high-throughput caching layers",
    skills: [
      "MySQL",
      "MongoDB",
      "Redis (High-Throughput Caching)",
      "Prisma ORM",
      "Query Optimization & Indexing",
      "Schema Design"
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Containerization, cloud infrastructure, and CI/CD pipelines",
    skills: [
      "AWS (EC2, S3)",
      "Azure",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Git / Version Control"
    ]
  },
  {
    category: "AI & Integrations",
    description: "Integrating LLM pipelines, e-commerce APIs, and webhooks",
    skills: [
      "OpenAI API",
      "Azure OpenAI (GPT-4)",
      "Amazon SP-API",
      "Saleor",
      "Shiprocket API",
      "Webhook Architecture"
    ]
  }
];

export const currentlyExploring: ExploringItem[] = [
  {
    title: "Autonomous AI Agents",
    description: "Investigating multi-agent orchestration frameworks, function calling protocols, and state management for complex LLM workflows.",
    tag: "AI Architecture"
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Exploring vector databases, chunking strategies, embeddings, and context retrieval pipelines for enterprise knowledge search.",
    tag: "GenAI Infrastructure"
  },
  {
    title: "Distributed Systems & Scalability",
    description: "Deepening understanding of high-availability backend design, load balancing, message queues, and horizontal database sharding.",
    tag: "Backend Engineering"
  },
  {
    title: "Real-Time WebSockets & Audio Streams",
    description: "Building sub-200ms real-time event-driven communications for live voice coaching and bidirectional data sync.",
    tag: "Real-Time Web"
  }
];
