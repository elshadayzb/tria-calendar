import { createContext} from "react";


const CalanderContext =  createContext({
    isGregorian: true,
    setIsGregorian: () => {},
    monthIndex: 11,
    setMonthIndex: (index)=>{},
    yearIndex: 2022,
    setYearIndex: (year)=>{},
    monthSideIndex: 11,
    setMonthSideIndex: (index)=>{},
    yearSideIndex: 2022,
    setYearSideIndex: (year)=>{},
    selectedDate: null,
    setSelectedDate: (dayObj) => {},
    pickerOption: "month",
    setPickerOption: (picker)=>{},
    selectedWeek: null,
    setSelectedWeek: (week)=>{},
    sideMonthDays: []
})




export default CalanderContext;