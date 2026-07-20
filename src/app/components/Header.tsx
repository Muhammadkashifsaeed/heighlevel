"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Grow SaaS", href: "/grow-saas" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Hire GoHighLevel Expert", href: "/hire-expert" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-4 pt-3 sm:px-6" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-full border border-border px-6 shadow-sm backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-white" : "bg-card/70"
        }`}
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="GrowHigh logo"
              width={120}
              height={36}
              priority
              className="h-9 w-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap transition-colors hover:text-muted"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-blue-500 transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[linear-gradient(90deg,#22c55e,#eab308,#ef4444)] hover:bg-[length:200%_auto] hover:animate-[gradient_3s_linear_infinite]"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </header>
  );
}
