"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { Code2, Cpu, Database, Layers, Wrench } from "lucide-react";
import { FadeIn, MotionCard } from "@/components/MotionWrapper";

export function ServicesSection() {
  const serviceIcons: Record<string, React.ReactNode> = {
    "backend-api": <Database className="w-5 h-5 text-indigo-600" />,
    "business-apps": <Layers className="w-5 h-5 text-indigo-600" />,
    "api-integrations": <Code2 className="w-5 h-5 text-indigo-600" />,
    "ai-applications": <Cpu className="w-5 h-5 text-indigo-600" />,
    "existing-product-dev": <Wrench className="w-5 h-5 text-indigo-600" />,
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            What I Build
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Software engineering services for products, platforms, API integrations, and AI applications.
          </p>
        </div>

        {/* 5 Concise Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <FadeIn key={service.id} direction="up" delay={index * 0.06}>
              <MotionCard className="bg-white rounded-xl border border-slate-200/80 p-6 h-full flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100/80 shrink-0">
                      {serviceIcons[service.id] || <Code2 className="w-5 h-5 text-indigo-600" />}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal mb-5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Technologies Bar */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/60 text-slate-600 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
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
