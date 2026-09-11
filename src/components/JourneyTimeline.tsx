"use client";

import React from "react";
import Link from "next/link";
import { journeyStages } from "@/data/journey";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono block mb-2">
            Progression of Responsibility
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Engineering Journey
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Progression from solo full-stack architecture to enterprise B2B SaaS platform delivery and multi-channel business systems.
          </p>
        </div>

        {/* Timeline Stages */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-6 md:before:left-8 before:w-0.5 before:bg-slate-200">
          {journeyStages.map((stage) => (
            <div key={stage.id} className="relative pl-10 sm:pl-16 md:pl-20 group">
              {/* Timeline Marker */}
              <div className="absolute left-1.5 sm:left-3.5 md:left-5 top-2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                0{stage.stageNumber}
              </div>

              {/* Stage Compact Card */}
              <FadeIn direction="up">
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {stage.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 font-mono">
                      {stage.role}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 font-normal leading-relaxed">
                    {stage.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {stage.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 text-xs font-mono border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {stage.caseStudyId && (
                      <Link
                        href={`/projects/${stage.caseStudyId}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 group/link"
                      >
                        Case Study
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
