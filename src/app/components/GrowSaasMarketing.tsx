"use client";

import { motion } from "framer-motion";
import { Target, Mail, Play, Search } from "lucide-react";

const cards = [
  {
    num: "01",
    Icon: Target,
    title: "Paid Acquisition",
    desc: "Strategic ad campaigns engineered to drive qualified trials at the lowest Cost Per Acquisition.",
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    size: "lg:col-span-6",
  },
  {
    num: "02",
    Icon: Mail,
    title: "Automated Nurture",
    desc: "Email & SMS sequences that convert free trials into paying subscribers.",
    color: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    size: "lg:col-span-6",
  },
  {
    num: "03",
    Icon: Play,
    title: "High-Converting VSLs",
    desc: "Video Sales Letters that perfectly articulate your platform's value.",
    color: "text-yellow-400",
    border: "group-hover:border-yellow-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]",
    size: "lg:col-span-6",
  },
  {
    num: "04",
    Icon: Search,
    title: "SEO & Organic Growth",
    desc: "Long-term strategies to build authority and drive high-intent organic traffic to your funnels.",
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    size: "lg:col-span-6",
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

export default function GrowSaasMarketing() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-12 sm:py-16 md:py-24">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-neutral-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            MARKETING ECOSYSTEM
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] font-extrabold leading-tight tracking-tight text-white"
        >
          The Engine to
          <br />
          <span className="bg-[linear-gradient(90deg,#22c55e,#34d399)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
            Scale Your DigiStartup
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-[850px] text-center text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400"
        >
          We engineer the entire marketing machine that acquires, nurtures, and
          closes your SaaS clients automatically.
        </motion.p>

        {/* CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
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
              className={`group relative flex flex-col rounded-2xl sm:rounded-[28px] border border-white/10 bg-[#111] p-5 sm:p-6 md:p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-300/50 hover:bg-[#161616] hover:shadow-2xl col-span-1 sm:col-span-2 lg:col-span-6 ${card.shadow}`}
            >
              {/* Inner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 group-hover:border-emerald-400/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:-translate-y-1 sm:h-12 sm:w-12`}>
                <card.Icon className={`h-6 w-6 ${card.color} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]`} />
              </div>

              {/* Number */}
              <span className="hidden sm:block mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white/10 transition-colors duration-300 group-hover:text-emerald-200/30">
                {card.num}
              </span>

              {/* Content */}
              <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-[34px] font-bold text-white leading-tight">
                {card.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-neutral-400">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
