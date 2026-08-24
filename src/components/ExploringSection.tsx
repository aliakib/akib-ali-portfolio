"use client";

import React from "react";
import { currentlyExploring } from "@/data/skills";
import { Compass, Lightbulb } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function ExploringSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Continuous Growth
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Currently Exploring
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Areas of active learning, experimentation, and technical focus aimed at deepening system design and modern AI engineering capabilities.
          </p>
        </div>

        {/* Exploring Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyExploring.map((item, idx) => (
            <FadeIn key={item.title} direction="up" delay={idx * 0.08}>
              <div className="bg-white rounded-xl border border-slate-200/80 p-5 h-full flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-mono font-medium">
                      {item.tag}
                    </span>
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 tracking-tight">
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
