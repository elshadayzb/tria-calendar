import {
    ChevronLeftOutlined,
    ChevronRightOutlined,
  } from "@mui/icons-material";
  import {
    IconButton,
    Typography,
    Button
    
  } from "@mui/material";
  import { Stack } from "@mui/system";
  import { Fragment, useContext } from "react";
import CalanderContext from "../../Store/calander-store";
import { MONTHSETH, MONTHSETHSHORT, MONTHSGREG, MONTHSGREGDAYS, MONTHSGREGSHORT } from "../../Util/CalanderConstants";
import { getSelectedWeekGreg} from "../../Util/CalanderFunction";

export default function CalanderHeader()
{


const {monthIndex, setMonthIndex, yearIndex, setYearIndex,  pickerOption,   
        isGregorian,  selectedWeek, setSelectedWeek, selectedDate, setSelectedDate} = useContext(CalanderContext)

const {selectedDay, selectedMonth, selectedYear} = selectedDate; 
let monthDaysCount, weekYear, weekMonth;
let newSelectedDay;

const getMonthDaysCount = (month, year) => {
    if(month !== 1){
         return MONTHSGREGDAYS[month]
    }else{
        return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28       
    }
}

const prevMonthHandler = ()=>{
    if(pickerOption === 'year'){
        weekYear = yearIndex - 1
        setYearIndex(curYear => curYear - 1)
        const weekDay = new Date(weekYear, selectedMonth, 1).getDay()
        setSelectedDate({selectedDay: selectedDay, selectedMonth: selectedMonth, selectedYear: weekYear, selectedDayIndex: selectedDay, 
                         selectedWeekDay: weekDay }) 
    }
    else if(pickerOption === 'month'){
        if(monthIndex === 0){    
           setMonthIndex(11)
           setYearIndex(curYear => curYear - 1)
           weekMonth = 11
           weekYear = selectedYear - 1
        }else{
            setMonthIndex(curMonth =>  curMonth - 1)
            weekMonth = selectedMonth - 1
            weekYear = selectedYear
        }  
        const weekDay = new Date(weekYear, weekMonth, 1).getDay()
        setSelectedDate({selectedDay: 1, selectedMonth: weekMonth, selectedYear: weekYear, selectedDayIndex: 1, 
                         selectedWeekDay: weekDay })            
   }else if(pickerOption === "week"){
        newSelectedDay = selectedDay - 7
        if(newSelectedDay < 1){
            if(selectedMonth === 0){
                weekMonth = 11   
                weekYear = selectedYear - 1  
                setYearIndex(weekYear)
            }else{
                weekMonth = selectedMonth - 1
                weekYear = selectedYear   
            }
            setMonthIndex(weekMonth)
        }
        else{
            weekMonth = selectedMonth
            weekYear = selectedYear 
        }

        monthDaysCount = getMonthDaysCount(weekMonth, weekYear)

        if(newSelectedDay < 1 ){
            newSelectedDay += monthDaysCount               
        }
        const weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                        selectedDayIndex: newSelectedDay, selectedWeekDay: weekDay })
   }else if(pickerOption === 'day'){
        newSelectedDay = selectedDay - 1
        if(newSelectedDay < 1){
            if(selectedMonth === 0){
                weekMonth = 11
                weekYear = selectedYear - 1
            }else{
                weekMonth = selectedMonth - 1
                weekYear = selectedYear
            }
        }else{
            weekMonth = selectedMonth
            weekYear = selectedYear
        }
        monthDaysCount = getMonthDaysCount(weekMonth, weekYear)
        if(newSelectedDay < 1){
            newSelectedDay = monthDaysCount
        }
        const weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                        selectedDayIndex: newSelectedDay, selectedWeekDay: weekDay })
   }

}
const nextMonthHandler = ()=>{
    console.log("month Index: ", monthIndex, " year Index: ", yearIndex)
    if(pickerOption === 'year'){
        weekYear = yearIndex + 1
        setYearIndex(curYear => curYear + 1)
        const weekDay = new Date(weekYear, selectedMonth, 1).getDay()
        setSelectedDate({selectedDay: selectedDay, selectedMonth: selectedMonth, selectedYear: weekYear, selectedDayIndex: selectedDay, 
                         selectedWeekDay: weekDay }) 
    }
    else if (pickerOption === 'month'){
        if(monthIndex === 11){
            setMonthIndex(0)
            setYearIndex(curYear => curYear + 1)  
            weekMonth = 0
            weekYear = selectedYear + 1             
        }else{
            setMonthIndex(curMonth =>  curMonth + 1)
            weekMonth = selectedMonth + 1
            weekYear = selectedYear
        }
        const weekDay = new Date(weekYear, weekMonth, 1).getDay()
        setSelectedDate({selectedDay: 1, selectedMonth: weekMonth, selectedYear: weekYear, selectedDayIndex: 1, 
                         selectedWeekDay: weekDay })  
    }else if(pickerOption === "week"){
        newSelectedDay = selectedDay + 7
        monthDaysCount = getMonthDaysCount(selectedMonth, selectedYear)
        if(newSelectedDay > monthDaysCount){
            if(selectedMonth === 11){
                weekMonth = 0   
                weekYear = selectedYear + 1
                setYearIndex(weekYear)  
            }else{
                weekMonth = selectedMonth + 1
                weekYear = selectedYear   
            }
            newSelectedDay -= monthDaysCount 
            setMonthIndex(weekMonth) 
        }else{
            weekMonth = selectedMonth
            weekYear = selectedYear 
        }
        const weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                         selectedDayIndex: newSelectedDay, selectedWeekDay:  weekDay})
   }else if(pickerOption === "day"){
    newSelectedDay = selectedDay + 1
    monthDaysCount = getMonthDaysCount(selectedMonth, selectedYear)
    if(newSelectedDay > monthDaysCount){
        if(selectedMonth === 11){
            weekMonth = 0   
            weekYear = selectedYear + 1
            setYearIndex(weekYear)  
        }else{
            weekMonth = selectedMonth + 1
            weekYear = selectedYear   
        }
        newSelectedDay = 1
        setMonthIndex(weekMonth) 
    }else{
        weekMonth = selectedMonth
        weekYear = selectedYear 
    }
    const weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
    setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                     selectedDayIndex: newSelectedDay, selectedWeekDay:  weekDay})
}             
}

