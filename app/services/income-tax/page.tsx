import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Scale, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "Income Tax Filing & Planning Vashi",
  description: "Secure legal tax savings and file compliant returns. Taxzone provides professional ITR filings and corporate tax planning in Navi Mumbai.",
  path: "/services/income-tax",
});

export default function IncomeTaxServicesPage() {
  const offerings = [
    { title: "Individual Returns", desc: "Filing solutions for salaried executives, professional consultants, freelancers, and stock traders." },
    { title: "Corporate ITR Filings", desc: "Tax computation and return filing for proprietary firms, partnerships, LLPs, and Private Limited companies." },
    { title: "Capital Gains Structuring", desc: "Structuring property transactions and stock capital gains legally to utilize exemptions." },
    { title: "TDS Returns Compliance", desc: "Quarterly TDS calculations, challan deposit audits, Form 24Q, 26Q return filings, and certificate downloads." },
    { title: "Tax Planning & Audit Prep", desc: "Strategic advice on maximizing deductions under Section 80C, 80D, 24, and matching audit ledgers." },
    { title: "Notice & Scrutiny Support", desc: "Drafting formal technical responses and representing clients in front of the Income Tax department for scrutiny audits." },
  ];

  const clientTypes = [
    "Corporate Director Board members",
    "Independent Consultants & Freelancers",
    "Proprietors & Partnership Firms",
    "Private Limited & OPC Companies",
    "Salaried Executives & NRI Investors",
  ];

  const whatsappUrl = "https://wa.me/919324264948?text=" + encodeURIComponent("Hi Taxzone, I need help with my income tax return.");

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
            <span className="text-gold">Income Tax</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Income Tax Solutions
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Every rupee saved is a rupee invested in your future. We plan and optimize your taxes ahead of time to build capital legacies.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">SOLUTIONS SCOPE</span>
              <h2 className="font-display-brand text-2xl md:text-3xl font-bold text-ice-white">
                Tax planning, filings, and audit representation.
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
                Who We Service
              </h3>
              <ul className="flex flex-col gap-3 text-xs text-silver">
                {clientTypes.map((type) => (
                  <li key={type} className="flex gap-2 items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-active shrink-0" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-obsidian border border-white/5 p-6 rounded-2xl flex flex-col gap-4">
              <h4 className="font-display-brand text-sm font-bold text-champagne">Continuous Optimization</h4>
              <p className="text-xs text-silver/85 leading-relaxed">
                Effective tax planning starts in April, not in March. We review salary structures and asset plans throughout the year to optimize liabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-dark/20 text-ice-white py-16 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <h3 className="font-display-brand text-2xl font-bold text-ice-white">
            Plan your income tax return correctly.
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            From corporate proprietary returns to individual capital gains optimization — connect with Satkut Shamim and our taxation advisors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (Tax Solutions)</span>
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
