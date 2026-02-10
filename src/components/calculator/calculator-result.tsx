// ============================================
// Calculator Result — Display Component
// ============================================

import { Calendar, CalendarOff, PartyPopper } from "lucide-react";
import { format } from "date-fns";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { CalculatorResult } from "@/types";
import type { Dictionary } from "@/types";

interface CalculatorResultDisplayProps {
  result: CalculatorResult;
  dict: Dictionary["calculator"]["result"];
}

function CalculatorResultDisplay({
  result,
  dict,
}: CalculatorResultDisplayProps) {
  return (
    <Card className="border-primary-200 bg-primary-50/30">
      <CardHeader className="border-b-primary-100">
        <h2 className="text-lg font-semibold text-grey-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary-600" />
          {dict.title}
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* End Date — Big Display */}
        <div className="text-center py-3">
          <p className="text-xs font-medium text-grey-500 uppercase tracking-wider mb-1">
            {dict.endDate}
          </p>
          <p className="text-3xl font-bold text-primary-700">
            {format(result.endDate, "MMMM d, yyyy")}
          </p>
          <p className="text-sm text-grey-500 mt-1">
            {format(result.endDate, "EEEE")}
          </p>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg p-4 space-y-3 border border-grey-100">
          <p className="text-sm text-grey-700">{result.summary}</p>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <CalendarOff className="w-4 h-4 text-grey-400" />
              <span className="text-grey-600">{dict.skippedWeekends}:</span>
              <span className="font-semibold text-grey-900">
                {result.skippedWeekends}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <PartyPopper className="w-4 h-4 text-grey-400" />
              <span className="text-grey-600">{dict.skippedHolidays}:</span>
              <span className="font-semibold text-grey-900">
                {result.skippedHolidays.length}
              </span>
            </div>
          </div>

          {/* Holiday List */}
          {result.skippedHolidays.length > 0 && (
            <div className="pt-2 border-t border-grey-100">
              <p className="text-xs font-medium text-grey-500 uppercase tracking-wider mb-2">
                {dict.holidayList}
              </p>
              <ul className="space-y-1">
                {result.skippedHolidays.map((holiday, i) => (
                  <li
                    key={i}
                    className="flex justify-between text-sm text-grey-700"
                  >
                    <span>{holiday.name}</span>
                    <span className="text-grey-400">
                      {format(holiday.date, "MMM d")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export { CalculatorResultDisplay };
