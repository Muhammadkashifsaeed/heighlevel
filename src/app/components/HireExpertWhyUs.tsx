"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, RefreshCw, Briefcase } from "lucide-react";

const features = [
  {
    num: "01",
    Icon: ShieldCheck,
    title: "Personally Vetted",
    subtitle: "NOT JUST INTERVIEWED",
    desc: "Every expert has worked inside our internal team for a minimum of 3 months before being placed with a client. We know their code, their work ethic, and their reliability.",
  },
  {
    num: "02",
    Icon: Users,
    title: "Senior Team Backed",
    subtitle: "NEVER WORKING ALONE",
    desc: "Your expert isn't working in isolation. Every specialist has a senior team lead they can consult for complex problems, ensuring enterprise-grade solutions.",
  },
  {
    num: "03",
    Icon: RefreshCw,
    title: "Instant Replacement",
    subtitle: "ZERO RISK GUARANTEE",
    desc: "Not the perfect fit? We replace your expert immediately at no cost. No awkward conversations, no lost time, and no disruption to your operations.",
  },
  {
    num: "04",
    Icon: Briefcase,
    title: "White-Label Ready",
    subtitle: "YOUR BRAND, OUR EXECUTION",
    desc: "Your expert operates fully under your brand. They use your email, join your Slack, and attend your client meetings. Your clients will never know we're involved.",
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

export default function HireExpertWhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[140px]" />
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl"
          >
            What Makes a Grow HighLevel
            <br />
            <span className="bg-[linear-gradient(90deg,#22c55e,#34d399,#3b82f6)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
              Expert Different?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            We don&apos;t just match you with freelancers. We place highly trained,
            pre-vetted specialists who are ready to execute from day one.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(52, 211, 153, 0.5)",
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)",
              }}
              className="group flex flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:-translate-y-1">
                <feature.Icon className="h-7 w-7 text-emerald-600 transition-all duration-300 group-hover:text-emerald-500" />
              </div>

              {/* Number */}
              <span className="mt-6 text-5xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-200">
                {feature.num}
              </span>

              {/* Content */}
              <h3 className="mt-4 text-xl font-bold text-[#0F172A]">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                {feature.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
