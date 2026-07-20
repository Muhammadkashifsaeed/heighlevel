"use client";

import { useLayoutEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Users, ArrowRight, Check, Bot } from "lucide-react";

const services = [
  ["GoDigiStartup Experts", "AI Specialists", "Graphic Designers"],
  ["Automation Engineers", "Funnel Builders", "Video Editors"],
  ["N8N Developers", "Media Buyers", "Virtual Assistants"],
];

function Robot() {
  return (
    <motion.div
      animate={{
        x: [0, 20, -10, 15, -5, 0],
        y: [0, -15, -25, -15, -5, 0],
        rotate: [0, 3, -2, 4, -1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-8 right-8 hidden lg:block"
    >
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-green-500/20 blur-2xl" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm">
          <Bot className="h-14 w-14 text-green-400" />
        </div>
      </div>
    </motion.div>
  );
}

function FloatingOrb({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: string; color: string }) {
  const xNum = parseFloat(x);
  const yNum = parseFloat(y);
  return (
    <motion.div
      animate={{
        x: [xNum - 20, xNum + 20, xNum - 10, xNum + 15, xNum - 20],
        y: [yNum - 20, yNum + 20, yNum - 10, yNum + 15, yNum - 20],
        opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 12 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute rounded-full blur-3xl ${color}`}
      style={{ width: size, height: size, left: x, top: y }}
    />
  );
}

export default function HireExpertHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x * 0.02);
      mouseY.set(y * 0.02);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const bgX = useTransform(springX, [-300, 300], [-20, 20]);
  const bgY = useTransform(springY, [-300, 300], [-20, 20]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-green-950 via-black to-blue-950 py-24"
    >
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.15)_0%,_transparent_70%)]" />
      </motion.div>

      <FloatingOrb delay={0} x="10%" y="20%" size="400px" color="bg-green-500/10" />
      <FloatingOrb delay={3} x="60%" y="50%" size="300px" color="bg-blue-500/10" />
      <FloatingOrb delay={6} x="80%" y="10%" size="350px" color="bg-purple-500/10" />
      <FloatingOrb delay={2} x="30%" y="70%" size="250px" color="bg-cyan-500/10" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 backdrop-blur-sm"
        >
          <Users className="h-4 w-4 text-green-400" />
          <span className="text-sm font-semibold uppercase tracking-widest text-green-400">
            Expert Talent Pool
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl"
        >
          Build Your Dream Team.
          <br />
          <span className="bg-[linear-gradient(90deg,#22c55e,#06b6d4,#3b82f6,#a855f7,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
            Zero Hiring Headaches.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          Need ongoing support? Hire a dedicated GoDigiStartup Expert, automation
          specialist, designer, media buyer, or virtual assistant to become a
          seamless extension of your agency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {services.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors duration-300 hover:border-green-500/30 hover:bg-white/10"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-green-400">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-6"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]"
          >
            Hire Your Expert Team
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-950 bg-gradient-to-br from-green-500 to-blue-500 text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
              +50
            </span>
          </div>
        </motion.div>
      </motion.div>

      <Robot />
    </section>
  );
}
