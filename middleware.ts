import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.bizdaysglobal.com";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  if (nextUrl.hostname !== CANONICAL_HOST) {
    const canonicalUrl = nextUrl.clone();
    canonicalUrl.hostname = CANONICAL_HOST;

    if (canonicalUrl.pathname === "/") {
      canonicalUrl.pathname = "/en";
    }

    return NextResponse.redirect(canonicalUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};