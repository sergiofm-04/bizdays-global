import type { MetadataRoute } from "next";
import { getAllCountrySlugs } from "@/lib/countries";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com";

const LOCALES = ["en", "es"] as const;

/**
 * Sitemap — All indexable pages across both locales.
 * Includes home, calculator country pages, legal, and contact.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const countrySlugs = getAllCountrySlugs();

  const entries: MetadataRoute.Sitemap = [
    // Root
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Locale home pages
  for (const locale of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Country calculator pages
  for (const locale of LOCALES) {
    for (const { slug } of countrySlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/calculator/business-days/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Legal pages
  const legalPages = [
    "privacy-policy",
    "terms-of-service",
    "cookie-policy",
    "notice",
  ];
  for (const locale of LOCALES) {
    for (const page of legalPages) {
      entries.push({
        url: `${SITE_URL}/${locale}/legal/${page}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      });
    }
  }

  // Contact page
  for (const locale of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${locale}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    });
  }

  return entries;
}
