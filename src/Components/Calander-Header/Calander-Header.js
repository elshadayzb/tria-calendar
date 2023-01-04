import { Fragment, useContext } from "react";
import {ChevronLeftOutlined, ChevronRightOutlined, } from "@mui/icons-material";
import { IconButton, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import CalanderContext from "../../Store/calander-store";
import { MONTHSETH, MONTHSETHSHORT, MONTHSGREG, MONTHSGREGDAYS, MONTHSGREGSHORT } from "../../Util/CalanderConstants";
import { getSelectedWeek, getGregMonthDaysCount, getEthMonthDaysCount, getGregDateWeekDay } from "../../Util/CalanderFunction";
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
        weekDay = isGregorian ?
                    getGregDateWeekDay(weekYear, selectedMonth, selectedDay) : 
                    calendarConverter.getETWeekDay(weekYear, selectedMonth + 1, selectedDay); 
                    //getGregDateWeekDay(weekYear, selectedMonth, 1) : 
                    //calendarConverter.getETMonthStartDay(weekYear, selectedMonth + 1);
                    
        setSelectedDate({selectedDay: selectedDay, selectedMonth: selectedMonth, selectedYear: weekYear, selectedDayIndex: selectedDay, 
                         selectedWeekDay: weekDay }) 
    }
    else if(pickerOption === 'month'){
        if(monthIndex === 0){    
           setMonthIndex(isGregorian ? 11 : 12);  // set the month to the previous year's last month (12th r 13th)
           setYearIndex(curYear => curYear - 1); // set the year to the previous year
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
        newSelectedDay = selectedDay - 7;
        if(newSelectedDay < 1){
            if(selectedMonth === 0){
                weekMonth = isGregorian ? 11 : 12;   
                weekYear = selectedYear - 1;  
                setYearIndex(weekYear)
            }else{
                weekMonth = selectedMonth - 1;
                weekYear = selectedYear;   
            }
            setMonthIndex(weekMonth);
        }
        else{
            weekMonth = selectedMonth;
            weekYear = selectedYear; 
        }

        monthDaysCount = getMonthDaysCount(weekMonth, weekYear)

        if(newSelectedDay < 1 ){
            newSelectedDay += monthDaysCount;
            // 13th Ethiopic month has 5 or 6 days
            // previous week from the 1st month can jump the whole 13th month and go the 12th month
            if(!isGregorian && newSelectedDay < 1 && weekMonth === 12){
                weekMonth -= 1;
                newSelectedDay = getMonthDaysCount(weekMonth, weekYear) + newSelectedDay;
            }              
        }
        console.log("Week Year: ", weekYear, " Week Month: ", weekMonth, " selected Day: ", newSelectedDay)
        weekDay = isGregorian ?
                    getGregDateWeekDay(weekYear, weekMonth, newSelectedDay) : 
                    calendarConverter.getETWeekDay(weekYear, weekMonth + 1, newSelectedDay); 

        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                        selectedDayIndex: newSelectedDay, selectedWeekDay: weekDay })
   }else if(pickerOption === 'day'){
        newSelectedDay = selectedDay - 1
        if(newSelectedDay < 1){
            if(selectedMonth === 0){
                weekMonth = isGregorian ? 11 : 12
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
        weekDay = isGregorian ? 
                        getGregDateWeekDay(weekYear, weekMonth, newSelectedDay) : 
                        calendarConverter.getETWeekDay(weekYear, weekMonth + 1, newSelectedDay);
        
        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                        selectedDayIndex: newSelectedDay, selectedWeekDay: weekDay })
   }

}
const nextMonthHandler = ()=>{
    
    if(pickerOption === 'year'){
        weekYear = yearIndex + 1
        setYearIndex(curYear => curYear + 1)
        weekDay = isGregorian ? 
                    getGregDateWeekDay(weekYear, selectedMonth, selectedDay) : 
                    calendarConverter.getETWeekDay(weekYear, selectedMonth + 1, selectedDay);
                    //getGregDateWeekDay(weekYear, selectedMonth, 1) : 
                    //calendarConverter.getETMonthStartDay(weekYear, selectedMonth + 1);
        
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
        newSelectedDay = selectedDay + 7; // increase the selected day by 7 to get the next week
        monthDaysCount = getMonthDaysCount(selectedMonth, selectedYear);
        if(newSelectedDay > monthDaysCount){
            if((isGregorian && selectedMonth === 11) || (!isGregorian && selectedMonth === 12)){
                // next week from the last month, December or Pagume, can go to the 1st month of next year
                weekMonth = 0;   
                weekYear = selectedYear + 1;
                setYearIndex(weekYear);  
            }else if(!isGregorian && (selectedMonth === 11) && 
                        (newSelectedDay > (monthDaysCount + getEthMonthDaysCount(12, selectedYear)))){
                // 13th Ethiopic month has 5 or 6 days
                // next week from the 11th month can jump the whole 13th month and go to the 1st month of next year
                weekMonth = 0;   
                weekYear = selectedYear + 1;
                setYearIndex(weekYear);
                monthDaysCount = monthDaysCount + getMonthDaysCount(12, selectedYear);
                
            }else{
                // next Week from the last days of any other month go to the next month
                weekMonth = selectedMonth + 1;
                weekYear = selectedYear;   
            }
            
            newSelectedDay -= monthDaysCount;             
            setMonthIndex(weekMonth); 
        }else{
            weekMonth = selectedMonth;
            weekYear = selectedYear; 
        }
        console.log("Week Year: ", weekYear, " Week Month: ", weekMonth, " selected Day: ", newSelectedDay)
        weekDay = isGregorian ?
                    getGregDateWeekDay(weekYear, weekMonth, newSelectedDay) : 
                    calendarConverter.getETWeekDay(weekYear, weekMonth + 1, newSelectedDay);

        setSelectedDate({selectedDay: newSelectedDay, selectedMonth: weekMonth, selectedYear: weekYear, 
                         selectedDayIndex: newSelectedDay, selectedWeekDay:  weekDay})
   }else if(pickerOption === "day"){
        newSelectedDay = selectedDay + 1
        monthDaysCount = getMonthDaysCount(selectedMonth, selectedYear)
        if(newSelectedDay > monthDaysCount){
            if((isGregorian && selectedMonth === 11) || (!isGregorian && selectedMonth === 12)){
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

        weekDay = isGregorian ? 
                        getGregDateWeekDay(weekYear, weekMonth, newSelectedDay) : 
                        calendarConverter.getETWeekDay(weekYear, weekMonth + 1, newSelectedDay);
        console.log("Week day: ", weekDay);
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
    setSelectedWeek(getSelectedWeek({selectedDay: curDay, selectedMonth: month, selectedYear: year}, isGregorian))   
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
            if(isGregorian){
                monthTitle = `${MONTHSGREGSHORT[uniqueMonths[0]]} ${uniqueYears[0]} - ${MONTHSGREGSHORT[uniqueMonths[1]]} ${uniqueYears[1]}`;
            }else if(!isGregorian && uniqueMonths.length > 2){
                //monthTitle = `${MONTHSETHSHORT[uniqueMonths[0]]} - ${MONTHSETHSHORT[uniqueMonths[1]]} ${uniqueYears[0]} - ${MONTHSETHSHORT[uniqueMonths[2]]} ${uniqueYears[1]}`;
                monthTitle = `${MONTHSETHSHORT[uniqueMonths[0]]} ${uniqueYears[0]} - ${MONTHSETHSHORT[uniqueMonths[2]]} ${uniqueYears[1]}`;
            }else{
                monthTitle = `${MONTHSETHSHORT[uniqueMonths[0]]} ${uniqueYears[0]} - ${MONTHSETHSHORT[uniqueMonths[1]]} ${uniqueYears[1]}`;
            }
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
                    minWidth: { xs: "17ch"}, //25ch
                    maxWidth: { xs: "17ch" }, //25ch
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