"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

function GlowOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      animate={{
        opacity: [0.35, 0.7, 0.35],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className || ""}`}
    />
  );
}

function FloatingParticle({ index }: { index: number }) {
  const positions = [
    { left: "10%", top: "20%" },
    { left: "80%", top: "15%" },
    { left: "20%", top: "70%" },
    { left: "75%", top: "65%" },
    { left: "50%", top: "10%" },
    { left: "40%", top: "80%" },
    { left: "90%", top: "45%" },
    { left: "5%", top: "50%" },
  ];

  const pos = positions[index % positions.length];

  return (
    <motion.div
      className="pointer-events-none absolute h-1 w-1 rounded-full bg-emerald-400/40"
      style={{ left: pos.left, top: pos.top }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 4 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.4,
      }}
    />
  );
}

const featurePills = [
  {
    color: "bg-emerald-400",
    shadow: "shadow-emerald-500/20",
    text: "Done-For-You Infrastructure",
  },
  {
    color: "bg-blue-400",
    shadow: "shadow-blue-500/20",
    text: "24/7 White-Label Support",
  },
  {
    color: "bg-yellow-400",
    shadow: "shadow-yellow-500/20",
    text: "Automated Client Acquisition",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function GrowSaasHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const glowY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroY = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Radial green glow */}
        <motion.div style={{ y: glowY }} className="absolute inset-0">
          <div className="absolute left-1/2 top-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
          <div className="absolute left-[30%] top-[50%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute right-[20%] top-[40%] h-[200px] w-[200px] rounded-full bg-cyan-500/10 blur-[80px]" />
        </motion.div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.8)_100%)]" />

        {/* Animated glow orbs */}
        <GlowOrb
          className="left-1/4 top-1/4 h-72 w-72 bg-emerald-500/30"
          delay={0}
        />
        <GlowOrb
          className="right-1/4 bottom-1/4 h-64 w-64 bg-blue-500/20"
          delay={2}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        style={{ y: heroY }}
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center"
      >
        {/* TOP BADGE */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium tracking-wide backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative rounded-full bg-emerald-400" />
          </span>
          <span className="bg-[linear-gradient(90deg,#34d399,#22d3ee)] bg-clip-text text-transparent font-semibold">
            SAAS GROWTH ENGINE
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-2 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Grow Your{" "}
          <span className="bg-[linear-gradient(90deg,#22c55e,#06b6d4,#3b82f6,#eab308)] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            HighLevel
          </span>
          <br className="hidden sm:block" />
          SaaS Business
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-8 max-w-[900px] text-lg leading-relaxed text-neutral-400 sm:text-xl"
        >
          We provide the complete infrastructure, support, and end-to-end
          marketing systems you need to scale your SaaS business. From backend
          setup to automated client acquisition, our team manages everything so
          you can focus on growth and delivering results.
        </motion.p>

        {/* FEATURE PILLS */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex w-full max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {featurePills.map((pill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-neutral-200 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_24px_rgba(255,255,255,0.06)] sm:w-auto ${pill.shadow} hover:${pill.shadow.replace("20", "40")}`}
            >
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${pill.color} shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
              />
              {pill.text}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(135deg,#22c55e,#3b82f6)] px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] bg-[length:200%_auto] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10">Book a Discovery Call</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
