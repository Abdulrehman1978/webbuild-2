import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Quote, Calendar, MapPin, Briefcase, ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "Client Stories - 22 Years of Trust & ROI Outcomes",
  description: "Read how Taxzone partners with businesses and families in Vashi, Nerul, and Turbhe to optimize taxes, handle books, and secure wealth.",
  path: "/client-stories",
});

interface CaseStudy {
  quote: string;
  author: string;
  role: string;
  location: string;
  since: string;
  industry: string;
  featured?: boolean;
  situation: string;
  approach: string;
  outcome: string;
}

export default function ClientStoriesPage() {
  const stories: CaseStudy[] = [
    {
      author: "Shri Kasturilal Lamba",
      role: "Retired Retail Merchant",
      location: "Vashi, Navi Mumbai",
      since: "2005",
      industry: "Retail Trade (Retired)",
      featured: true,
      quote: "At 76, I earn a 7-digit income every year without working — because of Shamim Sir. I closed my shop in 2005 and invested wisely with Taxzone's guidance. I am not dependent on my son. That is the greatest gift.",
      situation: "Shri Kasturilal Lamba closed his retail operations in Vashi in 2005, seeking a secure path to generate a stable, independent passive income for retirement without relying on his children.",
      approach: "Taxzone structured a conservative long-term capital deployment model across debt funds, real estate assets, and fixed-yield instruments, reviewing allocations semi-annually.",
      outcome: "A debt-free, high-yield passive income portfolio yielding an independent seven-digit annual return for the last 15 years, ensuring complete financial security.",
    },
    {
      author: "Rajesh Bhardwaj",
      role: "Founder, R.B. Roadways",
      location: "Turbhe, Navi Mumbai",
      since: "2016",
      industry: "Logistics & Transport",
      quote: "Since partnering with Taxzone in 2016, our logistics operation has expanded dramatically. Our turnover has grown four times. Their compliance advisory is proactive, legal, and absolute.",
      situation: "Facing rapid scaling challenges and increasing GST/regulatory filing complexities across multiple states for a expanding logistics transport fleet.",
      approach: "Designed a centralized GST billing framework, streamlined input tax credit (ITC) reconciliation procedures, and automated bookkeeping matching ledgers.",
      outcome: "Four-fold turnover expansion in 8 years with zero tax compliance penalties, late-filing notices, or credit losses.",
    },
    {
      author: "Dharmendra Kohli",
      role: "Founder, Sanjay Motors",
      location: "Vashi, Navi Mumbai",
      since: "2003",
      industry: "Automobile Service & Repair",
      quote: "Taxzone has been managing Sanjay Motors since they founded the firm in 2003. I was their first client. Now, my son has taken over the business, and he trusts Shamim Sir just as much. That is generational trust.",
      situation: "Needed reliable financial and income tax filing advisory starting in 2003 as a new service station. Later, required structural transition assistance to pass the business to the next generation.",
      approach: "Managed baseline tax returns and, in 2018, guided the tax-efficient capital transfer and partnership restructuring to hand operations to Kohli's son.",
      outcome: "An unbroken 22-year relationship extending into the second generation of business ownership, maintaining perfect compliance.",
    },
    {
      author: "Danish Patanwala",
      role: "Partner, Patanwala Timber",
      location: "APMC Vashi, Navi Mumbai",
      since: "2008",
      industry: "Timber Trading",
      quote: "We have worked with Shamim Sir for our timber trading business since 2008. The peace of mind of having your bookkeeping, GST audits, and filings executed correctly is worth everything.",
      situation: "Timber trading requires handling large invoice books, vendor transactions, and input tax credit matching on raw logs imports.",
      approach: "Established regular monthly bookkeeping checks and structured purchase reconciliation algorithms to match vendor GSTR-1 entries.",
      outcome: "16 years of error-free audits, with optimized tax returns and streamlined cash flow forecasting.",
    },
    {
      author: "Faroque Hussain",
      role: "Managing Director, Hussain Pharma",
      location: "Turbhe, Navi Mumbai",
      since: "2003",
      industry: "Pharmaceutical Distribution",
      quote: "Shamim Sir was my close friend and advisor even before Taxzone was formed. His expertise in pharmaceutical business tax regulations helped us set up our operations smoothly.",
      situation: "Starting pharmaceutical distribution in Navi Mumbai with strict regulatory norms, drug license taxation structures, and credit schedules.",
      approach: "Coordinated structural advice on corporate tax returns and registered tax licenses under Maharashtra government requirements.",
      outcome: "Smooth, compliant startup launch and uninterrupted expansion into a prominent local distributor.",
    },
    {
      author: "Managing Committee",
      role: "Akashleela CHS Ltd.",
      location: "Nerul, Navi Mumbai",
      since: "2007",
      industry: "Housing Society Management",
      quote: "Managing a housing society's accounts and audits requires meticulous attention to detail. Akashleela CHS has trusted Taxzone since 2007-08. In 17 years, we have had zero compliance issues.",
      situation: "Cooperative Housing Societies require special ledger audits, maintenance collection logs, and regulatory filing audits.",
      approach: "Deployed specialized society bookkeeping ledger tracking, preparing detailed annual financial audit files for registrar inspections.",
      outcome: "17 consecutive years of clean, error-free society accounts and audit checks with zero compliance issues.",
    },
    {
      author: "Tanveer Khan",
      role: "Proprietor, Khan Enterprises",
      location: "Vashi, Navi Mumbai",
      since: "2013",
      industry: "General Engineering Trading",
      quote: "Thirteen years of relationship is not just business; it is family. Shamim Sir knows our books and our business requirements perfectly. Now my second generation also consults him for startup ideas.",
      situation: "Small industrial engineering trading shop requiring income tax return filings and GST consulting, later needing advisory for new startup ideas launched by the children.",
      approach: "Handled tax filing workflows, and acted as an accessible consultant to evaluate first-year compliance requirements for the children's new startups.",
      outcome: "Stable business compliance and private sector mentoring for the second generation.",
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
            <span className="text-champagne">Client Stories</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Client Stories
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Decades of trust, built one client at a time. Read about the financial milestones we've helped shape in Navi Mumbai since 2003.
          </p>
        </div>
      </section>

      {/* DETAILED STORIES */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {stories.map((story, idx) => (
            <SpotlightCard
              key={story.author}
              className={`bg-slate-dark/20 border ${
                story.featured ? "border-emerald-active border-2 shadow-lg shadow-emerald-active/5" : "border-white/5"
              }`}
              glowColor={story.featured ? "rgba(16, 185, 129, 0.15)" : "rgba(251, 191, 36, 0.08)"}
            >
              <div className="flex flex-col gap-5">
                {/* Meta details */}
                <div className="flex flex-wrap gap-4 items-center text-[10px] text-silver font-bold uppercase tracking-widest border-b border-white/5 pb-4">
                  <div className="flex gap-1.5 items-center">
                    <Calendar className="w-4 h-4 text-emerald-active" />
                    <span>Client since {story.since}</span>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <MapPin className="w-4 h-4 text-emerald-active" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Briefcase className="w-4 h-4 text-emerald-active" />
                    <span>{story.industry}</span>
                  </div>
                </div>

                {/* Big Quote */}
                <blockquote className="font-display-brand text-lg md:text-xl text-ice-white italic leading-relaxed pl-4 border-l-4 border-emerald-active">
                  "{story.quote}"
                </blockquote>

                {/* Case Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5 pt-6 text-xs mt-2">
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-bold text-ice-white uppercase tracking-widest text-[10px]">The Situation</h4>
                    <p className="text-silver leading-relaxed">{story.situation}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-bold text-ice-white uppercase tracking-widest text-[10px]">The Taxzone Approach</h4>
                    <p className="text-silver leading-relaxed">{story.approach}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-bold text-ice-white uppercase tracking-widest text-[10px]">The Outcome</h4>
                    <p className="text-silver leading-relaxed">{story.outcome}</p>
                  </div>
                </div>

                {/* Author sign off */}
                <div className="flex justify-between items-center border-t border-white/5 pt-5 mt-2">
                  <div>
                    <span className="font-display-brand font-bold text-ice-white text-base block">
                      {story.author}
                    </span>
                    <span className="text-xs text-silver font-medium">
                      {story.role}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-active font-bold text-xs">
                    0{idx + 1}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-dark/20 text-white py-16 px-6 md:px-8 w-full border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <h3 className="font-display-brand text-2xl font-bold text-ice-white">
            Write your success story next.
          </h3>
          <p className="text-xs md:text-sm text-silver leading-relaxed max-w-xl">
            Join 350+ corporate entities, partnerships, and families who rely on Taxzone to manage filings, handle books, and secure wealth growth.
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
