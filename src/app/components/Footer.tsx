"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-.6a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3z" />
    </svg>
  );
}

const footerSocials = [
  { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

const services = [
  { label: "CRM Done-For-You", href: "/services" },
  { label: "AI Chatbot Agents", href: "/services" },
  { label: "n8n Automation", href: "/services" },
  { label: "Website & Funnel Development", href: "/services" },
  { label: "Media Buyer Services", href: "/services" },
  { label: "White-Label Support", href: "/services" },
  { label: "Grow SaaS", href: "/grow-saas" },
];

const company = [
  { label: "Meet the CEO", href: "/hire-expert" },
  { label: "FAQ", href: "/hire-expert" },
  { label: "Hire Automation Expert", href: "/hire-expert" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const [btn, setBtn] = useState<"default" | "green" | "red">("default");

  return (
    <footer className="bg-black text-white">
      {/* CTA BANNER */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-500 text-4xl font-bold text-green-500">
            $
          </span>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Ready to Build the Business You{" "}
            <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#fde047)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_4s_linear_infinite]">
              Actually Envisioned?
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Stop wasting time on broken systems and underqualified help. As your
            trusted partner, Grow HighLevel is the team that builds, automates,
            and scales your business the right way — starting today.
          </p>
          <Link
            href="/contact"
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setBtn(e.clientX > rect.left + rect.width / 2 ? "green" : "red");
            }}
            onMouseLeave={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setBtn(e.clientX < rect.left + rect.width / 2 ? "red" : "default");
            }}
            className={`group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              btn === "green"
                ? "bg-green-500 hover:bg-green-600"
                : btn === "red"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#1f6eb0] hover:bg-[#2563eb]"
            }`}
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7cc0f0]">
            <ShieldCheck className="h-4 w-4" />
            No long-term contracts. No stress. Just growth.
          </span>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="Grow HighLevel"
                width={150}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-6 text-slate-400">
              The Done-For-You CRM Services fulfilment agency. We help agency
              owners and business owners grow faster with expert solutions, AI
              automation, and proven marketing systems.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#7cc0f0]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#7cc0f0]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <a
              href="mailto:admin@grow-highlevel.com"
              className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-[#7cc0f0]"
            >
              <Mail className="h-4 w-4 shrink-0" />
              admin@grow-highlevel.com
            </a>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4 shrink-0" />
              Mon–Fri | 9am–6pm EST / GMT
            </p>
            <Link
              href="/contact"
              className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#7cc0f0] transition-colors duration-300 hover:text-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 text-center text-sm text-slate-400 sm:flex-row sm:justify-between sm:text-left">
          <span>
            © 2026 Grow HighLevel. All Rights Reserved. AI Automation &amp; CRM
            Experts.
          </span>
          <div className="flex items-center gap-3">
            {footerSocials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors duration-300 hover:bg-[#1f6eb0] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
