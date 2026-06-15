"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, Hourglass, Landmark, HelpCircle, ArrowRight } from "lucide-react";

export default function InteractiveCalculator() {
  const [turnover, setTurnover] = useState(100); // In Lakhs
  const [businessType, setBusinessType] = useState("Corporate");

  const businessTypes = ["Proprietorship", "Partnership", "Corporate", "Export", "Society"];

  // Formatter for Currency
  const formatCurrency = (valInLakhs: number) => {
    const amountInRs = valInLakhs * 100000;
    if (amountInRs >= 10000000) {
      return `₹${(amountInRs / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amountInRs / 100000).toFixed(1)} Lakhs`;
  };

  // Computations
  const getHoursSaved = () => {
    // Basic scaling logic
    return Math.min(Math.round(40 + turnover * 0.15), 180);
  };

  const getTaxSavings = () => {
    let rate = 0.025; // 2.5% standard optimization rate
    if (businessType === "Proprietorship") rate = 0.02;
    if (businessType === "Export") rate = 0.055; // Export LUT refunds are high value
    if (businessType === "Society") rate = 0.015;
    if (businessType === "Corporate") rate = 0.035;

    return Math.round(turnover * rate * 10) / 10;
  };

  const getRecommendedAction = () => {
    if (businessType === "Export") return { name: "Export GST LUT refunds & IEC", href: "/services/export" };
    if (businessType === "Society") return { name: "Society audit books", href: "/services/accounting" };
    if (businessType === "Corporate") return { name: "MCA audits & GST reconciliation", href: "/services/gst" };
    if (businessType === "Proprietorship") return { name: "ITR ITR-3 & Tax Planning", href: "/services/income-tax" };
    return { name: "Startup Incorporation Pack", href: "/services/startup" };
  };

  const hours = getHoursSaved();
  const taxSaved = getTaxSavings();
  const recommendation = getRecommendedAction();

  return (
    <div className="w-full bg-slate-dark/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-active/5 rounded-full filter blur-3xl -z-10" />

      {/* Header */}
      <div className="flex gap-3 items-center border-b border-white/5 pb-5 mb-6">
        <div className="w-10 h-10 bg-emerald-active/10 border border-emerald-active/20 rounded-xl flex items-center justify-center text-emerald-active">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display-brand text-lg font-bold text-ice-white">
            Growth & Savings Simulator
          </h3>
          <p className="text-[11px] text-silver font-medium mt-0.5">
            Simulate your compliance overhead reduction with Taxzone.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Business Type Select */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-silver">
              Select Entity Type
            </span>
            <div className="flex flex-wrap gap-2">
              {businessTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setBusinessType(type)}
                  className={`text-xs px-3 py-2 rounded-xl border font-medium transition-all duration-300 ${
                    businessType === type
                      ? "bg-emerald-active border-emerald-active text-obsidian font-bold shadow-lg shadow-emerald-active/15"
                      : "bg-white/5 border-white/5 text-silver hover:border-white/10 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Turnover Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold uppercase tracking-wider text-silver">
                Annual Turnover
              </span>
              <span className="font-display-brand font-bold text-champagne text-sm bg-champagne/10 px-2 py-0.5 rounded-lg border border-champagne/20">
                {formatCurrency(turnover)}
              </span>
            </div>
            
            <input
              type="range"
              min="20"
              max="1000"
              step="10"
              value={turnover}
              onChange={(e) => setTurnover(Number(e.target.value))}
              className="w-full accent-emerald-active h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
            
            <div className="flex justify-between text-[10px] text-silver/50 font-bold uppercase tracking-wider">
              <span>₹20L</span>
              <span>₹5Cr</span>
              <span>₹10Cr+</span>
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {/* Stat 1: Hours Saved */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between shadow-inner">
            <div className="flex gap-2 items-center text-emerald-active mb-3">
              <Hourglass className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Time Reclaimed</span>
            </div>
            <div>
              <div className="text-3xl font-display-brand font-bold text-ice-white">
                {hours} hrs
              </div>
              <p className="text-[10px] text-silver/60 leading-tight mt-1">
                Estimated corporate filing hours saved per year.
              </p>
            </div>
          </div>

          {/* Stat 2: Tax Saved */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between shadow-inner">
            <div className="flex gap-2 items-center text-champagne mb-3">
              <Landmark className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Optimized Capital</span>
            </div>
            <div>
              <div className="text-3xl font-display-brand font-bold text-champagne">
                {formatCurrency(taxSaved)}
              </div>
              <p className="text-[10px] text-silver/60 leading-tight mt-1">
                Estimated average annual tax saved legally.
              </p>
            </div>
          </div>

          {/* Bottom Recommendation */}
          <div className="col-span-2 bg-emerald-active/5 border border-emerald-active/15 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-active block mb-0.5">
                Recommended Solution
              </span>
              <span className="text-xs font-bold text-ice-white leading-tight">
                {recommendation.name}
              </span>
            </div>
            <Link
              href={recommendation.href}
              className="text-[10px] font-bold uppercase tracking-wider text-emerald-active hover:text-white flex items-center gap-1 shrink-0 transition-colors"
            >
              <span>Explore Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
