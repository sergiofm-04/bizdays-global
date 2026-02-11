// ============================================
// Contact Page
// /[lang]/contact
// ============================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { isValidLocale, getDictionary } from "@/lib/i18n";
import { ContactForm } from "@/components/contact/contact-form";
import type { Locale } from "@/types";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.contact.title,
    description: dict.contact.description,
    alternates: {
      canonical: `/${lang}/contact`,
      languages: { en: "/en/contact", es: "/es/contact" },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return <ContactForm dict={dict.contact} />;
}
