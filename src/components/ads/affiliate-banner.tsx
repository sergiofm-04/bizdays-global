// ============================================
// Affiliate Banner — Placeholder Component
// For Monday.com / ClickUp / SaaS affiliate links
// ============================================

import { ExternalLink } from "lucide-react";

interface AffiliateBannerProps {
  /** Affiliate product name */
  productName?: string;
  /** Affiliate link URL */
  href?: string;
  /** CTA text */
  ctaText?: string;
  /** Disclaimer text */
  disclaimer?: string;
  className?: string;
}

function AffiliateBanner({
  productName = "Project Management Tool",
  href = "#",
  ctaText = "Try it free →",
  disclaimer = "We may earn a commission from partner links at no extra cost to you.",
  className = "",
}: AffiliateBannerProps) {
  return (
    <div
      className={`w-full ${className}`}
      role="complementary"
      aria-label="Affiliate recommendation"
    >
      <div
        className="
          w-full rounded-xl border border-grey-200 bg-gradient-to-r
          from-primary-50 to-grey-50 p-5
        "
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-medium text-grey-400 uppercase tracking-widest mb-1">
              Recommended Tool
            </p>
            <p className="text-sm font-semibold text-grey-900">
              📋 Need to manage deadlines across teams?
            </p>
            <p className="text-sm text-grey-600 mt-0.5">
              Plan and track business days with{" "}
              <span className="font-medium text-primary-700">
                {productName}
              </span>
              .
            </p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="
              inline-flex items-center gap-1.5
              px-4 py-2 rounded-lg
              bg-primary-600 text-white text-sm font-semibold
              hover:bg-primary-700 transition-colors duration-200
              shrink-0
            "
          >
            {ctaText}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-[10px] text-grey-400 mt-3">{disclaimer}</p>
      </div>
    </div>
  );
}

export { AffiliateBanner };
