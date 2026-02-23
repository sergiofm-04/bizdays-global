import { redirect } from "next/navigation";

/* ────────────────────────────────────────────
   Root page — Redirects to default locale.
   The proxy handles locale detection from
   Accept-Language, but this is the fallback
   for direct static access.
   ──────────────────────────────────────────── */

export default function RootPage() {
  redirect("/en");
}

