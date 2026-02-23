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
  home: {
    hero: {
      title: string;
      highlight: string;
      subtitle: string;
      startButton: string;
    };
    stats: { value: string; label: string }[];
    features: {
      title: string;
      items: { title: string; description: string }[];
    };
    howItWorks: {
      title: string;
      steps: { title: string; description: string }[];
    };
    useCases: {
      title: string;
      subtitle: string;
      items: { title: string; description: string }[];
    };
    faq: {
      title: string;
      items: { question: string; answer: string }[];
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  nav: {
    calculator: string;
    countries: string;
    about: string;
    startCalculating: string;
  };
  cookieConsent: {
    title: string;
    description: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    save: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    advertising: string;
    advertisingDesc: string;
    moreInfo: string;
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
    calculating: string;
    result: {
      title: string;
      endDate: string;
      summary: string;
      skippedWeekends: string;
      skippedHolidays: string;
      holidayList: string;
      summarySkipped: string;
      summaryWeekendDays: string;
      summaryHolidays: string;
      summaryNone: string;
      summaryAnd: string;
    };
  };
  common: {
    advertisement: string;
    affiliateDisclaimer: string;
    footer: {
      tagline: string;
      disclaimer: string;
      links: {
        privacy: string;
        terms: string;
        cookies: string;
        legal: string;
        contact: string;
      };
    };
  };
  legal: {
    privacy: {
      title: string;
      description: string;
      lastUpdated: string;
      sections: LegalSection[];
    };
    terms: {
      title: string;
      description: string;
      lastUpdated: string;
      sections: LegalSection[];
    };
    cookies: {
      title: string;
      description: string;
      lastUpdated: string;
      sections: LegalSection[];
    };
    legalNotice: {
      title: string;
      description: string;
      lastUpdated: string;
      sections: LegalSection[];
    };
  };
  contact: {
    title: string;
    description: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      successMessage: string;
    };
    info: {
      title: string;
      email: string;
      responseTime: string;
    };
  };
}

/** A section within a legal page */
export interface LegalSection {
  heading: string;
  content: string;
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
