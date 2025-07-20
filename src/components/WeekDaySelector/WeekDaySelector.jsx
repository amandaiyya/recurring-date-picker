'use client';

import { useRecurrence } from "../../context/RecurrenceContext";

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

/**
 * WeekDaySelector Component
 * 
 * This component allows users to select one or more weekdays (Mon-Sun).
 * It only renders when the `recurrenceType` is set to `'weekly'`.
 * 
 * Selected days are managed using the `weekDays` state from RecurrenceContext.
 */

export default function WeekDaySelector(){
    const { recurrenceType, weekDays, setWeekDays} = useRecurrence()

    // Toggle day selection
    const toggleDay = (day) => {
        setWeekDays((prev) => 
            prev.includes(day)
              ? prev.filter((d) => d !== day) // remove day
              : [...prev, day]  // add day
        )
    }

    // Only render if "weekly" is selected
    if(recurrenceType !== 'weekly') return null;

    return (
        <div className="mb-4">
            <label htmlFor="text-sm font-medium block mb-2">On</label>
            <div className="grid grid-cols-7 gap-1">
                {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`
                        px-2 py-1 border rounded text-sm
                        ${weekDays.includes(day)
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    )
}