"use client"

import {createContext, useContext, useState} from "react";

const RecurrenceContext = createContext()

export function ReccurenceProvider({children}){
    const [recurrenceType, setRecurrenceType] = useState('daily')
    const [interval, setInterval] = useState(1)
    const [weekDays, setWeekDays] = useState([])
    const [monthlyPattern, setMonthlyPattern] = useState({ week: 1, day: "Monday"})
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [previewDates, setPreviewDates] = useState([])

    const value = {
        recurrenceType,
        setRecurrenceType,
        interval,
        setInterval,
        weekDays,
        setWeekDays,
        monthlyPattern,
        setMonthlyPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        previewDates,
        setPreviewDates
    }

    return (
        <RecurrenceContext.Provider value={value}>
            {children}
        </RecurrenceContext.Provider>
    )
}

export const useRecurrence = () => useContext(RecurrenceContext)