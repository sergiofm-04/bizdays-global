// ============================================
// Header — Layout Component (Server Component)
// ============================================

import { CalendarDays, Globe } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/types";

interface HeaderProps {
  lang: Locale;
}

function Header({ lang }: HeaderProps) {
  const otherLang = lang === "en" ? "es" : "en";
  const otherLangLabel = lang === "en" ? "ES" : "EN";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-grey-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-grey-900 hover:text-primary-600 transition-colors"
        >
          <CalendarDays className="w-5 h-5 text-primary-600" />
          <span className="font-bold text-base tracking-tight">
            BizDays<span className="text-primary-600">Global</span>
          </span>
        </Link>

        {/* Language Switcher */}
        <Link
          href={`/${otherLang}`}
          className="
            inline-flex items-center gap-1.5
            px-3 py-1.5 rounded-md text-xs font-medium
            text-grey-600 hover:text-grey-900 hover:bg-grey-100
            transition-all duration-200
          "
          title={`Switch to ${otherLangLabel}`}
        >
          <Globe className="w-3.5 h-3.5" />
          {otherLangLabel}
        </Link>
      </div>
    </header>
  );
}

export { Header };
