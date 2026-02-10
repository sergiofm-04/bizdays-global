// ============================================
// Calculator Form — Main Client Component
// Orchestrates all calculator inputs & output
// ============================================

"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { CountrySelector } from "@/components/calculator/country-selector";
import { CalculatorResultDisplay } from "@/components/calculator/calculator-result";

import { calculateEndDate } from "@/lib/business-days";
import type { Country, CalculatorResult, Dictionary } from "@/types";

interface CalculatorFormProps {
  countries: Country[];
  dict: Dictionary["calculator"];
  /** Pre-selected country code (for programmatic SEO pages) */
  defaultCountryCode?: string;
}

function CalculatorForm({
  countries,
  dict,
  defaultCountryCode,
}: CalculatorFormProps) {
  const today = format(new Date(), "yyyy-MM-dd");

  const [startDate, setStartDate] = useState(today);
  const [businessDays, setBusinessDays] = useState("10");
  const [countryCode, setCountryCode] = useState(defaultCountryCode ?? "");
  const [includeSaturdays, setIncludeSaturdays] = useState(false);
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  function handleCalculate() {
    if (!startDate || !businessDays || !countryCode) return;

    setIsCalculating(true);

    // Wrap in setTimeout to allow UI to update (show loading state)
    setTimeout(() => {
      try {
        const calcResult = calculateEndDate({
          startDate: new Date(startDate + "T00:00:00"),
          businessDays: parseInt(businessDays, 10),
          countryCode,
          includeSaturdays,
        });
        setResult(calcResult);
      } catch (error) {
        console.error("Calculation error:", error);
      } finally {
        setIsCalculating(false);
      }
    }, 50);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <CalendarDays className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-grey-900">{dict.title}</h1>
              <p className="text-sm text-grey-500">{dict.subtitle}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Start Date */}
          <Input
            label={dict.startDate}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          {/* Business Days */}
          <Input
            label={dict.businessDays}
            type="number"
            value={businessDays}
            onChange={(e) => setBusinessDays(e.target.value)}
            placeholder="10"
            min={-365}
            max={365}
          />

          {/* Country Selector */}
          <CountrySelector
            countries={countries}
            value={countryCode}
            onChange={setCountryCode}
            label={dict.country}
            placeholder={dict.countryPlaceholder}
          />

          {/* Saturday Toggle */}
          <Toggle
            label={dict.includeSaturdays}
            checked={includeSaturdays}
            onChange={(e) => setIncludeSaturdays(e.target.checked)}
          />
        </CardContent>

        <CardFooter>
          <Button
            size="lg"
            className="w-full"
            onClick={handleCalculate}
            disabled={!startDate || !businessDays || !countryCode || isCalculating}
          >
            {isCalculating ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Calculating...
              </span>
            ) : (
              <>
                <CalendarDays className="w-4 h-4" />
                {dict.calculate}
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {/* Result Display */}
      {result && (
        <CalculatorResultDisplay result={result} dict={dict.result} />
      )}
    </div>
  );
}

export { CalculatorForm };
