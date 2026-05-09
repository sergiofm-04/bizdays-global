import type { MetadataRoute } from "next";
import { getAllCountrySlugs, isIndexableCountryCode } from "@/lib/countries";
import { getAllPostSlugs } from "@/lib/blog";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com";

const LOCALES = ["en", "es"] as const;

/**
 * Sitemap — All indexable pages across both locales.
 * Includes home, calculator country pages, legal, and contact.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const countrySlugs = getAllCountrySlugs().filter((c) => isIndexableCountryCode(c.code));

  // Note: the site root "/" redirects to a locale (e.g. /en).
  // Keep the sitemap focused on indexable, canonical URLs.
  const entries: MetadataRoute.Sitemap = [];

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

  // Note: legal/contact pages remain accessible but are intentionally omitted from sitemap
  // to keep the sitemap focused on core indexable content.

  // Blog listing
  for (const locale of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${locale}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Blog articles
  const postSlugs = getAllPostSlugs();
  for (const locale of LOCALES) {
    for (const slug of postSlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
