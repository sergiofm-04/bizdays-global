import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft, Calculator } from "lucide-react";

/* ────────────────────────────────────────────
   404 Not Found — Global fallback page
   Bilingual (EN/ES) since we can't determine
   the user's locale at this level.
   ──────────────────────────────────────────── */

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-grey-50 to-white px-4 text-center">
      {/* Logo */}
      <Link href="/en" className="group mb-8 flex items-center gap-2.5">
        <Image
          src="/images/logo/logomark.png"
          alt="BizDays Global"
          width={40}
          height={40}
          className="rounded-lg shadow-sm shadow-primary-500/20"
        />
        <span className="text-lg font-bold tracking-tight text-grey-900">
          BizDays<span className="text-primary-600">Global</span>
        </span>
      </Link>

      {/* 404 badge */}
      <div className="mb-6 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700">
        404
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-extrabold tracking-tight text-grey-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-2 text-lg text-grey-500">
        Página no encontrada
      </p>

      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-grey-400">
        The page you&lsquo;re looking for doesn&lsquo;t exist or has been moved.
        <br />
        La página que buscas no existe o ha sido trasladada.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/en"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all hover:bg-primary-700 hover:shadow-md hover:-translate-y-px"
        >
          <Home className="h-4 w-4" />
          Go Home
        </Link>
        <Link
          href="/es"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-grey-200 bg-white px-6 py-2.5 text-sm font-semibold text-grey-700 shadow-sm transition-all hover:bg-grey-50 hover:shadow-md hover:-translate-y-px"
        >
          <Home className="h-4 w-4" />
          Ir al inicio
        </Link>
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-grey-300">
        © {new Date().getFullYear()} BizDays Global
      </p>
    </main>
  );
}
