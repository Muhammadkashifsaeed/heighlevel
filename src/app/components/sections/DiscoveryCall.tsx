"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqs = [
  {
    q: "What should I prepare for the call?",
    a: "Just bring yourself and a brief overview of your current systems and bottlenecks. We'll handle the rest.",
  },
  {
    q: "Who will I be speaking with?",
    a: "You'll be speaking directly with one of our senior growth strategists, not a junior sales rep.",
  },
  {
    q: "Is this a high-pressure sales pitch?",
    a: "Not at all. This is a discovery call to see if we're a mutual fit. If we can't help, we'll point you in the right direction.",
  },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function DiscoveryCall() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[4px] text-[#22D3A6]"
          >
            Discovery Call
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-5xl md:text-[48px]"
          >
            Let&apos;s Build Your Growth Engine
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-[640px] text-lg leading-[1.7] text-[#6B7280] sm:text-xl"
          >
            Choose a time below to speak with our experts about scaling your
            business with custom automation and systems.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
            >
              <h3 className="text-2xl font-extrabold text-[#111111]">
                Contact Information
              </h3>
              <p className="mt-2 text-base text-[#6B7280]">
                Reach out to us directly or book a call using the calendar.
              </p>

              <div className="mt-8 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                      Email Us
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#111111]">
                      admin@grow-highlevel.com
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                      Working Hours
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#111111]">
                      Mon - Fri, 9AM - 6PM (EST)
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-50">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                      Location
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#111111]">
                      Serving Global Agencies
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connect With Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
            >
              <h3 className="text-2xl font-extrabold text-[#111111]">
                Connect With Us
              </h3>
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                >
                  <span className="text-xs font-bold">FB</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600"
                >
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="text-xs font-bold">LN</span>
                </a>
              </div>
            </motion.div>

            {/* Testimonial Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-3xl bg-[#111111] p-8 text-center shadow-xl"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider text-yellow-400">
                Trusted by 200+ Agencies
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-300">
                &ldquo;Working with the team completely transformed our fulfillment.
                We scaled from 10 to 40 clients in 3 months without breaking a
                sweat.&rdquo;
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                — Sarah J., Agency Owner
              </p>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
            >
              <h3 className="text-2xl font-extrabold text-[#111111]">
                Frequently Asked Questions
              </h3>
              <div className="mt-6 space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 transition-colors duration-300"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === i ? null : i)
                      }
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                    >
                      <span
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          openFaq === i ? "text-emerald-600" : "text-[#111111]"
                        }`}
                      >
                        {faq.q}
                      </span>
                      {openFaq === i ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-emerald-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400" />
                      )}
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openFaq === i ? "300px" : "0px",
                        opacity: openFaq === i ? 1 : 0,
                      }}
                    >
                      <p className="px-6 pb-4 text-sm leading-6 text-[#6B7280]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Booking Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              {/* Header */}
              <div className="flex flex-col items-center text-center">
                <p className="text-base font-medium text-[#6B7280]">
                  Select a date and time that works for you
                </p>

                {/* Logo */}
                <div className="mt-4">
                  <Image
                    src="/images/logo.png"
                    alt="GrowHigh logo"
                    width={120}
                    height={36}
                    className="h-9 w-auto"
                  />
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#111111]">
                  JustTap.io Free Strategy Call
                </h3>
              </div>

              {/* Call Details */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-[#111111]">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  30 min
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-[#111111]">
                  <span className="h-4 w-4 rounded-full bg-blue-100 text-center text-xs leading-4 text-blue-600">
                    M
                  </span>
                  Mon, July 20, 2026
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-[#111111]">
                  <MapPin className="h-4 w-4 text-yellow-600" />
                  Asia/Multan (GMT+5)
                </div>
              </div>

              {/* Calendar */}
              <div className="mt-6">
                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map((day) => (
                    <div
                      key={day}
                      className="py-2 text-center text-xs font-semibold uppercase tracking-wider text-[#6B7280]"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid placeholder */}
                <div className="mt-2 grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }).map((_, i) => {
                    const dayNum = i - 2;
                    const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                    const isSelected = dayNum === 20;
                    const isDisabled = !isCurrentMonth;

                    return (
                      <button
                        key={i}
                        disabled={isDisabled}
                        className={`flex h-10 w-full items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-[#22D3A6] text-white shadow-lg"
                            : isCurrentMonth
                            ? "bg-slate-50 text-[#111111] hover:bg-emerald-50 hover:text-emerald-600"
                            : "text-slate-300"
                        }`}
                      >
                        {isCurrentMonth ? dayNum : ""}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                  Available Times
                </h4>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-medium text-[#111111] transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Zone */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                  Time Zone
                </h4>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-[#111111]">
                    GMT+05:00 Asia/Multan (GMT+5)
                  </span>
                </div>
              </div>

              {/* Confirm Button */}
              <button className="mt-6 w-full rounded-full bg-[linear-gradient(135deg,#22c55e,#06b6d4,#3b82f6)] py-3.5 text-base font-semibold text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)]">
                Confirm Booking
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
