// ============================================
// Blog Article — /[lang]/blog/[slug]
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { locales } from "@/lib/i18n";
import type { Locale } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com";

/* ── Static params ── */
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};

  const post = getPostBySlug(slug);
  if (!post) return {};

  const locale = lang as Locale;

  return {
    title: post.title[locale],
    description: post.description[locale],
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title[locale],
      description: post.description[locale],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${post.slug}`,
      languages: {
        en: `${SITE_URL}/en/blog/${post.slug}`,
        es: `${SITE_URL}/es/blog/${post.slug}`,
      },
    },
  };
}

/* ── Page ── */
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const locale = lang as Locale;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.description[locale],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "BizDays Global",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo/logo-512.png` },
    },
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "es" ? "Volver al blog" : "Back to blog"}
          </Link>

          {/* Category */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-primary-300">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-800/50 px-2.5 py-1 font-medium text-primary-200">
              <Tag className="h-3 w-3" />
              {post.category[locale]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {post.title[locale]}
          </h1>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-primary-300">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString(
                locale === "es" ? "es-ES" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime[locale]}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div
          className="prose prose-grey max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-grey-900
            prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl prose-h2:sm:text-2xl
            prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-lg
            prose-p:leading-relaxed prose-p:text-grey-600
            prose-li:text-grey-600
            prose-strong:text-grey-800
            prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.body[locale] }}
        />

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold text-grey-900 sm:text-xl">
            {locale === "es"
              ? "¿Listo para calcular tus días laborables?"
              : "Ready to calculate your business days?"}
          </h2>
          <p className="mt-2 text-sm text-grey-500">
            {locale === "es"
              ? "170+ países. Gratis. Sin registro."
              : "170+ countries. Free. No signup."}
          </p>
          <Link
            href={`/${locale}#calculator`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md hover:-translate-y-px"
          >
            {locale === "es" ? "Probar la calculadora" : "Try the calculator"}
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-grey-400 transition-colors hover:text-grey-600"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "es" ? "Volver al blog" : "Back to blog"}
          </Link>
        </div>
      </article>
    </>
  );
}
