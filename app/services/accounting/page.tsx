import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { BookOpen, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "Accounting & Bookkeeping Services Vashi",
  description: "Ensure complete accuracy in your ledger books. Professional corporate bookkeeping, BRS ledgers, and cooperative housing society accounting in Navi Mumbai.",
  path: "/services/accounting",
});

export default function AccountingServicesPage() {
  const offerings = [
    { title: "Monthly Bookkeeping", desc: "Posting day-to-day receipts, invoices, purchases, payments, and adjusting journal entries into accounting ledgers." },
    { title: "Bank Reconciliation (BRS)", desc: "Monthly reconciliation of company bank accounts against physical statements to identify transaction discrepancies." },
    { title: "Financial Statements", desc: "Drafting complete Profit & Loss statements, Balance Sheets, and Cash Flow summaries for review." },
    { title: "Payroll & Deductions", desc: "Calculating employee salaries, Professional Tax, PF, ESIC deductions, and processing monthly payroll registries." },
    { title: "Audit File Preparations", desc: "Organizing accounting logs, bills, vouchers, and tax ledgers to ensure smooth, stress-free annual tax audits." },
    { title: "MIS Management Reporting", desc: "Compiling customized periodic management reports (receivables/payables analysis, cash burn rates, product profitability)." },
  ];

  const tools = ["Tally Prime", "QuickBooks Online", "Busy Accounting", "Microsoft Excel Custom MIS"];

  const whatsappUrl = "https://wa.me/919324264948?text=" + encodeURIComponent("Hi Taxzone, I need help with accounting or society bookkeeping.");

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-obsidian pt-32 pb-16 px-6 md:px-8 w-full relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#0d0f12,transparent_60%)] opacity-35 -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-5 text-left max-w-3xl">
          <nav className="text-xs text-silver/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-champagne transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-gold">Accounting</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Accounting & Bookkeeping
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Your books tell the true story of your business. We keep them clear, compliant, and up-to-date, so you always know exactly where your numbers stand.
          </p>
        </div>
      </section>

      {/* CORE DETAILS */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">SOLUTIONS SCOPE</span>
              <h2 className="font-display-brand text-2xl md:text-3xl font-bold text-ice-white">
                Accurate, bank-compliant accounting services.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offerings.map((offering) => (
                <SpotlightCard
                  key={offering.title}
                  className="bg-slate-dark/20 flex flex-col gap-2"
                >
                  <h3 className="font-display-brand font-bold text-ice-white text-base flex gap-2 items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-active shrink-0" />
                    <span>{offering.title}</span>
                  </h3>
                  <p className="text-xs text-silver leading-relaxed">
                    {offering.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 bg-slate-dark/20 border border-white/5 p-8 rounded-3xl shadow-lg relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-active/5 rounded-full filter blur-xl -z-10" />
            <div>
              <h3 className="font-display-brand text-lg font-bold text-ice-white mb-4 border-b border-white/5 pb-3">
                Software Stack
              </h3>
              <ul className="flex flex-col gap-3 text-xs text-silver">
                {tools.map((tool) => (
                  <li key={tool} className="flex gap-2 items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-active shrink-0" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-obsidian border border-white/5 p-6 rounded-2xl flex flex-col gap-4 mt-2">
              <h4 className="font-display-brand text-sm font-bold text-champagne">Housing Society Expertise</h4>
              <p className="text-xs text-silver/85 leading-relaxed">
                We specialize in Cooperative Housing Society (CHS) account maintenance and audit coordination in Navi Mumbai.
              </p>
              <div className="text-[10px] uppercase font-bold text-emerald-active bg-emerald-active/5 border border-emerald-active/20 p-2 rounded-lg text-center font-display-brand mt-1">
                Akashleela CHS: client since 2007
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTY CASE DETAILS */}
      <section className="bg-slate-dark/20 text-white py-20 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
            CASE PROFILE
          </span>
          <h2 className="font-display-brand text-2xl md:text-3xl font-extrabold text-ice-white leading-tight">
            "Akashleela CHS has trusted us with their society accounts since 2007. That's 17 years of zero accounting errors."
          </h2>
          <p className="text-xs md:text-sm text-silver leading-relaxed">
            Cooperative Housing Societies require precise accounting that balances maintenance receipts, sinking funds, repairs ledgers, and compliance under Maharashtra Co-operative Societies Act. We deliver absolute transparency to managing committees.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-obsidian text-ice-white py-16 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <h3 className="font-display-brand text-2xl font-bold text-ice-white">
            Set up clean bookkeeping.
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            Whether you run a growing logistics firm in Turbhe or manage a housing society in Nerul — get professional bookkeeping support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (Bookkeeping)</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-ice-white text-center font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
