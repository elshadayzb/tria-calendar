import React, { useContext } from "react";
import { Button } from "@mui/material";
import CalanderContext from "../../../Store/calander-store";
import { getGregMonthDaysCount, getEthMonthDaysCount, getShortMonthName} from "../../../Util/CalanderFunction";
import CalendarConverter from "../../../Util/CalendarConverter";


const btnStyles = {
    default : {color:"inherit" , bgcolor:""},
    defaultLight:{color:"hsl(240, 4%, 60%)" , bgcolor:""},
    active : {bgcolor : " hsl(214, 82%, 51%)" , color : "hsl(0, 0%, 96%)"},
    selected : {bgcolor : "hsl(216, 88%, 91%)" , color : "hsl(214, 82%, 51%)"},
    selectedLight: {bgcolor : "#e8eaed" , color : "inherit"},
    hoverDefault : { color: "inherit" ,bgcolor: "#e8eaed" },
    hoverActive : { color: "hsl(212, 100%, 50%)",bgcolor:  "hsl(215, 63%, 82%)" }
}


function DayStyler(isGregorian, month, year, selectedDate, day, isSide, pickerOption)
{
    const currentDate = new Date(); 
    const calendarConverter = new CalendarConverter();
    const etToday = calendarConverter.getETToday();
    
    const monthDaysCount = isGregorian ? getGregMonthDaysCount(month, year) : getEthMonthDaysCount(month, year);
        
    if(isGregorian && (currentDate.getDate() === day.day) && 
            (currentDate.getMonth() === day.dayMonth) && 
                (currentDate.getFullYear() === day.dayYear)){
                    return btnStyles.active;

            }
        else if(!isGregorian && (etToday.day === day.day) && 
                ((etToday.month - 1) === day.dayMonth) && 
                     (etToday.year === day.dayYear)){
                        return btnStyles.active             
        }
        
        else if(day.dayMonth === selectedDate.selectedMonth 
                && day.dayYear === selectedDate.selectedYear && day.day === selectedDate.selectedDay
                && (isSide || pickerOption === "year"  ) && (day.dayIndex > 0 && day.dayIndex <= monthDaysCount)
                ){
                return btnStyles.selected

        }else if(day.dayMonth === selectedDate.selectedMonth 
                && day.dayYear === selectedDate.selectedYear && day.day === selectedDate.selectedDay
                && (isSide || pickerOption === "year"  ) && (day.dayIndex < 1 || day.dayIndex > monthDaysCount)){
            return btnStyles.selectedLight; 
                
        }else if((isSide || pickerOption === "year" || pickerOption === "month") && (day.dayIndex < 1 || day.dayIndex > monthDaysCount)){

            return btnStyles.defaultLight;
        }
        else
        {
            return btnStyles.default;
        }
}


export default function CalanderSideDay(props)
{

    const context = useContext(CalanderContext);

    const dayDoubleClickHandler = () => {
        context.setPickerOption("day")
  }

    const day =  props.day.day !== undefined ? 
                                    props.day  : 
                                    {day: props.day.selectedDay, dayMonth : props.day.selectedMonth, dayYear: props.day.selectedYear};

    const dayTitle = (day.day === 1 && !props.isSide && (context.pickerOption === 'month')) ? 
                        `${getShortMonthName(context.isGregorian, day.dayMonth)} ${day.day}` : `${day.day}`;
    
    let month, year;
    if(props.isSide){
        month = context.monthSideIndex;
        year = context.yearSideIndex;
    }else{
        if(context.pickerOption === 'year'){
            month = props.monthindex;
        }else{
            month = context.monthIndex;
        }
        year = context.yearIndex;
    }
        

    return(
        
        <Button  onClick = {props.dayClicked !== undefined ? props.dayClicked.bind(this, props.day) : null}
           onDoubleClick = { props.dayClicked !== undefined ? dayDoubleClickHandler : null }
            disableRipple
            sx={{    
                fontSize: 'inherit',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                textTransform: "none",
                ...DayStyler(context.isGregorian, month, year, context.selectedDate,
                    day,props.isSide,context.pickerOption),
                px: props.px !== undefined ? (day.day >= 10 ) ? 1 : 1.5 : 0, // used to make the weekcalander and daycalander days rounder(keep btn styling)
                py: 0,
                borderRadius: "50%", minHeight: { xs: 24 },
                minWidth: { xs: 24 }, margin: 0,
                '&:hover': (props.day.day !== context.selectedDate.selectedDay) ? btnStyles.hoverDefault : btnStyles.hoverActive 
                
            }} >
                {dayTitle}
                {/* {props.day.day !== undefined ? props.day.day  : props.day.selectedDay } */}
            </Button>
        
    );
}

