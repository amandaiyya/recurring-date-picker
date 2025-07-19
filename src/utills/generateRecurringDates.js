import {
    addDays,
    addWeeks,
    addMonths,
    addYears,
    isAfter,
    isBefore,
    parseISO,
} from 'date-fns'

const getNextWeekday = (startDate, dayName) => {
  const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(dayName)
  const date = new Date(startDate)

  while (date.getDay() !== dayIndex){
    date.setDate(date.getDate() + 1)
  }

  return new Date(date)
}

const getMonthlyPatternDate = (startDate, pattern) => {
    const { week, day } = pattern;
    const date = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day)
    let count = 0;

    while(date.getMonth() === startDate.getMonth()){
        if(date.getDay() === dayIndex){
            count++;
            if(count === week) return new Date(date)
        }
        date.setDate(date.getDate() + 1)
    }

    return null;
}

export default function generateRecurringDates({
    startDate,
    endDate,
    recurrenceType,
    intervalValue,
    weekDays = [],
    monthlyPattern
}){
    if(!startDate || !recurrenceType || !intervalValue) return []

    const start = parseISO(startDate)
    const end = endDate ? parseISO(endDate) : addYears(start, 1)

    const dates = []

    let current = new Date(start)

    while(isBefore(current, end) || current.toDateString() === end.toDateString()){
        switch (recurrenceType){
            case 'daily':
                dates.push(new Date(current))
                current = addDays(current, intervalValue)
                break
            
            case 'weekly':
                weekDays.forEach((day) => {
                    const next = getNextWeekday(current, day)
                    if(isAfter(next, end)) return
                    dates.push(next)
                })
                current = addWeeks(current, intervalValue)
                break

            case 'monthly':
                const nextDate = getMonthlyPatternDate(current, monthlyPattern)
                if (nextDate && !isAfter(nextDate, end)){
                    dates.push(nextDate)
                }
                current = addMonths(current, intervalValue)
                break

            case 'yearly':
                dates.push(new Date(current))
                current = addYears(current, intervalValue)
                break
        }
    }

    return dates;
}