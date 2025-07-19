'use client';

import { useRecurrence } from "../../context/RecurrenceContext";

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function WeekDaySelector(){
    const { recurrenceType, weekDays, setWeekDays} = useRecurrence()

    const toggleDay = (day) => {
        setWeekDays((prev) => 
            prev.includes(day)
              ? prev.filter((d) => d !== day)
              : [...prev, day]
        )
    }

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