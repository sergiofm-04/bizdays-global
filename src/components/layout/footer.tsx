// ============================================
// Footer — Layout Component (Server Component)
// Professional multi-column layout
// ============================================

import { CalendarDays, Globe } from "lucide-react";
import Link from "next/link";
import type { Dictionary, Locale } from "@/types";

interface FooterProps {
  dict: Dictionary["common"]["footer"];
  lang: Locale;
}

function Footer({ dict, lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { href: `/${lang}/legal/privacy-policy`, label: dict.links.privacy },
    { href: `/${lang}/legal/terms-of-service`, label: dict.links.terms },
    { href: `/${lang}/legal/cookie-policy`, label: dict.links.cookies },
    { href: `/${lang}/legal/notice`, label: dict.links.legal },
    { href: `/${lang}/contact`, label: dict.links.contact },
  ];

  const navLinks = [
    { href: `/${lang}#calculator`, label: lang === "es" ? "Calculadora" : "Calculator" },
    { href: `/${lang}#`, label: lang === "es" ? "Países" : "Countries" },
  ];

  return (
    <footer className="border-t border-grey-100 bg-grey-50">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
                <CalendarDays className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-grey-900 tracking-tight">
                BizDays Global
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-grey-400 max-w-xs">
              {dict.tagline}
            </p>
          </div>

          {/* Product column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-grey-500 mb-3">
              {lang === "es" ? "Producto" : "Product"}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-grey-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-grey-500 mb-3">
              {lang === "es" ? "Legal" : "Legal"}
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-grey-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-grey-500 mb-3">
              {lang === "es" ? "Idioma" : "Language"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/en"
                  className="inline-flex items-center gap-1.5 text-sm text-grey-400 hover:text-grey-700 transition-colors"
                >
                  <Globe className="h-3.5 w-3.5" />
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="/es"
                  className="inline-flex items-center gap-1.5 text-sm text-grey-400 hover:text-grey-700 transition-colors"
                >
                  <Globe className="h-3.5 w-3.5" />
                  Español
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-grey-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-grey-300">
            © {currentYear} BizDays Global. All rights reserved.
          </p>
          <p className="text-[11px] text-grey-300 text-center sm:text-right max-w-md">
            {dict.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
