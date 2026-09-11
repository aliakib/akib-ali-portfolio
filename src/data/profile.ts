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
  subheadline: "Full-Stack Software Engineer with 2.5+ years of professional industry experience and 4+ years of hands-on software development experience. Most of my work involves Node.js, TypeScript, APIs, database design, real-time applications and AI features.",
  credibilityLine: "I've spent the last few years building software across enterprise SaaS, multi-channel commerce tools and real-time voice applications — focusing on real product and operational requirements.",
  aboutBio: "I'm a Full-Stack Software Engineer focused on building web applications, backend systems, business tools and AI-powered products.\n\nMy work covers frontend and backend development, API design, database workflows, real-time WebSockets, third-party integrations, cloud deployment and AI application engineering.\n\nI prefer solving practical engineering problems where software has to support real users, real workflows and real operational constraints.",
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
    { value: "2.5+ Years", label: "Professional Industry Experience", subtext: "Software development in organizations (Master-O SDE II)" },
    { value: "4+ Years", label: "Hands-On Software Development", subtext: "Total experience building web systems & client projects" },
    { value: "500+", label: "Enterprise Clients", subtext: "Platform scale served by Master-O SaaS" },
    { value: "100K+", label: "API Requests / Day", subtext: "Backend platform scale optimized via Redis caching" }
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
      description: "Recognized internally for architecting the CMS platform infrastructure underpinning 500+ enterprise client deployments."
    },
    {
      title: "CSSBattle.dev Solutions",
      issuer: "CSSBattle",
      description: "Solved 60+ pixel-perfect CSS layout challenges, demonstrating precision frontend layout skills."
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
