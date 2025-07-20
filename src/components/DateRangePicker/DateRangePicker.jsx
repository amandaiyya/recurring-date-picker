'use client';

import { useRecurrence } from "../../context/RecurrenceContext";

/**
 * DateRangePicker Component
 * 
 * This component lets users choose a start and end date for a recurring event.
 * 
 * - Both inputs are HTML5 `<input type="date">`
 * - Values are controlled by context (startDate, endDate)
 * - "End Date" is optional (help text provided)
 */

export default function DateRangePicker(){
    const { startDate, setStartDate, endDate, setEndDate } = useRecurrence()

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date Range</label>

            <div className="flex items-center gap-3 mb-2">
                <label htmlFor="start-date" className="text-sm w-24">Start Date:</label>
                <input 
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)} 
                  className="border px-3 py-2 rounded w-full"
                />
            </div>

            <div className="flex items-center gap-3">
                <label htmlFor="end-date" className="text-sm w-24">End Date:</label>
                <input 
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border px-3 py-2 rounded w-full"
                />
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-28">Optional</p>
        </div>
    )
}
