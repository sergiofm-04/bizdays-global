import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Globe, ShieldCheck, Sparkles } from "lucide-react";

import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bizdaysglobal.com";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  const locale = lang as Locale;
  const title = locale === "es" ? "Acerca de BizDays Global" : "About BizDays Global";
  const description =
    locale === "es"
      ? "Conoce qué hace BizDays Global, cómo trabajamos los datos de festivos y por qué construimos una calculadora enfocada en equipos reales."
      : "Learn what BizDays Global does, how we handle holiday data, and why we built a calculator focused on real teams.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        en: `${SITE_URL}/en/about`,
        es: `${SITE_URL}/es/about`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/about`,
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale = lang as Locale;

  const intro =
    locale === "es"
      ? "BizDays Global nació para resolver un problema muy concreto: traducir plazos como ‘15 días laborables’ a fechas reales de entrega, sin depender de hojas de cálculo frágiles ni calendarios manuales difíciles de mantener."
      : "BizDays Global was created to solve one specific problem: turning lead times like ‘15 business days’ into real delivery dates without fragile spreadsheets or hard-to-maintain manual calendars.";

  const values = [
    {
      icon: CalendarDays,
      title: locale === "es" ? "Precisión operativa" : "Operational precision",
      text:
        locale === "es"
          ? "Calculamos con calendarios de festivos por país, reglas de fin de semana y conteo bidireccional para evitar errores en plazos reales."
          : "We calculate with country holiday calendars, weekend rules, and bidirectional counting to avoid real deadline mistakes.",
    },
    {
      icon: ShieldCheck,
      title: locale === "es" ? "Señales de calidad" : "Quality signals",
      text:
        locale === "es"
          ? "El sitio combina herramienta, contenido editorial y páginas de soporte para que el valor sea claro para usuarios y buscadores."
          : "The site combines a tool, editorial content, and support pages so the value is clear to users and search engines.",
    },
    {
      icon: Globe,
      title: locale === "es" ? "Cobertura internacional" : "International coverage",
      text:
        locale === "es"
          ? "Damos soporte a más de 170 países con páginas dedicadas y contenido útil para equipos globales."
          : "We support 170+ countries with dedicated pages and useful content for global teams.",
    },
    {
      icon: Sparkles,
      title: locale === "es" ? "Contenido útil" : "Useful content",
      text:
        locale === "es"
          ? "Publicamos guías pensadas para búsquedas reales sobre días laborables, festivos y plazos de entrega."
          : "We publish guides designed for real searches around business days, holidays, and delivery deadlines.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200/80">
            {locale === "es" ? "Acerca de" : "About"}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {locale === "es" ? "Una calculadora pensada para trabajo real" : "A calculator built for real work"}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-100/80">
            {intro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-grey-100 bg-grey-50 p-6 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center rounded-2xl bg-white p-3 text-primary-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold tracking-tight text-grey-900">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-grey-600">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grey-900">
              {locale === "es" ? "Por qué esto importa" : "Why this matters"}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-grey-600">
              {locale === "es"
                ? "AdSense y Search Console no solo miran si una página existe: también interpretan si el sitio tiene suficiente sustancia, estructura y utilidad. Por eso combinamos la calculadora, el blog, las páginas por país y esta capa de confianza."
                : "AdSense and Search Console do not just look at whether a page exists: they also interpret whether the site has enough substance, structure, and utility. That is why we combine the calculator, the blog, country pages, and this trust layer."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${locale}#calculator`}
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:-translate-y-px"
              >
                {locale === "es" ? "Ir a la calculadora" : "Go to the calculator"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 rounded-full border border-grey-200 bg-white px-6 py-3 text-sm font-semibold text-grey-700 transition-colors hover:border-primary-200 hover:text-primary-700"
              >
                {locale === "es" ? "Ver el blog" : "View the blog"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}