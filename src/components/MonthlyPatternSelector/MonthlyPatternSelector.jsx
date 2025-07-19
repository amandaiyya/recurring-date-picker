'use client';

import { useRecurrence } from '@/context/RecurrenceContext';

const weekOptions = [1, 2, 3, 4, 5]
const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function MonthlyPatternSelector(){
    const { recurrenceType, monthlyPattern, setMonthlyPattern } = useRecurrence()

    const handleChange = (field, value) => {
        setMonthlyPattern({
            ...monthlyPattern,
            [field]: value
        })
    }

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