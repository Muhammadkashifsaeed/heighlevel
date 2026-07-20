"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const experts = [
  {
    num: "01",
    initials: "AR",
    name: "Alex R.",
    role: "Automation Engineer",
    roleColor: "text-blue-600",
    avatarGradient: "from-blue-500 to-blue-600",
    checks: ["Advanced Workflows", "API Integrations"],
  },
  {
    num: "02",
    initials: "SJ",
    name: "Sarah J.",
    role: "CRM Specialist",
    roleColor: "text-orange-600",
    avatarGradient: "from-orange-400 to-orange-500",
    checks: ["Pipeline Optimization", "Client Onboarding"],
  },
];

export default function HireExpertHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[140px]" />
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-slate-600 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                Hire an Expert
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl"
            >
              Stop Settling For
              <br />
              Generalists.
              <br />
              <span className="bg-[linear-gradient(90deg,#22c55e,#34d399,#06b6d4,#3b82f6)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
                Hire a Specialist.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              Pre-vetted, internally trained specialists placed directly into
              your business — on a part-time, full-time, or project basis. No
              training required.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col items-start gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(135deg,#22c55e,#34d399,#3b82f6)] bg-[length:200%_auto] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10">Book a Discovery Call</span>
                <ArrowRight className="relative z-10 h-5 w-5" />
              </Link>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Available within 48 hours
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Floating Cards */}
          <div className="relative hidden lg:block">
            {/* Card 1 - Automation Engineer */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute left-0 top-0 w-72 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${experts[0].avatarGradient} text-lg font-bold text-white`}>
                  {experts[0].initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">{experts[0].name}</h3>
                  <p className={`text-sm font-medium ${experts[0].roleColor}`}>{experts[0].role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {experts[0].checks.map((check, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {check}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2 - CRM Specialist */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute left-20 top-48 w-72 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${experts[1].avatarGradient} text-lg font-bold text-white`}>
                  {experts[1].initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">{experts[1].name}</h3>
                  <p className={`text-sm font-medium ${experts[1].roleColor}`}>{experts[1].role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {experts[1].checks.map((check, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {check}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3 - Client Review */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute right-0 top-24 w-80 rounded-3xl border border-white/10 bg-[#111] p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                  Top 1%
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                &ldquo;They integrated seamlessly into our agency. It feels like having an in-house expert without the overhead.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400">
                  JD
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">John D.</p>
                  <p className="text-xs text-neutral-500">Agency Owner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
