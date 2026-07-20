"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HireExpertCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[140px]" />
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* MAIN HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl"
          >
            Ready to scale your Business?
          </motion.h2>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(135deg,#22c55e,#34d399,#3b82f6)] bg-[length:200%_auto] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative z-10">Get Matched With An Expert</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
