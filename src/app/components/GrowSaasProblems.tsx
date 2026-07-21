"use client";

import { motion } from "framer-motion";
import { Clock, Shield, BarChart3 } from "lucide-react";

const problems = [
  {
    num: "01",
    Icon: Clock,
    title: "Slow Onboarding",
    desc: "Manual onboarding processes consume valuable time, delay customer activation, and create a poor first impression that increases early churn.",
  },
  {
    num: "02",
    Icon: Shield,
    title: "Tech Support Overload",
    desc: "Your team spends countless hours answering repetitive questions instead of focusing on product improvements and business growth.",
  },
  {
    num: "03",
    Icon: BarChart3,
    title: "High Churn Rates",
    desc: "Customers leave because they struggle to understand the platform, fail to see quick wins, and never experience the full value of your service.",
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

export default function GrowSaasProblems() {
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
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] font-extrabold leading-tight tracking-tight text-white"
        >
          Running a SaaS is Hard.{" "}
          <span className="bg-[linear-gradient(90deg,#22c55e,#34d399)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
            We Make it Easy.
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-[850px] text-center text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400"
        >
          Most agency owners hit a ceiling because they get overwhelmed with
          technical operations, onboarding, and client support instead of
          focusing on growing their business.
        </motion.p>

        {/* CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.num}
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
              className="group flex flex-col rounded-2xl sm:rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-300/50 hover:bg-white/10 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 group-hover:border-emerald-400/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:-translate-y-1 sm:h-12 sm:w-12">
                <problem.Icon className="h-6 w-6 text-emerald-400 transition-all duration-300 group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              </div>

              {/* Content */}
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-bold text-white">{problem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
