// ============================================
// BizDays Global — Country Helpers
// Maps ISO codes to readable names using date-holidays
// ============================================

import Holidays from "date-holidays";
import type { Country, CountryCode } from "@/types";

/** Cached list of supported countries */
let cachedCountries: Country[] | null = null;

/**
 * Get all countries supported by date-holidays.
 * Results are cached after the first call.
 */
export function getSupportedCountries(): Country[] {
  if (cachedCountries) return cachedCountries;

  const hd = new Holidays();
  const countries = hd.getCountries();

  cachedCountries = Object.entries(countries)
    .map(([code, name]) => ({
      code: code.toUpperCase(),
      name: name as string,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return cachedCountries;
}

/**
 * Get a country name by its ISO code.
 */
export function getCountryName(code: CountryCode): string {
  const countries = getSupportedCountries();
  const country = countries.find(
    (c) => c.code.toUpperCase() === code.toUpperCase()
  );
  return country?.name ?? code;
}

/**
 * Check if a country code is supported.
 */
export function isValidCountryCode(code: string): boolean {
  const countries = getSupportedCountries();
  return countries.some((c) => c.code.toUpperCase() === code.toUpperCase());
}

/**
 * Get the slug-friendly version of a country name.
 * e.g., "United States of America" → "united-states-of-america"
 */
export function countryNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Find a country by its slug.
 */
export function getCountryBySlug(slug: string): Country | undefined {
  const countries = getSupportedCountries();
  return countries.find((c) => countryNameToSlug(c.name) === slug);
}

/**
 * Generate all country slugs for static generation.
 */
export function getAllCountrySlugs(): Array<{ slug: string; code: string; name: string }> {
  const countries = getSupportedCountries();
  return countries.map((c) => ({
    slug: countryNameToSlug(c.name),
    code: c.code,
    name: c.name,
  }));
}
