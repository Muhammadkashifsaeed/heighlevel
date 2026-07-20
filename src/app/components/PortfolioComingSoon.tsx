"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioComingSoon() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[140px]" />
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-slate-600 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              Portfolio
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-[72px]"
          >
            <span className="text-[#0F172A]">Coming</span>{" "}
            <span className="bg-[linear-gradient(90deg,#22c55e,#34d399)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
              Soon
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-[750px] text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            We are currently curating our best work. Check back soon to see the
            high-converting funnels, AI systems, and CRM infrastructures
            we&apos;ve built for our clients.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(135deg,#22c55e,#34d399,#3b82f6)] bg-[length:200%_auto] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative z-10">Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
