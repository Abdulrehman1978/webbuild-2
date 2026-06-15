import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Landmark, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "SME Finance & Wealth Management Vashi",
  description: "Secure funding files and plan capital assets. Taxzone facilitates MSME loan dossiers preparation and retirement wealth portfolio advisory in Navi Mumbai.",
  path: "/services/finance",
});

export default function FinanceServicesPage() {
  const offerings = [
    { title: "Business Loan Facilitation", desc: "Assisting in compiling necessary bank files, project reports, and financial projections to secure SME expansion capital." },
    { title: "Working Capital Finance", desc: "Structuring banking files for Cash Credit (CC) and Overdraft (OD) limits based on inventory and debtors records." },
    { title: "MSME Scheme Registrations", desc: "Helping secure Udyam certificates to qualify for governmental credit guarantee schemes (CGTMSE) and interest subsidies." },
    { title: "Banking Project Reports", desc: "Compiling detailed bankable projected financial reports and CMA (Credit Monitoring Arrangement) data portfolios." },
    { title: "Investment Advisory", desc: "Guiding businesses and families on conservative asset allocation across fixed deposits, mutual funds, and properties." },
    { title: "Retirement Portfolio Planning", desc: "Helping business owners structure passive income assets to enjoy a comfortable, independent retirement." },
  ];

  const highlights = [
    "Bank-compliant financial statement preparation",
    "Detailed Project Report (DPR) writing",
    "Access to CGTMSE collateral-free loan files support",
    "Tailored conservative retirement wealth planning",
  ];

  const whatsappUrl = "https://wa.me/919324264948?text=" + encodeURIComponent("Hi Taxzone, I'd like to explore loan/investment options.");

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
            <span className="text-gold">Finance & Loans</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Finance & Loans
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            The right capital, at the right time, for the right reason. We assist you in building bank-compliant portfolios and conservative asset strategies to secure funding and build lasting wealth.
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
                Access expansion capital and organize financial portfolios.
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
                Key Deliverables
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
              <h4 className="font-display-brand text-sm font-bold text-champagne">Retirement Legacy Case</h4>
              <p className="text-xs text-silver/85 leading-relaxed">
                "Shri Kasturilal Lamba closed his retail shop in 2005. Under our portfolio guidance, his investments grew to yield a 7-digit passive income today at age 76, making him completely independent of his son."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="bg-slate-dark/20 text-ice-white py-16 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <h3 className="font-display-brand text-2xl font-bold text-ice-white">
            Structure your business expansion capital.
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            We help prepare bank-compliant project statements, project reports, and investment structures. Talk to Satkut Shamim and team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (Finance Inquiry)</span>
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
