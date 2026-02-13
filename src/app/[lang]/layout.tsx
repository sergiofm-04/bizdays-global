// ============================================
// [lang] Layout — i18n Root Layout
// Server Component with dynamic metadata & JSON-LD
// ============================================

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { isValidLocale, getDictionary, locales } from "@/lib/i18n";
import { generateBaseMetadata, generateJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Locale } from "@/types";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return generateBaseMetadata(lang);
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const jsonLd = generateJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={locale} nav={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict.common.footer} lang={locale} />
    </>
  );
}
