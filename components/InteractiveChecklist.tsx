"use client";

import { useState } from "react";
import { CheckSquare, Square, Printer, FileText } from "lucide-react";

interface ChecklistItem {
  id: string;
  label: string;
  category: "Identity" | "Address" | "Financial" | "Entity";
  desc: string;
}

export default function InteractiveChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const items: ChecklistItem[] = [
    { id: "pan-biz", label: "Business PAN Card", category: "Entity", desc: "Permanent Account Number of the entity (LLP, Private Limited, or Partnership)." },
    { id: "pan-dir", label: "Directors / Partners PAN Cards", category: "Identity", desc: "PAN cards of all directors/partners (or proprietor's PAN for sole proprietorship)." },
    { id: "aadhaar-dir", label: "Aadhaar Card of Directors/Partners", category: "Identity", desc: "Aadhaar cards of all primary stakeholders for identity matching." },
    { id: "photo-dir", label: "Passport Sized Photographs", category: "Identity", desc: "Recent photos of directors, partners, or sole proprietor (JPEG format, < 100KB)." },
    { id: "addr-proof", label: "Proof of Business Place (Rent/Ownership)", category: "Address", desc: "Electricity bill, property tax receipt, or ownership deed. Must show correct sector/address." },
    { id: "noc-prop", label: "NOC from Property Owner", category: "Address", desc: "No Objection Certificate from the landlord if the business space is rented/leased." },
    { id: "bank-stmt", label: "Bank Account Details (Proof)", category: "Financial", desc: "Cancelled check, bank statement, or first page of bank passbook displaying IFSC code." },
    { id: "const-proof", label: "Entity Constitution Proof", category: "Entity", desc: "Partnership Deed, Certificate of Incorporation (CoI), or MoA/AoA files." },
    { id: "auth-letter", label: "Letter of Authorization", category: "Entity", desc: "Signed resolution or authorization letter naming the primary authorized signatory." },
  ];

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const categories = ["Identity", "Address", "Financial", "Entity"] as const;

  return (
    <div className="w-full bg-slate-dark/30 text-ice-white border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md print-card">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-5 mb-6">
        <div>
          <h3 className="font-display-brand text-xl font-bold text-ice-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-active" />
            <span>GST Document Checklist</span>
          </h3>
          <p className="text-[11px] text-silver font-medium mt-1">
            Check off gathered items. Use Print to output a clean PDF.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="no-print bg-emerald-active hover:bg-emerald-glow text-obsidian font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-active/10"
        >
          <Printer className="w-4 h-4 text-obsidian" />
          <span>Save as PDF</span>
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {categories.map((cat) => {
          const catItems = items.filter((item) => item.category === cat);
          return (
            <div key={cat} className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-champagne border-b border-white/5 pb-1 self-start font-display-brand">
                {cat} Documents
              </h4>
              <div className="grid grid-cols-1 gap-3.5">
                {catItems.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`flex items-start gap-3.5 p-3.5 rounded-2xl border cursor-pointer select-none transition-all duration-200 ${
                        isChecked
                          ? "bg-emerald-active/5 border-emerald-active/40"
                          : "bg-obsidian/50 border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="mt-0.5 text-emerald-active shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 fill-emerald-active text-obsidian" />
                        ) : (
                          <Square className="w-5 h-5 text-silver/40" />
                        )}
                      </div>
                      <div>
                        <span className={`text-xs md:text-sm font-semibold text-ice-white ${isChecked ? "line-through opacity-40" : ""}`}>
                          {item.label}
                        </span>
                        <p className="text-[11px] text-silver/70 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
