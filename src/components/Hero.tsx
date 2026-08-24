"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowRight, Github, Mail } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold tracking-wider text-slate-700 uppercase mb-6">
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

          {/* Supporting Text */}
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              {profileData.subheadline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href={profileData.ctas.primary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-xs group"
              >
                {profileData.ctas.primary.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href={profileData.ctas.secondary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                {profileData.ctas.secondary.text}
              </Link>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                {profileData.ctas.github.text}
              </a>
            </div>
          </FadeIn>

          {/* Technical Summary Bar */}
          <FadeIn direction="up" delay={0.5}>
            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Core Engineering Stack
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {profileData.summaryTech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-slate-700 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
