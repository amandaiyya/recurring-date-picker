'use client';

import { useRecurrence } from "../../context/RecurrenceContext";

/**
 * IntervalInput Component
 * 
 * This component allows the user to set the interval number for recurring events,
 * such as "every 2 weeks", "every 3 months", etc.
 * 
 * It reads the current recurrence type (daily, weekly, etc.) from context,
 * and displays the correct unit label next to the number input.
 * 
 * Only shown when a recurrence type is selected.
 */

export default function IntervalInput(){
    const { intervalValue, setIntervalValue, recurrenceType } = useRecurrence()

    // Returns label based on recurrence type
    const getLable = (type) => {
        switch (type) {
            case 'daily':
              return 'day(s)'
            case 'weekly': 
              return 'week(s)'
            case 'monthly':
              return 'month(s)'
            case 'yearly':
              return 'years(s)'
            default: 
              return ''
        }
    }

    // Don’t render if no recurrence type is selected
    if(!recurrenceType) return null;

    return (
        <div className="mb-4">
            <label htmlFor="interval-input" className="text-sm font-medium block mb-1">Repeat every</label>
            <div className="flex items-center space-x-2">
                <input 
                  id="interval-input"
                  type="number"
                  min="1"
                  value={intervalValue}
                  onChange={(e) => setIntervalValue(e.target.value)}
                  className="w-20 border px-3 py-2 rounded"
                />
                <span className="text-gray-700">{getLable(recurrenceType)}</span>
            </div>
        </div>
    )
}