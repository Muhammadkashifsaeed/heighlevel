"use client";

import { motion } from "framer-motion";

export default function DiscoveryCall() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[4px] text-[#22D3A6]"
          >
            Discovery Call
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-5xl md:text-[48px]"
          >
            Let&apos;s Build Your Growth Engine
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-[640px] text-lg leading-[1.7] text-[#6B7280] sm:text-xl"
          >
            Choose a time below to speak with our experts about scaling your
            business with custom automation and systems.
          </motion.p>

          {/* Calendar / Booking Widget Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 w-full max-w-3xl"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <svg
                    className="h-8 w-8 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#111111]">
                  Schedule Your Discovery Call
                </h3>
                <p className="mt-2 max-w-md text-base text-[#6B7280]">
                  Select a convenient time slot and we&apos;ll confirm your
                  booking instantly.
                </p>
                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] px-8 py-3 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
                >
                  Open Calendly Widget
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
