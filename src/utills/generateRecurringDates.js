import {
    addDays,
    addWeeks,
    addMonths,
    addYears,
    isAfter,
    isBefore,
    parseISO,
    getDay,
    getMonth,
    getYear,
} from 'date-fns'

const getMonthlyPatternDate = (startDate, pattern, firstDate) => {
    const { week, day } = pattern;

    if(!week || !day) return null;

    const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day)

    if(dayIndex === -1) return null;

    const year = getYear(startDate)
    const month = getMonth(startDate);

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const matchingDays = [];

    for(let i = 1; i <= daysInMonth; i++){
        const d = new Date(year, month, i);
        if(getDay(d) === dayIndex){
            matchingDays.push(d)
        }
    }

    const weekNumber = parseInt(week, 10);

    const patternMatchingDate = matchingDays[weekNumber - 1];

    if(isBefore(patternMatchingDate, firstDate)) return null

    return patternMatchingDate || null;
}

export default function generateRecurringDates({
    startDate,
    endDate,
    recurrenceType,
    intervalValue,
    weekDays = [],
    monthlyPattern
}){
    const intervalValueNew = parseInt(intervalValue, 10);
    
    if(!startDate || !recurrenceType || !intervalValueNew || intervalValueNew < 1) return []

    const start = parseISO(startDate)

    const end = endDate ? parseISO(endDate) : addYears(start, 1)

    const dates = []

    let current = new Date(start)

    while(isBefore(current, end) || current.toDateString() === end.toDateString()){
        switch (recurrenceType){
            case 'daily':
                dates.push(new Date(current))
                current = addDays(current, intervalValueNew)
                break;
            
            case 'weekly':
                const normlizedWeekDays = weekDays.map(d => d.toLowerCase());
                const weekStart = new Date(current);

                for(let i = 0; i < 7; i++){
                    const daysToCheck = addDays(weekStart, i);
                    const dayName = daysToCheck.toLocaleDateString('en-IN', { weekday: 'short' }).toLowerCase();

                    if(normlizedWeekDays.includes(dayName) && !isAfter(daysToCheck, end)){
                        dates.push(daysToCheck)
                    }
                }

                current = addWeeks(weekStart, intervalValueNew)
                break;

            case 'monthly':
                const nextDate = getMonthlyPatternDate(current, monthlyPattern, startDate)
                if (nextDate && !isAfter(nextDate, end)){
                    dates.push(nextDate)
                }
                current = addMonths(current, intervalValueNew)
                break;

            case 'yearly':
                dates.push(new Date(current))
                current = addYears(current, intervalValueNew)
                break;

            default:
                return dates;
        }
    }

    return dates;
}