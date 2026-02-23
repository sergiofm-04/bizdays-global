// ============================================
// BizDays Global — Blog Types
// ============================================

import type { Locale } from "@/types";

/** A single blog post */
export interface BlogPost {
  slug: string;
  /** Locale-keyed titles */
  title: Record<Locale, string>;
  /** Locale-keyed descriptions (for meta + listing cards) */
  description: Record<Locale, string>;
  /** Locale-keyed body content (HTML string) */
  body: Record<Locale, string>;
  /** Publication date ISO string */
  publishedAt: string;
  /** Last modified ISO string */
  updatedAt: string;
  /** Reading time in minutes */
  readingTime: Record<Locale, string>;
  /** Author name */
  author: string;
  /** SEO keywords (shared across locales) */
  keywords: string[];
  /** Category / tag */
  category: Record<Locale, string>;
}
