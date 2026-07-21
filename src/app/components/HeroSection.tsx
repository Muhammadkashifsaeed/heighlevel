"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, MessageSquare, TrendingUp, Zap } from "lucide-react";

const pipeline = [
  { label: "Leads", pct: 82 },
  { label: "Calls", pct: 64 },
  { label: "Closed", pct: 47 },
];

const workflowNodes = [
  { x: 20, y: 30 },
  { x: 50, y: 60 },
  { x: 80, y: 30 },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:py-32">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0F172A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[140px]" />
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.6fr_1fr]">
          {/* LEFT - Floating Cards */}
          <div className="flex flex-col gap-6">
            {/* AI Agent Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
                  <Bot className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">AI Agent</h3>
                  <span className="text-xs font-semibold text-emerald-600">
                    ACTIVE
                  </span>
                </div>
                <span className="ml-auto flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                12 leads qualified today
              </p>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.6)]"
                  />
                ))}
              </div>
            </motion.div>

            {/* Chatbot Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Chatbot</h3>
                  <p className="text-xs text-slate-500">Replying...</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:0.4s]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* CENTER - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-bold uppercase tracking-widest bg-[linear-gradient(90deg,#22c55e,#06b6d4)] bg-clip-text text-transparent">
              Scale Your DigiStartup
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Stop Building Alone.{" "}
              <span className="bg-[linear-gradient(90deg,#22c55e,#34d399,#06b6d4,#3b82f6,#6366f1,#eab308)] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]">
                Start DigiStartup
              </span>{" "}
              With The Right Team.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Your agency grows when your fulfillment actually works. We handle
              the full DigiStartup build — CRM setup, pipeline management,
              automations, workflows, funnels, AI chatbots, Facebook Ads, Google
              Ads, Klaviyo, ActiveCampaign, and end-to-end tech support so you
              scale without the stress.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]"
              >
                Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-900 hover:bg-slate-100 hover:shadow-lg"
              >
                See Our Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT - Floating Cards */}
          <div className="flex flex-col gap-6">
            {/* Pipeline Status */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">
                  Pipeline Status
                </h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  +$12k
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {pipeline.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        className="h-2 rounded-full bg-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Workflow Triggered */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
                  <Zap className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Workflow Triggered
                  </h3>
                  <p className="text-xs text-slate-500">Automation running</p>
                </div>
              </div>

              {/* Workflow visualization */}
              <div className="relative mt-4 h-16">
                <svg className="absolute inset-0 h-full w-full">
                  <path
                    d="M 20 30 Q 50 60 80 30"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
                {workflowNodes.map((node, i) => (
                  <div
                    key={i}
                    className="absolute h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  />
                ))}
              </div>

              <div className="mt-3 flex justify-center">
                <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold text-yellow-600">
                  AUTOMATION LIVE
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
