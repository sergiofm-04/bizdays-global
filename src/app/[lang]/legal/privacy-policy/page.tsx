// ============================================
// Privacy Policy Page
// /[lang]/legal/privacy-policy
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
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/legal/privacy-policy`,
      languages: { en: `${SITE_URL}/en/legal/privacy-policy`, es: `${SITE_URL}/es/legal/privacy-policy` },
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
