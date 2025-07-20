'use client';

import { useEffect, useState } from 'react';
import { useRecurrence } from '../../context/RecurrenceContext'

/**
 * RecurringOptionSelector Component
 * 
 * This component renders a dropdown select menu to choose a recurring option
 * like Daily, Weekly, Monthly, or Yearly.
 * 
 * It uses context (useRecurrence) to get and update the recurrence type globally.
 * 
 * The component waits until it's mounted on the client before rendering
 * (useful for SSR in Next.js).
 */

export default function RecurringOptionSelector(){
    const {recurrenceType, setRecurrenceType} = useRecurrence();

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[])
    
    if(!mounted) return null

    return (
        <div className='mb-4'>
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