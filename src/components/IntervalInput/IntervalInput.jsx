'use client';

import { useRecurrence } from "../../context/RecurrenceContext";

export default function IntervalInput(){
    const { intervalValue, setIntervalValue, recurrenceType } = useRecurrence()

    const getLable = (type) => {
        switch (type) {
            case 'daily':
              return 'day(s)'
            case 'weekly': 
              return 'week(s)'
            case 'monthly':
              return 'month(s)'
            case 'yearly':
              return 'years(s)'
            default: 
              return ''
        }
    }

    if(!recurrenceType) return null;

    return (
        <div className="mb-4">
            <label className="text-sm font-medium block mb-1">Repeat every</label>
            <div className="flex items-center space-x-2">
                <input 
                  type="number"
                  min="1"
                  value={intervalValue}
                  onChange={(e) => setIntervalValue(e.target.value)}
                  className="w-20 border px-3 py-2 rounded"
                />
                <span className="text-gray-700">{getLable(recurrenceType)}</span>
            </div>
        </div>
    )
}