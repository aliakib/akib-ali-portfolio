export interface TieredSkillGroup {
  tierName: string;
  badgeLabel: string;
  description: string;
  skills: string[];
}

export interface ExploringItem {
  title: string;
  description: string;
  tag: string;
}

export const tieredSkillGroups: TieredSkillGroup[] = [
  {
    tierName: "Core Production Stack",
    badgeLabel: "Production Verified",
    description: "Technologies used repeatedly across real production platforms and enterprise deployments.",
    skills: [
      "Node.js",
      "TypeScript",
      "Express",
      "React",
      "Next.js",
      "Socket.IO",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Docker",
      "Git"
    ]
  },
  {
    tierName: "Additional Ecosystem Experience",
    badgeLabel: "Project Implemented",
    description: "Specialized integrations, enterprise LLM pipelines, and external commerce/logistics APIs.",
    skills: [
      "Amazon SP-API",
      "Shiprocket API",
      "Saleor",
      "OpenAI API",
      "Azure OpenAI (GPT-4)",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "AWS",
      "GitHub Actions"
    ]
  }
];

export const currentlyExploring: ExploringItem[] = [
  {
    title: "AI Agent Architectures",
    description: "Exploring multi-agent orchestration frameworks, function calling protocols, and state management for autonomous workflows.",
    tag: "AI Architecture"
  },
  {
    title: "RAG Systems",
    description: "Exploring vector databases, document chunking strategies, embeddings, and context retrieval pipelines for enterprise knowledge search.",
    tag: "GenAI Infrastructure"
  },
  {
    title: "Distributed Systems",
    description: "Exploring load balancing, message queues, database sharding, caching topologies, and high-availability backend design.",
    tag: "Backend Systems"
  },
  {
    title: "Real-Time Audio & Event-Driven Systems",
    description: "Exploring low-latency event-driven communication for live voice applications and bidirectional data synchronization.",
    tag: "Real-Time Web"
  }
];
