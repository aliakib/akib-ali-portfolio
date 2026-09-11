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
    shortDescription: "Node.js and TypeScript backends, REST APIs, authentication, role-based access control, database integrations and real-time services.",
    technologies: ["Node.js", "TypeScript", "Express", "REST APIs", "Socket.IO", "MySQL", "Redis"]
  },
  {
    id: "business-apps",
    title: "Business Applications",
    shortDescription: "Admin platforms, dashboards, inventory tools, order workflows, operational software and internal business tools.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MySQL", "Redis"]
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    shortDescription: "Connecting applications with third-party APIs, e-commerce marketplaces, logistics tools, webhooks and external services.",
    technologies: ["Amazon SP-API", "Shiprocket", "Saleor", "REST APIs", "Webhooks"]
  },
  {
    id: "ai-applications",
    title: "AI Applications",
    shortDescription: "Adding AI capabilities to products using OpenAI APIs, Azure OpenAI, conversational voice interfaces and backend workflows.",
    technologies: ["OpenAI", "Azure OpenAI", "RAG", "Node.js", "APIs"]
  },
  {
    id: "existing-product-dev",
    title: "Existing Product Development",
    shortDescription: "Building new features, fixing backend bugs, connecting integrations, refactoring code and improving database performance.",
    technologies: ["Node.js", "React", "TypeScript", "Redis", "MySQL", "Docker"]
  }
];
