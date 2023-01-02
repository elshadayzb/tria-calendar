import { Fragment, useContext } from "react";
import {ChevronLeftOutlined, ChevronRightOutlined, } from "@mui/icons-material";
import { IconButton, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import CalanderContext from "../../Store/calander-store";
import { MONTHSETH, MONTHSETHSHORT, MONTHSGREG, MONTHSGREGDAYS, MONTHSGREGSHORT } from "../../Util/CalanderConstants";
import { getSelectedWeekGreg, getGregMonthDaysCount, getEthMonthDaysCount, getGregDateWeekDay } from "../../Util/CalanderFunction";
import CalendarConverter from "../../Util/CalendarConverter";

export default function CalanderHeader()
{

const {monthIndex, setMonthIndex, yearIndex, setYearIndex,  pickerOption,   
        isGregorian,  selectedWeek, setSelectedWeek, selectedDate, setSelectedDate} = useContext(CalanderContext);

const calendarConverter = new CalendarConverter();

const {selectedDay, selectedMonth, selectedYear} = selectedDate; 
let monthDaysCount, weekYear, weekMonth, weekDay, newSelectedDay, gregDate;

const getMonthDaysCount = (month, year) => {
    return isGregorian ? getGregMonthDaysCount(month, year) : getEthMonthDaysCount(month, year);
}

const prevMonthHandler = ()=>{
    if(pickerOption === 'year'){
        weekYear = yearIndex - 1
        setYearIndex(curYear => curYear - 1)
        weekDay = isGregorian ? getGregDateWeekDay(weekYear, selectedMonth, 1) : calendarConverter.getETMonthStartDay(weekYear, selectedMonth + 1);
                    
        setSelectedDate({selectedDay: selectedDay, selectedMonth: selectedMonth, selectedYear: weekYear, selectedDayIndex: selectedDay, 
                         selectedWeekDay: weekDay }) 
    }
    else if(pickerOption === 'month'){
        if(monthIndex === 0){    
           setMonthIndex(isGregorian ? 11 : 12);  // set the month to the previous year last month
           setYearIndex(curYear => curYear - 1);
           weekMonth = isGregorian ? 11 : 12;
           weekYear = selectedYear - 1;
        }else{
            setMonthIndex(curMonth =>  curMonth - 1);
            weekMonth = selectedMonth - 1;
            weekYear = selectedYear;
        }  

        weekDay = isGregorian ? getGregDateWeekDay(weekYear, weekMonth, 1) : calendarConverter.getETMonthStartDay(weekYear, weekMonth + 1);

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
        weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
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
        weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                        selectedDayIndex: newSelectedDay, selectedWeekDay: weekDay })
   }

}
const nextMonthHandler = ()=>{
    
    if(pickerOption === 'year'){
        weekYear = yearIndex + 1
        setYearIndex(curYear => curYear + 1)
        weekDay = isGregorian ? getGregDateWeekDay(weekYear, selectedMonth, 1) : calendarConverter.getETMonthStartDay(weekYear, selectedMonth + 1);
        
        setSelectedDate({selectedDay: selectedDay, selectedMonth: selectedMonth, selectedYear: weekYear, selectedDayIndex: selectedDay, 
                         selectedWeekDay: weekDay }) 
    }
    else if (pickerOption === 'month'){
        if((isGregorian && monthIndex === 11) || (!isGregorian && monthIndex === 12)){
            setMonthIndex(0)
            setYearIndex(curYear => curYear + 1)  
            weekMonth = 0
            weekYear = selectedYear + 1             
        }else{
            setMonthIndex(curMonth =>  curMonth + 1)
            weekMonth = selectedMonth + 1
            weekYear = selectedYear
        }
        
        weekDay = isGregorian ? getGregDateWeekDay(weekYear, weekMonth, 1) : calendarConverter.getETMonthStartDay(weekYear, weekMonth + 1);
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
        weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
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
        weekDay = new Date(weekYear, weekMonth, newSelectedDay).getDay()
        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                        selectedDayIndex: newSelectedDay, selectedWeekDay:  weekDay})
}             
}

const dateResetHandler = () => {
    const gregToday = new Date();
    gregToday.setFullYear(gregToday.getFullYear());
    const etToday = calendarConverter.getETToday();
    const curDay = isGregorian ? gregToday.getDate() : etToday.day
    const weekDay = gregToday.getDay()
    const month = isGregorian ? gregToday.getMonth() : etToday.month - 1
    const year = isGregorian ? gregToday.getFullYear() : etToday.year

    setMonthIndex(month)
    setYearIndex(year)
    setSelectedDate({selectedDay: curDay, selectedMonth: month, selectedYear: year, selectedDayIndex: curDay, selectedWeekDay: weekDay})
    setSelectedWeek(getSelectedWeekGreg({selectedDay: curDay, selectedMonth: month, selectedYear: year}))   
}

const getHeaderTitle = () => {
    let monthTitle;
    if(pickerOption === 'month'){
        monthTitle = isGregorian ? MONTHSGREG[monthIndex]: MONTHSETH[monthIndex]
        return `${monthTitle} ${yearIndex}`

    }else if(pickerOption === 'week'){
        const uniqueMonths = [...new Set(selectedWeek.week.map(day => day.dayMonth))];
        const uniqueYears = [...new Set(selectedWeek.week.map(day => day.dayYear))];
        console.log("Unique Months: ", uniqueMonths, " Unique Years: ", uniqueYears);

        if(uniqueYears.length > 1){
            monthTitle = isGregorian ? 
                            `${MONTHSGREGSHORT[uniqueMonths[0]]} ${uniqueYears[0]} - ${MONTHSGREGSHORT[uniqueMonths[1]]} ${uniqueYears[1]}`:
                            `${MONTHSETHSHORT[uniqueMonths[0]]} ${uniqueYears[0]} - ${MONTHSETHSHORT[uniqueMonths[1]]} ${uniqueYears[1]}`
            return monthTitle
        }
        else if(uniqueYears.length === 1 && uniqueMonths.length > 1){
            monthTitle = isGregorian ? `${MONTHSGREGSHORT[uniqueMonths[0]]} - ${MONTHSGREGSHORT[uniqueMonths[1]]}`:
                                       `${MONTHSETHSHORT[uniqueMonths[0]]} - ${MONTHSETHSHORT[uniqueMonths[1]]}`

            return `${monthTitle} ${uniqueYears[0]}`
        }else {
            monthTitle = isGregorian ? MONTHSGREG[monthIndex]: MONTHSETH[monthIndex]
            return `${monthTitle} ${yearIndex}` 
        } 
    }else if(pickerOption === 'day'){
        monthTitle = isGregorian ? MONTHSGREG[selectedDate.selectedMonth] : MONTHSETH[selectedDate.selectedMonth]
        return `${monthTitle} ${selectedDate.selectedDay}, ${selectedDate.selectedYear}`
    }
    else if(pickerOption === 'year'){
        return `${yearIndex}`
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