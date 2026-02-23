// ============================================
// Home Page — /[lang]/
// Rich SEO content + Calculator
// ============================================

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Globe,
  Zap,
  CalendarCheck,
  ArrowLeftRight,
  UserX,
  FileText,
  Truck,
  Users,
  Scale,
  LayoutDashboard,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import { isValidLocale, getDictionary } from "@/lib/i18n";
import { getSupportedCountries } from "@/lib/countries";
import { CalculatorForm } from "@/components/calculator/calculator-form";
import { HeroGlobe } from "@/components/illustrations/hero-globe";
import type { Locale } from "@/types";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

const FEATURE_ICONS = [Globe, Zap, CalendarCheck, ArrowLeftRight, UserX, FileText];
const USE_CASE_ICONS = [Truck, Users, Scale, LayoutDashboard];

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const countries = getSupportedCountries();
  const h = dict.home;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-grey-950 via-primary-950 to-primary-800">
        {/* Dot-grid world-map pattern */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        {/* Gradient blobs */}
        <div className="pointer-events-none absolute -top-24 right-0 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-primary-400/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/3 h-[250px] w-[250px] rounded-full bg-primary-600/8 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            {/* Left column — text */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {h.hero.title}{" "}
                <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                  {h.hero.highlight}
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-primary-100/70 leading-relaxed">
                {h.hero.subtitle}
              </p>

              {/* CTA Button */}
              <div className="mt-10 flex justify-center lg:justify-start">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-xl shadow-primary-900/30 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-primary-50"
                >
                  {h.hero.startButton}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              {/* Stats bar */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10">
                {h.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-primary-200/60 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — globe illustration (desktop only) */}
            <HeroGlobe className="hidden lg:block w-[340px] h-[340px] xl:w-[400px] xl:h-[400px] flex-shrink-0" />
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 60h1440V30C1320 10 1200 0 1080 5 960 10 840 30 720 35 600 40 480 25 360 20 240 15 120 20 0 30V60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section id="calculator" className="scroll-mt-20 py-12 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <CalculatorForm countries={countries} dict={dict.calculator} lang={locale} />
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 sm:py-24 bg-grey-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight">
              {h.features.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {h.features.items.map((feature, i) => {
              const Icon = FEATURE_ICONS[i] ?? Globe;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-grey-100 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-0.5"
                >
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-grey-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="scroll-mt-20 py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight">
              {h.howItWorks.title}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {h.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Step number */}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold text-lg shadow-md shadow-primary-500/20">
                  {i + 1}
                </div>
                {/* Connector line (desktop) */}
                {i < h.howItWorks.steps.length - 1 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(50%+30px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-primary-200 to-primary-100" />
                )}
                <h3 className="mt-5 text-base font-semibold text-grey-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-500 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-16 sm:py-24 bg-grey-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight">
              {h.useCases.title}
            </h2>
            <p className="mt-4 text-lg text-grey-500">
              {h.useCases.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {h.useCases.items.map((uc, i) => {
              const Icon = USE_CASE_ICONS[i] ?? Truck;
              return (
                <div
                  key={i}
                  className="flex gap-5 rounded-2xl border border-grey-100 bg-white p-6 transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-grey-900">
                      {uc.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-grey-500">
                      {uc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20 py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight">
              {h.faq.title}
            </h2>
          </div>

          <div className="divide-y divide-grey-100">
            {h.faq.items.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-left">
                  <h3 className="text-base font-medium text-grey-900 pr-4 group-open:text-primary-700 transition-colors">
                    {item.question}
                  </h3>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-grey-400 transition-transform duration-200 group-open:rotate-180 group-open:text-primary-500" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-grey-500 pr-12">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-0 pb-16 sm:pb-20">
        {/* Wave divider — seamless transition from white FAQ above */}
        <div className="w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 0h1440v20C1320 60 1200 80 1080 70 960 60 840 30 720 25 600 20 480 45 360 55 240 65 120 50 0 40V0Z" fill="white"/>
          </svg>
        </div>

        {/* Dot-grid decoration */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>

        {/* Decorative glows */}
        <div className="pointer-events-none absolute top-20 right-0 h-[300px] w-[300px] rounded-full bg-primary-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-primary-500/10 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {h.cta.title}
          </h2>
          <p className="mt-4 text-lg text-primary-100/80 max-w-xl mx-auto">
            {h.cta.subtitle}
          </p>
          <a
            href="#calculator"
            className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-xl shadow-primary-900/30 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-primary-50"
          >
            {h.cta.button}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}
