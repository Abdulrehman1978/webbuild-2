import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Shield, Lock, Eye, Trash2, Mail, Phone } from "lucide-react";

export const metadata = generateMetadata({
  title: "Privacy Policy — Taxzone",
  description:
    "Taxzone Privacy Policy: how we collect, use, and protect personal information submitted via our contact forms and WhatsApp consultations.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 1, 2025";

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-obsidian pt-32 pb-12 px-6 md:px-8 w-full relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-mesh opacity-10 -z-10" />
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <nav className="text-xs text-silver/60 flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
            <span>/</span>
            <span className="text-champagne">Privacy Policy</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-active/10 border border-emerald-active/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-active" />
            </div>
            <h1 className="font-display-brand text-4xl font-extrabold text-ice-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-silver text-sm leading-relaxed">
            Last updated: <time dateTime="2025-07-01">{lastUpdated}</time>
          </p>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Taxzone (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy of individuals who interact with our website at{" "}
            <a href="https://webbuild-2.vercel.app" className="text-emerald-active hover:underline">https://webbuild-2.vercel.app</a>{" "}
            and engage with our advisory services. This policy explains what personal information we collect, how we use it, how long we retain it, and your rights.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-obsidian py-16 px-6 md:px-8 w-full">
        <div className="max-w-3xl mx-auto flex flex-col gap-12 text-silver text-sm leading-relaxed">

          {/* Section 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-active shrink-0" />
              <h2 className="font-display-brand text-xl font-bold text-ice-white">
                1. Information We Collect
              </h2>
            </div>
            <p>
              We collect personal information <strong className="text-ice-white">only when you voluntarily provide it</strong> through the following channels:
            </p>
            <div className="bg-slate-dark/20 border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-ice-white mb-2">Contact Form (ContactForm.tsx)</h3>
                <p>When you submit our website contact form, we collect:</p>
                <ul className="mt-2 flex flex-col gap-1 list-disc list-inside text-silver/80">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Your message / query description</li>
                </ul>
                <p className="mt-2 text-silver/70 text-xs">
                  Purpose: To respond to your consultation request, schedule a callback, or provide information about our services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ice-white mb-2">WhatsApp Button (WhatsAppButton.tsx)</h3>
                <p>
                  Clicking the WhatsApp chat button on our website redirects you to WhatsApp Business (operated by Meta Platforms, Inc.) with a pre-filled message. We do not intercept or store this interaction on our servers. Any conversation you initiate via WhatsApp is governed by{" "}
                  <a
                    href="https://www.whatsapp.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-active hover:underline"
                  >
                    WhatsApp&apos;s Privacy Policy
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-ice-white mb-2">Automatic Technical Data</h3>
                <p>
                  Like all websites, our server and hosting provider (Vercel Inc.) may log standard request data including IP address, browser type, pages visited, and referrer URL. This is used solely for security monitoring and performance analysis. We do not use cookies beyond what Next.js requires for server-side rendering.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-active shrink-0" />
              <h2 className="font-display-brand text-xl font-bold text-ice-white">
                2. How We Use Your Information
              </h2>
            </div>
            <p>We use the information you provide to:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Respond to your service enquiry by phone, email, or WhatsApp</li>
              <li>Schedule and conduct tax advisory consultations</li>
              <li>Send you relevant compliance reminders or deadline alerts if you have become an active client (with your consent)</li>
              <li>Comply with legal obligations under Indian taxation law (e.g., maintaining records of client engagements as required by the Income Tax Act and GST law)</li>
            </ul>
            <p className="text-silver/70">
              We do <strong className="text-ice-white">not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              3. Data Storage and Security
            </h2>
            <p>
              Contact form submissions are delivered to our internal team via email. We do not operate a dedicated CRM database for website leads. Once a consultation is complete and no active engagement is expected, contact details submitted via the website form are not retained beyond 90 days unless you have become an active client.
            </p>
            <p>
              For active clients, your financial records are maintained in accordance with the record-keeping requirements under the Income Tax Act, 1961 (typically 6–8 years) and GST law (typically 6 years from the end of the financial year).
            </p>
            <p>
              Our website is hosted on Vercel&apos;s infrastructure with HTTPS enforced. Security headers including Content Security Policy, X-Frame-Options, and X-Content-Type-Options are implemented to protect against common web vulnerabilities.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              4. Third-Party Services
            </h2>
            <p>Our website may interact with the following third-party services:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>
                <strong className="text-ice-white">Vercel Inc.</strong> — Website hosting. See{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-active hover:underline">Vercel Privacy Policy</a>.
              </li>
              <li>
                <strong className="text-ice-white">Google Fonts</strong> — Fonts loaded from Google servers. See{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-active hover:underline">Google Privacy Policy</a>.
              </li>
              <li>
                <strong className="text-ice-white">WhatsApp Business (Meta)</strong> — Chat initiated when you click the WhatsApp button. See{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-active hover:underline">WhatsApp Privacy Policy</a>.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-emerald-active shrink-0" />
              <h2 className="font-display-brand text-xl font-bold text-ice-white">
                5. Your Rights
              </h2>
            </div>
            <p>You have the right to:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li><strong className="text-ice-white">Access</strong> — Request a copy of the personal information we hold about you</li>
              <li><strong className="text-ice-white">Correction</strong> — Ask us to correct inaccurate information</li>
              <li><strong className="text-ice-white">Deletion</strong> — Request deletion of your personal data (subject to legal retention requirements)</li>
              <li><strong className="text-ice-white">Objection</strong> — Object to processing for marketing purposes</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at the details below. We will respond within 30 days.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be reflected with an updated &quot;Last updated&quot; date at the top of this page. Continued use of our website after changes are posted constitutes acceptance.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-slate-dark/20 border border-white/5 rounded-2xl p-8 flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              7. Contact Us
            </h2>
            <p>For privacy-related queries, data access requests, or concerns:</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:taxzonenavimumbai@gmail.com" className="flex items-center gap-2 text-emerald-active hover:text-champagne transition-colors font-semibold">
                <Mail className="w-4 h-4" />
                taxzonenavimumbai@gmail.com
              </a>
              <a href="tel:+919324264948" className="flex items-center gap-2 text-emerald-active hover:text-champagne transition-colors font-semibold">
                <Phone className="w-4 h-4" />
                +91 9324264948
              </a>
              <p className="text-silver/70 text-xs">
                Office No. 908, Grohitam Premises, APMC Sector-19, Vashi, Navi Mumbai, Maharashtra 400705
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="flex gap-4 pt-4 border-t border-white/5">
            <Link href="/" className="text-xs text-silver/60 hover:text-champagne transition-colors">← Back to Home</Link>
            <Link href="/terms-of-service" className="text-xs text-silver/60 hover:text-champagne transition-colors">Terms of Service →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
