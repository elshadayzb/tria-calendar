import { Button } from "@mui/material";
import { useContext } from "react";
import CalanderContext from "../../../Store/calander-store";
import { getGregMonthDaysCount} from "../../../Util/CalanderFunction"


const btnStyles = {
    default : {color:"inherit" , bgcolor:""},
    defaultLight:{color:"hsl(210, 4%, 46%)" , bgcolor:""},
    active : {bgcolor : " hsl(214, 82%, 51%)" , color : "hsl(0, 0%, 96%)"},
    selected : {bgcolor : "hsl(216, 88%, 91%)" , color : "hsl(214, 82%, 51%)"},
    hoverDefault : { color: "inherit" ,bgcolor: "#e8eaed" },
    hoverActive : { color: "hsl(212, 100%, 50%)",bgcolor:  "hsl(215, 63%, 82%)" }
}


function DayStyler(isGregorian,monthIndex,yearIndex,selectedDate,day,isSide,pickerOption)
{
    const currentDate = new Date();
    const etMonth = monthIndex > 7 ? (monthIndex - 8) : (monthIndex + 4)
    const etYear = monthIndex > 7 ? (yearIndex - 7) : (yearIndex - 8)
    let monthDaysCount;
    if(day.dayMonth === 0){
      monthDaysCount = getGregMonthDaysCount(11, day.dayYear - 1)
    }else{
      monthDaysCount = getGregMonthDaysCount(day.dayMonth - 1, day.dayYear)
    }

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
                && day.dayYear === selectedDate.selectedYear && day.day === selectedDate.selectedDay
                && (isSide || pickerOption === "year"  )&& (day.dayIndex > 0 && day.dayIndex <= monthDaysCount)
                ){
                return btnStyles.selected

        }else if((isSide || pickerOption === "year"  ) && (day.dayIndex <= 0 || day.dayIndex > monthDaysCount)){


            console.log(` Appling btnlight style`);
            return btnStyles.defaultLight; 
                
             }
        else
        {
            console.log(` Appling btndefault  style`);
            return btnStyles.default;
        }
}


export default function CalanderSideDay(props)
{





    
    
    const context = useContext(CalanderContext);
   // conts style = DayStyler({context});

   const dayDoubleClickHandler = () => {
    context.setPickerOption("day")
  }

    const day =props.day.day !== undefined ? props.day  : 
    {day:props.day.selectedDay, dayMonth : props.day.selectedMonth , dayYear: props.day.selectedYear };

    return(
        
        <Button  onClick={  props.dayClicked !== undefined ? props.dayClicked.bind(this,props.day) : null}
           onDoubleClick = { props.dayClicked !== undefined ? dayDoubleClickHandler : null }
            disableRipple
            sx={{    
                fontSize: 'inherit',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                ...DayStyler(context.isGregorian,context.monthIndex,context.yearIndex,context.selectedDate,
                    day,props.isSide,context.pickerOption),
                px: props.px !== undefined ? (day.day >= 10 ) ? 1 : 1.5 : 0, // used to make the weekcalander and daycalander days rounder(keep btn styling)
                py: 0,
                borderRadius: "50%", minHeight: { xs: 24 },
                minWidth: { xs: 24 }, margin: 0,
                '&:hover': (props.day.day !== context.selectedDate.selectedDay) ? btnStyles.hoverDefault : btnStyles.hoverActive 
                
            }} >
                {props.day.day !== undefined ? props.day.day  : props.day.selectedDay }
            </Button>
        
    );
}

