"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services does Taxzone cover?",
      answer: "Taxzone provides complete compliance and growth management services. This includes GST registration and filing, Income Tax planning and filing, accounting and bookkeeping, startup business incorporation, import-export compliance, and finance/loan document facilitation.",
    },
    {
      question: "Do I need a CA to manage my taxes?",
      answer: "No, a CA is not required for standard business filings, GST returns, accounting, and tax computations. Taxzone's experienced consultants handle the full compliance lifecycle for SMEs, startups, and individuals at structured, accessible pricing, saving you the high overhead of a CA firm.",
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We partner with a diverse range of clients in Navi Mumbai, including logistics companies, engineering firms, chemical and pharmaceutical distributors, timber merchants, retail business owners, housing societies (CHS), and independent professionals.",
    },
    {
      question: "How long does GST registration take?",
      answer: "GST registration typically takes 3 to 5 business days, assuming all documentation (PAN, address proof, identity cards) is complete and accurate. Our team manages the application process end-to-end to avoid delays.",
    },
    {
      question: "Can you help with business loan applications?",
      answer: "Yes. We help prepare bank-compliant financial statements, projected project reports, CMA data, and other critical documentation required by lenders to secure working capital and MSME business loans.",
    },
    {
      question: "How experienced is the Taxzone team?",
      answer: "Our leadership and advisory team carries 22+ years of hands-on expertise in direct and indirect taxation, corporate accounting, and financial planning, serving the Navi Mumbai community since 2003.",
    },
  ];

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
