export interface ProfileData {
  name: string;
  role: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  credibilityLine: string;
  aboutBio: string;
  location: string;
  summaryTech: string[];
  metrics: { value: string; label: string; subtext: string }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    resume: string;
  };
  ctas: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
    github: { text: string; href: string };
    resume: { text: string; href: string };
  };
  awards: { title: string; issuer: string; description: string }[];
  education: { degree: string; institution: string; period: string }[];
}

export const profileData: ProfileData = {
  name: "Akib Ali",
  role: "Full-Stack Software Engineer",
  eyebrow: "FULL-STACK SOFTWARE ENGINEER",
  headline: "Building production-ready products, backend systems & AI-powered applications.",
  subheadline: "Full-Stack Software Engineer with 2.5+ years of product engineering experience building production web applications, business systems, API integrations, real-time applications, and AI-powered products.",
  credibilityLine: "From enterprise SaaS and multi-channel commerce systems to real-time AI applications, I build software around real product and operational requirements.",
  aboutBio: "I'm a Full-Stack Software Engineer focused on building production web applications, backend systems, business platforms, and AI-powered products.\n\nMy experience spans frontend and backend development, API design, database-driven applications, real-time communication, third-party integrations, cloud deployment, and AI application development.\n\nI prefer solving practical engineering problems where software has to support real users, real workflows, and real operational constraints.",
  location: "Ghaziabad, India",
  summaryTech: [
    "Node.js",
    "TypeScript",
    "Express",
    "React",
    "Next.js",
    "Socket.IO",
    "MySQL",
    "Redis",
    "Docker",
    "OpenAI"
  ],
  metrics: [
    { value: "2.5+ Years", label: "Product Engineering", subtext: "Full-stack & backend software development" },
    { value: "500+", label: "Enterprise Clients", subtext: "Platform scale served by Master-O SaaS" },
    { value: "10K+", label: "Daily Active Users", subtext: "Platform scale across enterprise deployments" },
    { value: "100K+", label: "API Requests / Day", subtext: "Platform scale backend API throughput" }
  ],
  socials: {
    github: "https://github.com/aliakib",
    linkedin: "https://linkedin.com/in/akib-ali-8423902b3",
    email: "ali.akib786@gmail.com",
    phone: "+91 95555 76605",
    resume: "https://github.com/aliakib",
  },
  ctas: {
    primary: { text: "Start a Conversation", href: "#contact" },
    secondary: { text: "View My Work", href: "#work" },
    github: { text: "GitHub", href: "https://github.com/aliakib" },
    resume: { text: "Resume", href: "https://github.com/aliakib" },
  },
  awards: [
    {
      title: "Engineering Masterpiece Award",
      issuer: "InspireOne Technologies (Master-O)",
      description: "Recognized for architecting the core CMS platform infrastructure underpinning 500+ enterprise client deployments."
    },
    {
      title: "CSSBattle.dev Accomplishment",
      issuer: "CSSBattle",
      description: "Solved 60+ advanced pixel-perfect CSS layout challenges, demonstrating precision UI engineering."
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "IEC University, Himachal Pradesh",
      period: "Aug 2018 – Jun 2021"
    }
  ]
};
