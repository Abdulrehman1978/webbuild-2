export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Single source of truth for FAQ content.
 * Used by:
 *  - HomepageFAQ.tsx (client component, for the accordion UI)
 *  - app/page.tsx (server component, for FAQPage JSON-LD schema)
 */
export const faqs: FAQItem[] = [
  {
    question: "What services does Taxzone cover?",
    answer:
      "Taxzone provides complete compliance and growth management services. This includes GST registration and filing, Income Tax planning and filing, accounting and bookkeeping, startup business incorporation, import-export compliance, and finance/loan document facilitation.",
  },
  {
    question: "Do I need a CA to manage my taxes?",
    answer:
      "No, a CA is not required for standard business filings, GST returns, accounting, and tax computations. Taxzone's experienced consultants handle the full compliance lifecycle for SMEs, startups, and individuals at structured, accessible pricing, saving you the high overhead of a CA firm.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We partner with a diverse range of clients in Navi Mumbai, including logistics companies, engineering firms, chemical and pharmaceutical distributors, timber merchants, retail business owners, housing societies (CHS), and independent professionals.",
  },
  {
    question: "How long does GST registration take?",
    answer:
      "GST registration typically takes 3 to 5 business days, assuming all documentation (PAN, address proof, identity cards) is complete and accurate. Our team manages the application process end-to-end to avoid delays.",
  },
  {
    question: "Can you help with business loan applications?",
    answer:
      "Yes. We help prepare bank-compliant financial statements, projected project reports, CMA data, and other critical documentation required by lenders to secure working capital and MSME business loans.",
  },
  {
    question: "How experienced is the Taxzone team?",
    answer:
      "Our leadership and advisory team carries 22+ years of hands-on expertise in direct and indirect taxation, corporate accounting, and financial planning, serving the Navi Mumbai community since 2003.",
  },
];
