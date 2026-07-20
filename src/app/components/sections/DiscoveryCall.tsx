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

          {/* Calendly Inline Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 w-full max-w-3xl"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/your-link"
              style={{ minWidth: "320px", height: "700px" }}
            />
            <script
              src="https://assets.calendly.com/inline_embed.js"
              async
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
