"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const services = [
    { name: "GST Services", href: "/services/gst", desc: "Registration, filing, and ITC matching." },
    { name: "Income Tax", href: "/services/income-tax", desc: "ITR planning, filings, and audit replies." },
    { name: "Accounting & Books", href: "/services/accounting", desc: "General ledger & society account audits." },
    { name: "Startup Incorporation", href: "/services/startup", desc: "MCA registrations, PAN, and setup." },
    { name: "Export Consulting", href: "/services/export", desc: "IEC licenses, LUT tax refunds & FEMA." },
    { name: "Finance & Loans", href: "/services/finance", desc: "MSME funds, project reports & investments." },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-40 px-4 md:px-8 pt-4 no-print">
      {/* Floating Glassmorphic Container */}
      <nav
        className={`max-w-7xl mx-auto w-full rounded-2xl border transition-all duration-300 flex justify-between items-center py-3.5 px-6 ${
          scrolled
            ? "bg-obsidian/75 backdrop-blur-lg border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-white/5 backdrop-blur-sm border-white/5"
        }`}
      >
        {/* Wordmark Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="font-display-brand text-xl md:text-2xl font-bold tracking-tight text-ice-white group-hover:text-champagne transition-colors">
            TAXZONE<span className="text-emerald-active">_</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className={`hover:text-champagne transition-colors relative py-1 ${
              pathname === "/" ? "text-champagne" : "text-ice-white"
            }`}
          >
            Home
            {pathname === "/" && (
              <motion.span
                layoutId="activeNavV2"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-champagne rounded-full"
              />
            )}
          </Link>
          
          <Link
            href="/about"
            className={`hover:text-champagne transition-colors relative py-1 ${
              pathname === "/about" ? "text-champagne" : "text-ice-white"
            }`}
          >
            About
            {pathname === "/about" && (
              <motion.span
                layoutId="activeNavV2"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-champagne rounded-full"
              />
            )}
          </Link>

          {/* Services Menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              className={`hover:text-champagne transition-colors flex items-center gap-1 py-1 cursor-pointer ${
                pathname.startsWith("/services") ? "text-champagne" : "text-ice-white"
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdown ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[450px] bg-slate-dark/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-4 grid grid-cols-2 gap-3 mt-3"
                >
                  {services.map((svc) => (
                    <Link
                      key={svc.name}
                      href={svc.href}
                      className="group p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="text-champagne font-bold group-hover:text-white transition-colors text-xs tracking-wider uppercase mb-1">
                        {svc.name}
                      </div>
                      <div className="text-silver text-[11px] leading-tight">
                        {svc.desc}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/client-stories"
            className={`hover:text-champagne transition-colors relative py-1 ${
              pathname === "/client-stories" ? "text-champagne" : "text-ice-white"
            }`}
          >
            Client Stories
            {pathname === "/client-stories" && (
              <motion.span
                layoutId="activeNavV2"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-champagne rounded-full"
              />
            )}
          </Link>
          
          <Link
            href="/resources"
            className={`hover:text-champagne transition-colors relative py-1 ${
              pathname === "/resources" ? "text-champagne" : "text-ice-white"
            }`}
          >
            Resources
            {pathname === "/resources" && (
              <motion.span
                layoutId="activeNavV2"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-champagne rounded-full"
              />
            )}
          </Link>
        </div>

        {/* Call Now / Consultation Button */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+919324264948"
            className="flex items-center gap-2 text-silver hover:text-white transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4 text-emerald-active" />
            <span>+91 9324264948</span>
          </a>
          <Link
            href="/contact"
            className="bg-emerald-active hover:bg-emerald-glow text-obsidian text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-300 uppercase tracking-wider shadow-lg shadow-emerald-active/10"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu triggers */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href="tel:+919324264948"
            className="p-2 text-emerald-active bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ice-white bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 bg-slate-dark/95 border border-white/10 shadow-2xl rounded-2xl p-6 lg:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-base font-semibold">
              <Link href="/" className="hover:text-champagne pb-2 border-b border-white/5">
                Home
              </Link>
              <Link href="/about" className="hover:text-champagne pb-2 border-b border-white/5">
                About Us
              </Link>

              <div className="flex flex-col gap-2 pb-2 border-b border-white/5">
                <span className="text-[10px] uppercase text-emerald-active font-bold tracking-widest">
                  Our Solutions
                </span>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {services.map((svc) => (
                    <Link
                      key={svc.name}
                      href={svc.href}
                      className="text-xs text-silver hover:text-white transition-colors"
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/client-stories" className="hover:text-champagne pb-2 border-b border-white/5">
                Client Stories
              </Link>
              <Link href="/resources" className="hover:text-champagne pb-2 border-b border-white/5">
                Resources
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+919324264948"
                className="flex items-center gap-3 text-silver hover:text-white justify-center p-3 rounded-xl border border-white/5 text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-active" />
                <span>+91 9324264948</span>
              </a>
              <Link
                href="/contact"
                className="bg-emerald-active text-obsidian text-center font-bold p-3 rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-glow transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
