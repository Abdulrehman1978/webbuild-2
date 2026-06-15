import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Ship, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "Export Compliance & GST Refunds Vashi",
  description: "Navigate global trade regulations. Taxzone provides DGFT IEC allocations, export GST refunds (LUT), and RBI FEMA compliance services.",
  path: "/services/export",
});

export default function ExportConsultingServicesPage() {
  const offerings = [
    { title: "IEC Code Registrations", desc: "Fast documentation compiling and application for Import Export Code (IEC) via the DGFT portal." },
    { title: "GST Export Refunds (LUT)", desc: "Filing Letter of Undertaking (LUT) for zero-rated supplies and executing accumulated input tax credit refunds." },
    { title: "FEMA Realization Audits", desc: "Advising on statutory RBI timelines for foreign currency invoice payments realization." },
    { title: "Forex Bookkeeping ledgers", desc: "Specialized accounting adjustments for currency fluctuations and bank realization codes (FIRC/eBRC)." },
    { title: "Customs Valuation advice", desc: "Consultancy on transaction values and classification under custom codes to optimize duty implications." },
    { title: "Trade Councils Registration", desc: "Representing export data and securing RCMC certificates with respective Export Promotion Councils (EPCs)." },
  ];

  const highlights = [
    "Proven track record in Vashi APMC & Turbhe export corridors",
    "Meticulous preparation of LUT and IGST tax refund files",
    "Detailed advisory on foreign exchange transaction ledgers",
    "Seamless mapping of RBI / FEMA compliance guidelines",
  ];

  const whatsappUrl = "https://wa.me/919324264948?text=" + encodeURIComponent("Hi Taxzone, I'd like to consult on export compliance.");

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
            <span className="text-gold">Export Consulting</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Export Consulting
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            India to the world — we make trade numbers work. Export compliance is complex. Focus on your international customers while we manage your documentation, filings, and refunds.
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
                Handle international trade compliance with confidence.
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
                Solutions Strengths
              </h3>
              <ul className="flex flex-col gap-3 text-xs text-silver">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-emerald-active font-bold shrink-0 mt-0.5">✓</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-obsidian border border-white/5 p-6 rounded-2xl flex flex-col gap-4 mt-2">
              <h4 className="font-display-brand text-sm font-bold text-champagne">Proceeds Realization</h4>
              <p className="text-xs text-silver/85 leading-relaxed">
                Failure to realize export invoices within 9 months can trigger RBI notices. We track your ledger eBRCs and banking logs to ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-dark/20 text-ice-white py-16 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <h3 className="font-display-brand text-2xl font-bold text-ice-white">
            Scale your export business safely.
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            We handle registrations, compile banking reports, and secure tax refunds for exporters across Navi Mumbai and Raigad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (Export Consulting)</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-ice-white text-center font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
            >
              Consult Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
