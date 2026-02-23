// ============================================
// Terms of Service Page
// /[lang]/legal/terms-of-service
// ============================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { isValidLocale, getDictionary } from "@/lib/i18n";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Locale } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.legal.terms.title,
    description: dict.legal.terms.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/legal/terms-of-service`,
      languages: { en: `${SITE_URL}/en/legal/terms-of-service`, es: `${SITE_URL}/es/legal/terms-of-service` },
    },
  };
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { title, lastUpdated, sections } = dict.legal.terms;

  return (
    <LegalPageLayout
      title={title}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
