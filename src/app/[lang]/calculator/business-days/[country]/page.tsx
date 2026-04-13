// ============================================
// Country-specific Calculator Page
// SEO Programmatic: /[lang]/calculator/business-days/[country]
// ============================================

import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { isValidLocale, getDictionary, locales } from "@/lib/i18n";
import { generateCountryMetadata } from "@/lib/seo";
import {
  getSupportedCountries,
  getCountryBySlug,
  getCountryByLegacySlug,
  getAllCountrySlugs,
  countryNameToSlug,
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
  let countryData = getCountryBySlug(countrySlug);

  if (!countryData) {
    const legacyCountry = getCountryByLegacySlug(countrySlug);
    if (legacyCountry) {
      redirect(
        `/${locale}/calculator/business-days/${countryNameToSlug(legacyCountry.name)}`
      );
    }
    notFound();
  }

  const currentYear = new Date().getFullYear();
  const holidays = getHolidaysForYear(countryData.code, currentYear);
  const topHolidays = holidays.slice(0, 6);

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

      {/* Methodology + context (anti-thin content) */}
      <section className="bg-white rounded-xl border border-grey-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-grey-900">
          {locale === "es" ? "Cómo funciona este cálculo" : "How this calculation works"}
        </h2>

        <p className="text-sm text-grey-600 leading-relaxed">
          {locale === "es" ? (
            <>
              Esta página está pensada para ayudarte a planificar plazos en <strong>{countryData.name}</strong> usando
              días laborables (no días naturales). El resultado depende de fines de semana y de los festivos públicos
              del calendario.
            </>
          ) : (
            <>
              This page helps you plan deadlines in <strong>{countryData.name}</strong> using business days (not calendar
              days). Results depend on weekends and the public-holiday calendar.
            </>
          )}
        </p>

        <ul className="space-y-2 text-sm text-grey-600">
          <li>
            <span className="font-medium text-grey-900">
              {locale === "es" ? "Fines de semana:" : "Weekends:"}
            </span>{" "}
            {locale === "es"
              ? "por defecto se excluyen sábado y domingo."
              : "Saturday and Sunday are excluded by default."}
          </li>
          <li>
            <span className="font-medium text-grey-900">
              {locale === "es" ? "Festivos:" : "Holidays:"}
            </span>{" "}
            {locale === "es"
              ? `se excluyen ${holidays.length} festivos públicos de ${currentYear} (ver tabla).`
              : `${holidays.length} public holidays in ${currentYear} are excluded (see table).`}
          </li>
          <li>
            <span className="font-medium text-grey-900">
              {locale === "es" ? "Sábado laborable:" : "Saturday as a working day:"}
            </span>{" "}
            {locale === "es"
              ? "puedes activarlo en el formulario si aplica a tu caso."
              : "you can enable it in the form if it applies to you."}
          </li>
        </ul>

        {topHolidays.length > 0 && (
          <p className="text-sm text-grey-600 leading-relaxed">
            {locale === "es" ? (
              <>
                Algunos ejemplos de festivos en {currentYear}: {topHolidays.map((h) => h.name).join(", ")}
                {holidays.length > topHolidays.length ? "…" : "."}
              </>
            ) : (
              <>
                A few examples of {currentYear} holidays: {topHolidays.map((h) => h.name).join(", ")}
                {holidays.length > topHolidays.length ? "…" : "."}
              </>
            )}
          </p>
        )}

        <p className="text-xs text-grey-500 leading-relaxed">
          {locale === "es"
            ? "Nota: los calendarios de festivos pueden variar por región/sector y cambiar con poca antelación. Para decisiones críticas, confirma con fuentes oficiales."
            : "Note: holiday calendars can vary by region/industry and may change at short notice. For critical decisions, verify with official sources."}
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white rounded-xl border border-grey-200 p-6">
        <h2 className="text-lg font-semibold text-grey-900">
          {locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
        </h2>
        <div className="mt-4 divide-y divide-grey-100">
          <details className="group py-4">
            <summary className="cursor-pointer text-sm font-medium text-grey-900 group-open:text-primary-700">
              {locale === "es"
                ? "¿En qué se diferencia un día laborable de un día natural?"
                : "What’s the difference between a business day and a calendar day?"}
            </summary>
            <p className="mt-2 text-sm text-grey-600 leading-relaxed">
              {locale === "es"
                ? "Los días naturales cuentan todos los días (incluyendo fines de semana). Los días laborables excluyen fines de semana y, normalmente, festivos públicos."
                : "Calendar days count every day (including weekends). Business days exclude weekends and typically public holidays."}
            </p>
          </details>

          <details className="group py-4">
            <summary className="cursor-pointer text-sm font-medium text-grey-900 group-open:text-primary-700">
              {locale === "es"
                ? "¿Por qué el resultado cambia según el país?"
                : "Why does the result change by country?"}
            </summary>
            <p className="mt-2 text-sm text-grey-600 leading-relaxed">
              {locale === "es"
                ? "Porque cada país tiene un calendario de festivos diferente. Además, en algunos sectores el sábado puede considerarse laborable."
                : "Because each country has a different public-holiday calendar. Also, some industries treat Saturday as a working day."}
            </p>
          </details>

          <details className="group py-4">
            <summary className="cursor-pointer text-sm font-medium text-grey-900 group-open:text-primary-700">
              {locale === "es"
                ? "¿Puedo usar esto para plazos legales o bancarios?"
                : "Can I use this for legal or banking deadlines?"}
            </summary>
            <p className="mt-2 text-sm text-grey-600 leading-relaxed">
              {locale === "es"
                ? "Úsalo como ayuda de planificación. Algunos plazos oficiales dependen de definiciones específicas (p. ej., días hábiles administrativos, festivos regionales, horarios de corte)."
                : "Use it as a planning aid. Some official deadlines depend on specific definitions (e.g., regional holidays, cut-off times, or jurisdiction-specific rules)."}
            </p>
          </details>
        </div>
      </section>

      {/* Related resources / internal linking */}
      <section className="bg-white rounded-xl border border-grey-200 p-6 space-y-3">
        <h2 className="text-lg font-semibold text-grey-900">
          {locale === "es" ? "Recursos relacionados" : "Related resources"}
        </h2>
        <div className="text-sm text-grey-600 leading-relaxed">
          <p>
            {locale === "es"
              ? "Si necesitas más contexto, estas guías explican el método y los casos de uso habituales."
              : "If you need more context, these guides explain the method and common use cases."}
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href={`/${locale}/blog/how-to-calculate-business-days-between-two-dates`}
                className="font-medium text-primary-700 hover:text-primary-800"
              >
                {locale === "es"
                  ? "Cómo calcular días laborables entre dos fechas"
                  : "How to calculate business days between two dates"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/blog/public-holidays-2025-complete-guide-international-teams`}
                className="font-medium text-primary-700 hover:text-primary-800"
              >
                {locale === "es"
                  ? "Festivos 2025: guía completa para equipos internacionales"
                  : "Public holidays 2025: a complete guide for international teams"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}`} className="font-medium text-primary-700 hover:text-primary-800">
                {locale === "es" ? "Volver a la calculadora principal" : "Back to the main calculator"}
              </Link>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
