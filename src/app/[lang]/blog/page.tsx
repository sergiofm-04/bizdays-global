// ============================================
// Blog Listing — /[lang]/blog
// ============================================

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { getAllPosts } from "@/lib/blog";
import type { Locale } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bizdaysglobal.com";

const blogMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Blog — Business Days Guides & Resources",
    description:
      "Expert guides on calculating business days, international public holidays, and deadline planning for global teams.",
  },
  es: {
    title: "Blog — Guías y recursos sobre días laborables",
    description:
      "Guías expertas sobre cálculo de días laborables, festivos internacionales y planificación de plazos para equipos globales.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const meta = blogMeta[lang];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog`,
      languages: {
        en: `${SITE_URL}/en/blog`,
        es: `${SITE_URL}/es/blog`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${lang}/blog`,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) return null;

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const posts = getAllPosts();

  const heading = locale === "es" ? "Blog" : "Blog";
  const subtitle =
    locale === "es"
      ? "Guías, recursos y consejos para la planificación de días laborables y festivos internacionales."
      : "Guides, resources, and tips for business day planning and international public holidays.";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-200 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Post cards */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-grey-100 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md sm:p-8"
            >
              {/* Category + reading time */}
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-grey-400">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 font-medium text-primary-700">
                  <Tag className="h-3 w-3" />
                  {post.category[locale]}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.publishedAt).toLocaleDateString(
                    locale === "es" ? "es-ES" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingTime[locale]}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-grey-900 transition-colors group-hover:text-primary-700 sm:text-2xl">
                <Link href={`/${locale}/blog/${post.slug}`}>
                  {post.title[locale]}
                </Link>
              </h2>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-grey-500 sm:text-base">
                {post.description[locale]}
              </p>

              {/* Read more */}
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                {locale === "es" ? "Leer artículo" : "Read article"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
