import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { ArrowRight, FileSpreadsheet, Scale, BookOpen, Compass, Ship, Landmark } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "Core Business Solutions & Tax Audits",
  description: "Browse the complete scope of tax compliance and financial systems managed by Taxzone Navi Mumbai, including GST, ITR, Bookkeeping, Export trade, and MSME funding.",
  path: "/services",
});

export default function ServicesHubPage() {
  const services = [
    {
      name: "GST Filings & Returns",
      tagline: "Compliance in our hands is a financial margin strategy.",
      desc: "End-to-end GSTR-1, 3B returns filing, purchase reconciliations, and representation support.",
      icon: FileSpreadsheet,
      href: "/services/gst",
      details: ["GSTIN Registration", "Monthly Return Filings", "Reconciliations", "Audit Representation"],
    },
    {
      name: "Income Tax Advisory",
      tagline: "Every rupee saved is a rupee invested in your future.",
      desc: "ITR returns preparation, advance tax calculations, capital gains planning, and scrutiny responses.",
      icon: Scale,
      href: "/services/income-tax",
      details: ["Corporate Tax Returns", "Individual ITR Plans", "Capital Gains Filings", "Scrutiny Replies"],
    },
    {
      name: "Corporate Bookkeeping",
      tagline: "Your books. Our craft. Your absolute clarity.",
      desc: "Accurate monthly accounting ledger postings, bank reconciliations, and specialized housing society audit files.",
      icon: BookOpen,
      href: "/services/accounting",
      details: ["Ledgers & Invoices", "Bank Reconciliations", "MIS Dashboard Reports", "Housing Society Accounting"],
    },
    {
      name: "Startup Incorporations",
      tagline: "Incorporate correct. Starting right costs less.",
      desc: "MCA name approval, LLP and Private Limited registrations, and first-year compliance calendars.",
      icon: Compass,
      href: "/services/startup",
      details: ["LLP & Pvt Ltd Setup", "PAN/TAN Allotment", "GSTIN Setup", "Director DIN Allocations"],
    },
    {
      name: "Export Trade Compliance",
      tagline: "India to the world. We make trade numbers work.",
      desc: "IEC code registrations, GST refund files (LUT / IGST), and RBI FEMA regulatory matching.",
      icon: Ship,
      href: "/services/export",
      details: ["IEC Code Setup", "GST LUT Refunds", "Forex Ledger Entries", "RBI FEMA Audits"],
    },
    {
      name: "Finance & Investment",
      tagline: "The right capital. The right retirement portfolio.",
      desc: "MSME working loan presentations, banking project reports, and conservative growth portfolios.",
      icon: Landmark,
      href: "/services/finance",
      details: ["MSME Loan Filings", "CMA Project Reports", "Investment Advisory", "Retirement Portfolio Plan"],
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-obsidian pt-32 pb-16 px-6 md:px-8 w-full relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#0d0f12,transparent_60%)] opacity-35 -z-10" />
        <div className="absolute inset-0 grid-mesh opacity-20 -z-20" />

        <div className="max-w-7xl mx-auto flex flex-col justify-between items-start gap-5 text-left max-w-3xl">
          <nav className="text-xs text-silver/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
            <span>/</span>
            <span className="text-champagne">Solutions</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Our Solutions
          </h1>
          <p className="text-silver text-sm md:text-base max-w-xl leading-relaxed">
            Reimagining financial compliance workflows and accounting pipelines under single-point advisory.
          </p>
        </div>
      </section>

      {/* DETAILED DIRECTORY */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <SpotlightCard
                  key={svc.name}
                  className="bg-slate-dark/20 flex flex-col justify-between border border-white/5"
                  glowColor="rgba(16, 185, 129, 0.08)"
                >
                  <div>
                    <div className="flex gap-4 items-center mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-active shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-display-brand text-xl font-bold text-ice-white">
                          {svc.name}
                        </h2>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-active">
                          Expert System
                        </span>
                      </div>
                    </div>

                    <p className="text-[10px] text-champagne/80 font-bold uppercase tracking-wider mb-2">
                      {svc.tagline}
                    </p>
                    <p className="text-xs text-silver leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <div className="border-t border-white/5 pt-5 mb-8">
                      <h4 className="text-[10px] uppercase font-bold text-ice-white tracking-widest mb-3">
                        Key Areas of Competency
                      </h4>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-silver">
                        {svc.details.map((detail) => (
                          <li key={detail} className="flex gap-2 items-center">
                            <span className="text-emerald-active font-bold">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={svc.href}
                    className="inline-flex self-start items-center gap-2 bg-emerald-active hover:bg-emerald-glow text-obsidian text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors shadow-lg shadow-emerald-active/10"
                  >
                    <span>Inspect Solution Detail</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-dark/20 text-white py-16 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <h3 className="font-display-brand text-2xl font-bold text-ice-white">
            Need customized package deployment?
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            We offer custom monthly advisory plans for Private Limited and partnership businesses, reconciling all ledger accounts, filing returns, and handling audits.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-active hover:bg-emerald-glow text-obsidian font-bold px-8 py-3.5 rounded-xl border border-emerald-active shadow-[0_4px_14px_rgba(16,185,129,0.2)] transition-all inline-flex items-center gap-2 mt-2 text-xs uppercase tracking-wider"
          >
            <span>Consult Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
