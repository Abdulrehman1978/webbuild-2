"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
}

function StatNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const duration = 1500;
    const incrementTime = Math.min(Math.floor(duration / end), 50);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display-brand font-bold text-4xl md:text-5xl lg:text-6xl text-emerald-active">
      {count}
      {suffix}
    </span>
  );
}

export default function CountUpStats() {
  const stats: StatItemProps[] = [
    { target: 22, suffix: "+", label: "Years of Practice" },
    { target: 350, suffix: "+", label: "Trusted Clients" },
    { target: 100, suffix: "%", label: "Client Satisfaction" },
    { target: 2, suffix: "nd Gen", label: "Generational Trust" },
  ];

  return (
    <section className="bg-slate-dark/30 border-y border-white/5 py-12 px-6 md:px-8 w-full relative z-10 no-print backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center p-4 md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <StatNumber target={stat.target} suffix={stat.suffix} />
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-silver mt-2 font-bold">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
