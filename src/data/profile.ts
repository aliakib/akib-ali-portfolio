export interface ProfileData {
  name: string;
  role: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  location: string;
  summaryTech: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  ctas: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
    github: { text: string; href: string };
  };
  awards: { title: string; issuer: string; description: string }[];
  education: { degree: string; institution: string; period: string }[];
}

export const profileData: ProfileData = {
  name: "Akib Ali",
  role: "Full Stack Engineer",
  eyebrow: "SOFTWARE ENGINEER",
  headline: "I build products, backend systems and AI-powered applications.",
  subheadline: "Full Stack Engineer with 2.5 years of product engineering experience building scalable web applications across B2B SaaS, enterprise learning platforms, and multi-channel e-commerce systems.",
  location: "Ghaziabad, India",
  summaryTech: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Socket.IO",
    "MongoDB",
    "MySQL",
    "Redis",
    "Docker",
    "OpenAI / GPT-4"
  ],
  socials: {
    github: "https://github.com/aliakib",
    linkedin: "https://linkedin.com/in/akib-ali-8423902b3",
    email: "ali.akib786@gmail.com",
    phone: "+91 95555 76605",
  },
  ctas: {
    primary: { text: "Explore my work", href: "#journey" },
    secondary: { text: "Get in touch", href: "#contact" },
    github: { text: "View GitHub", href: "https://github.com/aliakib" },
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
