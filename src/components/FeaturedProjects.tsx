"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, CheckCircle, ExternalLink, Github, Layers } from "lucide-react";
import { FadeIn, MotionCard } from "@/components/MotionWrapper";

export function FeaturedProjects() {
  const primaryProject = projectsData.find((p) => p.isPrimaryFeatured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => p.id !== primaryProject.id);

  return (
    <section id="work" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono block mb-2">
            Selected Engineering Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Featured Projects & Systems
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Real production business platforms, full-stack systems, and engineering projects demonstrating end-to-end architecture and backend capability.
          </p>
        </div>

        {/* PRIMARY FEATURED PROJECT CARD (DAIKCELL) */}
        <FadeIn direction="up" className="mb-10">
          <MotionCard className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Layers className="w-64 h-64 text-indigo-400" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  Primary Featured System
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                  {primaryProject.status}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {primaryProject.title}
                  </h3>
                  <p className="text-indigo-200 font-medium text-base sm:text-lg leading-relaxed">
                    {primaryProject.tagline}
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {primaryProject.overview}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Role & Impact
                    </span>
                    <p className="text-sm text-slate-200 font-medium">
                      {primaryProject.role} — Production system engineering, third-party logistics & API integrations, database architecture, and caching.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                    System Architecture Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {primaryProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-700/60">
                    <span className="text-xs font-medium text-slate-400 block mb-2">Tech Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {primaryProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-slate-900 text-indigo-300 text-xs font-mono border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/projects/${primaryProject.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-colors shadow-xs group"
                    >
                      View Deep Technical Case Study
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionCard>
        </FadeIn>

        {/* SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <FadeIn key={project.id} direction="up">
              <MotionCard className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between h-full hover:border-slate-300 hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Aspects
                    </span>
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-slate-100">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/60 text-slate-600 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-700 group/btn"
                    >
                      View Case Study
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-700 transition-colors p-1"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
