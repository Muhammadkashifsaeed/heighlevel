"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const timeZones = [
  "GMT+05:00 Asia/Karachi (GMT+5)",
  "GMT+04:00 Asia/Dubai (GMT+4)",
  "GMT+03:00 Asia/Riyadh (GMT+3)",
  "GMT+00:00 Europe/London (GMT+0)",
  "GMT-04:00 America/New_York (GMT-4)",
  "GMT-07:00 America/Los_Angeles (GMT-7)",
  "GMT+08:00 Asia/Singapore (GMT+8)",
];

const socials = [
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/digistartupofficial",
    label: "Facebook",
  },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/pro_developer92",
    label: "Instagram",
  },
  {
    Icon: LinkedinIcon,
    href: "https://pk.linkedin.com/company/digistartupofficial",
    label: "LinkedIn",
  },
];

export default function DiscoveryCall() {
  const today = useMemo(() => {
    return new Date(2026, 6, 20);
  }, []);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(20);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tzOpen, setTzOpen] = useState(false);
  const [timeZone, setTimeZone] = useState(timeZones[0]);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (dayNum: number) => {
    setSelectedDate(dayNum);
    const d = new Date(currentYear, currentMonth, dayNum);
    const dayName = days[d.getDay()];
    setSelectedDay(dayName === selectedDay ? null : dayName);
  };

  const handleDayHeaderClick = (dayName: string) => {
    setSelectedDay(dayName === selectedDay ? null : dayName);
  };

  const filteredDays = useMemo(() => {
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(currentYear, currentMonth, d);
      const dayName = days[dateObj.getDay()];
      if (selectedDay === null || dayName === selectedDay) {
        cells.push(d);
      } else {
        cells.push(null);
      }
    }
    return cells;
  }, [firstDay, daysInMonth, currentMonth, currentYear, selectedDay]);

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
            Let&apos;s Build Your{" "}
            <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6)] bg-clip-text text-transparent">
              Growth Engine
            </span>
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
                      info@digistartupgroup.com
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
                      Pakistan
                    </p>
                    <p className="mt-1 text-base text-[#6B7280]">
                      Office # 25, Shoukat Commercial Center, Bahawalpur Rd, above HBL Bank, Multan, 66000
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
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
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
                        <ChevronDown className="h-5 w-5 shrink-0 text-emerald-600" />
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
                  Digustratup.io Free Strategy Call
                </h3>

                {/* Call Details */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-[#111111]">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    30 min
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-[#111111]">
                    <span className="h-4 w-4 rounded-full bg-blue-100 text-center text-xs leading-4 text-blue-600">
                      M
                    </span>
                    Mon, 20 July, 2026
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-[#111111]">
                    <Globe className="h-4 w-4 text-yellow-600" />
                    Asia/Karachi (GMT+5)
                  </div>
                </div>
              </div>

              {/* Calendar Navigation */}
              <div className="mt-6">
                {/* Month/Year Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-200 hover:border-emerald-400 hover:text-emerald-600"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-bold text-[#111111]">
                    {months[currentMonth]} {currentYear}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-200 hover:border-emerald-400 hover:text-emerald-600"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Days of week header - clickable */}
                <div className="mt-3 grid grid-cols-7 gap-1">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => handleDayHeaderClick(day)}
                      className={`py-2 text-center text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-lg ${
                        selectedDay === day
                          ? "bg-[#22D3A6] text-white"
                          : "text-[#6B7280] hover:bg-slate-100"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="mt-2 grid grid-cols-7 gap-1">
                  {filteredDays.map((dayNum, i) => (
                    <button
                      key={i}
                      disabled={dayNum === null}
                      onClick={() => dayNum && handleDayClick(dayNum)}
                      className={`flex h-10 w-full items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 ${
                        dayNum === null
                          ? "invisible"
                          : selectedDate === dayNum
                          ? "bg-[#22D3A6] text-white shadow-lg"
                          : "bg-slate-50 text-[#111111] hover:bg-emerald-50 hover:text-emerald-600"
                      }`}
                    >
                      {dayNum}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                  Available Times
                </h4>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["08:00PM", "08:30PM", "09:00PM", "09:30PM", "10:00PM", "10:30PM", "11:00PM"].map((time) => (
                    <button
                      key={time}
                      className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-medium text-[#111111] transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Zone Selector */}
              <div className="mt-6 relative">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280]">
                  Time Zone
                </h4>
                <button
                  onClick={() => setTzOpen(!tzOpen)}
                  className="mt-2 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-[#111111] transition-all duration-200 hover:border-emerald-400"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-emerald-600" />
                    {timeZone}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      tzOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Time Zone Dropdown */}
                {tzOpen && (
                  <div className="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-xl">
                    {timeZones.map((tz) => (
                      <button
                        key={tz}
                        onClick={() => {
                          setTimeZone(tz);
                          setTzOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-emerald-50 ${
                          timeZone === tz
                            ? "bg-emerald-50 text-emerald-600 font-semibold"
                            : "text-[#111111]"
                        }`}
                      >
                        <Globe className="h-4 w-4 shrink-0 text-slate-400" />
                        {tz}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
