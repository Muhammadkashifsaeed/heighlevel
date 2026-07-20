"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const getImagePath = (idx: number) => {
  if (idx === 8) return "/images/agency8.webp";
  return `/images/agency${idx}.svg`;
};

const blogs = [
  {
    date: "07/06/2026",
    readTime: "10 min read",
    title: "GoHighLevel Login: How to Log In, Fix Issues & Manage...",
    description:
      "Complete GoHighLevel login guide for 2026. Learn how to access your account via web, mobile app, or white-label portal — plus how to...",
    image: getImagePath(1),
  },
  {
    date: "05/06/2026",
    readTime: "8 min read",
    title: "GoHighLevel API: Complete Guide for Integrations,...",
    description:
      "The GoHighLevel API lets agencies and developers connect GHL to any tool — CRM, Zapier, n8n, or custom code. This 2026 guide...",
    image: getImagePath(2),
  },
  {
    date: "01/06/2026",
    readTime: "9 min read",
    title: "Shopify Integrated with GoHighLevel: Complete Setup...",
    description:
      "Learn how to integrate Shopify with GoHighLevel to automate abandoned cart recovery, post-purchase nurture, CRM sync,...",
    image: getImagePath(3),
  },
  {
    date: "31/05/2026",
    readTime: "11 min read",
    title: "How to Become a GoHighLevel Partner (2026 Guide)",
    description:
      "Learn how to become a GoHighLevel partner in 2026. This guide covers the affiliate program, SaaS reseller path, agency partnership, and...",
    image: getImagePath(4),
  },
  {
    date: "21/05/2026",
    readTime: "7 min read",
    title: "Is GoHighLevel Free to Use? (Honest 2026 Answer)",
    description:
      "Is GoHighLevel free? No free plan exists — but there is a 14-day free trial with no credit card needed. This guide covers all GoHighLevel...",
    image: getImagePath(5),
  },
  {
    date: "18/05/2026",
    readTime: "6 min read",
    title: "GoHighLevel Automation Workflows (2026)",
    description:
      "Master automation with GoHighLevel. Build complex workflows, triggers, and actions to scale your agency operations.",
    image: getImagePath(6),
  },
  ...Array.from({ length: 14 }).map((_, i) => {
    const idx = i + 7;
    const topics = [
      "Strategy",
      "Growth",
      "Scaling",
      "CRM",
      "Automation",
      "SaaS",
      "Integrations",
      "Reporting",
      "AI",
      "Funnels",
      "Email",
      "SMS",
      "Reviews",
      "Analytics",
    ];
    return {
      date: `0${(i % 9) + 1}/06/2026`,
      readTime: `${(i % 5) + 5} min read`,
      title: `GoHighLevel Insight #${idx} — ${topics[i]}`,
      description:
        "Explore advanced GoHighLevel tactics and real-world case studies. This guide covers implementation, best practices, and performance optimization.",
      image: getImagePath(idx),
    };
  }),
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function BlogGrid() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-[260px] w-full overflow-hidden bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                {/* Meta */}
                <span className="text-sm font-medium text-[#9CA3AF]">
                  {blog.date} · {blog.readTime}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-[34px] font-extrabold leading-tight text-[#111111] line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-lg leading-[1.8] text-[#6B7280] line-clamp-3">
                  {blog.description}
                </p>

                {/* Read More */}
                <span className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-[#22D3A6] transition-all duration-300 group-hover:gap-3">
                  Read Article
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
