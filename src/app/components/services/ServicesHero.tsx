"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="rounded-full bg-black px-5 py-1.5 text-sm font-semibold uppercase tracking-widest text-green-400">
          Our Services
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Grow Your{" "}
          <span className="text-blue-400">
            HighLevel
          </span>{" "}
          With Expert Systems
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300">
          At Grow HighLevel, we help agencies, coaches, consultants, SaaS
          companies, and local businesses leverage the full power of automation
          and modern marketing systems. We don&apos;t just implement tools. We
          build growth systems.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[linear-gradient(90deg,#22c55e,#ef4444,#eab308)] hover:bg-[length:200%_auto] hover:bg-[position:0%_50%] hover:animate-[gradient_3s_linear_infinite]"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
