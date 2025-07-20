'use client';

import { useRecurrence } from '@/context/RecurrenceContext';

const weekOptions = [1, 2, 3, 4, 5]
const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

/**
 * MonthlyPatternSelector Component
 * 
 * Allows the user to choose a specific week (1st, 2nd, etc.)
 * and day (Monday, Tuesday, etc.) of the month for recurring events.
 * 
 * Only visible when recurrenceType is set to "monthly".
 * 
 * Controlled via context (useRecurrence) — monthlyPattern contains:
 *  - week: number (1 to 5)
 *  - day: string (e.g., "Monday")
 */

export default function MonthlyPatternSelector(){
    const { recurrenceType, monthlyPattern, setMonthlyPattern } = useRecurrence()

     // Updates the selected week or day in the context
    const handleChange = (field, value) => {
        setMonthlyPattern({
            ...monthlyPattern,
            [field]: value
        })
    }

    // Don't render anything unless recurrence type is "monthly"
    if(recurrenceType !== 'monthly') return null;

    return (
        <div className='mb-4'>
            <label className='text-sm font-medium block mb-2'>Repeat on</label>
            <div className='flex items-center gap-2'>
                <select 
                  value={monthlyPattern.week}
                  onChange={(e) => handleChange('week', Number(e.target.value))}
                  className='border px-2 py-1 rounded'
                >
                    {weekOptions.map((num) => (
                        <option
                          key={num}
                          value={num}
                        >
                            {`${num}${['st','nd','rd','th','th'][num - 1]} week`}
                        </option>
                    ))}
                </select>
                
                <select
                  value={monthlyPattern.day}
                  onChange={(e) => handleChange('day', e.target.value)}
                  className='border px-2 py-1 rounded'
                >
                    {dayOptions.map((day) => (
                        <option
                          key={day}
                          value={day}
                        >
                            {day}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}