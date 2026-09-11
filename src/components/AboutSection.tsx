"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Award, GraduationCap, ShieldCheck, User } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function AboutSection() {
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          {/* Main Copy */}
          <FadeIn direction="up" className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <p className="text-slate-900 font-semibold text-lg leading-snug">
                I'm a Full-Stack Software Engineer focused on building production web applications, backend systems, business platforms, and AI-powered products.
              </p>
              <p>
                My experience spans frontend and backend development, API design, database-driven applications, real-time communication, third-party integrations, cloud deployment, and AI application development.
              </p>
              <p>
                I prefer solving practical engineering problems where software has to support real users, real workflows, and real operational constraints.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Production Execution</h4>
                <p className="text-xs text-slate-500">Delivered backend services, REST APIs, Redis caching layers, and database schemas handling enterprise load.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                <User className="w-5 h-5 text-indigo-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Commercial Impact</h4>
                <p className="text-xs text-slate-500">Engineered multi-channel commerce software, real-time AI platforms, and enterprise CMS tools.</p>
              </div>
            </div>
          </FadeIn>

          {/* Awards & Education Cards */}
          <FadeIn direction="up" delay={0.2} className="lg:col-span-5 space-y-6">
            {/* Awards */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono flex items-center gap-2">
                <Award className="w-4 h-4" /> Awards & Recognitions
              </h3>
              <div className="space-y-3">
                {profileData.awards.map((award) => (
                  <div key={award.title} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <h4 className="font-bold text-white text-sm">{award.title}</h4>
                    <span className="text-xs text-indigo-300 font-medium block mt-0.5">{award.issuer}</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h3>
              {profileData.education.map((edu) => (
                <div key={edu.degree} className="p-3.5 rounded-xl bg-white border border-slate-200/60">
                  <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                  <span className="text-xs text-slate-700 font-medium block mt-0.5">{edu.institution}</span>
                  <span className="text-xs font-mono text-slate-400 block mt-1">{edu.period}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
