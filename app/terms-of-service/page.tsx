import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { FileText, AlertTriangle, Scale, Shield } from "lucide-react";

export const metadata = generateMetadata({
  title: "Terms of Service — Taxzone",
  description:
    "Terms of Service for Taxzone financial advisory and compliance platform: scope of services, disclaimers, liability limits, and applicable law.",
  path: "/terms-of-service",
  noIndex: false,
});

export default function TermsOfServicePage() {
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
            <span className="text-champagne">Terms of Service</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-active/10 border border-emerald-active/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-emerald-active" />
            </div>
            <h1 className="font-display-brand text-4xl font-extrabold text-ice-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-silver text-sm leading-relaxed">
            Last updated: <time dateTime="2025-07-01">{lastUpdated}</time>
          </p>
          <p className="text-silver text-sm md:text-base leading-relaxed">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Taxzone website at{" "}
            <a href="https://tax-zone.in" className="text-emerald-active hover:underline">https://tax-zone.in</a>{" "}
            or engaging with our advisory services. By accessing our website or contacting us for services, you agree to be bound by these Terms.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-obsidian py-16 px-6 md:px-8 w-full">
        <div className="max-w-3xl mx-auto flex flex-col gap-12 text-silver text-sm leading-relaxed">

          {/* Section 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-active shrink-0" />
              <h2 className="font-display-brand text-xl font-bold text-ice-white">
                1. Scope of Advisory Services
              </h2>
            </div>
            <p>
              Taxzone provides tax consultation, GST filing, income tax planning, accounting, startup incorporation, import-export compliance, and business finance documentation services (&quot;Services&quot;) through its team of experienced tax practitioners based in Navi Mumbai, Maharashtra, India.
            </p>
            <p>
              Our practitioners are registered as GST Practitioners (GSTP) with the GST Council and as Registered Tax Return Preparers (TRP) with the Income Tax Department. For services that legally require a Chartered Accountant (e.g., statutory audits under the Companies Act, 2013; tax audits under Section 44AB of the Income Tax Act beyond applicable thresholds; certifications requiring a CA sign-off), Taxzone will clearly advise you to engage a licensed CA and may refer you to one.
            </p>
            <div className="bg-slate-dark/20 border border-yellow-500/20 rounded-2xl p-6 flex gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-1 text-base">Important Disclaimer</h3>
                <p className="text-silver/80">
                  Taxzone is a tax consultancy and compliance platform. We are <strong className="text-ice-white">not</strong> a Chartered Accountancy (CA) firm registered under the Institute of Chartered Accountants of India (ICAI). For engagements that mandatorily require a CA under Indian law, we will advise you accordingly. Content on this website is for informational purposes only and does not constitute formal legal or financial advice for your specific situation.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              2. Website Use
            </h2>
            <p>
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Submit false or misleading information via our contact form</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
              <li>Use automated scraping tools on our website without prior written consent</li>
              <li>Reproduce, distribute, or republish our proprietary content (service descriptions, guides, blog articles) without attribution and written permission</li>
            </ul>
            <p>
              We reserve the right to terminate access to users who violate these Terms.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              3. Service Engagement Terms
            </h2>
            <p>
              A formal service engagement with Taxzone begins when both parties agree to the scope of work and applicable fees — either verbally (for recurring clients) or via a written engagement letter. Services requested via the website contact form are initial enquiries only and do not constitute a binding service agreement.
            </p>
            <p>For specific engagements, the following general terms apply:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li><strong className="text-ice-white">Client responsibilities:</strong> Clients are responsible for providing accurate, complete, and timely information. Taxzone is not liable for filing errors or delays arising from incomplete or incorrect data provided by the client.</li>
              <li><strong className="text-ice-white">Deadlines:</strong> Statutory filing deadlines (GST, ITR, MCA) are governed by applicable law. While Taxzone manages the filing process, timely payment of government dues and provision of required documentation are the client&apos;s responsibility.</li>
              <li><strong className="text-ice-white">Fees:</strong> Service fees are agreed upon prior to engagement. Government fees, portal charges, and stamp duties are charged separately and at cost.</li>
              <li><strong className="text-ice-white">Termination:</strong> Either party may terminate a service engagement with reasonable notice. Taxzone will complete filings already in progress and return client documents upon request.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-active shrink-0" />
              <h2 className="font-display-brand text-xl font-bold text-ice-white">
                4. Limitation of Liability
              </h2>
            </div>
            <p>
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Taxzone&apos;s liability for any claim arising from a service engagement shall be limited to the fees paid for that specific engagement in the preceding 3 months.</li>
              <li>Taxzone is not liable for indirect, consequential, or punitive damages including lost profits, business interruption, or data loss arising from reliance on our services or website content.</li>
              <li>Tax laws change frequently. While we maintain current knowledge of applicable regulations, Taxzone is not liable for changes in law enacted after the date of our advice that affect your tax position.</li>
              <li>Taxzone is not liable for actions or inactions of government portals (GST portal, MCA21, Income Tax portal) or banks beyond our control.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, guides, service descriptions, images, and the overall design — is owned by or licensed to Taxzone. You may share links to our content and quote brief excerpts with attribution. Systematic reproduction or republication of our articles, guides, or service descriptions without written permission is prohibited.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              6. Governing Law and Disputes
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts of Navi Mumbai, Maharashtra. We encourage clients to first contact us directly to resolve any concerns before initiating formal proceedings.
            </p>
          </div>

          {/* Section 7 */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              7. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Material changes will be reflected with an updated &quot;Last updated&quot; date. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-slate-dark/20 border border-white/5 rounded-2xl p-8 flex flex-col gap-4">
            <h2 className="font-display-brand text-xl font-bold text-ice-white">
              8. Contact
            </h2>
            <p>For questions about these Terms or our services:</p>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-ice-white">Taxzone</p>
              <p className="text-silver/70 text-xs">Office No. 908, Grohitam Premises, APMC Sector-19, Vashi, Navi Mumbai, Maharashtra 400705</p>
              <a href="mailto:taxzonenavimumbai@gmail.com" className="text-emerald-active hover:text-champagne transition-colors text-xs">taxzonenavimumbai@gmail.com</a>
              <a href="tel:+919324264948" className="text-emerald-active hover:text-champagne transition-colors text-xs">+91 9324264948</a>
            </div>
          </div>

          {/* Back link */}
          <div className="flex gap-4 pt-4 border-t border-white/5">
            <Link href="/privacy-policy" className="text-xs text-silver/60 hover:text-champagne transition-colors">← Privacy Policy</Link>
            <Link href="/" className="text-xs text-silver/60 hover:text-champagne transition-colors">Back to Home →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
