"use client";

import React from "react";
import { currentlyExploring } from "@/data/skills";
import { Compass, Lightbulb } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function ExploringSection() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Active Research & Experimentation
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
            Currently Exploring
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Exploring advanced AI application architectures, retrieval-augmented systems, autonomous agent workflows, distributed systems and scalable real-time applications.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentlyExploring.map((item, idx) => (
            <FadeIn key={item.title} direction="up" delay={idx * 0.06}>
              <div className="bg-white rounded-lg border border-slate-200/80 p-4 h-full flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono font-medium">
                      {item.tag}
                    </span>
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm mb-1 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
