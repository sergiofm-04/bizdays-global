import {
  Globe,
  Calendar,
  Building2,
  Truck,
  Scale,
  Clock,
  ArrowRight,
  MapPin,
} from "lucide-react";

/* ────────────────────────────────────────────
   Coming Soon — BizDays Global
   Temporary landing for early indexing.
   Remove this file and restore redirect
   once the full app is ready to launch.
   ──────────────────────────────────────────── */

const FEATURES = [
  {
    icon: Calendar,
    titleEn: "Business Days Calculator",
    titleEs: "Calculadora de días hábiles",
    descEn: "Exclude weekends & public holidays automatically.",
    descEs: "Excluye fines de semana y festivos automáticamente.",
  },
  {
    icon: Globe,
    titleEn: "170+ Countries",
    titleEs: "170+ países",
    descEn: "Official public holiday calendars worldwide.",
    descEs: "Calendarios oficiales de festivos de todo el mundo.",
  },
  {
    icon: Truck,
    titleEn: "Delivery Date Planning",
    titleEs: "Planificación de entregas",
    descEn: "Know exactly when your shipment will arrive.",
    descEs: "Sabe exactamente cuándo llegará tu envío.",
  },
  {
    icon: Building2,
    titleEn: "Built for B2B Teams",
    titleEs: "Diseñado para equipos B2B",
    descEn: "Logistics, HR, finance & legal professionals.",
    descEs: "Profesionales de logística, RRHH, finanzas y legal.",
  },
  {
    icon: Scale,
    titleEn: "100% Free",
    titleEs: "100% gratuito",
    descEn: "No signup required. Open and instant.",
    descEs: "Sin registro. Abierto e instantáneo.",
  },
  {
    icon: Clock,
    titleEn: "Real-Time Results",
    titleEs: "Resultados en tiempo real",
    descEn: "Instant calculations, zero latency.",
    descEs: "Cálculos instantáneos, sin latencia.",
  },
] as const;

const COUNTRIES_PREVIEW = [
  "🇺🇸 United States",
  "🇪🇸 Spain",
  "🇬🇧 United Kingdom",
  "🇩🇪 Germany",
  "🇫🇷 France",
  "🇯🇵 Japan",
  "🇧🇷 Brazil",
  "🇲🇽 Mexico",
  "🇨🇦 Canada",
  "🇦🇺 Australia",
  "🇮🇹 Italy",
  "🇮🇳 India",
];

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-grey-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-50/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        {/* ── Hero ── */}
        <header className="mt-8 flex flex-col items-center text-center sm:mt-16">
          {/* Animated logo mark */}
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/25 animate-[float_3s_ease-in-out_infinite]">
            <Globe className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-grey-900 sm:text-5xl lg:text-6xl">
            BizDays{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Global
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-grey-600 sm:text-xl">
            The ultimate tool for calculating business days, delivery dates and
            public holidays across{" "}
            <strong className="text-grey-800">170+ countries</strong>.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-grey-500 sm:text-lg">
            La herramienta definitiva para el cálculo de días hábiles, fechas de
            entrega y festivos internacionales.
          </p>

          {/* Status badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-primary-700 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
            </span>
            Launching February 2026 — Lanzamiento febrero 2026
          </div>
        </header>

        {/* ── Features grid ── */}
        <section className="mt-16 w-full sm:mt-20" aria-label="Features">
          <h2 className="sr-only">Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.titleEn}
                className="group rounded-xl border border-grey-100 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-primary-200 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-primary-50 p-2.5 text-primary-600 transition-colors group-hover:bg-primary-100">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-grey-900">{f.titleEn}</h3>
                <p className="mt-0.5 text-xs text-primary-600/70">
                  {f.titleEs}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-grey-500">
                  {f.descEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Countries preview ── */}
        <section className="mt-16 w-full text-center" aria-label="Countries">
          <div className="flex items-center justify-center gap-2 text-grey-400">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Countries supported
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {COUNTRIES_PREVIEW.map((c) => (
              <span
                key={c}
                className="rounded-full border border-grey-100 bg-white px-3 py-1.5 text-sm text-grey-600 shadow-sm"
              >
                {c}
              </span>
            ))}
            <span className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-600">
              +158 more
            </span>
          </div>
        </section>

        {/* ── CTA / Notify ── */}
        <section className="mt-16 w-full max-w-lg text-center">
          <div className="rounded-2xl border border-grey-100 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-grey-900">
              Get notified at launch
            </h2>
            <p className="mt-1 text-sm text-grey-500">
              Recibe una notificación cuando lancemos.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                className="flex-1 rounded-lg border border-grey-200 bg-white px-4 py-2.5 text-sm text-grey-900 placeholder:text-grey-400 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                disabled
              />
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-primary-500/25 transition-all hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Notify me
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs text-grey-400">
              Coming soon — Próximamente
            </p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-auto pt-16 pb-8 text-center">
          <p className="text-sm text-grey-400">
            © {new Date().getFullYear()} BizDays Global — bizdaysglobal.com
          </p>
          <p className="mt-1 text-xs text-grey-300">
            Business days &amp; public holiday calculator for international
            teams.
          </p>
        </footer>
      </div>

      {/* Float keyframe */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </main>
  );
}
