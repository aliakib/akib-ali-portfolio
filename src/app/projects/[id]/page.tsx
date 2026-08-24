import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { CaseStudyView } from "@/components/CaseStudyView";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found — Akib Ali",
    };
  }

  return {
    title: `${project.title} — Technical Case Study | Akib Ali`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Case Study by Akib Ali`,
      description: project.overview,
    },
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
