import { FiberManualRecord } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Fragment,useContext , useState , useEffect } from "react";
import { getMonthDaysGreg , getMonthDaysEthiopic } from "../../../Util/CalanderFunction";
import CalanderContext from "../../../Store/calander-store";
import CalanderSideDay from '../../UI/Button/Calander-Side_Days';

export default function MonthlyTask(props) {

  let context = useContext(CalanderContext);
  
  const [monthDays, setMonthDays] = useState(getMonthDaysGreg(context.monthIndex, context.yearIndex)) 
  
  useEffect(()=>{
      setMonthDays(context.isGregorian? getMonthDaysGreg(context.monthIndex, context.yearIndex) :
       getMonthDaysEthiopic(context.monthIndex, context.yearIndex));
     }, [context.monthIndex, context.yearIndex, context.isGregorian])




  const dayClickHandler = (day) => {
      context.setSelectedDate({selectedDay: day.day, selectedMonth: day.dayMonth, 
                      selectedYear: day.dayYear, selectedDayIndex: day.dayIndex, selectedWeekDay: day.weekDay});
      context.setPickerOption("day");
  }

  return (
    <Fragment>
      {monthDays.map((row,weekidx) => {
        return (
          //"15.885%":"19%"
          <Stack
            key={weekidx}
            display="flex"
            height="fit-content"
            overflow="hidden"
            flexDirection="row"
            sx={{
                   minHeight: monthDays.length === 6 ? "15.885%" : "19%",
               
          }}
          >
            {row.map((day,dayidx) => {
              
              return (
                <Box
                  key={dayidx}
                  sx={{
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "0%",
                    borderColor: "hsla(0, 1%, 74%, 0.542)",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderTopWidth: weekidx !== 0  ? 1 : 0,
                    borderBottomWidth: 0,
                    borderRightWidth: dayidx === 6 ? 1 : 0,
                    height: { xs: "100%" },
                    width: { xs : "100%"},
                    overflow: "hidden",
                    fontFamily:'Montserrat',
                    fontWeight:'400',
                    fontSize:{ xs: "90%" },
                  }}
                >

                  <CalanderSideDay  dayClicked={dayClickHandler} 
                                                
                                                day={day} />

                 

                  
                  
                  {(dayidx % 2 > 0 && weekidx % 2 > 0 ) ? <> </> : 
                  
                  <Box  textOverflow="clip"
                 
                    sx={{pt:3, px:1,display:"flex" , flexDirection:"column",width:{xs:"100%"},height:"100%", overflow:"hidden"}}
                  >
                  <Button
                  startIcon={<FiberManualRecord sx={{ color:"#1a73e8", width:"0.8em" , height:"2em"}} />} 
                  variant="text"
                  
                  sx={{
                    color: "hsla(0, 2%, 11%, 0.819)",
                    textAlign: "center",
                    fontSize: "80%",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    textOverflow:"clip",
                    textTransform : "capitalize",
                   width:"100%" ,height:5,py:1.2  } }>
                            Lorem ipsum 
                  </Button> 

                  </Box>
}

                </Box>
              );
            })}
          </Stack>
        );
      })}
    </Fragment>
  );
}