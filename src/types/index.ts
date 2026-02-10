// ============================================
// BizDays Global — Global Type Definitions
// ============================================

/** Supported locales */
export type Locale = "en" | "es";

/** ISO 3166-1 alpha-2 country code */
export type CountryCode = string;

/** Country entry for the selector */
export interface Country {
  code: CountryCode;
  name: string;
  /** Localized country name */
  localName?: string;
}

/** Calculator form input values */
export interface CalculatorInput {
  startDate: Date;
  businessDays: number;
  countryCode: CountryCode;
  includeSaturdays: boolean;
}

/** A single holiday that was skipped */
export interface SkippedHoliday {
  date: Date;
  name: string;
}

/** Calculator result output */
export interface CalculatorResult {
  endDate: Date;
  totalCalendarDays: number;
  skippedWeekends: number;
  skippedHolidays: SkippedHoliday[];
  /** Human-readable summary */
  summary: string;
}

/** i18n dictionary shape */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    titleTemplate: string;
    descriptionTemplate: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    startDate: string;
    businessDays: string;
    country: string;
    countryPlaceholder: string;
    includeSaturdays: string;
    calculate: string;
    result: {
      title: string;
      endDate: string;
      summary: string;
      skippedWeekends: string;
      skippedHolidays: string;
      holidayList: string;
    };
  };
  common: {
    advertisement: string;
    affiliateDisclaimer: string;
    footer: {
      tagline: string;
      disclaimer: string;
    };
  };
}

/** JSON-LD SoftwareApplication schema */
export interface SoftwareApplicationJsonLd {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    ratingCount: string;
  };
}
