"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    title: "Proven Funnels",
    desc: "Deploy our battle-tested SaaS funnels designed specifically to convert cold traffic into trial users and paid subscribers.",
  },
  {
    num: "02",
    title: "Lead Generation",
    desc: "We implement automated lead generation systems and ad strategies to keep your pipeline full of qualified prospects.",
  },
  {
    num: "03",
    title: "Sales Support",
    desc: "Get access to our proven sales scripts, objection handling frameworks, and closing strategies used by top agencies.",
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

export default function GrowSaasClients() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute right-[20%] top-[40%] h-[300px] w-[300px] rounded-full bg-blue-200/20 blur-[100px]" />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            0 to 50 SaaS Clients
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] font-extrabold leading-tight tracking-tight text-slate-900"
        >
          We Help You Get Your{" "}
          <span className="bg-[linear-gradient(90deg,#22c55e,#34d399,#3b82f6,#eab308)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
            First 50 SaaS Clients
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-[850px] text-center text-sm sm:text-base md:text-lg leading-relaxed text-slate-600"
        >
          Scaling from zero is the hardest part. We don&apos;t just build your CRM
          infrastructure—we provide the proven marketing systems, funnels, and
          sales strategies to help you acquire your first 50 paying subscribers
          fast.
        </motion.p>

        {/* CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)",
              }}
              className="group flex flex-col rounded-2xl sm:rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
            >
              {/* Number */}
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-emerald-200">
                {card.num}
              </span>

              {/* Content */}
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-lg font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
