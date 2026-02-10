// ============================================
// Toggle — Atomic UI Component
// Accessible switch with label
// ============================================

"use client";

import { useId, type InputHTMLAttributes } from "react";

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

function Toggle({ label, checked, onChange, className = "", ...props }: ToggleProps) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center gap-3 cursor-pointer select-none ${className}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
          role="switch"
          aria-checked={checked}
          {...props}
        />
        <div
          className="
            w-11 h-6 rounded-full
            bg-grey-300 peer-checked:bg-primary-600
            transition-colors duration-200
          "
        />
        <div
          className="
            absolute top-0.5 left-0.5
            w-5 h-5 rounded-full bg-white shadow-sm
            peer-checked:translate-x-5
            transition-transform duration-200
          "
        />
      </div>
      <span className="text-sm text-grey-700">{label}</span>
    </label>
  );
}

export { Toggle };
