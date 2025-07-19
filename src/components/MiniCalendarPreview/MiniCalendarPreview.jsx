'use client';

import { useState, useEffect } from "react";
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    addMonths,
    subMonths,
    isSameMonth,
    isSameDay,
    format
} from 'date-fns';

import { useRecurrence } from "../../context/RecurrenceContext";;
import generateRecurringDates from '../../utills/generateRecurringDates';

export default function MiniCalendarPreview(){
    const {
        recurrenceType,
        intervalValue,
        weekDays,
        monthlyPattern,
        startDate,
        endDate,
    } = useRecurrence();

    const recurringDates = generateRecurringDates({
        recurrenceType,
        intervalValue,
        weekDays,
        monthlyPattern,
        startDate,
        endDate
    })

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDateOfGrid = startOfWeek(monthStart)
    const endDateOfGrid = endOfWeek(monthEnd)

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

    const isRecurring = (date) => recurringDates.some((d) => isSameDay(date, d))

    const renderDays = () => {
        const days = [];
        let day = startDateOfGrid;

        while (day <= endDateOfGrid){
            const dayClone = day;

            days.push(
                <div
                  key={dayClone.toISOString()}
                  className={`
                    p-2 text-center text-sm rounded
                    ${!isSameMonth(dayClone, monthStart) ? 'text-gray-300' : ''}
                    ${isRecurring(dayClone) ? 'bg-blue-500 text-white font-semibold' : ''}
                  `}
                >
                    {format(dayClone, 'd')}
                </div>
            )

            day = addDays(day, 1)
        }

        return days;
    }

    return (
        <div className="mt-6 p-4 border rounded shadow-sm">
            {/* Header with month & navigation */}
            <div className="flex justify-between items-center mb-2">
                <button
                 onClick={prevMonth}
                 className="text-sm px-2 py-1 border rounded hover:bg-gray-100"
                >
                   ←
                </button>
                <h3 className="text-md font-semibold">
                    {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <button
                 onClick={nextMonth}
                 className="text-sm px-2 py-1 border rounded hover:bg-gray-100"
                >
                   →
                </button>
            </div>

            {/* Days of the week labels */}
            <div className="grid grid-cols-7 text-xs text-center font-medium text-gray-500 mb-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day}>
                       {day}
                    </div>
                ))}
            </div>

            {/* Days in calender */}
            <div className="grid grid-cols-7 gap-1">
                {renderDays()}
            </div>
        </div>
    )
}