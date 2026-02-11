// ============================================
// Footer — Layout Component (Server Component)
// ============================================

import { CalendarDays } from "lucide-react";
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

  return (
    <footer className="border-t border-grey-100 bg-grey-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 text-grey-400">
            <CalendarDays className="w-4 h-4" />
            <span className="text-sm font-semibold">BizDays Global</span>
          </div>

          <p className="text-xs text-grey-400 max-w-md">
            {dict.tagline}
          </p>

          {/* Legal Links */}
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-grey-400 hover:text-grey-600 transition-colors underline-offset-2 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-[10px] text-grey-300 max-w-lg">
            {dict.disclaimer}
          </p>
          <p className="text-[10px] text-grey-300">
            © {currentYear} BizDays Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
