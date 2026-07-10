"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faq-data";

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-white/5 rounded-2xl bg-slate-dark/30 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-white/10"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full py-5 px-6 flex justify-between items-center text-left text-ice-white font-medium hover:text-champagne transition-colors duration-300"
            >
              <span className="text-sm md:text-base pr-4 font-semibold">{faq.question}</span>
              <span className="p-1 rounded-lg bg-white/5 text-emerald-active border border-white/5">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 pt-1 text-silver text-xs md:text-sm border-t border-white/5 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
