"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-md bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
            AA
          </span>
          <div>
            <span className="font-bold text-slate-200 tracking-wide text-sm block">
              {profileData.name}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              {profileData.role}
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
          <Link href="/#hero" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/#journey" className="hover:text-white transition-colors">
            Journey
          </Link>
          <Link href="/#work" className="hover:text-white transition-colors">
            Work
          </Link>
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
