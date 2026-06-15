"use client";

import { motion } from "framer-motion";
import { Landmark, Users, TrendingUp, Calendar, Award } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

export default function GenerationalTimeline() {
  const milestones: Milestone[] = [
    {
      year: "2003",
      title: "The First Consultation",
      desc: "Satkut Shamim opens a single desk in Vashi. Dharmendra Kohli of Sanjay Motors becomes client #1. An unbroken 22-year relationship begins.",
      icon: Calendar,
    },
    {
      year: "2005",
      title: "The Lamba Wealth Story",
      desc: "Shri Kasturilal Lamba closes his retail shop. Taxzone structures a conservative passive income growth plan that yields a 7-digit passive return by age 76.",
      icon: Landmark,
    },
    {
      year: "2007",
      title: "Akashleela CHS Association",
      desc: "We begin managing society accounting and compliance audits for Akashleela CHS. This expands into a specialized co-operative housing society bookkeeping line.",
      icon: Users,
    },
    {
      year: "2013",
      title: "Expansion of Base",
      desc: "Danish Patanwala (Timber) and Tanveer Khan (General Trading) expand their accounting books under our support. We cross 150+ active SME partners.",
      icon: Award,
    },
    {
      year: "2016",
      title: "4x Turnover Growth",
      desc: "R.B. Roadways joins Taxzone. Centralizing GST invoices and purchase reconciliations allows their logistics fleet turnover to expand four-fold.",
      icon: TrendingUp,
    },
    {
      year: "2026",
      title: "Second Generation Advisory",
      desc: "Children of our original 2003 clients launch new tech and logistics startups in Vashi, consulting Shamim Sir for registration. True continuity.",
      icon: Users,
    },
  ];

  return (
    <div className="w-full relative py-10">
      {/* Central Connector line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

      <div className="flex flex-col gap-16 relative">
        {milestones.map((item, idx) => {
          const Icon = item.icon;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={item.year}
              className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Central Year indicator node */}
              <div className="absolute left-4 md:left-1/2 top-6 md:top-auto w-8 h-8 rounded-full bg-slate-dark border border-champagne text-champagne flex items-center justify-center -translate-x-1/2 font-display-brand font-bold text-xs shadow-lg shadow-champagne/10 z-10">
                {item.year.slice(2)}
              </div>

              {/* Empty placeholder spacer for alignment */}
              <div className="hidden md:block w-1/2" />

              {/* Actual Content card */}
              <div className="w-full md:w-1/2 pl-12 pr-4 md:px-12">
                <div className="bg-slate-dark/40 border border-white/5 p-6 rounded-2xl relative shadow-md hover:border-champagne/30 transition-all duration-300">
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-8 h-8 rounded-lg bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-champagne uppercase tracking-widest block">
                        Milestone {item.year}
                      </span>
                      <h4 className="font-display-brand text-sm md:text-base font-bold text-ice-white">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-silver/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
