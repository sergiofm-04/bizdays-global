import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BizDays Global — Business Days & Holiday Calculator for 100+ Countries",
    template: "%s | BizDays Global",
  },
  description:
    "Calculate delivery dates, business days and public holidays for over 100 countries. The ultimate B2B tool for international logistics, HR, finance and legal teams.",
  keywords: [
    "business days calculator",
    "calculadora días hábiles",
    "public holidays",
    "festivos internacionales",
    "delivery date calculator",
    "working days",
    "días laborables",
    "international holidays",
    "B2B tool",
    "corporate calendar",
  ],
  authors: [{ name: "BizDays Global" }],
  creator: "BizDays Global",
  publisher: "BizDays Global",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    url: SITE_URL,
    siteName: "BizDays Global",
    title: "BizDays Global — Business Days & Holiday Calculator",
    description:
      "Calculate delivery dates, business days and public holidays for over 100 countries.",
    images: [
      {
        url: `${SITE_URL}/images/logo/logo-512.png`,
        width: 512,
        height: 512,
        alt: "BizDays Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizDays Global — Business Days Calculator",
    description:
      "The ultimate B2B tool for calculating business days and holidays worldwide.",
    images: [`${SITE_URL}/images/logo/logo-512.png`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: `${SITE_URL}/en`,
      es: `${SITE_URL}/es`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "BizDays Global",
                url: SITE_URL,
                description:
                  "Calculate business days and public holidays for 100+ countries.",
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${SITE_URL}/en/calculator/business-days/{country}`,
                  "query-input": "required name=country",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "BizDays Global",
                url: SITE_URL,
                logo: `${SITE_URL}/images/logo/logo-512.png`,
                description:
                  "International business days and public holiday calculator for B2B teams.",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "BizDays Global",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                description:
                  "Free online tool to calculate business days excluding weekends and public holidays for over 100 countries.",
              },
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
}
