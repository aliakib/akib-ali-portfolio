"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Award, GraduationCap, ShieldCheck, User } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutSection() {
  const progressionSteps = [
    { title: "Frontend Development", desc: "UI components, responsive layouts & CSSBattle precision engineering" },
    { title: "Full-Stack Architecture", desc: "REST APIs, database schemas, authentication & RBAC architecture" },
    { title: "Enterprise SaaS Engineering", desc: "B2B platform ownership (Master-O SDE II), Redis caching (100K+ req/day) & Azure OpenAI GPT-4" },
    { title: "Production Systems & AI", desc: "Multi-channel logistics business platforms (Daikcell) & real-time Socket.IO voice platforms (PitchLynx)" },
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 font-mono block mb-2">
            Engineering Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main Story Text */}
          <FadeIn direction="up" className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <p className="text-slate-900 font-medium text-lg leading-snug">
                "Full-Stack Software Engineer with 2.5+ years of high-ownership enterprise product work at Master-O (SDE II), backed by 4+ years of hands-on full-stack development depth across projects like Daikcell, PitchLynx, and Iqra Learning Tree."
              </p>
              <p>
                Delivered end-to-end ownership — from system design and backend API architecture to responsive React frontends and production deployments — for enterprise systems serving 10,000+ daily active users across 500+ enterprise clients.
              </p>
            </div>

            <p>
              Hands-on experience optimizing high-throughput APIs (100K+ daily requests), integrating LLM pipelines (OpenAI, Azure OpenAI GPT-4), and engineering real-time WebSocket infrastructure with sub-200ms latency. Recognized with the <strong className="text-slate-900">Engineering Masterpiece Award</strong> for core platform contributions.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Enterprise Experience</h4>
                <p className="text-xs text-slate-500">2.5+ years of high-ownership enterprise product work at Master-O (SDE II) serving 500+ enterprise clients.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
                <User className="w-5 h-5 text-indigo-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">4+ YOE Hands-On Depth</h4>
                <p className="text-xs text-slate-500">4+ years building production multi-channel business platforms (Daikcell), AI voice systems (PitchLynx), and full-stack applications (Iqra).</p>
              </div>
            </div>
          </FadeIn>

          {/* Evolution Pathway Box */}
          <FadeIn direction="up" delay={0.2} className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 block mb-1">
                  Evolution of Capability
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Progression Roadmap
                </h3>
              </div>

              <div className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
                {progressionSteps.map((step, i) => (
                  <div key={step.title} className="relative pl-9">
                    <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-slate-800 border border-indigo-500 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                        {step.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-0.5 leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Awards & Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
          {/* Awards */}
          <FadeIn direction="up">
            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2 mb-4">
                <Award className="w-4 h-4" /> Awards & Recognition
              </h3>
              <div className="space-y-4">
                {profileData.awards.map((award) => (
                  <div key={award.title} className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-2xs">
                    <h4 className="font-bold text-slate-900 text-sm">{award.title}</h4>
                    <span className="text-xs text-indigo-600 font-semibold block mt-0.5">{award.issuer}</span>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6 h-full">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4" /> Education
              </h3>
              <div className="space-y-4">
                {profileData.education.map((edu) => (
                  <div key={edu.degree} className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-2xs">
                    <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                    <span className="text-xs text-slate-700 font-medium block mt-0.5">{edu.institution}</span>
                    <span className="text-xs font-mono text-slate-400 block mt-1">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
