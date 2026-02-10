// ============================================
// Country Selector — Calculator Component
// Server-side country list + client Select
// ============================================

"use client";

import { Select, type SelectOption } from "@/components/ui/select";
import type { Country } from "@/types";

interface CountrySelectorProps {
  countries: Country[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
}

function CountrySelector({
  countries,
  value,
  onChange,
  label,
  placeholder,
}: CountrySelectorProps) {
  const options: SelectOption[] = countries.map((c) => ({
    value: c.code,
    label: `${c.name} (${c.code})`,
  }));

  return (
    <Select
      label={label}
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={onChange}
      searchable
    />
  );
}

export { CountrySelector };
