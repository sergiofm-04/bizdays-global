// ============================================
// BizDays Global — Business Days Tests
// Tests for calculateEndDate and buildSummary
// ============================================

import { describe, it, expect } from "vitest";
import { calculateEndDate, buildSummary } from "@/lib/business-days";

describe("calculateEndDate", () => {
  // ── Basic forward counting ──

  it("adds 1 business day (Mon → Tue)", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 6), // Monday Jan 6
      businessDays: 1,
      countryCode: "US",
      includeSaturdays: false,
    });
    // Tuesday Jan 7
    expect(result.endDate.getFullYear()).toBe(2025);
    expect(result.endDate.getMonth()).toBe(0);
    expect(result.endDate.getDate()).toBe(7);
  });

  it("adds 5 business days within one full week (Mon → next Mon)", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 6), // Monday Jan 6
      businessDays: 5,
      countryCode: "US",
      includeSaturdays: false,
    });
    // Should land on Monday Jan 13 (skipping Sat Jan 11 & Sun Jan 12)
    expect(result.endDate.getDate()).toBe(13);
    expect(result.skippedWeekends).toBe(2);
  });

  it("adds 10 business days across two full weeks", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 6), // Monday Jan 6
      businessDays: 10,
      countryCode: "US",
      includeSaturdays: false,
    });
    // 10 business days from Mon Jan 6:
    // Jan 7,8,9,10 (4 biz days), skip 11-12,
    // Jan 13,14,15,16,17 (5 biz days = 9 total), skip 18-19,
    // Jan 20 = 10th biz day
    expect(result.endDate.getDate()).toBe(20);
  });

  // ── Weekend skipping ──

  it("skips weekends correctly (Fri → Mon)", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 10), // Friday Jan 10
      businessDays: 1,
      countryCode: "US",
      includeSaturdays: false,
    });
    // Should skip Sat Jan 11 & Sun Jan 12, land on Mon Jan 13
    expect(result.endDate.getDate()).toBe(13);
    expect(result.skippedWeekends).toBe(2);
  });

  // ── Include Saturdays ──

  it("includes Saturdays when flag is set", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 10), // Friday Jan 10
      businessDays: 1,
      countryCode: "US",
      includeSaturdays: true,
    });
    // Saturday Jan 11 counts as a working day
    expect(result.endDate.getDate()).toBe(11);
    expect(result.skippedWeekends).toBe(0);
  });

  it("still skips Sundays when Saturdays are included", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 10), // Friday Jan 10
      businessDays: 2,
      countryCode: "US",
      includeSaturdays: true,
    });
    // Sat Jan 11 = 1st biz day, Sun Jan 12 skipped, Mon Jan 13 = 2nd biz day
    expect(result.endDate.getDate()).toBe(13);
    expect(result.skippedWeekends).toBe(1); // Only Sunday
  });

  // ── Holiday skipping ──

  it("skips Spain holiday — Christmas Day (Dec 25, 2025)", () => {
    // Dec 25, 2025 is a Thursday
    const result = calculateEndDate({
      startDate: new Date(2025, 11, 24), // Wednesday Dec 24
      businessDays: 1,
      countryCode: "ES",
      includeSaturdays: false,
    });
    // Dec 25 (Navidad) = holiday → skip, Dec 26 = 1st biz day (Friday)
    expect(result.endDate.getDate()).toBe(26);
    expect(result.skippedHolidays.length).toBeGreaterThanOrEqual(1);
  });

  it("skips Spain holiday — Epifanía (Jan 6, 2025)", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 3), // Friday Jan 3
      businessDays: 1,
      countryCode: "ES",
      includeSaturdays: false,
    });
    // Should skip Sat 4, Sun 5, Mon 6 (Epifanía) → land on Tue Jan 7
    expect(result.endDate.getDate()).toBe(7);
    expect(result.skippedHolidays.length).toBe(1);
  });

  // ── Negative (backward) counting ──

  it("subtracts business days (backward counting)", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 13), // Monday Jan 13
      businessDays: -1,
      countryCode: "US",
      includeSaturdays: false,
    });
    // Should go back to Friday Jan 10 (skip Sun 12, Sat 11)
    expect(result.endDate.getDate()).toBe(10);
    expect(result.skippedWeekends).toBe(2);
  });

  it("subtracts 5 business days across a full week", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 13), // Monday Jan 13
      businessDays: -5,
      countryCode: "US",
      includeSaturdays: false,
    });
    // Back 5 biz days: Fri 10, Thu 9, Wed 8, Tue 7, Mon 6 → Jan 6
    expect(result.endDate.getDate()).toBe(6);
  });

  // ── Zero business days ──

  it("returns start date when adding 0 business days", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 6), // Monday Jan 6
      businessDays: 0,
      countryCode: "US",
      includeSaturdays: false,
    });
    expect(result.endDate.getDate()).toBe(6);
    expect(result.skippedWeekends).toBe(0);
    expect(result.skippedHolidays).toHaveLength(0);
  });

  // ── Calendar days tracking ──

  it("correctly counts total calendar days", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 0, 6), // Monday Jan 6
      businessDays: 5,
      countryCode: "US",
      includeSaturdays: false,
    });
    // Mon 6 to Mon 13 = 7 calendar days
    expect(result.totalCalendarDays).toBe(7);
  });

  // ── Different countries ──

  it("handles UK holidays (Christmas — Dec 25)", () => {
    const result = calculateEndDate({
      startDate: new Date(2025, 11, 24), // Wed Dec 24
      businessDays: 2,
      countryCode: "GB",
      includeSaturdays: false,
    });
    // Dec 25 (Christmas) = holiday → skip
    // Library skips holidays, the exact landing depends on date-holidays data
    expect(result.endDate.getDate()).toBe(29);
    expect(result.skippedHolidays.length).toBeGreaterThanOrEqual(1);
  });
});

