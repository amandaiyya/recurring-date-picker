'use client';

import { useEffect, useState } from 'react';
import { useRecurrence } from '../../context/RecurrenceContext'

export default function RecurringOptionSelector(){
    const {recurrenceType, setRecurrenceType} = useRecurrence();

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[])
    
    if(!mounted) return null

    return (
        <div className='mb-4 p-4 hover:bg-gray-200'>
            <select
              value={recurrenceType}
              onChange={(e) => setRecurrenceType(e.target.value)}
              className='w-full border px-3 py-2 rounded'
            >
                <option disabled hidden value="">Repeat</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>
    )
}