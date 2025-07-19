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
    <div className="max-w-md mx-auto bg-white rounded shadow p-6 space-y-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Recurring Date Picker</h1>
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

//    <main className="p-6 max-w-xl mx-auto">
  //     <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>

  //     {/* 1. Recurrence Type */}
  // <div className="mb-4">
  //   <label className="block font-medium mb-1">Recurrence Type</label>
  //   <select className="w-full border px-3 py-2 rounded">
  //     <option>Daily</option>
  //     <option>Weekly</option>
  //     <option>Monthly</option>
  //     <option>Yearly</option>
  //   </select>
  // </div>

  // {/* 2. Interval Input */}
  // <div className="mb-4">
  //   <label className="block font-medium mb-1">Repeat Every</label>
  //   <div className="flex items-center gap-2">
  //     <input type="number" className="w-20 border px-3 py-2 rounded" min="1" />
  //     <span className="text-gray-600">day(s)/week(s)/month(s)</span>
  //   </div>
  // </div>

  // {/* 3. Start + End Date */}
  // <div className="mb-4">
  //   <label className="block font-medium mb-1">Start Date</label>
  //   <input type="date" className="w-full border px-3 py-2 rounded" />
  // </div>
  // <div className="mb-4">
  //   <label className="block font-medium mb-1">End Date (optional)</label>
  //   <input type="date" className="w-full border px-3 py-2 rounded" />
  // </div>

  // {/* 4. Weekday Selection (for weekly) */}
  // <div className="mb-4">
  //   <label className="block font-medium mb-2">Select Weekdays</label>
  //   <div className="flex flex-wrap gap-2">
  //     {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
  //       <button key={day} className="px-3 py-1 border rounded hover:bg-gray-100">
  //         {day}
  //       </button>
  //     ))}
  //   </div>
  // </div>

  // {/* 5. Monthly Pattern Selector */}
  // <div className="mb-4">
  //   <label className="block font-medium mb-1">Monthly Pattern</label>
  //   <div className="flex gap-2">
  //     <select className="border px-3 py-2 rounded">
  //       <option value="1">First</option>
  //       <option value="2">Second</option>
  //       <option value="3">Third</option>
  //       <option value="4">Fourth</option>
  //       <option value="-1">Last</option>
  //     </select>
  //     <select className="border px-3 py-2 rounded">
  //       <option>Monday</option>
  //       <option>Tuesday</option>
  //       <option>Wednesday</option>
  //       <option>Thursday</option>
  //       <option>Friday</option>
  //       <option>Saturday</option>
  //       <option>Sunday</option>
  //     </select>
  //   </div>
  // </div>

  // {/* 6. Preview Section */}
  // <div className="mt-6">
  //   <h2 className="text-lg font-semibold mb-2">Preview Dates</h2>
  //   <ul className="list-disc pl-5 text-gray-700 space-y-1">
  //     <li>2025-07-20</li>
  //     <li>2025-07-21</li>
  //     <li>2025-07-22</li>
  //     <li>...</li>
  //   </ul>
  // </div>
  //   </main>