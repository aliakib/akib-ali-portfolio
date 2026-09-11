"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Check, Copy, ExternalLink, FileText, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            Engineering Inquiries & Consulting
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Have a product or technical problem to solve?
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            I can help build a new application, extend an existing product, integrate external services, or solve backend and application-level engineering problems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto mb-12">
            <a
              href={`mailto:${profileData.socials.email}?subject=${encodeURIComponent("Engineering Inquiry / Product Discussion")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-colors shadow-md group"
            >
              <Mail className="w-4 h-4" />
              Let's discuss your project
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm hover:bg-slate-700 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Address Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Address ({profileData.socials.email})</span>
                </>
              )}
            </button>
          </div>

          {/* Secondary Links */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" /> View GitHub <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" /> Download Resume <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
