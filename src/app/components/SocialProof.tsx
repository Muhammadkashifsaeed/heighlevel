"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex R.",
    role: "Agency Owner",
    text: "They integrated seamlessly into our agency. It feels like having an in-house expert without the overhead. Our fulfillment has never been smoother.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "SaaS Founder",
    text: "We went from struggling with onboarding to having a fully automated system. Our clients are happier, and our revenue has doubled in 3 months.",
    rating: 5,
  },
  {
    name: "Mike T.",
    role: "Marketing Director",
    text: "The white-label support is incredible. Our clients think we built everything in-house. The level of professionalism is outstanding.",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3 + i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-24 md:py-32">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute left-1/2 top-[30%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute -top-32 -right-32 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.8)_100%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-emerald-400/30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-neutral-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            Hear From Agencies
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          We&apos;ve Scaled.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-neutral-400 sm:text-xl"
        >
          Don&apos;t just take our word for it. See how we&apos;ve helped agency
          owners streamline their fulfillment, fix their systems, and scale their
          revenue.
        </motion.p>

        {/* TESTIMONIALS GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(52, 211, 153, 0.5)",
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.2)",
              }}
              className="group flex flex-col rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-300/50 hover:bg-white/10 hover:shadow-2xl sm:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 flex-1 text-base leading-relaxed text-neutral-300">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
