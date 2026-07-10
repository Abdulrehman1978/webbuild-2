export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedDate: string; // ISO 8601 date string
  updatedDate?: string; // ISO 8601 date string
  author: string;
  body: string; // HTML-safe content (JSX string blocks rendered in the page component)
}

/**
 * Blog post index. Add new posts here — they will automatically appear in:
 *  - app/sitemap.ts (for search engine discovery)
 *  - app/blog/[slug]/page.tsx (for rendering)
 *  - app/resources/page.tsx (linked from the hub)
 *
 * Keep publishedDate and updatedDate accurate — they are used in Article JSON-LD
 * and visible on the rendered page. Search engines treat these as freshness signals.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "gst-registration-guide-startups-maharashtra",
    title: "GST Registration Guide for Startups in Maharashtra",
    description:
      "A step-by-step walkthrough of the GST registration process for new businesses in Maharashtra — documents required, timeline, and common mistakes to avoid.",
    publishedDate: "2025-06-01",
    updatedDate: "2025-07-01",
    author: "Satkut Shamim",
    body: `
<h2>Why GST Registration Matters for Maharashtra Startups</h2>
<p>If your startup's annual aggregate turnover crosses ₹20 lakh (₹10 lakh for North-Eastern and hill states), GST registration is mandatory under the Central Goods and Services Tax Act, 2017. For businesses engaged in inter-state supply or e-commerce, registration is compulsory regardless of turnover. Getting this right from day one protects your supply chain relationships — most established buyers and distributors in Navi Mumbai's APMC, Turbhe, and Thane corridors will only issue purchase orders to GSTIN-registered vendors.</p>

<h2>Documents You Need Before Applying</h2>
<p>Gather these before opening the GST portal:</p>
<ul>
  <li><strong>PAN Card</strong> of the business entity (or proprietor/partners/directors)</li>
  <li><strong>Aadhaar Card</strong> of the authorised signatory</li>
  <li><strong>Proof of Business Address</strong> — utility bill (electricity/water), rent agreement, or NOC from property owner</li>
  <li><strong>Bank Account Proof</strong> — cancelled cheque or bank statement showing account number and IFSC</li>
  <li><strong>Photographs</strong> of the proprietor/partners/directors (JPEG, under 100 KB)</li>
  <li><strong>Digital Signature Certificate (DSC)</strong> — mandatory for companies and LLPs; optional for proprietorships</li>
  <li><strong>Constitution documents</strong> — MOA/AOA for private limited companies, LLP agreement for LLPs, partnership deed for partnerships</li>
</ul>

<h2>Step-by-Step Registration Process on the GST Portal</h2>
<ol>
  <li><strong>Generate TRN (Temporary Reference Number):</strong> Visit <a href="https://www.gst.gov.in" rel="noopener noreferrer" target="_blank">gst.gov.in</a> → Services → Registration → New Registration. Submit PAN, email, and mobile. You'll receive a TRN via OTP.</li>
  <li><strong>Fill Form GST REG-01:</strong> Log in with your TRN and complete all 11 sections — business details, promoter info, authorised signatory, principal place of business, additional places of business (if any), HSN/SAC codes for your goods/services, and bank account details.</li>
  <li><strong>Upload Documents:</strong> Attach the required documents in the prescribed format and size limits (JPEGs under 100 KB, PDFs under 1 MB).</li>
  <li><strong>Submit Application:</strong> For proprietorships, e-sign via Aadhaar OTP or DSC. Companies and LLPs must use DSC.</li>
  <li><strong>Receive ARN (Application Reference Number):</strong> You'll get an ARN immediately via email/SMS. Use this to track your application status on the portal.</li>
  <li><strong>GST Officer Review:</strong> The assigned GST officer will scrutinise your application within 7 working days. If all documents are in order, you'll receive your GSTIN.</li>
  <li><strong>Physical Verification (if required):</strong> For certain business categories, an officer may conduct a physical verification of your premises before approving the registration.</li>
</ol>

<h2>Common Mistakes That Cause Delays</h2>
<p>After processing hundreds of GST registrations for Navi Mumbai businesses since the GST rollout in 2017, here are the most frequent issues we fix:</p>
<ul>
  <li><strong>Address mismatch:</strong> The address on your utility bill must exactly match what you enter in the application. Even minor discrepancies (abbreviations, spelling variations) trigger scrutiny notices.</li>
  <li><strong>Wrong HSN/SAC codes:</strong> Selecting incorrect commodity codes for your goods or services creates compliance problems down the line and can result in a demand notice during audits.</li>
  <li><strong>Aadhaar not linked to mobile:</strong> If your Aadhaar is not linked to your registered mobile number, e-sign will fail and you'll need to use DSC instead.</li>
  <li><strong>Rent agreement not notarised:</strong> For leased premises, GST officers in Maharashtra often reject unnotarised rent agreements. Get it notarised or use a stamped affidavit with NOC.</li>
  <li><strong>Bank account in a different name:</strong> The bank account must be in the name of the business entity being registered, not the proprietor's personal account (for companies and LLPs).</li>
</ul>

<h2>Timeline and What Happens After Registration</h2>
<p>Standard GST registration takes <strong>3 to 7 working days</strong> when all documents are complete and accurate. Once you receive your GSTIN:</p>
<ul>
  <li>Display your GSTIN at your principal place of business (legal requirement)</li>
  <li>Issue GST-compliant tax invoices for all taxable supplies</li>
  <li>File GSTR-1 by the 11th of every month (outward supplies)</li>
  <li>File GSTR-3B by the 20th of every month (summary return + tax payment)</li>
  <li>Maintain proper books of accounts including purchase registers, sales registers, and ITC ledgers</li>
</ul>

<h2>Voluntary Registration: Should Your Startup Register Below the Threshold?</h2>
<p>Even if your turnover is below ₹20 lakh, voluntary GST registration has strategic advantages for B2B startups: it allows you to claim Input Tax Credit on purchases, makes you eligible to supply to GST-registered businesses without their facing ITC reversal issues, and builds credibility with institutional buyers and investors. For a Navi Mumbai startup seeking to sell to APMC traders, logistics companies, or pharmaceutical distributors, voluntary registration is almost always the right call.</p>

<h2>Need Help with Your GST Registration?</h2>
<p>Taxzone has processed GST registrations, amendments, and cancellations for over 350 businesses in Navi Mumbai and Raigad since 2017. Our team handles the entire process — document audit, application filing, officer correspondence, and GSTIN allocation — in 3–5 working days. <a href="/contact">Contact us</a> or <a href="/services/gst">see our GST service details</a>.</p>
    `.trim(),
  },
  {
    slug: "itr-filing-deadlines-penalties-fy2025-26",
    title: "ITR Filing Deadlines & Penalties: FY 2025–26 Guide",
    description:
      "Everything you need to know about Income Tax Return deadlines, late filing fees, and penalty provisions for FY 2025–26 (AY 2026–27) — for salaried individuals, businesses, and audit cases.",
    publishedDate: "2025-06-15",
    updatedDate: "2025-07-05",
    author: "Satkut Shamim",
    body: `
<h2>ITR Filing Deadlines for FY 2025–26 (AY 2026–27)</h2>
<p>The due dates for filing Income Tax Returns for Financial Year 2025–26 (Assessment Year 2026–27) are:</p>
<ul>
  <li><strong>July 31, 2026</strong> — Individuals, HUFs, and firms not subject to tax audit (salaried, professionals, freelancers)</li>
  <li><strong>October 31, 2026</strong> — Businesses and professionals whose accounts are required to be audited under Section 44AB or other provisions</li>
  <li><strong>November 30, 2026</strong> — Assessees required to furnish a report under Section 92E (transfer pricing)</li>
  <li><strong>December 31, 2026</strong> — Belated return: the last date to file a late return for FY 2025–26</li>
</ul>
<p><em>Note: These are the statutory deadlines as per the Income Tax Act. The CBDT may extend specific deadlines via circular — check the official Income Tax portal or consult your tax practitioner for any extensions announced closer to the due date.</em></p>

<h2>Late Filing Fee Under Section 234F</h2>
<p>If you miss the original due date and file a belated return, you will be charged a late filing fee under Section 234F:</p>
<ul>
  <li><strong>₹5,000</strong> if the return is filed after the due date but on or before December 31 of the assessment year</li>
  <li><strong>₹10,000</strong> if the return is filed after December 31</li>
  <li><strong>₹1,000</strong> if your total income does not exceed ₹5 lakh (reduced fee cap)</li>
</ul>
<p>This fee is in addition to any interest payable under Sections 234A, 234B, and 234C.</p>

<h2>Interest for Late Payment: Sections 234A, 234B, and 234C</h2>
<p>Missing ITR deadlines isn't just about the late filing fee. You may also owe interest:</p>
<ul>
  <li><strong>Section 234A:</strong> 1% per month (or part of a month) on the unpaid tax from the due date of filing until the actual date of filing. If you owe ₹1 lakh in taxes and file 3 months late, you owe ₹3,000 in 234A interest.</li>
  <li><strong>Section 234B:</strong> 1% per month on the shortfall in advance tax payment. If you paid less than 90% of your assessed tax as advance tax during the year, 234B interest applies from April 1 of the assessment year until the date of filing/payment.</li>
  <li><strong>Section 234C:</strong> Interest for deferment of advance tax instalments. Applies if you paid instalments late during the year (by June 15, September 15, December 15, and March 15).</li>
</ul>

<h2>Which ITR Form Should You File?</h2>
<p>Using the wrong form is a common error that causes defective returns and department notices:</p>
<ul>
  <li><strong>ITR-1 (Sahaj):</strong> Resident individuals with income only from salary, one house property, and other sources up to ₹50 lakh total. Cannot be used if you have capital gains, business income, or foreign assets.</li>
  <li><strong>ITR-2:</strong> Individuals/HUFs with capital gains, foreign assets, or multiple house properties but no business or professional income.</li>
  <li><strong>ITR-3:</strong> Individuals/HUFs with income from business or profession (including partnership firm income).</li>
  <li><strong>ITR-4 (Sugam):</strong> Individuals/HUFs/firms eligible for presumptive taxation under Sections 44AD, 44ADA, or 44AE — ideal for small traders and professionals with turnover under ₹2 crore (Section 44AD) or gross receipts under ₹50 lakh (Section 44ADA).</li>
  <li><strong>ITR-5:</strong> Firms, LLPs, AOPs, BOIs, and cooperative societies.</li>
  <li><strong>ITR-6:</strong> Companies (except those claiming exemption under Section 11).</li>
  <li><strong>ITR-7:</strong> Trusts, political parties, research institutions, and entities filing under Sections 139(4A)–139(4F).</li>
</ul>

<h2>Documents to Prepare Before Filing</h2>
<p>Organise these before sitting down to file:</p>
<ul>
  <li>Form 16 from your employer (for salaried taxpayers)</li>
  <li>Form 16A / Form 26AS / AIS (Annual Information Statement) — verify all TDS credits</li>
  <li>Bank statements and interest certificates (savings, FD, RD)</li>
  <li>Capital gains statements from your broker or mutual fund statements (with purchase price and sale price)</li>
  <li>Rental income details and home loan interest certificate (if applicable)</li>
  <li>Proof of investments under Chapter VI-A deductions (80C, 80D, 80G, etc.)</li>
  <li>Foreign income and asset details (if any)</li>
  <li>Business/profession receipts and expenses if filing ITR-3 or ITR-4</li>
</ul>

<h2>Consequences of Not Filing at All</h2>
<p>Failure to file ITR can result in:</p>
<ul>
  <li><strong>Prosecution:</strong> Under Section 276CC, wilful failure to file ITR where tax exceeds ₹10,000 can attract imprisonment of 3 months to 2 years (7 years for tax exceeding ₹25 lakh)</li>
  <li><strong>Loss carry-forward denied:</strong> Business losses and capital losses cannot be carried forward if the return is not filed by the due date</li>
  <li><strong>No refund:</strong> If you have excess TDS deducted, you won't receive the refund until you file</li>
  <li><strong>Scrutiny notice:</strong> Non-filers receive notices under Section 142(1) and may face best judgment assessment under Section 144</li>
</ul>

<h2>ITR Filing Support from Taxzone</h2>
<p>Taxzone has prepared and filed Income Tax Returns for over 350 active clients — salaried individuals, sole proprietors, partnership firms, and private limited companies — in Navi Mumbai since 2003. We handle form selection, advance tax computation, capital gains calculation, deduction optimisation, and submission. <a href="/contact">Book a consultation</a> or <a href="/services/income-tax">see our income tax services</a>.</p>
    `.trim(),
  },
  {
    slug: "company-registration-india-mca-process",
    title: "Company Registration in India: MCA Process Explained",
    description:
      "A complete guide to incorporating a Private Limited Company or LLP in India — from name reservation to Certificate of Incorporation — with timelines and costs.",
    publishedDate: "2025-07-01",
    updatedDate: "2025-07-01",
    author: "Satkut Shamim",
    body: `
<h2>Why Choose Private Limited vs LLP</h2>
<p>The two most popular business structures for new companies in India are Private Limited Companies (Pvt Ltd) and Limited Liability Partnerships (LLPs). Here's how to choose:</p>
<ul>
  <li><strong>Private Limited Company:</strong> Best for startups seeking venture capital, businesses expecting significant growth and multiple investors, and companies planning to offer ESOPs. Governed by the Companies Act, 2013 and administered by the Ministry of Corporate Affairs (MCA).</li>
  <li><strong>LLP (Limited Liability Partnership):</strong> Best for service firms, consulting businesses, and professional practices (consulting, design, architecture). Lower compliance burden than Pvt Ltd — no mandatory board meetings, simpler audit thresholds. Governed by the LLP Act, 2008.</li>
</ul>
<p>Both structures provide limited liability protection — your personal assets are shielded from business creditors — unlike a sole proprietorship or general partnership.</p>

<h2>Pre-Incorporation Requirements</h2>
<p>Before you begin the MCA registration process:</p>
<ul>
  <li><strong>Directors/Designated Partners:</strong> Minimum 2 directors for a Pvt Ltd (at least one must be an Indian resident). Minimum 2 designated partners for an LLP (at least one must be an Indian resident).</li>
  <li><strong>DIN (Director Identification Number):</strong> Every director must have a DIN. New directors without a DIN can apply via the SPICe+ form directly.</li>
  <li><strong>DSC (Digital Signature Certificate):</strong> All directors/designated partners need a Class 3 DSC to sign MCA forms electronically. Obtain from government-approved certifying authorities (eMudhra, Sify, NSDL, etc.). Takes 1–2 days.</li>
  <li><strong>Registered Office:</strong> You need a physical address in India as the registered office. Can be a rented or owned premise.</li>
</ul>

<h2>Step-by-Step: Private Limited Company Registration via SPICe+</h2>
<ol>
  <li><strong>Name Reservation via RUN (Reserve Unique Name):</strong> Submit up to 2 proposed company names with a significance/justification. The MCA approves or rejects names typically within 1–2 working days. Names must be unique, not identical to existing companies, and not contain prohibited words.</li>
  <li><strong>SPICe+ Form (INC-32):</strong> This single integrated form covers: DIN allotment for new directors, name reservation (alternative to RUN for new incorporations), company incorporation, PAN and TAN application, EPFO and ESIC registration, bank account opening (via tied-up banks), and Professional Tax registration (in applicable states).</li>
  <li><strong>Prepare Incorporation Documents:</strong>
    <ul>
      <li>MOA (Memorandum of Association) — defines the objects, scope, and liability clause (Form INC-33 for e-MOA)</li>
      <li>AOA (Articles of Association) — internal governance rules (Form INC-34 for e-AOA)</li>
      <li>Declarations: INC-9 (declaration by each subscriber), DIR-2 (consent to act as director)</li>
      <li>Registered office proof: utility bill + NOC from owner if rented, or ownership proof</li>
      <li>Subscriber photographs and identity/address proofs</li>
    </ul>
  </li>
  <li><strong>Submit SPICe+ on MCA21 Portal:</strong> Upload all forms and attachments, affix DSC of all subscribers and directors, and pay the government stamp duty (varies by state and authorised capital) + MCA filing fee.</li>
  <li><strong>CIN and Certificate of Incorporation:</strong> Upon approval, MCA issues the Certificate of Incorporation with Corporate Identity Number (CIN), PAN, and TAN. Typically 5–10 working days from complete submission.</li>
  <li><strong>Post-Incorporation Compliance:</strong>
    <ul>
      <li>Open a current bank account in the company name within 30 days</li>
      <li>Deposit subscribed share capital into the company bank account</li>
      <li>Prepare the statutory registers (register of directors, members, charges)</li>
      <li>Appoint first auditor within 30 days (Board resolution required)</li>
      <li>File INC-20A (Declaration of Commencement of Business) within 180 days</li>
    </ul>
  </li>
</ol>

<h2>LLP Registration Process</h2>
<p>LLP registration follows a similar but simpler process via the LLP-FiLLiP form on the MCA portal:</p>
<ol>
  <li>Reserve LLP name via RUN-LLP</li>
  <li>File FiLLiP (Form for incorporation of LLP) with details of designated partners, registered office, and the LLP agreement in summary</li>
  <li>Receive Certificate of Incorporation with LLPIN (LLP Identification Number)</li>
  <li>Execute and file the LLP Agreement (Form 3) within 30 days of incorporation</li>
</ol>
<p>LLP registration typically takes 10–15 working days from complete submission.</p>

<h2>Costs at a Glance (FY 2025–26)</h2>
<ul>
  <li><strong>DSC per director:</strong> ₹1,000–₹2,000</li>
  <li><strong>Government stamp duty (MCA):</strong> Varies by state and authorised capital (Maharashtra: typically ₹2,000–₹10,000 for small companies)</li>
  <li><strong>MCA filing fee:</strong> Nominal (included in SPICe+ for companies with authorised capital up to ₹15 lakh)</li>
  <li><strong>GST Registration (post-incorporation):</strong> Government fees nil; professional charges apply</li>
  <li><strong>Professional charges:</strong> Varies by consultant</li>
</ul>

<h2>Common Post-Registration Compliance Deadlines</h2>
<p>Once registered, your company must file:</p>
<ul>
  <li><strong>INC-20A:</strong> Within 180 days of incorporation</li>
  <li><strong>ADT-1 (Auditor Appointment):</strong> Within 15 days of the first board meeting</li>
  <li><strong>DIR-3 KYC:</strong> Annually by September 30 for all directors</li>
  <li><strong>Annual Return (MGT-7A for small companies):</strong> Within 60 days of AGM</li>
  <li><strong>Financial Statements (AOC-4):</strong> Within 30 days of AGM</li>
  <li><strong>GST Returns:</strong> Monthly/quarterly (as applicable)</li>
  <li><strong>Income Tax Return (ITR-6):</strong> By October 31 for audit cases, July 31 otherwise</li>
</ul>

<h2>Register Your Company with Taxzone</h2>
<p>Taxzone handles Private Limited and LLP incorporations end-to-end — from name reservation to Certificate of Incorporation, first-year compliance calendar setup, and GST registration for new businesses in Navi Mumbai. Our 22-year track record of MCA filings means zero-error registrations and zero missed post-incorporation deadlines. <a href="/contact">Book a consultation</a> or <a href="/services/startup">see our startup service details</a>.</p>
    `.trim(),
  },
];

/**
 * Helper to find a post by slug. Returns undefined if not found.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
