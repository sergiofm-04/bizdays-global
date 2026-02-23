// ============================================
// i18n Proxy — Redirects bare paths to /en|/es
// Skips root "/" to show coming-soon landing page
// ============================================

import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

// ⚡ Coming-soon mode disabled — app is live.
const COMING_SOON_MODE = false;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, and metadata files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // In coming-soon mode, let the root "/" through without redirect
  if (COMING_SOON_MODE && pathname === "/") {
    return NextResponse.next();
  }

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLocale = acceptLanguage.includes("es") ? "es" : defaultLocale;

  // Redirect to locale-prefixed path
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Match all paths except static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
