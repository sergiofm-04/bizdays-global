// ============================================
// Privacy Policy Page
// /[lang]/legal/privacy-policy
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
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.description,
    alternates: {
      canonical: `/${lang}/legal/privacy-policy`,
      languages: { en: "/en/legal/privacy-policy", es: "/es/legal/privacy-policy" },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { title, lastUpdated, sections } = dict.legal.privacy;

  return (
    <LegalPageLayout
      title={title}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
