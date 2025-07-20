"use client";

import {
  RecurringOptionSelector,
  IntervalInput,
  WeekDaySelector,
  MonthlyPatternSelector,
  DateRangePicker,
  MiniCalendarPreview
} from "../components"

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-6 space-y-5 h-screen">
      <h1 className="text-xl font-bold mb-2 text-center">Recurring Date Picker</h1>
      <hr/>
      <RecurringOptionSelector />
      <IntervalInput />
      <WeekDaySelector />
      <MonthlyPatternSelector />
      <DateRangePicker />
      <MiniCalendarPreview />
    </div>
  );
}