import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileSpreadsheet, Scale, BookOpen, Compass, Ship, Landmark, HelpCircle, ShieldCheck } from "lucide-react";
import HeroParticles from "@/components/HeroParticles";
import CountUpStats from "@/components/CountUpStats";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import SpotlightCard from "@/components/SpotlightCard";
import GenerationalTimeline from "@/components/GenerationalTimeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HomepageFAQ from "@/components/HomepageFAQ";
import ContactForm from "@/components/ContactForm";
import { generateMetadata as buildMetadata } from "@/lib/seo";
import { faqs } from "@/lib/faq-data";

export const metadata = buildMetadata({
  title: "Taxzone — Reimagined Financial Compliance Platform",
  description:
    "We act as your financial co-founder. Professional GST filing, ITR tax planning, startup registration, and retirement wealth management in Navi Mumbai.",
  path: "/",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};


export default function Home() {
  const clientTypes = [
    {
      title: "Startups & Incorporation",
      copy: "Launch from zero. We handle all MCA filings, registrations, PAN/TAN allocation, and first-year accounts — so you start right.",
      href: "/services/startup",
    },
    {
      title: "Scaling Businesses",
      copy: "As turnover grows, tax complexity scales. We act as your compliance back-office — matching ITC records and managing books.",
      href: "/services",
    },
    {
      title: "Asset Planning",
      copy: "Freelancers, directors, and families. Reconciling investments, TDS returns, capital gains exemptions, and ITR planning.",
      href: "/services/income-tax",
    },
  ];

  const services = [
    {
      name: "GST Filings & Returns",
      tagline: "Compliance in our hands is a financial margin strategy.",
      desc: "End-to-end GSTR-1, 3B returns filing, purchase reconciliations, and representation support.",
      icon: FileSpreadsheet,
      href: "/services/gst",
    },
    {
      name: "Income Tax Advisory",
      tagline: "Every rupee saved is a rupee invested in your future.",
      desc: "ITR returns preparation, advance tax calculations, capital gains planning, and scrutiny responses.",
      icon: Scale,
      href: "/services/income-tax",
    },
    {
      name: "Corporate Bookkeeping",
      tagline: "Your books. Our craft. Your absolute clarity.",
      desc: "Accurate monthly accounting ledger postings, bank reconciliations, and specialized housing society audit files.",
      icon: BookOpen,
      href: "/services/accounting",
    },
    {
      name: "Startup Incorporations",
      tagline: "Incorporate correct. Starting right costs less.",
      desc: "MCA name approval, LLP and Private Limited registrations, and first-year compliance calendars.",
      icon: Compass,
      href: "/services/startup",
    },
    {
      name: "Export Trade Compliance",
      tagline: "India to the world. We make trade numbers work.",
      desc: "IEC code registrations, GST refund files (LUT / IGST), and RBI FEMA regulatory matching.",
      icon: Ship,
      href: "/services/export",
    },
    {
      name: "Finance & Investment",
      tagline: "The right capital. The right retirement portfolio.",
      desc: "MSME working loan presentations, banking project reports, and conservative growth portfolios.",
      icon: Landmark,
      href: "/services/finance",
    },
  ];

  return (
    <div className="w-full">
      {/* FAQPage JSON-LD — server-rendered for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* SECTION 1: HERO */}

      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center bg-obsidian pt-28 pb-16 overflow-hidden px-6 md:px-8">
        {/* Background spotlights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-active/5 rounded-full filter blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-champagne/5 rounded-full filter blur-[140px] -z-10" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-mesh opacity-30 -z-20" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-left">
            <div className="inline-flex self-start px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[9px] font-bold tracking-[0.2em] uppercase text-emerald-active">
              TAXZONE v2 // NEXT-GEN WEALTH
            </div>
            
            <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-[1.1] tracking-tight">
              Reimagining Wealth<span className="text-emerald-active">.</span> <br />
              Automating <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne to-copper italic">Compliance.</span>
            </h1>

            <p className="text-silver text-sm md:text-base max-w-lg leading-relaxed font-medium">
              For over 22 years, Taxzone has acted as the financial co-founder for Navi Mumbai's leading entrepreneurs — reconciling files, optimizing taxes, and launching legacies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/contact"
                className="bg-emerald-active hover:bg-emerald-glow text-obsidian text-center font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-active/10 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-ice-white text-center font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Canvas */}
          <div className="lg:col-span-5 w-full flex justify-center items-center h-[350px] md:h-[450px] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_60%)] -z-10" />
            <HeroParticles />
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <CountUpStats />

      {/* SECTION 3: SIMULATOR */}
      <section className="bg-obsidian py-20 px-6 md:px-8 w-full border-t border-white/5 relative">
        <div className="absolute inset-0 grid-mesh opacity-10 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12 flex flex-col gap-4 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">
              ROI CALCULATOR
            </span>
            <h2 className="font-display-brand text-3xl md:text-4xl font-extrabold text-ice-white">
              Verify your compliance value.
            </h2>
            <p className="text-xs md:text-sm text-silver leading-relaxed">
              Use our interactive simulator to estimate the time and tax savings unlocked under our financial co-founder model.
            </p>
          </div>

          <InteractiveCalculator />
        </div>
      </section>

      {/* SECTION 4: CLIENT TYPES */}
      <section className="bg-slate-dark/30 py-20 px-6 md:px-8 w-full border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((type) => (
              <SpotlightCard
                key={type.title}
                className="bg-slate-dark/20 flex flex-col justify-between"
                glowColor="rgba(251, 191, 36, 0.08)"
              >
                <div>
                  <span className="text-[9px] uppercase font-bold text-emerald-active tracking-widest block mb-4">
                    SOLUTION UNIT
                  </span>
                  <h3 className="font-display-brand text-lg font-bold text-ice-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-xs md:text-sm text-silver leading-relaxed mb-6">
                    {type.copy}
                  </p>
                </div>
                <Link
                  href={type.href}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-champagne hover:text-white uppercase tracking-wider transition-colors mt-auto"
                >
                  <span>Explore Actions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES */}
      <section className="bg-obsidian py-20 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              CAPABILITIES
            </span>
            <h2 className="font-display-brand text-3xl md:text-4xl lg:text-5xl font-extrabold text-ice-white leading-tight">
              Tax compliance meets portfolio strategy.
            </h2>
            <p className="text-xs md:text-sm text-silver">
              All client operations are executed under error-free filing guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <SpotlightCard
                  key={svc.name}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-emerald-active mb-5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display-brand text-base font-bold text-ice-white mb-1">
                      {svc.name}
                    </h3>
                    <p className="text-[10px] text-champagne/80 font-semibold mb-3">
                      {svc.tagline}
                    </p>
                    <p className="text-xs text-silver leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ice-white hover:text-emerald-active transition-colors mt-auto"
                  >
                    <span>Inspect Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: FOUNDER PROFILE */}
      <section className="bg-slate-dark/20 py-20 px-6 md:px-8 w-full border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative aspect-[4/5] max-w-sm mx-auto w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/founder.png"
              alt="Satkut Shamim, Founder & CEO of Taxzone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-transparent p-6 text-white">
              <div className="font-display-brand font-bold text-base">Satkut Shamim</div>
              <div className="text-emerald-active text-[10px] uppercase tracking-wider font-semibold mt-0.5">Founder & CEO // Taxzone</div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 border border-white/5 self-start px-3 py-1 rounded-xl">
              LEADERSHIP NOTE
            </span>
            <h2 className="font-display-brand text-3xl md:text-4xl font-extrabold text-ice-white leading-tight">
              Satkut Shamim: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne to-copper font-bold">22+ Years of Advisory.</span>
            </h2>
            <p className="text-xs md:text-sm text-silver leading-relaxed">
              Satkut Shamim established Taxzone in Vashi in 2003 with the philosophy of providing personalized, accessible, and high-fidelity taxation services. Over his 22+ years of practice, he has supervised complex GST migrations, corporate conversions, and tax audits.
            </p>
            <p className="text-xs md:text-sm text-silver leading-relaxed">
              "We don't treat clients as numbers on a portal. We treat them as family legacies we are responsible for protecting and growing."
            </p>

            <div className="bg-obsidian border border-white/5 p-6 rounded-2xl shadow-xl mt-2 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-active/5 rounded-full filter blur-xl -z-10" />
              <blockquote className="font-display-brand text-sm md:text-base italic text-ice-white/90 leading-relaxed mb-3">
                "Our job is not to file your taxes. Our job is to make sure those taxes are the last thing you worry about."
              </blockquote>
              <cite className="text-[10px] text-emerald-active font-bold uppercase tracking-widest not-italic">
                — Satkut Shamim, Founder & CEO
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TIMELINE */}
      <section className="bg-obsidian py-20 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              HERITAGE
            </span>
            <h2 className="font-display-brand text-3xl md:text-4xl font-extrabold text-ice-white">
              Twenty-two years of execution.
            </h2>
            <p className="text-xs md:text-sm text-silver">
              An unbroken record of growth in Vashi APMC since 2003.
            </p>
          </div>

          <GenerationalTimeline />
        </div>
      </section>

      {/* SECTION 8: CAROUSEL */}
      <section className="bg-slate-dark/20 py-20 px-6 md:px-8 w-full border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0d0f12,transparent_60%)] opacity-35 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              TESTIMONIALS
            </span>
            <h2 className="font-display-brand text-3xl md:text-4xl font-extrabold text-ice-white">
              Generational outcomes.
            </h2>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* SECTION 9: FAQs */}
      <section className="bg-obsidian py-20 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 px-3 py-1 rounded-xl self-center border border-white/5">
              QUESTIONS
            </span>
            <h2 className="font-display-brand text-3xl md:text-4xl font-extrabold text-ice-white">
              Common Questions
            </h2>
          </div>

          <HomepageFAQ />
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="bg-slate-dark/20 py-20 px-6 md:px-8 w-full border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.03),transparent_70%)] opacity-35 -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Copy */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active bg-white/5 border border-white/5 self-start px-3 py-1 rounded-xl">
                GET IN TOUCH
              </span>
              
              <h2 className="font-display-brand text-3xl md:text-4xl lg:text-5xl font-extrabold text-ice-white leading-[1.15] tracking-tight">
                Secure your financial legacy.
              </h2>
              
              <p className="text-xs md:text-sm text-silver leading-relaxed max-w-md">
                Meet with our advisory team to coordinate your company registration, verify input tax credits, or secure business loans.
              </p>

              <div className="flex flex-col gap-5 border-t border-white/5 pt-6 mt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">Direct Calling Lines</span>
                  <a href="tel:+919324264948" className="text-base font-bold text-ice-white hover:text-champagne transition-colors">
                    +91 9324264948
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">Email Operations</span>
                  <a href="mailto:taxzonenavimumbai@gmail.com" className="text-sm font-semibold text-silver hover:text-champagne transition-colors break-all">
                    taxzonenavimumbai@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">Vashi Office Location</span>
                  <p className="text-xs text-silver leading-relaxed">
                    Office No. 908, Grohitam Premises, APMC Sector-19, Vashi, Navi Mumbai, MH 400705
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 w-full lg:sticky lg:top-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
