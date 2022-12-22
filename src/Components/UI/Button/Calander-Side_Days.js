import { Button } from "@mui/material";
import { useContext } from "react";
import CalanderContext from "../../../Store/calander-store";

let btnStyles = {
    default : {color:"inherit" , bgcolor:""},
    active : {bgcolor : " hsl(214, 82%, 51%)" , color : "hsl(0, 0%, 96%)"},
    selected : {bgcolor : "hsl(216, 88%, 91%)" , color : "hsl(214, 82%, 51%)"},
    hoverDefault : { color: "inherit" ,bgcolor: "#e8eaed" },
    hoverActive : { color: "hsl(212, 100%, 50%)",bgcolor:  "hsl(215, 63%, 82%)" }
}

function DayStyler(isGregorian,monthIndex,yearIndex,selectedDate,day)
{
    const currentDate = new Date();
    const etMonth = monthIndex > 7 ? (monthIndex - 8) : (monthIndex + 4)
    const etYear = monthIndex > 7 ? (yearIndex - 7) : (yearIndex - 8)
    
    if(isGregorian && (currentDate.getDate() === day.day) && 
            (currentDate.getMonth() === day.dayMonth) && 
                (currentDate.getFullYear() === day.dayYear)){
                    return btnStyles.active

            }
        else if(!isGregorian && (currentDate.getDate() === day.day) && 
                (etMonth === day.dayMonth) && 
                     (etYear === day.dayYear)){
                        return btnStyles.active
        }
        else if(day.dayMonth === selectedDate.selectedMonth 
                && day.dayYear === selectedDate.selectedYear && day.day === selectedDate.selectedDay){
                return btnStyles.selected

        }else{
            return btnStyles.default;
             }      
}


export default function CalanderSideDay(props)
{
    
    const context = useContext(CalanderContext);
   // conts style = DayStyler({context});

    return(
        
        <Button key={props.Ukey} onClick={  props.dayClicked !== undefined ? props.dayClicked.bind(this,props.day) : ""}
            disableRipple={false}    
            sx={{    
                fontSize: 'inherit',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                ...DayStyler(context.isGregorian,context.monthIndex,context.yearIndex,context.selectedDate,props.day),
                px: props.px !== undefined ? props.px : 0, // used to make the weekcalander and daycalander days rounder(keep btn styling)
                py: 0,
                borderRadius: "50%", minHeight: { xs: 24 },
                minWidth: { xs: 24 }, margin: 0,
                '&:hover': (props.day.day !== context.selectedDate.selectedDay) ? btnStyles.hoverDefault : btnStyles.hoverActive 
                
            }} >
                {props.day.day !== undefined ? props.day.day  : props.day.selectedDay }
            </Button>
        
    );
}