const dateResetHandler = () => {
    const curDay = new Date().getDate()
    const weekDay = new Date().getDay()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    setMonthIndex(month)
    setYearIndex(year)
    setSelectedDate({selectedDay: curDay, selectedMonth: month, selectedYear: year, selectedDayIndex: curDay, selectedWeekDay: weekDay})
    setSelectedWeek(getSelectedWeekGreg({selectedDay: curDay, selectedMonth: month, selectedYear: year}))   
}

const getHeaderTitle = () => {
    let monthTitle, yearTitle
    if(pickerOption === 'month'){
        monthTitle = isGregorian ? MONTHSGREG[monthIndex]: MONTHSETH[monthIndex > 7 ? (monthIndex - 8) : (monthIndex + 4)]
        yearTitle = isGregorian ? yearIndex : (monthIndex > 7 ? (yearIndex - 7) : (yearIndex - 8))
        return `${monthTitle} ${yearTitle}`
    }else if(pickerOption === 'week'){
        const uniqueMonths = [...new Set(selectedWeek.week.map(day => day.dayMonth))];
        const uniqueYears = [...new Set(selectedWeek.week.map(day => day.dayYear))];
        console.log("Unique Months: ", uniqueMonths, " Unique Years: ", uniqueYears)
        if(uniqueYears.length > 1){
            monthTitle = isGregorian ? 
                            `${MONTHSGREGSHORT[uniqueMonths[0]]} ${uniqueYears[1]} - ${MONTHSGREGSHORT[uniqueMonths[1]]} ${uniqueYears[1]}`:
                            `${MONTHSETHSHORT[uniqueMonths[0] > 7 ? (uniqueMonths[0] - 8) : (uniqueMonths[0] + 4)]} ${uniqueMonths[0]> 7 ? (uniqueYears[0] - 7) : (uniqueYears[0] - 8)} - 
                            ${MONTHSETHSHORT[uniqueMonths[1] > 7 ? (uniqueMonths[1] - 8) : (uniqueMonths[1] + 4)]} ${uniqueMonths[1]> 7 ? (uniqueYears[1] - 7) : (uniqueYears[1] - 8)}`
            
            return monthTitle
        }
        else if(uniqueYears.length === 1 && uniqueMonths.length > 1){
            monthTitle = isGregorian ? `${MONTHSGREGSHORT[uniqueMonths[0]]} - ${MONTHSGREGSHORT[uniqueMonths[1]]}`:
                         `${MONTHSETHSHORT[uniqueMonths[0] > 7 ? (uniqueMonths[0] - 8) : (uniqueMonths[0] + 4)]} -
                         ${MONTHSETHSHORT[uniqueMonths[1] > 7 ? (uniqueMonths[1] - 8) : (uniqueMonths[1] + 4)]}`
            yearTitle = isGregorian ? uniqueYears[0] : (uniqueMonths[0]> 7 ? (uniqueYears[0] - 7) : (uniqueYears[0] - 8))

            return `${monthTitle} ${yearTitle}`
        }else {
            monthTitle = isGregorian ? MONTHSGREG[monthIndex]: MONTHSETH[monthIndex > 7 ? (monthIndex - 8) : (monthIndex + 4)]
            yearTitle = isGregorian ? yearIndex : (monthIndex > 7 ? (yearIndex - 7) : (yearIndex - 8))
            return `${monthTitle} ${yearTitle}` 
        } 
    }else if(pickerOption === 'day'){
        const dayMonth = selectedDate.selectedMonth
        monthTitle = isGregorian ? MONTHSGREG[dayMonth] : MONTHSETH[dayMonth > 7 ? (dayMonth - 8) : (dayMonth + 4)]
        yearTitle = isGregorian ? selectedDate.selectedYear : (dayMonth > 7 ? 
                                (selectedDate.selectedYear - 7) : (selectedDate.selectedYear - 8))
        return `${monthTitle} ${selectedDate.selectedDay}, ${yearTitle}`
    }
    else if(pickerOption === 'year'){
        yearTitle = isGregorian ? yearIndex : (monthIndex > 7 ? (yearIndex - 7) : (yearIndex - 8))
        return `${yearTitle}`
    }
}

    return (

        <Fragment >

            <Button
                  variant="outlined"
                  onClick={dateResetHandler}
                  sx={{
                    textTransform : "capitalize",
                    borderColor: "hsl(0, 0%, 52%)",
                    borderStyle: "solid",
                    borderBlockWidth: 1,
                    color: "inherit",
                    minWidth: { xs: "10ch"},
                    maxWidth: { xs: "10ch" },
                    py: 0.8,
                    "&:hover": {
                      borderColor: "hsl(0, 0%, 52%)",
                      borderStyle: "solid",
                      borderBlockWidth: 1,
                      color: "inherit",
                    },
                    "&:active": { bgcolor: "hsla(228, 12%, 48%, 0.968)" },
                  }}
                >
                  {isGregorian ? "Today" : "ዛሬ"}
                </Button>


            <Stack direction="row" spacing={1} sx={{ p: 0, ml: 3 }}>
                  <IconButton sx={{ height: 35, width: 35 }} onClick={prevMonthHandler}>
                    <ChevronLeftOutlined sx={{ fontSize: "150%" }} />
                  </IconButton>
                  <IconButton sx={{ height: 35, width: 35 }} onClick={nextMonthHandler}>
                    <ChevronRightOutlined sx={{ fontSize: "150%" }}  />
                  </IconButton>
            </Stack>

            <Typography
                  sx={{
                    color: "inherit",
                    minWidth: { xs: "17ch"},
                    maxWidth: { xs: "17ch" },
                    pl: 2,
                    textAlign: "left",
                    fontSize: "165%",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                  }}
                >
                  {getHeaderTitle()}
                </Typography>
        </Fragment>

    );
}