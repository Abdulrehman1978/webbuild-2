import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { FileSpreadsheet, CheckCircle2, ChevronRight, MessageSquare, Phone } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "GST Registration & Filing Solutions Vashi",
  description: "Re-engineered GST returns processing, audit-matching reconciliations, and input tax credit (ITC) optimizations at Taxzone Navi Mumbai.",
  path: "/services/gst",
});

export default function GSTServicesPage() {
  const offerings = [
    { title: "New GSTIN Registration", desc: "Complete documentation audit, application filing, and GSTIN allocation within 3–5 working days." },
    { title: "Monthly return filings", desc: "Timely and error-free submissions of GSTR-1, GSTR-3B, GSTR-4, and GSTR-8 returns." },
    { title: "ITC Ledger Reconciliation", desc: "Maximize your tax savings through meticulous legal adjustments matching GSTR-2B details." },
    { title: "Annual GSTR-9 Returns", desc: "Comprehensive reconciliation of transactional data, purchases, and sales ledgers for year-end compliance." },
    { title: "Audit Representation", desc: "Expert advisory and legal documentation support during governmental audits and department queries." },
    { title: "Strategic GST Advisory", desc: "Structuring business transactions, inter-state supply tax models, and logistics operations to optimize liabilities." },
  ];

  const steps = [
    { num: "01", title: "Document Collection", desc: "Upload your business identity proofs, address proof, PAN, and bank details using our checklist." },
    { num: "02", title: "Review & Computation", desc: "Our experienced taxation experts compute your tax liabilities and reconcile purchase inputs." },
    { num: "03", title: "Draft Verification", desc: "We present a draft computation summarizing details before submitting reports on the governmental portal." },
    { num: "04", title: "Filing Confirmation", desc: "We file returns and deliver ARN numbers and payment receipt copies instantly for your records." },
  ];

  const sectors = ["Pharmaceutical Distributors", "Logistics & Transport Operators", "Timber & Construction Merchants", "Retail Showrooms", "Housing Societies (CHS)"];

  const whatsappUrl = "https://wa.me/919324264948?text=" + encodeURIComponent("Hi Taxzone, I need help with GST registration/filing.");

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
            <span className="text-gold">GST</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            GST Solutions
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Compliance is not a burden. In our hands, it's a margin strategy. We handle the paperwork, monthly filings, and audit matching so you can scale.
          </p>
        </div>
      </section>

      {/* DETAILED SOLUTIONS */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">SOLUTIONS SCOPE</span>
              <h2 className="font-display-brand text-2xl md:text-3xl font-bold text-ice-white">
                Re-engineered GST Compliance
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
                Sectors Serviced
              </h3>
              <ul className="flex flex-col gap-3 text-xs text-silver">
                {sectors.map((sector) => (
                  <li key={sector} className="flex gap-2 items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-active shrink-0" />
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-obsidian border border-white/5 p-6 rounded-2xl flex flex-col gap-4 mt-2">
              <h4 className="font-display-brand text-sm font-bold text-champagne">Need immediate registration?</h4>
              <p className="text-xs text-silver/80 leading-relaxed">
                If you have pending returns or need to allocate a new GSTIN to start shipping, call Satkut Shamim directly.
              </p>
              <a
                href="tel:+919324264948"
                className="bg-emerald-active hover:bg-emerald-glow text-obsidian text-center font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-active/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-slate-dark/20 text-white py-20 px-6 md:px-8 w-full border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              PIPELINE
            </span>
            <h2 className="font-display-brand text-2xl md:text-3xl font-extrabold text-ice-white">
              The GST Processing Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-obsidian border border-white/5 rounded-2xl p-6 relative flex flex-col gap-3"
              >
                <div className="text-3xl font-display-brand font-extrabold text-white/5 absolute right-4 top-4">
                  {step.num}
                </div>
                <h3 className="font-display-brand text-sm font-bold text-ice-white pr-8">
                  {step.title}
                </h3>
                <p className="text-xs text-silver leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-obsidian text-ice-white py-16 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <h3 className="font-display-brand text-2xl font-bold text-ice-white">
            Set up clean GST files today.
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            We help you reconcile accounts, audit input tax credit ledgers, and file zero-error reports. Connect on WhatsApp or phone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (GST Solutions)</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-ice-white text-center font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
            >
              Request Call Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
