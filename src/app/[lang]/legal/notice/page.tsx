// ============================================
// Legal Notice (Aviso Legal) Page
// /[lang]/legal/notice
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
    title: dict.legal.legalNotice.title,
    description: dict.legal.legalNotice.description,
    alternates: {
      canonical: `/${lang}/legal/notice`,
      languages: { en: "/en/legal/notice", es: "/es/legal/notice" },
    },
  };
}

export default async function LegalNoticePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { title, lastUpdated, sections } = dict.legal.legalNotice;

  return (
    <LegalPageLayout
      title={title}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
