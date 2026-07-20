"use client";

import {
  Compass,
  Users,
  Map,
  Hammer,
  Gauge,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    Icon: Compass,
    accent: "bg-green-100 text-green-600",
    dot: "bg-green-500",
    divider: "bg-green-500",
    title: "Discover & Onboard",
    body: "We understand your agency and goals. You get a Slack channel and a ready team from day one.",
  },
  {
    Icon: Users,
    accent: "bg-blue-100 text-blue-600",
    dot: "bg-blue-500",
    divider: "bg-blue-500",
    title: "Build Your Team",
    body: "We assign dedicated GoHighLevel experts CRM specialists and automation builders under your brand.",
  },
  {
    Icon: Map,
    accent: "bg-yellow-100 text-yellow-600",
    dot: "bg-yellow-500",
    divider: "bg-yellow-500",
    title: "Map Strategy",
    body: "We build a custom plan for funnels, automations, and AI workflows before we start building.",
  },
  {
    Icon: Hammer,
    accent: "bg-purple-100 text-purple-600",
    dot: "bg-purple-500",
    divider: "bg-red-500",
    title: "Build & Automate",
    body: "Our team builds your funnels, pipelines, and AI chatbots fully optimized to deliver results.",
  },
  {
    Icon: Gauge,
    accent: "bg-pink-100 text-pink-600",
    dot: "bg-pink-500",
    divider: "bg-green-500",
    title: "Manage & Optimize",
    body: "We continuously monitor and optimize everything using data and proven systems.",
  },
  {
    Icon: TrendingUp,
    accent: "bg-teal-100 text-teal-600",
    dot: "bg-teal-500",
    divider: "bg-blue-500",
    title: "Scale Confidently",
    body: "With fulfillment handled, you focus on closing deals. We scale delivery alongside your growth.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-black px-5 py-1.5 text-sm font-semibold text-green-400">
            How We Work
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            The Ultimate{" "}
            <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
              Fulfillment Process
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            A seamless, transparent, and highly optimized process designed to
            take the fulfillment burden completely off your shoulders so you
            can focus on scaling.
          </p>
        </div>

        {/* 6 BOXES IN ONE ROW WITH DIVIDERS */}
        <div className="mt-14 flex items-stretch justify-center">
          {steps.map((step, idx) => {
            const { Icon, accent, title, body, divider } = step;
            return (
              <div
                key={title}
                className="group relative flex w-64 flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-50/50 hover:shadow-lg"
              >
                {/* Golden dot at top center on hover */}
                <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-amber-400 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100" />

                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {body}
                </p>

                {/* Vertical divider between boxes */}
                {idx < steps.length - 1 && (
                  <span className={`absolute -right-2.5 top-1/2 h-12 w-1 -translate-y-1/2 rounded-full ${divider} opacity-60`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
