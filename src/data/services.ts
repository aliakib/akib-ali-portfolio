export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "backend-api",
    title: "Backend & API Development",
    shortDescription: "Node.js and TypeScript backends, REST APIs, authentication, RBAC, database integrations, and real-time services.",
    technologies: ["Node.js", "TypeScript", "Express", "REST APIs", "Socket.IO", "MySQL", "Redis"]
  },
  {
    id: "business-apps",
    title: "Business Applications",
    shortDescription: "Admin platforms, dashboards, inventory systems, order workflows, operational tools, and internal business software.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MySQL", "Redis"]
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    shortDescription: "Third-party APIs, commerce platforms, logistics systems, webhooks, communication services, and external business systems.",
    technologies: ["Amazon SP-API", "Shiprocket", "Saleor", "REST APIs", "Webhooks"]
  },
  {
    id: "ai-applications",
    title: "AI Applications",
    shortDescription: "LLM integrations, AI workflows, conversational applications, automated content generation, and AI-powered product features.",
    technologies: ["OpenAI", "Azure OpenAI", "RAG", "Node.js", "APIs"]
  },
  {
    id: "existing-product-dev",
    title: "Existing Product Development",
    shortDescription: "Feature development, backend fixes, integrations, refactoring, performance improvements, and production issue resolution.",
    technologies: ["Node.js", "React", "TypeScript", "Redis", "MySQL", "Docker"]
  }
];
