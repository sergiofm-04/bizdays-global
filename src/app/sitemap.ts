import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com";

/**
 * Sitemap — initially just the coming-soon root page.
 * Once the full app launches, expand with all /[lang]/ routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    /* ── Uncomment when full app is live ──
    {
      url: `${SITE_URL}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/es`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    */
  ];
}
