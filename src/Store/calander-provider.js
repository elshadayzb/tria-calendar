import React, { useState, useEffect } from "react";
import { getSelectedWeek } from "../Util/CalanderFunction";
import CalanderContext from "./calander-store";
import CalendarConverter from "../Util/CalendarConverter";


export function CalanderContextProvider(props)
{
    const calendarConverter = new CalendarConverter()

    const today = new Date(); //get today in Gregorian
    today.setFullYear(today.getFullYear());
    const day = today.getDate() ;
    const weekDay = today.getDay();
    const month = today.getMonth();   
    const year = today.getFullYear();
    const etToday = calendarConverter.getETToday(year, month + 1, day); // get today in Ethiopic

    const [isGregorian, setIsGregorian] = useState(true)
    const [monthIndex, setMonthIndex] = useState(isGregorian ?  month : etToday.month - 1)
    const [yearIndex, setYearIndex] = useState(isGregorian ? year : etToday.year)
    const [monthSideIndex, setMonthSideIndex] = useState(isGregorian ?  month : etToday.month - 1)
    const [yearSideIndex, setYearSideIndex] = useState(isGregorian ? year : etToday.year) 
    const [selectedDate, setSelectedDate] = useState( isGregorian ? 
            {selectedDay: day, selectedMonth: month, selectedYear: year, selectedDayIndex: day, selectedWeekDay: weekDay}:
            {selectedDay: etToday.day, selectedMonth: etToday.month - 1, selectedYear: etToday.year, selectedDayIndex: etToday.day, selectedWeekDay: weekDay}
        )
    const [pickerOption, setPickerOption] = useState("month")
    const [selectedWeek, setSelectedWeek] = useState(getSelectedWeek(selectedDate, isGregorian))

    
    const values= {
        monthIndex: monthIndex,
        setMonthIndex: setMonthIndex,
        yearIndex: yearIndex,
        setYearIndex: setYearIndex,
        isGregorian: isGregorian,
        setIsGregorian: setIsGregorian,
        monthSideIndex: monthSideIndex,
        setMonthSideIndex: setMonthSideIndex,
        yearSideIndex: yearSideIndex,
        setYearSideIndex: setYearSideIndex,
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
        pickerOption: pickerOption,
        setPickerOption: setPickerOption,
        selectedWeek: selectedWeek,
        setSelectedWeek: setSelectedWeek
    }

    return (
        <CalanderContext.Provider value= {values}>
            {props.children}
        </CalanderContext.Provider>
    );
}  
