// ============================================
// BizDays Global — i18n Configuration
// Minimal i18n system for EN/ES
// ============================================

import type { Locale, Dictionary } from "@/types";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "BizDays Global — Business Days Calculator",
      description:
        "Calculate delivery dates excluding weekends and public holidays for 100+ countries. Free online business days calculator.",
      titleTemplate: "Business Days Calculator for {country} | BizDays Global",
      descriptionTemplate:
        "Calculate working days in {country} excluding weekends and {country} public holidays. Free online tool for delivery date planning.",
    },
    calculator: {
      title: "Business Days Calculator",
      subtitle:
        "Calculate delivery dates excluding weekends and public holidays worldwide.",
      startDate: "Start Date",
      businessDays: "Business Days",
      country: "Country",
      countryPlaceholder: "Search for a country...",
      includeSaturdays: "Include Saturdays as working days",
      calculate: "Calculate End Date",
      result: {
        title: "Result",
        endDate: "End Date",
        summary: "Summary",
        skippedWeekends: "Weekend days skipped",
        skippedHolidays: "Public holidays skipped",
        holidayList: "Holidays excluded",
      },
    },
    common: {
      advertisement: "Advertisement",
      affiliateDisclaimer:
        "We may earn a commission from partner links at no extra cost to you.",
      footer: {
        tagline: "The free business days calculator for global teams.",
        disclaimer:
          "BizDays Global provides estimates based on public holiday data. Always verify critical dates with local authorities.",
      },
    },
  },
  es: {
    meta: {
      title: "BizDays Global — Calculadora de Días Laborables",
      description:
        "Calcula fechas de entrega excluyendo fines de semana y festivos locales de más de 100 países. Calculadora gratuita de días hábiles.",
      titleTemplate:
        "Calculadora de Días Laborables en {country} | BizDays Global",
      descriptionTemplate:
        "Calcula días hábiles en {country} excluyendo fines de semana y festivos de {country}. Herramienta gratuita para planificar entregas.",
    },
    calculator: {
      title: "Calculadora de Días Laborables",
      subtitle:
        "Calcula fechas de entrega excluyendo fines de semana y festivos a nivel mundial.",
      startDate: "Fecha de Inicio",
      businessDays: "Días Laborables",
      country: "País",
      countryPlaceholder: "Buscar un país...",
      includeSaturdays: "Incluir sábados como laborables",
      calculate: "Calcular Fecha Final",
      result: {
        title: "Resultado",
        endDate: "Fecha Final",
        summary: "Resumen",
        skippedWeekends: "Días de fin de semana omitidos",
        skippedHolidays: "Festivos omitidos",
        holidayList: "Festivos excluidos",
      },
    },
    common: {
      advertisement: "Publicidad",
      affiliateDisclaimer:
        "Podemos recibir una comisión de enlaces de socios sin coste adicional para ti.",
      footer: {
        tagline:
          "La calculadora gratuita de días laborables para equipos globales.",
        disclaimer:
          "BizDays Global proporciona estimaciones basadas en datos de festivos públicos. Verifica siempre las fechas críticas con las autoridades locales.",
      },
    },
  },
};

/**
 * Get the dictionary for a given locale.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/**
 * Check if a string is a valid locale.
 */
export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
