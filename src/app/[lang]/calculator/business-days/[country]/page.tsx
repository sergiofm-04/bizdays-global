// ============================================
// Country-specific Calculator Page
// SEO Programmatic: /[lang]/calculator/business-days/[country]
// ============================================

import { notFound } from "next/navigation";

import { isValidLocale, getDictionary, locales } from "@/lib/i18n";
import { generateCountryMetadata } from "@/lib/seo";
import {
  getSupportedCountries,
  getCountryBySlug,
  getAllCountrySlugs,
} from "@/lib/countries";
import { getHolidaysForYear } from "@/lib/business-days";
import { CalculatorForm } from "@/components/calculator/calculator-form";
import type { Locale } from "@/types";

interface CountryPageProps {
  params: Promise<{ lang: string; country: string }>;
}

/**
 * Generate static params for all countries × all languages.
 * This enables full SSG for programmatic SEO.
 */
export async function generateStaticParams() {
  const countrySlugs = getAllCountrySlugs();

  return locales.flatMap((lang) =>
    countrySlugs.map((c) => ({
      lang,
      country: c.slug,
    }))
  );
}

export async function generateMetadata({ params }: CountryPageProps) {
  const { lang, country: countrySlug } = await params;
  if (!isValidLocale(lang)) return {};

  const countryData = getCountryBySlug(countrySlug);
  if (!countryData) return {};

  return generateCountryMetadata(lang, countryData.name, countrySlug);
}

export default async function CountryCalculatorPage({
  params,
}: CountryPageProps) {
  const { lang, country: countrySlug } = await params;

  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const countries = getSupportedCountries();
  const countryData = getCountryBySlug(countrySlug);

  if (!countryData) notFound();

  const currentYear = new Date().getFullYear();
  const holidays = getHolidaysForYear(countryData.code, currentYear);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Country Context Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-grey-900">
          {locale === "es"
            ? `Calculadora de Días Laborables — ${countryData.name}`
            : `Business Days Calculator — ${countryData.name}`}
        </h1>
        <p className="text-sm text-grey-500 max-w-md mx-auto">
          {locale === "es"
            ? `Calcula días hábiles en ${countryData.name} excluyendo ${holidays.length} festivos públicos de ${currentYear}.`
            : `Calculate working days in ${countryData.name} excluding ${holidays.length} public holidays in ${currentYear}.`}
        </p>
      </div>

      {/* Calculator — pre-selected country */}
      <CalculatorForm
        countries={countries}
        dict={dict.calculator}
        lang={locale}
        defaultCountryCode={countryData.code}
      />

      {/* Holidays Table for SEO content */}
      {holidays.length > 0 && (
        <section className="bg-white rounded-xl border border-grey-200 p-6">
          <h2 className="text-lg font-semibold text-grey-900 mb-4">
            {locale === "es"
              ? `Festivos Públicos en ${countryData.name} (${currentYear})`
              : `Public Holidays in ${countryData.name} (${currentYear})`}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grey-100">
                  <th className="text-left py-2 text-grey-500 font-medium">
                    {locale === "es" ? "Fecha" : "Date"}
                  </th>
                  <th className="text-left py-2 text-grey-500 font-medium">
                    {locale === "es" ? "Festivo" : "Holiday"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((h, i) => (
                  <tr key={i} className="border-b border-grey-50">
                    <td className="py-2 text-grey-600">{h.date}</td>
                    <td className="py-2 text-grey-900">{h.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

    </div>
  );
}
