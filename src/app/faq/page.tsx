import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What is GoHighLevel?",
    a: "GoHighLevel is an all-in-one CRM and marketing platform designed for agencies. We help you set it up, automate it, and scale it.",
  },
  {
    q: "How fast can you set up my account?",
    a: "Most accounts are fully configured within 7-14 days, depending on complexity and the services you need.",
  },
  {
    q: "Do you work under my brand?",
    a: "Yes. Our white-label support means we work behind the scenes under your agency brand so your clients never know the difference.",
  },
  {
    q: "What is included in your support?",
    a: "We handle CRM setup, pipeline management, automations, workflows, funnels, AI chatbots, ads management, and ongoing tech support.",
  },
];

export default function FaqPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
          FAQ
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Frequently Asked{" "}
          <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
            Questions
          </span>
        </h1>
        <div className="mt-10 space-y-6">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">{q}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Still Have Questions?
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
