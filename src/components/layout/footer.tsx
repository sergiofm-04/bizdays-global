// ============================================
// Footer — Layout Component (Server Component)
// ============================================

import { CalendarDays } from "lucide-react";
import type { Dictionary } from "@/types";

interface FooterProps {
  dict: Dictionary["common"]["footer"];
}

function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-grey-100 bg-grey-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 text-grey-400">
            <CalendarDays className="w-4 h-4" />
            <span className="text-sm font-semibold">BizDays Global</span>
          </div>
          <p className="text-xs text-grey-400 max-w-md">
            {dict.tagline}
          </p>
          <p className="text-[10px] text-grey-300 max-w-lg">
            {dict.disclaimer}
          </p>
          <p className="text-[10px] text-grey-300">
            © {currentYear} BizDays Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
