"use client";

import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const phoneNumber = "+919324264948";

  const getPreFilledMessage = (path: string): string => {
    if (path.includes("/services/gst")) {
      return "Hi Taxzone, I need help with GST registration/filing.";
    }
    if (path.includes("/services/income-tax")) {
      return "Hi Taxzone, I need help with my income tax return.";
    }
    if (path.includes("/services/startup")) {
      return "Hi Taxzone, I'm starting a new business and need guidance.";
    }
    if (path.includes("/services/finance")) {
      return "Hi Taxzone, I'd like to explore loan/investment options.";
    }
    if (path.includes("/services/accounting")) {
      return "Hi Taxzone, I need help with accounting or society bookkeeping.";
    }
    if (path.includes("/services/export")) {
      return "Hi Taxzone, I'd like to consult on export compliance.";
    }
    return "Hi Taxzone, I'd like to discuss my financial requirements.";
  };

  const message = getPreFilledMessage(pathname);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 no-print"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Taxzone on WhatsApp"
        className="group flex items-center justify-center w-14 h-14 bg-emerald-active text-obsidian rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:bg-[#12d393] transition-colors relative duration-300 border border-emerald-active/20"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-active opacity-75 animate-ping -z-10 group-hover:animate-none"></span>
        <MessageSquare className="w-6 h-6 fill-obsidian group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-300 origin-right bg-slate-dark text-ice-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-white/5">
          Connect with Us
        </span>
      </a>
    </motion.div>
  );
}
