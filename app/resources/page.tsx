import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import InteractiveChecklist from "@/components/InteractiveChecklist";
import { Calendar, AlertCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Tax Schedules & Compliance Checklists",
  description: "Verify your filing calendar deadlines. Access interactive document checklists and tax dates listings managed by Taxzone Vashi.",
  path: "/resources",
});

export default function ResourcesPage() {
  const calendarDates = [
    { date: "11th of Every Month", category: "GST", event: "Monthly GSTR-1 Filing", desc: "Statement of outward supplies details must be uploaded on the GST portal." },
    { date: "20th of Every Month", category: "GST", event: "Monthly GSTR-3B Filing", desc: "Summarized return of inward/outward supplies and payment of due taxes." },
    { date: "7th of Every Month", category: "TDS", event: "Challan Deposit for TDS", desc: "Payment of tax deducted at source for the previous month (excluding March)." },
    { date: "31st July 2025", category: "Income Tax", event: "ITR Filing for Individuals", desc: "Deadline to file Income Tax Returns for non-audit cases (salaried, professionals)." },
    { date: "31st October 2025", category: "Income Tax", event: "ITR Filing for Audit Cases", desc: "Deadline to file corporate returns and tax audit reports under Section 44AB." },
    { date: "31st December 2025", category: "GST", event: "Annual GSTR-9 Returns Filing", desc: "Deadline to file GST Annual Return for the financial year 2024-25." },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-obsidian pt-32 pb-16 px-6 md:px-8 w-full relative overflow-hidden border-b border-white/5 no-print">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#0d0f12,transparent_60%)] opacity-35 -z-10" />
        <div className="absolute inset-0 grid-mesh opacity-20 -z-20" />

        <div className="max-w-7xl mx-auto flex flex-col gap-5 text-left max-w-3xl">
          <nav className="text-xs text-silver/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
            <span>/</span>
            <span className="text-champagne">Resources</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Resources & Checklists
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Organized filing schedules and interactive documents lists to prepare business returns.
          </p>
        </div>
      </section>

      {/* RESOURCES CONTENT */}
      <section className="bg-obsidian text-ice-white py-16 px-6 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Tax Calendar */}
          <div className="lg:col-span-5 flex flex-col gap-8 no-print animate-fade-in">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active flex gap-1.5 items-center">
                <Calendar className="w-4 h-4" />
                <span>CALENDAR 2025–26</span>
              </span>
              <h2 className="font-display-brand text-2xl font-bold text-ice-white">
                Filing Deadlines
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {calendarDates.map((item) => (
                <div
                  key={item.event}
                  className="bg-slate-dark/20 border border-white/5 p-5 rounded-2xl shadow-md flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-ice-white font-display-brand">{item.date}</span>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-champagne bg-champagne/5 px-2 py-0.5 rounded-lg border border-champagne/20">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-sans-brand font-bold text-[10px] uppercase tracking-wider text-silver">
                    {item.event}
                  </h4>
                  <p className="text-xs text-silver/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Coming Soon PDF download block */}
            <div className="bg-slate-dark/20 border border-white/5 p-6 rounded-2xl flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-champagne/5 rounded-full filter blur-xl -z-10" />
              <div className="flex gap-2 items-center text-champagne">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <h4 className="font-display-brand text-sm font-bold">Tax Guide PDF (Coming Soon)</h4>
              </div>
              <p className="text-[11px] text-silver/80 leading-relaxed">
                We are compiling an exhaustive legal tax minimization playbook for SME founders. Connect via our contact page to receive it immediately when ready.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Document Checklist */}
          <div className="lg:col-span-7 w-full">
            <InteractiveChecklist />
          </div>
        </div>
      </section>
    </div>
  );
}
