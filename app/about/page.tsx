import Image from "next/image";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Shield, Users, Award, Compass, Star, ChevronRight, ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "About Us - Satkut Shamim & Taxzone History",
  description: "Learn about Taxzone's 22-year legacy serving Vashi, Navi Mumbai. Read the story of founder Satkut Shamim, our compliance standards, and credentials.",
  path: "/about",
});

export default function AboutPage() {
  const values = [
    {
      title: "INTEGRITY",
      desc: "Every tax recommendation, filing adjustment, and investment advisory is made solely in your long-term interest.",
      icon: Shield,
    },
    {
      title: "CONTINUITY",
      desc: "We commit to multi-decade client relationships. We are here to guide you, your business, and your children.",
      icon: Users,
    },
    {
      title: "PRECISION",
      desc: "Tax calculations require complete accuracy. Every bookkeeping entry and GST credit claim is executed with care.",
      icon: Award,
    },
    {
      title: "ACCESSIBILITY",
      desc: "Complex financial tax regulations should never feel out of reach. We translate legal taxation jargon into actionable clarity.",
      icon: Compass,
    },
    {
      title: "GROWTH",
      desc: "Your compliance is a legal necessity; your prosperity is our true target. We measure success by your security.",
      icon: Star,
    },
  ];

  const credentials = [
    { title: "Licensed GST Practitioner", issuer: "GST Council, Government of India" },
    { title: "Registered Tax Practitioner (TRP)", issuer: "Income Tax Department, India" },
    { title: "22+ Years of Financial Practice", issuer: "Established in Vashi, Navi Mumbai (2003)" },
    { title: "Advisory to 350+ Active SMEs", issuer: "Across Pharma, Logistics, Timber, CHS, & Construction" },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section className="bg-obsidian pt-32 pb-20 px-6 md:px-8 w-full relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#0d0f12,transparent_60%)] opacity-35 -z-10" />
        <div className="absolute inset-0 grid-mesh opacity-20 -z-20" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <nav className="text-xs text-silver/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
              <span>/</span>
              <span className="text-champagne">About</span>
            </nav>
            
            <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
              About Taxzone
            </h1>
            <p className="text-silver text-sm md:text-base max-w-lg leading-relaxed">
              We act as the financial co-founder and compliance back-office for businesses and families of Navi Mumbai.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/founder.png"
              alt="Taxzone platform theme"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: HERITAGE */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 border border-white/5 self-start px-3 py-1 rounded-xl">
            OUR STORY
          </span>
          
          <h2 className="font-display-brand text-2xl md:text-3xl font-extrabold text-ice-white leading-tight">
            Built in Vashi on trust, not transactional filings.
          </h2>
          <div className="w-12 h-0.5 bg-emerald-active rounded-full" />

          <div className="flex flex-col gap-6 text-xs md:text-sm text-silver leading-relaxed font-medium">
            <p>
              In 2003, amidst the rapid commercial expansion of Vashi, Navi Mumbai, a young consultant named Satkut Shamim recognized a gap. Local small-and-medium businesses (SMEs) were caught between high-priced corporate accounting advisory services and low-trust, transactional tax-filing brokers.
            </p>
            <p>
              He established Taxzone with a promise: to become a trusted, accessible financial co-founder for these business owners. His first client, Dharmendra Kohli of Sanjay Motors, remains a client today, 22 years later. So does his son.
            </p>
            <p>
              Over the next two decades, Taxzone expanded entirely through client referrals. We did not run billboard advertisements or print newspaper columns; instead, we delivered consistent tax savings and reliable audit handling for Turbhe warehouses, APMC timber yards, pharmaceutical distributors, and housing societies.
            </p>
            <p>
              Today, Taxzone manages over 350 active clients in the Navi Mumbai and Raigad districts, proving that accessibility and expert consultancy can coexist beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUES */}
      <section className="bg-slate-dark/20 text-ice-white py-20 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              STANDARDS
            </span>
            <h2 className="font-display-brand text-3xl font-extrabold text-ice-white">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <SpotlightCard
                  key={val.title}
                  className="bg-slate-dark/30 flex flex-col gap-4 border border-white/5"
                  glowColor="rgba(251,191,36,0.08)"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-active shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display-brand text-xs font-bold tracking-widest text-ice-white">
                    {val.title}
                  </h3>
                  <p className="text-[11px] text-silver leading-relaxed">
                    {val.desc}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: CREDENTIALS */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              AUDITED PRACTICE
            </span>
            <h2 className="font-display-brand text-3xl font-extrabold text-ice-white">
              Credentials & Licenses
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.title}
                className="bg-slate-dark/20 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-emerald-active/30 transition-all duration-300 shadow-md"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-active/10 border border-emerald-active/20 flex items-center justify-center text-emerald-active font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-display-brand font-bold text-ice-white text-sm leading-tight mb-1">
                    {cred.title}
                  </h4>
                  <p className="text-[10px] text-silver font-semibold uppercase tracking-wider">
                    {cred.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-emerald-active hover:bg-emerald-glow text-obsidian font-bold px-8 py-3.5 rounded-xl border border-emerald-active shadow-[0_4px_14px_rgba(16,185,129,0.2)] transition-all inline-flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              <span>Connect with Satkut Shamim</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
