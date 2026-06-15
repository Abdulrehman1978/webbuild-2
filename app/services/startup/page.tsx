import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Compass, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "Startup Incorporation & LLP Registration Vashi",
  description: "Deploy the optimal legal corporate structure. Taxzone coordinates Private Limited registrations, LLP incorporations, and PAN/TAN tax registrations in Navi Mumbai.",
  path: "/services/startup",
});

export default function StartupAdvisoryServicesPage() {
  const offerings = [
    { title: "Entity Choice Advisory", desc: "Analyzing your target capital structure to choose between sole proprietorship, partnership, LLP, or Private Limited." },
    { title: "Incorporation Handling", desc: "Coordinating MCA name availability, drafting corporate MoA/AoA bylaws, and filing for Certificate of Incorporation." },
    { title: "Tax Registrations Setup", desc: "Allotting company PAN, TAN, GSTIN, and Professional Tax (PT) licenses immediately upon incorporation." },
    { title: "Corporate Banking Setup", desc: "Assisting with bank board resolutions, banking KYC files setup, and banking introductions." },
    { title: "First-Year Accounting", desc: "Configuring cloud bookkeeping systems, customized invoicing platforms, and expense tracking protocols." },
    { title: "MCA Annual Return Filings", desc: "Managing director DIN KYC, annual corporate filings (AOC-4, MGT-7), and registrar updates." },
  ];

  const timeline = [
    { month: "Month 1", title: "Incorporation & CoI", desc: "Choose entity type, reserve name with MCA, configure digital signatures (DSC), and receive Certificate of Incorporation + PAN/TAN." },
    { month: "Month 2", title: "Banking & Tax Setup", desc: "Open bank accounts, apply for GSTIN, register for Professional Tax, and establish baseline cloud bookkeeping ledgers." },
    { month: "Month 3+", title: "First Compliance Runs", desc: "File first monthly GST returns, process TDS calculations, compute payroll variables, and inspect monthly profit/loss reports." },
    { month: "Year 1 End", title: "Annual returns & audits", desc: "Perform tax-saving optimizations, compile annual ITR returns, file MCA reports, and coordinate mandatory audits." },
  ];

  const structures = ["Private Limited Company", "Limited Liability Partnership (LLP)", "One Person Company (OPC)", "Partnership Firm", "Sole Proprietorship"];

  const whatsappUrl = "https://wa.me/919324264948?text=" + encodeURIComponent("Hi Taxzone, I'm starting a new business and need guidance.");

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
            <span className="text-gold">Startup Advisory</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Startup Advisory
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            We've seen hundreds of ideas become businesses. Let's talk about yours. Get your financial and legal foundation right from day one so scale never hits a compliance wall.
          </p>
        </div>
      </section>

      {/* DETAILED OFFERINGS */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">SOLUTIONS SCOPE</span>
              <h2 className="font-display-brand text-2xl md:text-3xl font-bold text-ice-white">
                Incorporate, register, and launch your business correctly.
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
                Entities We Incorporate
              </h3>
              <ul className="flex flex-col gap-3 text-xs text-silver">
                {structures.map((type) => (
                  <li key={type} className="flex gap-2 items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-active shrink-0" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-obsidian border border-white/5 p-6 rounded-2xl flex flex-col gap-4">
              <h4 className="font-display-brand text-sm font-bold text-champagne">"Starting right costs less."</h4>
              <p className="text-xs text-silver/85 leading-relaxed">
                Many businesses fail in their second year due to structural tax mistakes made in the first month. Our advisors ensure you deploy the optimal corporate vehicle immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STARTUP TIMELINE */}
      <section className="bg-slate-dark/20 text-white py-20 px-6 md:px-8 w-full border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              ROADMAP
            </span>
            <h2 className="font-display-brand text-2xl md:text-3xl font-extrabold text-ice-white">
              The Startup Journey at Taxzone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((step) => (
              <div
                key={step.month}
                className="bg-obsidian border border-white/5 rounded-2xl p-6 relative flex flex-col gap-3"
              >
                <div className="text-xs uppercase font-bold text-emerald-active bg-emerald-active/10 border border-emerald-active/20 px-3 py-1 rounded-xl self-start mb-2 font-display-brand">
                  {step.month}
                </div>
                <h3 className="font-display-brand text-sm font-bold text-ice-white">
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
            Register your business correctly.
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            Meet with Satkut Shamim and team to review name availability, select structure, and kick off incorporation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (Startup Advisory)</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-ice-white text-center font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
            >
              Incorporate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
