"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/50 blur-[140px]" />
        <div className="absolute right-[20%] top-[40%] h-[300px] w-[300px] rounded-full bg-cyan-200/40 blur-[100px]" />
        <div className="absolute -left-32 -top-32 h-[300px] w-[300px] rounded-full bg-blue-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center">
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wider text-slate-600 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              Growth Insights
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-extrabold leading-[1.05] tracking-tight text-[#111111]"
          >
            Latest Automation
            <br />
            <span className="bg-[linear-gradient(90deg,#22D3A6,#2F80ED)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,166,0.25)]">
              Guides & Insights
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-[760px] text-sm sm:text-base md:text-lg leading-[1.7] text-[#6B7280]"
          >
            Explore practical tutorials, automation tips, CRM strategies, and
            growth-focused guides to help you scale your agency without the
            technical headaches.
          </motion.p>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 md:mt-12 w-full max-w-[580px]"
          >
            <div className="relative flex items-center rounded-2xl sm:rounded-[18px] border border-slate-200 bg-white px-4 py-2.5 sm:px-5 sm:py-3 md:py-4 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] focus-within:border-emerald-400 focus-within:shadow-[0_0_0_3px_rgba(34,211,166,0.2)]">
              <Search className="h-5 w-5 shrink-0 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search guides, tutorials, and insights..."
                className="ml-2 sm:ml-3 w-full bg-transparent text-sm sm:text-base md:text-[17px] text-[#111111] placeholder-[#9CA3AF] outline-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
