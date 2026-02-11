// ============================================
// Cookie Policy Page
// /[lang]/legal/cookie-policy
// ============================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { isValidLocale, getDictionary } from "@/lib/i18n";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Locale } from "@/types";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.legal.cookies.title,
    description: dict.legal.cookies.description,
    alternates: {
      canonical: `/${lang}/legal/cookie-policy`,
      languages: { en: "/en/legal/cookie-policy", es: "/es/legal/cookie-policy" },
    },
  };
}

export default async function CookiePolicyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { title, lastUpdated, sections } = dict.legal.cookies;

  return (
    <LegalPageLayout
      title={title}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
