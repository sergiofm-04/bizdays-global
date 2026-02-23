// ============================================
// Legal Page Layout — Shared Component
// Renders legal pages from dictionary sections
// ============================================

import { Scale } from "lucide-react";
import type { LegalSection } from "@/types";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

/**
 * Parse simple markdown-like formatting in legal text.
 * Handles **bold**, bullet points, links, and newlines.
 */
function renderLegalContent(content: string) {
  // Split by double newline for paragraphs
  const paragraphs = content.split("\n\n");

  return paragraphs.map((paragraph, pIdx) => {
    // Check if it's a bullet list
    if (paragraph.includes("\n•") || paragraph.startsWith("•")) {
      const lines = paragraph.split("\n");
      const intro = lines[0]?.startsWith("•") ? null : lines[0];
      const bullets = lines.filter((l) => l.startsWith("•"));

      return (
        <div key={pIdx} className="space-y-2">
          {intro && <p className="text-grey-700 leading-relaxed">{processInline(intro)}</p>}
          <ul className="space-y-1.5 ml-1">
            {bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex gap-2 text-grey-700 leading-relaxed">
                <span className="text-primary-400 mt-0.5 shrink-0">•</span>
                <span>{processInline(bullet.replace(/^•\s*/, ""))}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <p key={pIdx} className="text-grey-700 leading-relaxed">
        {processInline(paragraph)}
      </p>
    );
  });
}

/**
 * Process inline formatting: **bold** and [links](url)
 */
function processInline(text: string): React.ReactNode {
  // Regex for bold + links
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, i) => {
    // Bold
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-grey-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Link
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 underline underline-offset-2 hover:text-primary-700"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function LegalPageLayout({ title, lastUpdated, sections }: LegalPageLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary-100 rounded-lg">
            <Scale className="w-5 h-5 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-grey-900">{title}</h1>
        </div>
        <p className="text-sm text-grey-400">{lastUpdated}</p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="text-lg font-semibold text-grey-900 border-b border-grey-100 pb-2">
              {section.heading}
            </h2>
            <div className="space-y-3">
              {renderLegalContent(section.content)}
            </div>
          </section>
        ))}
      </div>

      {/* Back to home */}
      <div className="mt-12 pt-6 border-t border-grey-100">
        <p className="text-xs text-grey-400 text-center">
          © {new Date().getFullYear()} BizDays Global. All rights reserved.
        </p>
      </div>
    </div>
    </div>
  );
}

export { LegalPageLayout };
