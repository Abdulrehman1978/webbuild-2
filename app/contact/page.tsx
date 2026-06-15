import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata = generateMetadata({
  title: "Contact Us - Schedule Consultation Vashi Office",
  description: "Schedule a tax consultation with Satkut Shamim at our APMC Vashi office. Review active calling numbers, email addresses, and directions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-obsidian pt-32 pb-16 px-6 md:px-8 w-full relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#0d0f12,transparent_60%)] opacity-35 -z-10" />
        <div className="absolute inset-0 grid-mesh opacity-20 -z-20" />

        <div className="max-w-7xl mx-auto flex flex-col gap-5 text-left max-w-3xl">
          <nav className="text-xs text-silver/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
            <span>/</span>
            <span className="text-champagne">Contact</span>
          </nav>
          
          <h1 className="font-display-brand text-4xl sm:text-5xl md:text-6xl font-extrabold text-ice-white leading-tight">
            Connect with Us
          </h1>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Let's coordinate your financial roadmap. Connect with Shamim Sir and the advisor team.
          </p>
        </div>
      </section>

      {/* CORE DETAILS */}
      <section className="bg-obsidian text-ice-white py-20 px-6 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-active">REACH US</span>
              <h2 className="font-display-brand text-2xl font-bold text-ice-white">
                Office Information
              </h2>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="bg-slate-dark/20 border border-white/5 p-5 rounded-2xl shadow-md flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-emerald-active shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-ice-white tracking-widest mb-1">Office Location</h4>
                  <p className="text-xs md:text-sm text-silver leading-relaxed">
                    Office No. 908, Grohitam Premises, APMC, Sector-19, Vashi, Navi Mumbai, Maharashtra 400705
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-slate-dark/20 border border-white/5 p-5 rounded-2xl shadow-md flex gap-4 items-start">
                <Phone className="w-5 h-5 text-emerald-active shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-ice-white tracking-widest mb-1">Direct Lines</h4>
                  <div className="flex flex-col gap-1 text-xs md:text-sm text-silver">
                    <a href="tel:+919324264948" className="hover:text-champagne transition-colors font-bold">+91 9324264948</a>
                    <a href="tel:+918356060119" className="hover:text-champagne transition-colors">+91 8356060119</a>
                    <a href="tel:02241274948" className="hover:text-champagne transition-colors">022-41274948</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-slate-dark/20 border border-white/5 p-5 rounded-2xl shadow-md flex gap-4 items-start">
                <Mail className="w-5 h-5 text-emerald-active shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-ice-white tracking-widest mb-1">Email Coordinates</h4>
                  <a href="mailto:taxzonenavimumbai@gmail.com" className="text-xs md:text-sm text-silver hover:text-champagne transition-colors font-bold break-all">
                    taxzonenavimumbai@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-dark/20 border border-white/5 p-5 rounded-2xl shadow-md flex gap-4 items-start">
                <Clock className="w-5 h-5 text-emerald-active shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-ice-white tracking-widest mb-1">Operations Hours</h4>
                  <p className="text-xs md:text-sm text-silver leading-relaxed">
                    Monday to Saturday: 10:00 AM - 7:00 PM <br />
                    <span className="text-champagne italic font-semibold text-xs">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-ice-white uppercase tracking-widest text-[10px]">APMC Vashi Location</span>
                <a
                  href="https://maps.app.goo.gl/rY2N2Z7K6vM2bTQLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="w-full h-[250px] border border-white/5 rounded-2xl overflow-hidden shadow-md relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835489069695!2d73.0062133!3d19.074747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13038a8e3d9%3A0xe5cdcd9d6f30fb5e!2sGrohitam%20Premises%20Co-op%20Society%20Ltd!5e0!3m2!1sen!2sin!4v1718445000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Taxzone Office Map Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full lg:sticky lg:top-24">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
