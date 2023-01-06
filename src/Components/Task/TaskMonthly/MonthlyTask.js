import { FiberManualRecord } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Fragment,useContext , useState , useEffect } from "react";
import { getMonthDaysGreg , getMonthDaysEthiopic } from "../../../Util/CalanderFunction";
import CalanderContext from "../../../Store/calander-store";
import CalanderSideDay from '../../UI/Button/Calander-Side_Days';

export default function MonthlyTask(props) {

  const context = useContext(CalanderContext);
  
  const [monthDays, setMonthDays] = useState(context.isGregorian ? 
                                                getMonthDaysGreg(context.monthIndex, context.yearIndex) :
                                                getMonthDaysEthiopic(context.monthIndex, context.yearIndex));
  
  useEffect(()=>{

      setMonthDays(context.isGregorian ? getMonthDaysGreg(context.monthIndex, context.yearIndex) :
                                        getMonthDaysEthiopic(context.monthIndex, context.yearIndex));

     }, [context.monthIndex, context.yearIndex, context.isGregorian])




  const dayClickHandler = (day) => {
      context.setSelectedDate({selectedDay: day.day, selectedMonth: day.dayMonth, selectedYear: day.dayYear, 
                               selectedDayIndex: day.dayIndex, selectedWeekDay: day.weekDay});
      context.setPickerOption("day");
  }

  return (
    <Stack  sx={{
      width:"100%",
      height:"100%",
     
      
    }}  >
      {monthDays.map((row,weekidx) => {
        return (
          //"15.885%":"19%"
          <Stack
            key={weekidx}
            display="flex"
            overflow="hidden"
            flexDirection="row"
            
            sx={{
                  // minHeight: "15.885%" //monthDays.length === 6 ? "15.885%" : "19%",
                 
                  m:0,
                  width:"100%",
                  height:"100%"

                 
               
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
                  }}>

                  <CalanderSideDay  dayClicked={dayClickHandler}  day={day} />

                  {(dayidx % 2 === 0 && weekidx % 2 > 0 ) ? <> </> : 
                  
                  <Box  textOverflow="clip"
                        sx={{pt:3, px:1,display:"flex" , flexDirection:"column",width:{xs:"100%"},height:"100%", overflow:"hidden"}}>
                    <Button
                      startIcon={<FiberManualRecord sx={{ color:"#1a73e8", width:"0.8em" , height:"2em"}} />} 
                      variant="text"
                      sx={{
                        color: "hsla(0, 2%, 11%, 0.819)",
                        textAlign: "center",
                        fontSize: "70%",
                        fontFamily: "Montserrat",
                        fontWeight: "600",
                        textOverflow:"clip",
                        textTransform : "capitalize",
                        width:"100%", height:5, py:1.2  }}>

                          {context.isGregorian ? '10 : 15 PM Daily Metting' : '04 ፡ 15 ጠዋት ደይሊ ሚቲንግ'}
                    </Button> 

                      </Box>
                  }

                </Box>
              );
            })}
          </Stack>
        );
      })}
    </Stack>
  );
}
