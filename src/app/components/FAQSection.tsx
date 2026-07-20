"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does DigiStartup provide?",
    a: "DigiStartup provides complete GoHighLevel CRM setup, AI automation, N8N workflow development, conversion-focused funnel building, and dedicated GoHighLevel Virtual Assistants (VAs) for agencies, coaches, and SaaS companies.",
  },
  {
    q: "Can I hire a dedicated GoHighLevel Virtual Assistant?",
    a: "Yes. We provide highly trained, dedicated GoHighLevel Virtual Assistants and system experts who integrate directly into your team to handle CRM management, pipeline optimization, and daily technical fulfillment.",
  },
  {
    q: "How does AI automation integrate with GoHighLevel?",
    a: "We build custom AI voice agents and chatbots that integrate directly into your GoHighLevel pipelines. These AI agents can qualify leads, answer customer questions, and book appointments automatically 24/7.",
  },
  {
    q: "Do you offer white-label GoHighLevel support for agencies?",
    a: "Absolutely. We provide comprehensive white-label agency fulfillment, meaning our team builds the funnels, workflows, and automations completely under your brand, allowing you to scale without hiring internally.",
  },
  {
    q: "Why should we hire you instead of a standard marketing agency?",
    a: "We are technical growth partners, not just a marketing agency. We focus on the backend infrastructure—building the CRM systems, AI agents, and complex N8N automations that actually allow your business to scale operations and handle more lead volume efficiently.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex justify-center">
          <p className="rounded-full bg-black px-5 py-1.5 text-sm font-semibold uppercase tracking-widest text-green-400">
            Answers &amp; Insight
          </p>
        </div>
        <h2 className="mt-4 text-center text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Frequently Asked{" "}
          <span className="text-green-600">Questions</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600">
          Everything you need to know about our GoHighLevel infrastructure and
          AI automation services.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map(({ q, a }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={q}
                className="rounded-2xl border border-slate-200 bg-white transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isOpen ? "text-green-600" : "text-slate-900"
                    }`}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-green-600" : "text-slate-400"
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-4 text-sm leading-6 text-slate-600">
                    {a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
