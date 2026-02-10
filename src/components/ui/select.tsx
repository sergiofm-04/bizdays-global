// ============================================
// Select — Atomic UI Component
// With search/filter capability
// ============================================

"use client";

import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Search } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  searchable?: boolean;
  error?: string;
}

function Select({
  label,
  placeholder = "Select an option...",
  options,
  value,
  onChange,
  searchable = false,
  error,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-grey-700">
          {label}
        </label>
      )}

      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between gap-2
          px-3 py-2.5 rounded-lg border border-grey-300
          text-sm bg-white cursor-pointer
          transition-all duration-200
          hover:border-grey-400
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${error ? "border-error" : ""}
          ${isOpen ? "ring-2 ring-primary-500 border-primary-500" : ""}
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={selectedOption ? "text-grey-900" : "text-grey-400"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-grey-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute z-50 top-full left-0 right-0 mt-1
            bg-white border border-grey-200 rounded-lg shadow-lg
            max-h-60 overflow-hidden
          "
          role="listbox"
        >
          {searchable && (
            <div className="p-2 border-b border-grey-100">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={placeholder}
                  className="
                    w-full pl-8 pr-3 py-2 text-sm rounded-md
                    border border-grey-200 bg-grey-50
                    focus:outline-none focus:ring-1 focus:ring-primary-500
                  "
                />
              </div>
            </div>
          )}

          <div className="overflow-y-auto max-h-48">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-4 text-sm text-grey-400 text-center">
                No results found
              </div>
            ) : (
              filteredOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={opt.value === value}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`
                    w-full text-left px-3 py-2 text-sm cursor-pointer
                    transition-colors duration-100
                    hover:bg-primary-50 hover:text-primary-700
                    ${
                      opt.value === value
                        ? "bg-primary-50 text-primary-700 font-medium"
                        : "text-grey-700"
                    }
                  `}
                >
                  {opt.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}

export { Select, type SelectOption, type SelectProps };
