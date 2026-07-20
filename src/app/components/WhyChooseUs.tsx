"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Search,
  Users,
  MousePointerClick,
  Bot,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Bell,
  Filter,
  Settings,
} from "lucide-react";

const features = [
  "Proven expertise across multiple industries",
  "Custom digital strategies tailored to your business",
  "SEO, Web Design, and Development under one roof",
  "Dedicated team with transparent communication",
  "Scalable solutions focused on long-term growth",
];

const sidebar = [
  { Icon: LayoutDashboard, label: "Dashboard", active: true },
  { Icon: Users, label: "CRM" },
  { Icon: Search, label: "SEO" },
  { Icon: Mail, label: "Email" },
  { Icon: MessageSquare, label: "Chat" },
  { Icon: Bell, label: "Alerts" },
  { Icon: Settings, label: "Settings" },
];

const bars = [45, 62, 50, 78, 66, 88, 95, 72, 84];

function StatCard({
  Icon,
  label,
  value,
  sub,
  accent,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
  accent: string;
}) {
  return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
        <div className={`flex h-6 w-6 items-center justify-center rounded-lg ${accent}`}>
          <Icon className="h-3 w-3" />
      </div>
      <p className="mt-2 text-base font-bold text-white">{value}</p>
      <p className="text-[10px] text-slate-400">{label}</p>
      <p className="text-[10px] text-green-400">{sub}</p>
    </div>
  );
}

function BarMini({ h, mounted }: { h: number; mounted: boolean }) {
  return (
    <div
      className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/40 to-green-400/80 transition-[height] duration-700 ease-out"
      style={{ height: mounted ? `${h}%` : "0%", transitionDelay: "120ms" }}
    />
  );
}

export default function WhyChooseUs() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Grow Your Business With{" "}
            <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
              Digital Marketing
            </span>{" "}
            Experts.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            We help businesses achieve sustainable growth through innovative
            digital solutions. From SEO and Web Development to Branding, UI/UX
            Design, and Performance Marketing, our expert team delivers
            measurable results that increase visibility, generate qualified
            leads, and drive long-term success.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3">
            {features.map((f) => (
              <li key={f} className="group flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-400 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Check className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* RIGHT - PREMIUM DASHBOARD */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-[520px] overflow-hidden animate-[float_6s_ease-in-out_infinite] rounded-3xl border border-white/10 bg-slate-900/70 p-3 shadow-2xl backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative">
              {/* SIDEBAR + HEADER */}
              <div className="flex gap-3">
                <div className="flex w-10 shrink-0 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 backdrop-blur-md">
                  {sidebar.map(({ Icon, label, active }) => (
                    <span
                      key={label}
                      title={label}
                      className={`flex h-6 w-6 items-center justify-center rounded-lg transition-colors ${
                        active
                          ? "bg-green-500/20 text-green-400"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md">
                    <p className="text-sm font-semibold text-white">GrowHighLevel</p>
                    <span className="flex items-center gap-1.5 text-[10px] font-semibold text-green-400">
                      <span className="h-1.5 w-1.5 animate-ping rounded-full bg-green-400" />
                      LIVE
                    </span>
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <StatCard Icon={TrendingUp} label="Revenue" value="$48.2k" sub="▲ 24%" accent="bg-green-500/20 text-green-400" />
                    <StatCard Icon={Users} label="New Leads" value="342" sub="▲ 18%" accent="bg-blue-500/20 text-blue-400" />
                    <StatCard Icon={MousePointerClick} label="Active CRM" value="1.2k" sub="99.9%" accent="bg-yellow-500/20 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* PERFORMANCE CHART */}
              <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Performance Analytics</span>
                  <span className="text-green-400">▲ 92%</span>
                </div>
                <div className="mt-2 flex h-14 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <BarMini key={i} h={h} mounted={mounted} />
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-4 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-400" /> Visitors
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-blue-400" /> Clicks
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" /> Conv.
                  </span>
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Bot className="h-3.5 w-3.5 text-green-400" /> AI Assistant
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <p className="w-4/5 rounded-lg bg-white/10 px-2 py-1 text-[10px] text-slate-300">
                      Hi! How can I help?
                    </p>
                    <p className="ml-auto w-4/5 rounded-lg bg-green-500/20 px-2 py-1 text-right text-[10px] text-green-300">
                      Book a call
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Filter className="h-3.5 w-3.5 text-blue-400" /> Sales Funnel
                  </div>
                  <p className="mt-2 text-lg font-bold text-white">8.4%</p>
                  <p className="text-[10px] text-slate-400">Conversion rate</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-400" style={{ width: "84%" }} />
                  </div>
                </div>
              </div>

              {/* SEO / GSC + WORKFLOW */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                  <p className="text-[11px] text-slate-400">Google Search Console</p>
                  <div className="mt-1.5 flex justify-between text-[10px] text-slate-300">
                    <span>Impressions</span>
                    <span className="text-white">12.4k</span>
                  </div>
                  <div className="mt-1 flex justify-between text-[10px] text-slate-300">
                    <span>Clicks</span>
                    <span className="text-white">3.1k</span>
                  </div>
                  <div className="mt-1 flex justify-between text-[10px] text-slate-300">
                    <span>Avg Pos</span>
                    <span className="text-green-400">#1</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                  <p className="text-[11px] text-slate-400">Workflow Status</p>
                  <p className="mt-1.5 text-sm font-semibold text-white">Running</p>
                  <p className="text-[10px] text-green-400">12 automations live</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["SEO", "Ads", "Email", "CRM"].map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FLOATING NOTIFICATIONS */}
              <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-xl border border-green-400/30 bg-slate-900/90 px-3 py-2 shadow-[0_0_20px_rgba(34,197,94,0.35)] backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
                  <Bell className="h-3 w-3" />
                </span>
                <div className="text-[10px] leading-tight">
                  <p className="font-semibold text-white">New lead captured</p>
                  <p className="text-green-400">+1 conversion</p>
                </div>
              </div>
              <div className="absolute -left-3 bottom-10 flex items-center gap-2 rounded-xl border border-blue-400/30 bg-slate-900/90 px-3 py-2 shadow-[0_0_20px_rgba(59,130,246,0.35)] backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <Mail className="h-3 w-3" />
                </span>
                <div className="text-[10px] leading-tight">
                  <p className="font-semibold text-white">Campaign sent</p>
                  <p className="text-blue-400">3.1k clicks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
