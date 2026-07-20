"use client";

import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";
import PipelineCarousel from "./PipelineCarousel";

const leftBoxes = [
  {
    Icon: Bot,
    title: "AI Agent",
    desc: "12 leads qualified today",
  },
  {
    Icon: Bot,
    title: "Chatbots",
    desc: "Replying...",
  },
];

const pipeline = [
  { label: "Leads", pct: 82 },
  { label: "Calls", pct: 64 },
  { label: "Closed", pct: 47 },
];
const pipelineTotal = "+12$";

function Box({
  Icon,
  title,
  desc,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mt-3 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-[1fr_1.4fr_1fr]">
        {/* LEFT - 2 boxes */}
        <div className="flex flex-col gap-6">
          {leftBoxes.map((b) => (
            <Box key={b.title} {...b} />
          ))}
        </div>

        {/* CENTER - Text */}
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            Scale Your HighLevel
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Stop Building Alone.{" "}
            <span className="bg-[linear-gradient(90deg,#ef4444,#2563eb,#22c55e)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_4s_linear_infinite]">
              Start Growing
            </span>{" "}
            With The Right Team.
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            Your agency grows when your fulfillment actually works. We handle
            the full GoHighLevel build — CRM setup, pipeline management,
            automations, workflows, funnels, AI chatbots, Facebook Ads, Google
            Ads, Klaviyo, ActiveCampaign, and end-to-end tech support so you
            scale without the stress.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-100"
            >
              See Our Services
            </Link>
          </div>
        </div>

        {/* RIGHT - 2 boxes */}
        <div className="flex flex-col gap-6">
          {/* Pipeline Status */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">
                Pipeline Status
              </h3>
              <span className="text-xs font-bold text-blue-600">
                {pipelineTotal}
              </span>
            </div>
            <div className="mt-3 flex flex-col gap-2.5">
              {pipeline.map((b) => {
                const isBlue = b.pct >= 60;
                const bar = isBlue ? "bg-blue-500" : "bg-red-500";
                return (
                  <div key={b.label}>
                    <div
                      className={`flex items-center justify-between text-[11px] font-semibold ${
                        isBlue ? "text-blue-600" : "text-red-500"
                      }`}
                    >
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-1.5 rounded-full ${bar}`}
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Workflow Triggered */}
          <div className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500">
              <span className="h-2 w-2 animate-ping rounded-full bg-green-500" />
            </span>
            <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-blue-600">
              Automation Live
            </h3>
            <p className="mt-1 text-[11px] text-slate-500">Workflow Triggered</p>
            <Link
              href="/services"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              View Workflow
            </Link>
          </div>
        </div>
      </div>

      {/* PIPELINE IMAGES - under hero */}
      <PipelineCarousel />
    </section>
  );
}
