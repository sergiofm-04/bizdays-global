// ============================================
// Header — Premium Layout Component (Client)
// Pathname-aware language switcher
// ============================================

"use client";

import { Globe, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import type { Locale, Dictionary } from "@/types";

interface HeaderProps {
  lang: Locale;
  nav: Dictionary["nav"];
}

function Header({ lang, nav }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const otherLang: Locale = lang === "en" ? "es" : "en";

  // Build the language-switched URL preserving current path
  function getLocalizedPath(targetLang: Locale) {
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "es") {
      segments[1] = targetLang;
    }
    return segments.join("/") || `/${targetLang}`;
  }

  // Scroll listener for header elevation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { href: `/${lang}`, label: nav.calculator },
    { href: `/${lang}/calculator/business-days/united-states`, label: nav.countries },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-grey-100/60"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/logo/logomark.png"
              alt="BizDays Global"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg shadow-sm shadow-primary-500/20 transition-shadow group-hover:shadow-md group-hover:shadow-primary-500/30"
            />
            <span className="text-[17px] font-bold tracking-tight text-grey-900">
              BizDays<span className="text-primary-600">Global</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${
                    isActive(link.href)
                      ? "text-primary-700 bg-primary-50"
                      : "text-grey-500 hover:text-grey-900 hover:bg-grey-50"
                  }
                `}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-primary-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Language Switcher — Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`
                  inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 cursor-pointer
                  ${
                    langOpen
                      ? "text-primary-700 bg-primary-50"
                      : "text-grey-500 hover:text-grey-900 hover:bg-grey-50"
                  }
                `}
                aria-expanded={langOpen}
                aria-haspopup="true"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {lang === "en" ? "English" : "Español"}
                </span>
                <span className="sm:hidden">{lang.toUpperCase()}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-grey-100 bg-white p-1.5 shadow-lg shadow-grey-900/5">
                  <Link
                    href={getLocalizedPath("en")}
                    onClick={() => setLangOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                      ${lang === "en" ? "bg-primary-50 text-primary-700 font-medium" : "text-grey-600 hover:bg-grey-50 hover:text-grey-900"}
                    `}
                  >
                    <span className="text-base">🇬🇧</span>
                    English
                    {lang === "en" && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-500" />
                    )}
                  </Link>
                  <Link
                    href={getLocalizedPath("es")}
                    onClick={() => setLangOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                      ${lang === "es" ? "bg-primary-50 text-primary-700 font-medium" : "text-grey-600 hover:bg-grey-50 hover:text-grey-900"}
                    `}
                  >
                    <span className="text-base">🇪🇸</span>
                    Español
                    {lang === "es" && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-500" />
                    )}
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg text-grey-500 hover:bg-grey-50 hover:text-grey-900 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-grey-100 pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${
                      isActive(link.href)
                        ? "text-primary-700 bg-primary-50"
                        : "text-grey-600 hover:bg-grey-50 hover:text-grey-900"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export { Header };
