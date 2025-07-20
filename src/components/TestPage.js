import {
  RecurringOptionSelector,
  IntervalInput,
  WeekDaySelector,
  MonthlyPatternSelector,
  DateRangePicker,
  MiniCalendarPreview
} from "./index"

export default function TestPage() {
  return (
    <>
      <RecurringOptionSelector />
      <IntervalInput />
      <WeekDaySelector />
      <MonthlyPatternSelector />
      <DateRangePicker />
      <MiniCalendarPreview />
    </>
  );
}
