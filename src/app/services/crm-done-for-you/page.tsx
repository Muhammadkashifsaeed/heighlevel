import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";

export default function CRMDoneForYouPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <span className="rounded-full bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-600">
          CRM Done-For-You
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Full CRM Setup,{" "}
          <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
            Done Right
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          We handle your complete GoHighLevel CRM setup, pipeline builds,
          automation workflows, snapshot builds, AI integration, and
          sub-account management so you don&apos;t have to.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
