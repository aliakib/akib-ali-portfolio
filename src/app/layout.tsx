import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Akib — Full-Stack Software Engineer | Node.js, AI & Product Engineering",
  description:
    "Portfolio of Ali Akib, a Full-Stack Software Engineer specializing in Node.js, business applications, API integrations, real-time systems, and AI-powered products.",
  keywords: [
    "Ali Akib",
    "Akib Ali",
    "Full-Stack Software Engineer",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Express",
    "Socket.IO",
    "Daikcell",
    "Master-O",
    "PitchLynx",
    "REST APIs",
    "Redis",
    "Docker",
    "AI Applications"
  ],
  authors: [{ name: "Akib Ali" }],
  creator: "Akib Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akibali.dev",
    title: "Ali Akib — Full-Stack Software Engineer | Node.js, AI & Product Engineering",
    description:
      "Portfolio of Ali Akib, a Full-Stack Software Engineer specializing in Node.js, business applications, API integrations, real-time systems, and AI-powered products.",
    siteName: "Ali Akib Engineering Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Akib — Full-Stack Software Engineer | Node.js, AI & Product Engineering",
    description:
      "Portfolio of Ali Akib, a Full-Stack Software Engineer specializing in Node.js, business applications, API integrations, real-time systems, and AI-powered products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akib Ali",
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Node.js, business applications, API integrations, real-time systems, and AI-powered products.",
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "Express",
      "React",
      "Next.js",
      "Socket.IO",
      "MongoDB",
      "MySQL",
      "Prisma",
      "Redis",
      "Docker",
      "Amazon SP-API",
      "OpenAI"
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-slate-900 min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
