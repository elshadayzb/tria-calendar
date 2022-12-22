import { MONTHSGREGDAYS, MONTHSETHDAYS, MONTHSGREG, MONTHSETH, MONTHSGREGSHORT, MONTHSETHSHORT } from "./CalanderConstants";

export const getMonthDaysGreg = (month, year) =>{
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    let currentDay = 0 - firstDayOfMonth
    let weekDay;
    const monthDays = new Array(6).fill([]).map(()=>{
        weekDay = 0
        return new Array(7).fill(null).map(()=>{
            currentDay++          
            return {day: new Date(year, month, currentDay).getDate(),
                    dayMonth: new Date(year, month, currentDay).getMonth(),
                    dayYear: new Date(year, month, currentDay).getFullYear(),
                    dayIndex: currentDay,
                    weekDay: weekDay++
                }
        })
    })
    return monthDays
}

export const getMonthDaysEthiopic = (month, year) =>{
    month = month > 7 ? (month - 8) : (month + 4)
    year = month > 7 ? (year - 8) : (year - 7)
    //console.log("etmonth: ", month, "etyear: ", year)
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    let currentDay = 0 - firstDayOfMonth
    let weekDay;
    const monthDays = new Array(6).fill([]).map(()=>{  
        weekDay = 0                            
        return new Array(7).fill(null).map(()=>{
            currentDay++ 

            if(currentDay < 1){
                return {day: 30 + currentDay, dayMonth: month-1, dayYear: year, dayIndex: currentDay, weekDay: weekDay++} 
            }
                
            if(currentDay > 30){
                return {day: currentDay - 30, dayMonth: month + 1, dayYear: year, dayIndex: currentDay, weekDay: weekDay++}   
            }
                     
            return {day: currentDay, dayMonth: month, dayYear: year, dayIndex: currentDay, weekDay: weekDay++}
        })
    })
    return monthDays
}

export const getSelectedWeekGreg = ({selectedDay, selectedMonth, selectedYear})=>{
    //console.log("Selected Day", selectedDay, "selected Month: ", selectedMonth, "selected year: ", selectedYear)
    const selectedMonthDays = getMonthDaysGreg (selectedMonth, selectedYear)
    let i, j;
    for(i=0; i<selectedMonthDays.length; i++){
        let week = selectedMonthDays[i]
        //all weeks have 7 days
        for(j=0; j< 7; j++){
            if(week[j].day === selectedDay && week[j].dayMonth === selectedMonth && week[j].dayYear === selectedYear){   
                return {
                    week,
                    weekIndex: i
                }
            }
        }
    }
    
}


export const getGregMonthDaysCount = (month, year) => {
    if(month !== 1){
         return MONTHSGREGDAYS[month]
    }else{
        return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28       
    }
}

export const getETYear = (month, year) => {
    return month > 7 ? (year- 7) : (year- 8)
}

export const getETMonth = (month) => {
    return month > 7 ? (month - 8) : (month + 4)
}

export const getMonthName = (isGregorian, month) => {
    const etMonth = month > 7 ? (month- 8) : (month + 4)
    return isGregorian ? MONTHSGREG[month] : MONTHSETH[etMonth]
}

export const getShortMonthName = (isGregorian, month) => {
    const etMonth = month > 7 ? (month - 8) : (month + 4)
    return isGregorian ? MONTHSGREGSHORT[month] : MONTHSETHSHORT[etMonth]
    
}

