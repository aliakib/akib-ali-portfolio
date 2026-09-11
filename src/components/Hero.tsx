"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowRight, FileText, Github, Mail } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-6 font-mono">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              {profileData.eyebrow}
            </div>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6">
              {profileData.headline}
            </h1>
          </FadeIn>

          {/* Supporting Copy */}
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-4 max-w-2xl">
              {profileData.subheadline}
            </p>
          </FadeIn>

          {/* Credibility Line */}
          <FadeIn direction="up" delay={0.35}>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-2xl pl-4 border-l-2 border-indigo-600">
              {profileData.credibilityLine}
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <Link
                href={profileData.ctas.primary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-xs group"
              >
                <Mail className="w-4 h-4" />
                {profileData.ctas.primary.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href={profileData.ctas.secondary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {profileData.ctas.secondary.text}
              </Link>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-200/80">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 font-medium text-xs transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 font-medium text-xs transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Resume
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Credibility Metrics Strip (Section 3) */}
        <FadeIn direction="up" delay={0.5} className="mt-8 pt-8 border-t border-slate-200/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.metrics.map((metric) => (
              <div key={metric.label} className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-indigo-600 mt-0.5">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-snug font-normal">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
