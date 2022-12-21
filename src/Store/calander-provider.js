import { useReducer,useState } from "react";
import { getSelectedWeekGreg } from "../Util/CalanderFunction";
import CalanderContext from "./calander-store";



export function CalanderContextProvider(props)
{


   



    const day = new Date().getDate()
    const weekDay = new Date().getDay()
    const month = new Date().getMonth()
    const etMonth = month > 7 ? (month - 8) : (month + 4)
    const year = new Date().getFullYear()
    const etYear = month > 7 ? (year - 7) : (year - 8)

    const [monthIndex, setMonthIndex] = useState(month)
    const [yearIndex, setYearIndex] = useState(year)
    const [monthSideIndex, setMonthSideIndex] = useState(month)
    const [yearSideIndex, setYearSideIndex] = useState(year)
    const [isGregorian, setIsGregorian] = useState(true)
    const [selectedDate, setSelectedDate] = useState({selectedDay: day, selectedMonth: month, selectedYear: year, selectedDayIndex: day, selectedWeekDay: weekDay})
    const [pickerOption, setPickerOption] = useState("month")
    const [selectedWeek, setSelectedWeek] = useState(getSelectedWeekGreg(selectedDate))
    


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
        <CalanderContext.Provider
         value= {values}
        >{
                props.children
            }</CalanderContext.Provider>
    );
}  
