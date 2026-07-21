import Link from "next/link";
import {
  Rocket,
  Bot,
  Workflow,
  Code2,
  Megaphone,
  Headphones,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    Icon: Rocket,
    accent: "bg-green-100 text-green-600",
    title: "DigiStartup Done-For-You",
    body: "Full CRM setup, pipeline builds, Gohighlevel automation workflows, snapshot builds, AI integration, and sub-account management.",
  },
  {
    Icon: Bot,
    accent: "bg-blue-100 text-blue-600",
    title: "AI Chatbot & Agents",
    body: "Custom-trained AI agents that qualify leads, book appointments, and follow up — 24/7 on autopilot.",
  },
  {
    Icon: Workflow,
    accent: "bg-yellow-100 text-yellow-600",
    title: "n8n Automation Services",
    body: "Connect your tools, automate ops, and eliminate repetitive tasks with powerful custom n8n workflows.",
  },
  {
    Icon: Code2,
    accent: "bg-purple-100 text-purple-600",
    title: "Website & Funnel Dev",
    body: "High-converting landing pages, full websites, and sales funnels designed to capture leads and close deals.",
  },
  {
    Icon: Megaphone,
    accent: "bg-pink-100 text-pink-600",
    title: "Media Buyer Services",
    body: "Google, Facebook & TikTok ad campaigns managed by experts who drive ROI — not just impressions.",
  },
  {
    Icon: Headphones,
    accent: "bg-teal-100 text-teal-600",
    title: "White-Label Support",
    body: "We work under your gohighlevel agency brand so your clients get expert-level service without you doing the work.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* CENTER HEADER */}
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-black px-5 py-1.5 text-sm font-semibold text-green-400">
            Our Services
          </span>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Everything You Need to Grow{" "}
            <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
              Under One Roof.
            </span>
          </h2>
        </div>

        {/* 6 BOXES - 3 + 3 */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, accent, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg sm:rounded-3xl sm:p-7"
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent} transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl`}>
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <h3 className="mt-3 text-base font-bold text-slate-900 sm:mt-5 sm:text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[linear-gradient(90deg,#22c55e,#ef4444,#eab308)] hover:bg-[length:200%_auto] hover:bg-[position:0%_50%] hover:animate-[gradient_3s_linear_infinite]"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Explore more services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
