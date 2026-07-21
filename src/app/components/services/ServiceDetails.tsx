"use client";

import { motion } from "framer-motion";
import { Settings, Check, ArrowRight } from "lucide-react";

const services = [
  {
    title: "DigiStartup CRM Setup & Management",
    subheading: "Done-For-You GHL Implementation by Certified Experts",
    description:
      "DigiStartup is one of the most powerful CRM and marketing automation platforms available today, but most businesses only use a fraction of its capabilities. Our experts build, optimize, and manage complete CRM systems that help businesses automate lead generation, sales, marketing, customer communication, and onboarding.",
    features: [
      "Complete CRM Account Setup",
      "SaaS Mode & White Label Config",
      "Lead Routing & Segmentation",
      "Calendar & Booking Systems",
      "Snapshot Creation & Optimization",
      "A2P 10DLC Compliance Setup",
    ],
    Icon: Settings,
    badge: "SERVICE DETAILS",
  },
];

export default function ServiceDetails() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10)_0%,transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:rounded-[32px]"
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="p-5 md:p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] sm:mb-6 sm:px-4 sm:py-1.5"
                >
                  <Settings className="h-3.5 w-3.5 text-green-500 sm:h-4 sm:w-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-green-600 sm:text-sm">
                    {service.badge}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-2xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-3xl lg:text-4xl lg:text-5xl"
                >
                  <span className="bg-[linear-gradient(90deg,#22c55e,#10b981,#06b6d4)] bg-[length:200%_auto] bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mt-2 text-base font-bold text-blue-600 md:text-lg"
                >
                  {service.subheading}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-2 max-w-[700px] text-sm leading-[1.7] text-slate-600 md:text-base md:text-lg"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="mt-5"
                >
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">What&apos;s Included</h3>
                  <div className="mt-1.5 h-px w-full bg-gradient-to-r from-green-500/40 via-blue-500/30 to-transparent sm:mt-2" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
                >
                  {service.features.map((feature, fIdx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.55 + fIdx * 0.05 }}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:border-green-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] sm:gap-3 sm:rounded-2xl sm:p-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500 shadow-[0_0_18px_rgba(34,197,94,0.35)] transition-all duration-300 sm:h-7 sm:w-7">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                      <span className="text-xs font-medium text-slate-800 sm:text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="mt-6"
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-[0_0_45px_rgba(34,197,94,0.35)] sm:px-6 sm:py-3 sm:text-base"
                  >
                    <span>Get Started</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>

              <div className="relative flex items-center justify-center p-5 md:p-8 lg:p-12">
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-52 lg:w-52"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-blue-500/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border border-green-500/15"
                  />

                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,transparent_70%)]"
                  />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-5 -right-5 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-500/10">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-slate-900 p-3 shadow-xl backdrop-blur"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/20">
                      <Settings className="h-4 w-4 text-blue-400" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="relative flex h-24 w-24 items-center justify-center rounded-[24px] border border-slate-200 bg-white shadow-2xl sm:h-28 sm:w-28 md:h-32 md:w-36 lg:h-36 lg:w-36"
                  >
                    <div className="absolute -inset-5 rounded-[28px] bg-green-500/10 blur-2xl" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/15 to-blue-500/15 backdrop-blur-sm">
                      <Settings className="h-7 w-7 text-green-500 md:h-8 md:w-8" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
