"use client";

import {
  Settings,
  Workflow,
  Users,
  Bot,
  Plug,
  Globe,
  TrendingUp,
  Palette,
  Video,
} from "lucide-react";

const services = [
  {
    Icon: Settings,
    color: "text-blue-500 bg-blue-50",
    title: "DigiStartup CRM Setup & Management",
    desc: "DigiStartup is one of the most powerful CRM and marketing automation platforms available today, but most businesses only use a fraction of its capabilities. We help you set up and optimize your DigiStartup account for maximum performance, ensuring your CRM is organized, efficient, and ready to scale with your business.",
  },
  {
    Icon: Workflow,
    color: "text-green-500 bg-green-50",
    title: "GHL Automation & Workflow Development",
    desc: "Our team specializes in building advanced automation systems that reduce manual work and increase conversion rates. From lead nurturing and follow-up sequences to appointment reminders and customer onboarding, we create smart workflows that save time and improve business efficiency.",
  },
  {
    Icon: Users,
    color: "text-purple-500 bg-purple-50",
    title: "White Label Agency Support",
    desc: "We provide white-label fulfillment and backend support for agencies that want to deliver more while focusing on sales and client relationships. Our experienced team works behind the scenes to manage DigiStartup services under your brand, helping you scale without increasing overhead.",
  },
  {
    Icon: Bot,
    color: "text-cyan-500 bg-cyan-50",
    title: "AI Agents & Chatbot Development",
    desc: "We build custom AI-powered chatbots and voice agents that qualify leads, answer customer questions, schedule appointments, and provide instant support. Our intelligent AI solutions help businesses automate conversations, improve customer experience, and increase conversions around the clock.",
  },
  {
    Icon: Plug,
    color: "text-orange-500 bg-orange-50",
    title: "N8N Automation & Custom Integrations",
    desc: "When native integrations aren't enough, N8N unlocks unlimited automation possibilities. Our engineers build custom workflows that connect your favorite apps, automate repetitive tasks, synchronize data, and streamline business operations with reliable, scalable integrations.",
  },
  {
    Icon: Globe,
    color: "text-pink-500 bg-pink-50",
    title: "Funnels, Websites & Landing Pages",
    desc: "Your website should do more than look great—it should generate results. We create high-converting websites, sales funnels, and landing pages that are optimized for user experience, lead generation, and business growth, helping you turn visitors into loyal customers.",
  },
  {
    Icon: TrendingUp,
    color: "text-red-500 bg-red-50",
    title: "Paid Media & Lead Generation",
    desc: "Our paid media specialists create data-driven advertising campaigns that generate high-quality leads and maximize your return on investment. From Google Ads to Facebook and Instagram campaigns, we help businesses attract the right audience, increase conversions, and scale profitably.",
  },
  {
    Icon: Palette,
    color: "text-yellow-600 bg-yellow-50",
    title: "Creative & Design Services",
    desc: "Our creative team delivers eye-catching designs that strengthen your brand identity and leave a lasting impression. From social media graphics and marketing materials to branding assets and UI/UX design, we create visuals that engage your audience and support your business goals.",
  },
  {
    Icon: Video,
    color: "text-teal-500 bg-teal-50",
    title: "Video Editing & Content Creation",
    desc: "Short-form content is one of the fastest-growing marketing tools today. We produce professional video edits and engaging content for social media, advertisements, and promotional campaigns that capture attention, boost engagement, and help your brand grow online.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600 sm:px-5 sm:py-1.5 sm:text-sm">
            Explore Our
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-4 sm:text-3xl sm:text-4xl">
            Core{" "}
            <span className="text-green-600">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
            Select a service below to jump to its full details and features.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, color, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md sm:rounded-3xl sm:p-7"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl ${color}`}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <h3 className="mt-3 text-base font-bold text-slate-900 sm:mt-5 sm:text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
