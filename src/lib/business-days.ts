// ============================================
// BizDays Global — Business Days Calculator
// Pure logic, no UI dependencies
// ============================================

import { addDays, isSaturday, isSunday, isWeekend, format, differenceInCalendarDays, isBefore, isAfter, isEqual } from "date-fns";
import Holidays from "date-holidays";
import type { CalculatorInput, CalculatorResult, SkippedHoliday } from "@/types";

/**
 * Check if a given date is a public holiday for the specified country.
 * Returns the holiday name if it is, or null otherwise.
 */
function getHolidayName(date: Date, holidays: Holidays): string | null {
  const result = holidays.isHoliday(date);
  if (!result) return null;

  // date-holidays returns an array of holiday objects
  const publicHolidays = Array.isArray(result)
    ? result.filter((h) => h.type === "public")
    : [];

  return publicHolidays.length > 0 ? publicHolidays[0].name : null;
}

/**
 * Determine if a date should be skipped (non-working day).
 */
function isNonWorkingDay(
  date: Date,
  holidays: Holidays,
  includeSaturdays: boolean
): { skip: boolean; holidayName: string | null } {
  // Sunday is always non-working
  if (isSunday(date)) {
    return { skip: true, holidayName: null };
  }

  // Saturday is non-working unless includeSaturdays is true
  if (isSaturday(date) && !includeSaturdays) {
    return { skip: true, holidayName: null };
  }

  // Check for public holidays
  const holidayName = getHolidayName(date, holidays);
  if (holidayName) {
    return { skip: true, holidayName };
  }

  return { skip: false, holidayName: null };
}

/**
 * Calculate the end date after adding/subtracting business days.
 *
 * @param input - Calculator input parameters
 * @returns Calculator result with end date and details
 */
export function calculateEndDate(input: CalculatorInput): CalculatorResult {
  const { startDate, businessDays, countryCode, includeSaturdays } = input;

  const holidays = new Holidays(countryCode.toUpperCase());

  const direction = businessDays >= 0 ? 1 : -1;
  let remainingDays = Math.abs(businessDays);
  let currentDate = new Date(startDate);
  let skippedWeekends = 0;
  const skippedHolidays: SkippedHoliday[] = [];

  while (remainingDays > 0) {
    currentDate = addDays(currentDate, direction);

    const { skip, holidayName } = isNonWorkingDay(
      currentDate,
      holidays,
      includeSaturdays
    );

    if (skip) {
      if (holidayName) {
        // Avoid duplicating holiday names for the same date
        const alreadyTracked = skippedHolidays.some(
          (h) => format(h.date, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd")
        );
        if (!alreadyTracked) {
          skippedHolidays.push({
            date: new Date(currentDate),
            name: holidayName,
          });
        }
      } else {
        skippedWeekends++;
      }
      continue; // Don't count this day
    }

    remainingDays--;
  }

  const totalCalendarDays = Math.abs(
    differenceInCalendarDays(currentDate, startDate)
  );

  const summary = buildSummary(skippedWeekends, skippedHolidays);

  return {
    endDate: currentDate,
    totalCalendarDays,
    skippedWeekends,
    skippedHolidays,
    summary,
  };
}

/**
 * Build a human-readable summary of skipped days.
 * Accepts optional i18n strings for localization.
 */
interface SummaryStrings {
  summarySkipped: string;
  summaryWeekendDays: string;
  summaryHolidays: string;
  summaryNone: string;
  summaryAnd: string;
}

export function buildSummary(
  skippedWeekends: number,
  skippedHolidays: SkippedHoliday[],
  strings?: SummaryStrings
): string {
  const s = strings ?? {
    summarySkipped: "Skipped",
    summaryWeekendDays: "weekend day",
    summaryHolidays: "holiday",
    summaryNone: "No weekends or holidays were skipped.",
    summaryAnd: "and",
  };

  const parts: string[] = [];

  if (skippedWeekends > 0) {
    parts.push(
      `${skippedWeekends} ${s.summaryWeekendDays}${skippedWeekends !== 1 ? "s" : ""}`
    );
  }

  if (skippedHolidays.length > 0) {
    const holidayNames = skippedHolidays.map((h) => h.name).join(", ");
    parts.push(
      `${skippedHolidays.length} ${s.summaryHolidays}${skippedHolidays.length !== 1 ? "s" : ""} (${holidayNames})`
    );
  }

  if (parts.length === 0) {
    return s.summaryNone;
  }

  return `${s.summarySkipped} ${parts.join(` ${s.summaryAnd} `)}.`;
}

/**
 * Get all public holidays for a country in a given year.
 */
export function getHolidaysForYear(
  countryCode: string,
  year: number
): Array<{ date: string; name: string }> {
  const holidays = new Holidays(countryCode.toUpperCase());
  const allHolidays = holidays.getHolidays(year);

  return allHolidays
    .filter((h) => h.type === "public")
    .map((h) => ({
      date: h.date.split(" ")[0], // "YYYY-MM-DD"
      name: h.name,
    }));
}
