"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Calendar, MapPin } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  since: string;
  featured?: boolean;
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "At 76, I earn a 7-digit income every year without working — because of Shamim Sir. I closed my shop in 2005 and invested wisely with Taxzone's guidance. I am not dependent on my son. That is the greatest gift of financial independence.",
      author: "Shri Kasturilal Lamba",
      role: "Retired Business Owner",
      location: "Vashi, Navi Mumbai",
      since: "2005",
      featured: true,
    },
    {
      quote: "Since partnering with Taxzone in 2016, our logistics operation has expanded dramatically. Our turnover has grown four times. Their compliance advisory is proactive, legal, and absolute.",
      author: "Rajesh Bhardwaj",
      role: "Owner, R.B. Roadways",
      location: "Turbhe, Navi Mumbai",
      since: "2016",
    },
    {
      quote: "Taxzone has been managing Sanjay Motors since they founded the firm in 2003. I was their first client. Now, my son has taken over the business, and he trusts Shamim Sir just as much. That is generational trust.",
      author: "Dharmendra Kohli",
      role: "Founder, Sanjay Motors",
      location: "Vashi, Navi Mumbai",
      since: "2003",
    },
    {
      quote: "We have worked with Shamim Sir for our timber trading business since 2008. The peace of mind of having your bookkeeping, GST audits, and filings executed correctly is worth everything.",
      author: "Danish Patanwala",
      role: "Partner, Patanwala Timber",
      location: "APMC Vashi, Navi Mumbai",
      since: "2008",
    },
    {
      quote: "Shamim Sir was my close friend and advisor even before Taxzone was formed. His expertise in pharmaceutical business tax regulations helped us set up our operations smoothly.",
      author: "Faroque Hussain",
      role: "Managing Director, Hussain Pharma",
      location: "Turbhe, Navi Mumbai",
      since: "2003",
    },
    {
      quote: "Managing a housing society's accounts and audits requires meticulous attention to detail. Akashleela CHS has trusted Taxzone since 2007-08. In 17 years, we have had zero compliance issues.",
      author: "Managing Committee",
      role: "Akashleela CHS Ltd.",
      location: "Nerul, Navi Mumbai",
      since: "2007",
    },
    {
      quote: "Thirteen years of relationship is not just business; it is family. Shamim Sir knows our books and our business requirements perfectly. Now my second generation also consults him for startup ideas.",
      author: "Tanveer Khan",
      role: "Proprietor, Khan Enterprises",
      location: "Vashi, Navi Mumbai",
      since: "2013",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const active = testimonials[currentIndex];

  return (
    <div
      className="relative w-full max-w-4xl mx-auto py-8 px-4 md:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-slate-dark/40 border border-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl min-h-[350px] md:min-h-[290px] flex flex-col justify-between overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-active/5 rounded-full filter blur-2xl -z-10" />
        <Quote className="absolute right-8 top-8 w-24 h-24 text-emerald-active/5 -z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col justify-between"
          >
            <div>
              {/* Partner Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-active/10 text-emerald-active border border-emerald-active/20 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                <Calendar className="w-3.5 h-3.5" />
                <span>Partner Since {active.since}</span>
              </div>

              {/* Quote */}
              <blockquote className="font-display-brand text-lg md:text-xl lg:text-2xl text-ice-white/90 italic leading-relaxed mb-6">
                "{active.quote}"
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-5 mt-auto">
              <div className="flex flex-col gap-0.5">
                <cite className="not-italic font-bold text-ice-white text-base md:text-lg">
                  {active.author}
                </cite>
                <div className="text-silver text-xs flex items-center gap-2">
                  <span>{active.role}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-champagne flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {active.location}
                  </span>
                </div>
              </div>
              
              {active.featured && (
                <span className="self-start sm:self-center text-[9px] uppercase font-bold tracking-widest text-emerald-active bg-emerald-active/5 border border-emerald-active/20 px-3 py-1 rounded-lg">
                  Legacy Success Case
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-emerald-active w-5" : "bg-white/10 hover:bg-emerald-active/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-2 border border-white/5 text-silver hover:text-emerald-active hover:border-emerald-active/30 rounded-xl transition-all bg-white/5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-white/5 text-silver hover:text-emerald-active hover:border-emerald-active/30 rounded-xl transition-all bg-white/5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
