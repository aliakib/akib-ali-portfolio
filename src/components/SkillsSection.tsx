"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { Code2, Cpu, Database, Server, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function SkillsSection() {
  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Code2 className="w-5 h-5 text-indigo-600" />,
    Backend: <Server className="w-5 h-5 text-indigo-600" />,
    "Databases & Storage": <Database className="w-5 h-5 text-indigo-600" />,
    "Infrastructure & DevOps": <Cpu className="w-5 h-5 text-indigo-600" />,
    "AI & Modern Stack": <Sparkles className="w-5 h-5 text-indigo-600" />,
  };

  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono block mb-2">
            Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 font-normal leading-relaxed">
            Core technologies and concepts I work with routinely across full-stack application development, APIs, database engineering, and AI integrations.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <FadeIn key={cat.category} direction="up" delay={index * 0.08}>
              <div className="bg-white rounded-xl border border-slate-200/80 p-6 h-full flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100/60">
                      {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-indigo-600" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg tracking-tight">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-5 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors"
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
