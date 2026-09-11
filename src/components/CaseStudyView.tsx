"use client";

import React from "react";
import Link from "next/link";
import { CaseStudyData } from "@/data/projects";
import {
  ArrowLeft,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  Code,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layers,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

interface CaseStudyViewProps {
  project: CaseStudyData;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <FadeIn direction="down" className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-semibold">{project.title}</span>
          </div>
        </FadeIn>

        {/* Case Study Header Card */}
        <FadeIn direction="up" className="mb-10">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider font-mono">
                {project.status}
              </span>
              <span className="text-xs font-medium text-slate-500 font-mono">
                Role: <strong className="text-slate-800">{project.role}</strong>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
              {project.tagline}
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Repository
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Overview */}
            <FadeIn direction="up">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> 01. Product Overview
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>
            </FadeIn>

            {/* 2. Problem */}
            <FadeIn direction="up">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2">
                  <Layers className="w-4 h-4" /> 02. Problem & Purpose
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>
            </FadeIn>

            {/* 3. Solution */}
            <FadeIn direction="up">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2">
                  <CheckSquare className="w-4 h-4" /> 03. Engineered Solution
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </FadeIn>

            {/* 4. My Contribution */}
            <FadeIn direction="up">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2">
                  <Code className="w-4 h-4" /> 04. My Personal Contribution
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal mb-4">
                  {project.myContribution}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block mb-3">
                    Key Engineering Work
                  </span>
                  <ul className="space-y-2.5">
                    {project.keyEngineeringWork.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* 5. Engineering */}
            <FadeIn direction="up">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> 05. Engineering & System Architecture
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  {project.engineering}
                </p>
              </div>
            </FadeIn>

            {/* 6. Key Challenges & Decisions */}
            <FadeIn direction="up">
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> 06. Technical Challenges & Trade-Offs
                </h2>
                <ul className="space-y-3">
                  {project.keyChallenges.map((challenge, idx) => (
                    <li key={idx} className="p-4 rounded-lg bg-amber-50/50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
                    Engineering Decisions
                  </span>
                  {project.engineeringDecisions.map((decision, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-700 text-sm font-medium">
                      • {decision}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* 7. Impact & Scale */}
            {project.impact && (
              <FadeIn direction="up">
                <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 shadow-md space-y-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
                    07. Outcome & Platform Scale
                  </h2>
                  <p className="text-slate-200 text-base leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Tech Stack Box */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-600" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role Info Box */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs space-y-3 text-xs text-slate-600">
              <h3 className="font-bold text-slate-900 text-sm">Role & Execution</h3>
              <p><strong>Title:</strong> {project.role}</p>
              <p><strong>Status:</strong> {project.status}</p>
              <p className="pt-2 border-t border-slate-100 text-slate-500">
                Part of Akib Ali's full-stack software engineering portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