describe("buildSummary", () => {
  it("returns none message when nothing was skipped", () => {
    const result = buildSummary(0, []);
    expect(result).toBe("No weekends or holidays were skipped.");
  });

  it("formats weekend days correctly (singular)", () => {
    const result = buildSummary(1, []);
    expect(result).toBe("Skipped 1 weekend day.");
  });

  it("formats weekend days correctly (plural)", () => {
    const result = buildSummary(4, []);
    expect(result).toBe("Skipped 4 weekend days.");
  });

  it("formats holidays correctly (singular)", () => {
    const result = buildSummary(0, [
      { date: new Date(2025, 0, 1), name: "New Year's Day" },
    ]);
    expect(result).toBe("Skipped 1 holiday (New Year's Day).");
  });

  it("formats holidays correctly (plural)", () => {
    const result = buildSummary(0, [
      { date: new Date(2025, 0, 1), name: "New Year's Day" },
      { date: new Date(2025, 11, 25), name: "Christmas Day" },
    ]);
    expect(result).toBe(
      "Skipped 2 holidays (New Year's Day, Christmas Day)."
    );
  });

  it("combines weekends and holidays", () => {
    const result = buildSummary(4, [
      { date: new Date(2025, 0, 1), name: "New Year's Day" },
    ]);
    expect(result).toBe(
      "Skipped 4 weekend days and 1 holiday (New Year's Day)."
    );
  });

  it("uses custom i18n strings", () => {
    const result = buildSummary(
      2,
      [{ date: new Date(2025, 0, 1), name: "Año Nuevo" }],
      {
        summarySkipped: "Se saltaron",
        summaryWeekendDays: "día de fin de semana",
        summaryHolidays: "festivo",
        summaryNone: "No se saltaron fines de semana ni festivos.",
        summaryAnd: "y",
      }
    );
    expect(result).toBe(
      "Se saltaron 2 día de fin de semanas y 1 festivo (Año Nuevo)."
    );
  });

  it("uses custom i18n strings for none case", () => {
    const result = buildSummary(0, [], {
      summarySkipped: "Se saltaron",
      summaryWeekendDays: "día de fin de semana",
      summaryHolidays: "festivo",
      summaryNone: "No se saltaron fines de semana ni festivos.",
      summaryAnd: "y",
    });
    expect(result).toBe("No se saltaron fines de semana ni festivos.");
  });
});
