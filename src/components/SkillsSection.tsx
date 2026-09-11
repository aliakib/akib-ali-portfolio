"use client";

import React from "react";
import { tieredSkillGroups } from "@/data/skills";
import { CheckCircle2, Code2, Server } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono block mb-2">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Tiered by production execution. Core production stack technologies represent repeated implementation across enterprise deployments and real products.
          </p>
        </div>

        {/* Tiered Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tieredSkillGroups.map((group, index) => (
            <FadeIn key={group.tierName} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 h-full flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                <div>
                  {/* Group Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100/60 text-indigo-600">
                        {index === 0 ? <Server className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
                      </div>
                      <h3 className="font-bold text-slate-900 text-xl tracking-tight">
                        {group.tierName}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold">
                      {group.badgeLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal bg-slate-50 p-3.5 rounded-lg border border-slate-200/60">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-mono font-medium hover:bg-slate-200 hover:text-slate-900 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
