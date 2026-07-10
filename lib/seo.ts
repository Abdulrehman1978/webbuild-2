import type { Metadata } from "next";

const SITE_URL = "https://webbuild-2.vercel.app";

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: MetadataProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: {
      default: `${title} | Taxzone — Modern Wealth & Tax Platform`,
      template: `%s | Taxzone — Modern Wealth & Tax`,
    },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Taxzone v2",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Taxzone - Reimagined Wealth & Compliance Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          nocache: true,
          googleBot: {
            index: true,
            follow: true,
          },
        },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Taxzone",
  "image": `${SITE_URL}/og-image.jpg`,
  "@id": `${SITE_URL}/#taxzone`,
  "url": SITE_URL,
  "telephone": "+919324264948",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No. 908, Grohitam Premises, APMC, Sector-19, Vashi",
    "addressLocality": "Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400705",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.074747,
    "longitude": 73.008402
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "founder": {
    "@type": "Person",
    "name": "Satkut Shamim"
  },
  "foundingDate": "2003",
  "description": "Taxzone is a next-generation financial co-founder and tax technology platform for Navi Mumbai businesses, providing GST returns, bookkeeping, company registration, and wealth consulting."
};
