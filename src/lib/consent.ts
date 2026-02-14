/**
 * Cookie Consent Management Utility
 * Implements Google Consent Mode v2 with localStorage persistence.
 * GDPR-compliant: default state is "denied" for all non-essential cookies.
 */

export type ConsentCategory = "necessary" | "analytics" | "advertising";

export interface ConsentPreferences {
  necessary: boolean; // Always true, cannot be disabled
  analytics: boolean;
  advertising: boolean;
  timestamp: number;
}

const CONSENT_KEY = "bizdays_cookie_consent";

// Default: all denied except necessary
const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
  timestamp: 0,
};

/**
 * Get saved consent preferences from localStorage.
 * Returns null if no consent has been given yet.
 */
export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as ConsentPreferences;
    // Validate structure
    if (
      typeof parsed.necessary !== "boolean" ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.advertising !== "boolean" ||
      typeof parsed.timestamp !== "number"
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Save consent preferences to localStorage and update Google Consent Mode.
 */
export function saveConsentPreferences(
  preferences: Omit<ConsentPreferences, "necessary" | "timestamp">
): void {
  if (typeof window === "undefined") return;

  const fullPreferences: ConsentPreferences = {
    necessary: true, // Always true
    analytics: preferences.analytics,
    advertising: preferences.advertising,
    timestamp: Date.now(),
  };

  localStorage.setItem(CONSENT_KEY, JSON.stringify(fullPreferences));
  updateGoogleConsent(fullPreferences);
}

/**
 * Accept all cookies.
 */
export function acceptAllCookies(): void {
  saveConsentPreferences({
    analytics: true,
    advertising: true,
  });
}

/**
 * Reject all non-essential cookies.
 */
export function rejectAllCookies(): void {
  saveConsentPreferences({
    analytics: false,
    advertising: false,
  });
}

/**
 * Check if consent has been given (user has interacted with the banner).
 */
export function hasConsentBeenGiven(): boolean {
  return getConsentPreferences() !== null;
}

/**
 * Update Google Consent Mode v2 signals via gtag.
 * This function updates the consent state after user interaction.
 *
 * Google Consent Mode v2 required signals:
 * - ad_storage: Controls storage for advertising (cookies)
 * - analytics_storage: Controls storage for analytics (cookies)
 * - ad_user_data: Controls sending user data to Google for advertising
 * - ad_personalization: Controls ad personalization
 */
function updateGoogleConsent(preferences: ConsentPreferences): void {
  if (typeof window === "undefined") return;

  // Ensure gtag is available
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof w.gtag !== "function") return;

  w.gtag("consent", "update", {
    ad_storage: preferences.advertising ? "granted" : "denied",
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
  });
}

/**
 * Generate the Google Consent Mode v2 default consent script.
 * This MUST be placed in <head> BEFORE any Google tags (gtag.js, GA, AdSense).
 * Returns the script content as a string for use in a <script> tag.
 */
export function getDefaultConsentScript(): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500
    });
  `;
}
