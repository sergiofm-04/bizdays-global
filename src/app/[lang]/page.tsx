// ============================================
// Home Page — /[lang]/
// Server Component → passes data to Client Calculator
// ============================================

import { notFound } from "next/navigation";

import { isValidLocale, getDictionary } from "@/lib/i18n";
import { getSupportedCountries } from "@/lib/countries";
import { CalculatorForm } from "@/components/calculator/calculator-form";
import { AdBanner } from "@/components/ads/ad-banner";
import { AffiliateBanner } from "@/components/ads/affiliate-banner";
import type { Locale } from "@/types";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const countries = getSupportedCountries();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Ad Banner */}
      <AdBanner slot="top-banner" format="horizontal" />

      {/* Calculator */}
      <CalculatorForm countries={countries} dict={dict.calculator} />

      {/* Affiliate Banner — below result */}
      <AffiliateBanner
        productName="Monday.com"
        href="https://monday.com"
        ctaText={locale === "es" ? "Pruébalo gratis →" : "Try it free →"}
        disclaimer={dict.common.affiliateDisclaimer}
      />

      {/* Bottom Ad Banner */}
      <AdBanner slot="bottom-banner" format="horizontal" />
    </div>
  );
}
