"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";

const checklist = [
  "Automated Client Onboarding Systems",
  "Custom Snapshot Design & Optimization",
  "24/7 White-Label Technical Support",
  "Advanced n8n & API Integrations",
  "Churn Reduction & Retention Strategies",
];

const progressBars = [
  { label: "Onboarding Speed", value: "Instantly", pct: 98, color: "bg-emerald-500", glow: "shadow-emerald-500/30" },
  { label: "Support Resolution", value: "< 15 Mins", pct: 94, color: "bg-blue-500", glow: "shadow-blue-500/30" },
  { label: "Client Retention", value: "98%", pct: 96, color: "bg-yellow-500", glow: "shadow-yellow-500/30" },
];

export default function GrowSaasSolution() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[140px]" />
        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <Rocket className="h-4 w-4 text-emerald-600" />
                Our Solution
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl"
            >
              The Ultimate Done-For-
              <br />
              You
              <br />
              <span className="bg-[linear-gradient(90deg,#22c55e,#34d399,#06b6d4)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
                SaaS Growth Engine
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[650px] text-lg leading-relaxed text-slate-600"
            >
              We step in as your technical backend. From designing custom
              snapshots to handling 24/7 white-label support, we ensure your
              clients have a world-class experience under your brand.
            </motion.p>

            {/* Checklist */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {checklist.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 text-lg font-medium text-[#0F172A]"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(135deg,#22c55e,#34d399,#3b82f6)] bg-[length:200%_auto] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10">Get Started Today</span>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Analytics Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl"
          >
            {/* Card Header */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <Rocket className="h-7 w-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  SaaS Infrastructure
                </h3>
                <p className="text-sm text-slate-500">
                  Fully managed under your brand
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-slate-100" />

            {/* Progress Bars */}
            <div className="space-y-6">
              {progressBars.map((bar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#0F172A]">
                      {bar.label}
                    </span>
                    <span className="text-sm font-bold text-slate-600">
                      {bar.value}
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                      className={`h-2.5 rounded-full ${bar.color} shadow-[0_0_12px_rgba(255,255,255,0.3)]`}
                    />
                  </div>
                  <div className="mt-1 text-right text-xs font-bold text-slate-400">
                    {bar.pct}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
