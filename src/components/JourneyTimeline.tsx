"use client";

import React from "react";
import Link from "next/link";
import { journeyStages } from "@/data/journey";
import { ArrowRight, CheckCircle2, Quote, Terminal } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 tracking-wide uppercase mb-3">
            Signature Narrative
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            How I became a software engineer
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            My journey has been less about learning isolated technologies and more about progressively learning how complete software systems work.
          </p>
        </div>

        {/* Timeline Stages */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-6 md:before:left-8 before:w-0.5 before:bg-slate-200">
          {journeyStages.map((stage) => (
            <div key={stage.id} className="relative pl-10 sm:pl-16 md:pl-20 group">
              {/* Timeline Marker */}
              <div className="absolute left-1.5 sm:left-3.5 md:left-5 top-1.5 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                0{stage.stageNumber}
              </div>

              {/* Stage Card */}
              <FadeIn direction="up">
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono">
                        Stage 0{stage.stageNumber}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                        {stage.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mt-0.5">
                        {stage.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                        {stage.statusBadge}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        Role: <span className="text-slate-800 font-semibold">{stage.role}</span>
                      </span>
                    </div>
                  </div>

                  {/* Context */}
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {stage.context}
                  </div>

                  {/* Pivotal Narrative Quote */}
                  <div className="p-4 sm:p-5 rounded-lg bg-indigo-50/60 border-l-4 border-indigo-600 mb-6 text-slate-800 font-medium text-sm sm:text-base italic leading-relaxed flex items-start gap-3">
                    <Quote className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>"{stage.narrative}"</span>
                  </div>

                  {/* Key Learnings */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-slate-500" />
                      Key Systems Capabilities Learned
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.keyLearnings.map((learning, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer & Technologies */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <span className="text-xs font-medium text-slate-400 mr-1">Stack:</span>
                      {stage.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {stage.caseStudyId && (
                      <Link
                        href={`/projects/${stage.caseStudyId}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 group/link"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
