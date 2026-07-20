import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MediaBuyerPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <span className="rounded-full bg-pink-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink-600">
          Media Buyer Services
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Ads That{" "}
          <span className="bg-[linear-gradient(90deg,#ef4444,#2563eb,#22c55e)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_4s_linear_infinite]">
            Drive ROI
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          Google, Facebook & TikTok ad campaigns managed by experts who drive
          real ROI — not just impressions and clicks.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Scale Your Ads
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
