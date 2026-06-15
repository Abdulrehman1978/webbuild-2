import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "GST Services", href: "/services/gst" },
    { name: "Income Tax", href: "/services/income-tax" },
    { name: "Accounting & Books", href: "/services/accounting" },
    { name: "Startup Registration", href: "/services/startup" },
    { name: "Export Consulting", href: "/services/export" },
    { name: "Finance & Loans", href: "/services/finance" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Client Stories", href: "/client-stories" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-obsidian border-t border-white/5 pt-16 pb-8 text-silver no-print w-full mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0d0f12,transparent_60%)] opacity-35 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 relative z-10">
        {/* About info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-display-brand text-xl font-bold text-ice-white tracking-tight">
            TAXZONE<span className="text-emerald-active">_</span>
          </Link>
          <p className="text-xs md:text-sm text-silver/70 leading-relaxed">
            Taxzone is a financial co-founder and tax technology advisor for the businesses and families of Navi Mumbai. We build generational legacies and guide clients through compliance since 2003.
          </p>
          <div className="text-[11px] text-champagne font-semibold tracking-wider uppercase">
            "Your Financial Legacy, Our Lifelong Commitment."
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase font-bold tracking-widest text-ice-white border-l-2 border-emerald-active pl-2">
            Solutions
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
            {services.map((svc) => (
              <li key={svc.name}>
                <Link
                  href={svc.href}
                  className="hover:text-champagne hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {svc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase font-bold tracking-widest text-ice-white border-l-2 border-emerald-active pl-2">
            Company
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-champagne hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <span className="text-silver/30 cursor-not-allowed">
                Careers (Join Us)
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase font-bold tracking-widest text-ice-white border-l-2 border-emerald-active pl-2">
            Contact
          </h3>
          <ul className="flex flex-col gap-4 text-xs md:text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-emerald-active shrink-0 mt-0.5" />
              <span className="leading-tight text-silver/80">
                Office No. 908, Grohitam Premises, APMC Sector-19, Vashi, Navi Mumbai, MH 400705
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-emerald-active shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <a href="tel:+919324264948" className="hover:text-champagne transition-colors font-semibold">
                  +91 9324264948
                </a>
                <a href="tel:+918356060119" className="hover:text-champagne transition-colors">
                  +91 8356060119
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-emerald-active shrink-0 mt-0.5" />
              <a
                href="mailto:taxzonenavimumbai@gmail.com"
                className="hover:text-champagne transition-colors break-all"
              >
                taxzonenavimumbai@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Map link and copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <a
          href="https://maps.app.goo.gl/rY2N2Z7K6vM2bTQLA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-champagne transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-active" />
          <span>Find APMC Grohitam Office on Map</span>
          <ExternalLink className="w-3.5 h-3.5 text-silver/50" />
        </a>

        <div className="text-silver/50 text-[11px] text-center sm:text-right">
          © {currentYear} Taxzone. All rights reserved. | Est. 2003 · Vashi, Navi Mumbai
        </div>
      </div>
    </footer>
  );
}
