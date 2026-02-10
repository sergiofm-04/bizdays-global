// ============================================
// Card — Atomic UI Component
// ============================================

import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl border border-grey-200
        shadow-sm
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`px-6 py-4 border-b border-grey-100 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`px-6 py-5 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`px-6 py-4 border-t border-grey-100 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card, CardHeader, CardContent, CardFooter };
