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
  title: "Akib Ali — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer focused on building web applications, backend systems, integrations and AI-powered products.",
  keywords: [
    "Akib Ali",
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Backend Systems",
    "Daikcell",
    "Master-O",
    "REST APIs",
    "Redis",
    "Docker"
  ],
  authors: [{ name: "Akib Ali" }],
  creator: "Akib Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akibali.dev",
    title: "Akib Ali — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer focused on building web applications, backend systems, integrations and AI-powered products.",
    siteName: "Akib Ali Engineering Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akib Ali — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer focused on building web applications, backend systems, integrations and AI-powered products.",
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
      "Full-stack software engineer focused on building web applications, backend systems, integrations and AI-powered products.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Prisma",
      "Redis",
      "Docker",
      "AI Applications"
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
