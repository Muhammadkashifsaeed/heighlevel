"use client";

import { useEffect, useRef } from "react";

const images = [
  "/images/pipeline1.png",
  "/images/pipeline2.jpg",
  "/images/pipeline3.png",
  "/images/pipeline4.jpg",
  "/images/pipeline5.png",
  "/images/pipeline6.png",
  "/images/pipeline7.png",
];

const loop = [...images, ...images];

export default function PipelineCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        offset = (offset + (dt * 0.05)) % half;
        track.style.transform = `translateX(${-offset}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="w-full overflow-hidden border-t border-slate-200 bg-white py-8"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex w-max gap-6 will-change-transform">
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={src}
              alt={`Pipeline ${i + 1}`}
              className="h-full w-full object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
