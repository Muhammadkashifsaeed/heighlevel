"use client";

import { motion } from "framer-motion";
import { Bot, Check, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Agents & Chatbot Development",
    subheading: "Turn Your Business Into a 24/7 Sales Machine",
    description:
      "We build custom AI-powered chatbots and intelligent voice agents that qualify leads, answer customer questions, automate appointment bookings, and provide instant customer support. Our AI solutions integrate seamlessly with your existing business systems to improve efficiency and customer engagement.",
    features: [
      "AI Chatbot Development",
      "Lead Qualification Bots",
      "Appointment Booking Agents",
      "AI Knowledge Base Training",
      "Conversational AI Setup",
      "Multi-Channel Deployment",
    ],
    Icon: Bot,
    badge: "SERVICE DETAILS",
  },
];

export default function AIServiceDetails() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top-right,rgba(52,211,153,0.10)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom-left,rgba(56,189,248,0.10)_0%,transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
              <div className="relative order-2 flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-12 lg:order-1">
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-60 lg:w-60"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-sky-400/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border border-emerald-400/15"
                  />

                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18)_0%,transparent_70%)]"
                  />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-5 -right-5 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10">
                      <Check className="h-4 w-4 text-emerald-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-slate-900 p-3 shadow-xl backdrop-blur"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20">
                      <Bot className="h-4 w-4 text-sky-400" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="relative flex h-24 w-24 items-center justify-center rounded-[24px] border border-slate-200 bg-white shadow-2xl sm:h-28 sm:w-28 md:h-32 md:w-36 lg:h-36 lg:w-36"
                  >
                    <div className="absolute -inset-5 rounded-[28px] bg-emerald-500/10 blur-2xl" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/15 to-sky-500/15 backdrop-blur-sm">
                      <Bot className="h-7 w-7 text-yellow-500 md:h-8 md:w-8" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="order-1 p-4 sm:p-6 md:p-10 lg:p-12 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]"
                >
                  <Bot className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    {service.badge}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  whileHover={{ color: "#059669" }}
                  className="cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900 transition-colors duration-300"
                >
                  {service.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mt-1 text-sm sm:text-base font-bold text-blue-600 md:text-lg"
                >
                  {service.subheading}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-2 max-w-[700px] text-sm sm:text-base leading-[1.7] text-slate-600 md:text-lg"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="mt-6"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">What&apos;s Included</h3>
                  <div className="mt-1.5 sm:mt-2 h-px w-full bg-gradient-to-r from-emerald-500/40 via-sky-500/30 to-transparent" />
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
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] sm:gap-3 sm:rounded-2xl sm:p-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-[0_0_18px_rgba(52,211,153,0.35)] transition-all duration-300">
                        <Check className="h-3.5 w-3.5" />
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
                    className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-sky-600 px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-[0_0_45px_rgba(52,211,153,0.35)] sm:px-6 sm:py-3"
                  >
                    <span>Get Started</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
