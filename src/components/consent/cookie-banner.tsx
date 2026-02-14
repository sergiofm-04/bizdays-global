// ============================================
// Cookie Consent Banner — Google Consent Mode v2
// Client Component with GDPR-compliant UI
// ============================================

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ChevronDown, ChevronUp } from "lucide-react";
import type { Dictionary, Locale } from "@/types";
import {
  hasConsentBeenGiven,
  getConsentPreferences,
  acceptAllCookies,
  rejectAllCookies,
  saveConsentPreferences,
} from "@/lib/consent";

interface CookieBannerProps {
  lang: Locale;
  dict: Dictionary["cookieConsent"];
}

export function CookieBanner({ lang, dict }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't given consent yet
    if (!hasConsentBeenGiven()) {
      // Small delay for smoother UX — avoids flash on page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }

    // If consent was previously given, restore preferences and update gtag
    const prefs = getConsentPreferences();
    if (prefs) {
      saveConsentPreferences({
        analytics: prefs.analytics,
        advertising: prefs.advertising,
      });
    }
  }, []);

  function handleAcceptAll() {
    acceptAllCookies();
    setVisible(false);
  }

  function handleRejectAll() {
    rejectAllCookies();
    setVisible(false);
  }

  function handleSavePreferences() {
    saveConsentPreferences({ analytics, advertising });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={dict.title}
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl">
        {/* Main content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold text-gray-900">
                {dict.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                {dict.description}
              </p>
            </div>
          </div>

          {/* Category toggles (expandable) */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              {dict.customize}
              {showDetails ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {showDetails && (
              <div className="mt-3 space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                {/* Necessary — always on */}
                <div className="flex items-center justify-between">
                  <div className="pr-4">
                    <p className="text-sm font-medium text-gray-900">
                      {dict.necessary}
                    </p>
                    <p className="text-xs text-gray-500">{dict.necessaryDesc}</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full bg-blue-600 opacity-70">
                    <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white shadow transition-transform" />
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between">
                  <div className="pr-4">
                    <p className="text-sm font-medium text-gray-900">
                      {dict.analytics}
                    </p>
                    <p className="text-xs text-gray-500">
                      {dict.analyticsDesc}
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analytics}
                    onClick={() => setAnalytics(!analytics)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
                      analytics ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                        analytics ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Advertising */}
                <div className="flex items-center justify-between">
                  <div className="pr-4">
                    <p className="text-sm font-medium text-gray-900">
                      {dict.advertising}
                    </p>
                    <p className="text-xs text-gray-500">
                      {dict.advertisingDesc}
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={advertising}
                    onClick={() => setAdvertising(!advertising)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
                      advertising ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                        advertising ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/${lang}/legal/cookie-policy`}
              className="text-xs text-gray-500 underline underline-offset-2 transition-colors hover:text-gray-700"
            >
              {dict.moreInfo}
            </Link>

            <div className="flex gap-2">
              {showDetails ? (
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  {dict.save}
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleRejectAll}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                  >
                    {dict.rejectAll}
                  </button>
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    {dict.acceptAll}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
