"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono block mb-2">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Professional Engineering Work
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Professional roles focused on shipping production features, building APIs, developing interactive products and integrating complex business systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <FadeIn key={item.company} direction="up" delay={index * 0.15}>
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {item.company}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-600 flex items-center gap-1.5 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                    {item.statusBadge}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.summary}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Engineering Scope & Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-slate-400 mr-2">Technologies Used:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
