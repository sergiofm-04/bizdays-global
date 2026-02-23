// ============================================
// BizDays Global — SEO Helpers
// Metadata generation & JSON-LD
// ============================================

import type { Metadata } from "next";
import type { Locale, SoftwareApplicationJsonLd } from "@/types";
import { getDictionary } from "@/lib/i18n";

/**
 * Generate base metadata for the site.
 */
export function generateBaseMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    title: {
      default: dict.meta.title,
      template: `%s | BizDays Global`,
    },
    description: dict.meta.description,
    keywords: [
      "business days calculator",
      "working days calculator",
      "delivery date calculator",
      "exclude holidays",
      "public holidays",
      "calculadora días laborables",
      "días hábiles",
    ],
    authors: [{ name: "BizDays Global" }],
    creator: "BizDays Global",
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdays.global"
    ),
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      siteName: "BizDays Global",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com"}/`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com"}/en`,
        es: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com"}/es`,
      },
    },
  };
}

/**
 * Generate country-specific metadata for SEO programmatic pages.
 */
export function generateCountryMetadata(
  locale: Locale,
  countryName: string,
  countrySlug: string
): Metadata {
  const dict = getDictionary(locale);

  const title = dict.meta.titleTemplate.replace("{country}", countryName);
  const description = dict.meta.descriptionTemplate.replace(
    /{country}/g,
    countryName
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${locale}/calculator/business-days/${countrySlug}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com"}/${locale}/calculator/business-days/${countrySlug}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com"}/en/calculator/business-days/${countrySlug}`,
        es: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com"}/es/calculator/business-days/${countrySlug}`,
      },
    },
  };
}

/**
 * Generate SoftwareApplication JSON-LD schema.
 */
export function generateJsonLd(): SoftwareApplicationJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BizDays Global",
    description:
      "Free online business days calculator. Calculate delivery dates excluding weekends and public holidays for 100+ countries.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}
