import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import {  Grid, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import CalanderContext from '../../Store/calander-store';
import { MONTHSETH, MONTHSGREG, WEEKDAYSETH, WEEKDAYSGREG } from '../../Util/CalanderConstants';
import {getMonthDaysEthiopic, getMonthDaysGreg} from '../../Util/CalanderFunction';
import CalanderSideDay from '../UI/Button/Calander-Side_Days';

 

export default function CalanderSide() {

    let breakptreached = useMediaQuery('(min-width:1164px)')
    let context = useContext(CalanderContext);

    const [monthDays, setMonthDays] = useState(getMonthDaysGreg(context.monthSideIndex, context.yearSideIndex))
    
    let weekdaynames = (context.isGregorian) ? WEEKDAYSGREG : WEEKDAYSETH;

    let monthName = context.isGregorian ? MONTHSGREG[context.monthSideIndex]: MONTHSETH[context.monthSideIndex > 7 ? (context.monthSideIndex - 8) : 
        (context.monthSideIndex + 4)];
    let year = context.isGregorian ? context.yearSideIndex : (context.monthSideIndex > 7 ? (context.yearSideIndex - 7) : (context.yearSideIndex - 8));

    
    useEffect(()=>{
        console.log(`running use effect 1 ${context.monthSideIndex} `)      
      setMonthDays(context.isGregorian? getMonthDaysGreg(context.monthSideIndex, context.yearSideIndex): getMonthDaysEthiopic(context.monthSideIndex, context.yearSideIndex))   
    }, [context.monthSideIndex, context.yearSideIndex, context.isGregorian])

    useEffect(()=>{
        console.log(`running use effect 2`)
        context.setMonthIndex(context.selectedDate.selectedMonth)
        context.setYearIndex(context.selectedDate.selectedYear)    
        context.setMonthSideIndex(context.selectedDate.selectedMonth)
        context.setYearSideIndex(context.selectedDate.selectedYear) 
    }, [context.selectedDate])



    const dayClickHandler = (day) => {
       
        context.setSelectedDate({selectedDay: day.day, selectedMonth: day.dayMonth, selectedYear: day.dayYear, 
                        selectedDayIndex: day.dayIndex, selectedWeekDay: day.weekDay})
        if(context.monthIndex !== day.dayMonth || context.yearIndex !== day.dayYear){
            context.setMonthIndex(day.dayMonth)
            context.setYearIndex(day.dayYear)  
        }    
        
    }

    const prevMonthHandler = ()=>{
        if(context.monthSideIndex === 0){
            context.setMonthSideIndex(11)
            context.setYearSideIndex(curSideYear => curSideYear - 1)
        }else{
            context.setMonthSideIndex(curSideMonth => curSideMonth - 1)  
        }
    }
    const nextMonthHandler = ()=>{
        if(context.monthSideIndex === 11){
            context.setMonthSideIndex(0)
            context.setYearSideIndex(curSideYear => curSideYear + 1)
        }else{
            context.setMonthSideIndex(curSideMonth => curSideMonth + 1)
        }         
    }




    return (
      <Grid container item xs={12} sx={{}}>
        {console.log(` A render has occured`)}
        <Grid
          container
          display="flex"
          direction="column"
          sx={{
            pl: { xs: 2 },
            pr: { xs: 1.5 },
            pb: { xs: 1 },
            mr: 3,
            fontSize: {xs : "60%" , sm : "60%" , md : "60%" , lg : "20%"  },
            // minWidth: "248px",
            // maxWidth: "248px",
          }}
          overflow="hidden"
        >
          <Grid
            container
            item
            display="flex"
            px="0%"
            py="2%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            mb={1}
            fontSize="inherit"
          >
            <Typography
              sx={{
                bgcolor: "cornflowerblue",
                pl: { xs: 0.8 },
                //minWidth: { xs: 30, sm: 45, md: "12%", lg: 45, xl: 45 },
                color: "hsla(0, 2%, 11%, 0.819)",
                textAlign: "center",
                height:"fit-content",
                fontSize: "2em",
                fontFamily: "Montserrat",
                fontWeight: "500",
              }}
            >
              {` ${monthName}  ${year}`}
            </Typography>

            <Stack
              sx={{
                width: "25%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                bgcolor: "palegoldenrod",
                fontSize: "inherit"
              }}
            >
              <IconButton
                sx={{ height: "100%", width: "10%"  , fontSize:"inherit"}}
                onClick={prevMonthHandler}
              >
                <ChevronLeftOutlined
                  sx={{
                    color: "hsla(0, 0%, 40%, 0.849)",
                    height: "1.3em",
                    width: "1.3em",
                  }}
                />
              </IconButton>
              <IconButton
                sx={{ height: "100%", width: "10%" , fontSize:"inherit" }}
                onClick={nextMonthHandler}
              >
                <ChevronRightOutlined
                  sx={{
                    color: "hsla(0, 0%, 40%, 0.849)",
                    height: "1.3em",
                    width: "1.3em",
                  }}
                />
              </IconButton>
            </Stack>
          </Grid>

          <Grid
            container
            item
            color="hsla(0, 2%, 11%, 0.819)"
            display="flex"
            fontFamily="Montserrat"
            fontWeight="600"
            fontSize={{ xs: 10 }}
            flexDirection="row"
            justifyContent="space-between"
          >
            {weekdaynames.map((day) => {
              return (
                <Typography
                  key={Math.random()}
                  sx={{
                    minWidth: { xs: 24 },
                    textAlign: "center",
                    fontSize: "inherit",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontWeight: "inherit",
                  }}
                >
                  {day[0]}
                </Typography>
              );
            })}
          </Grid>

          <Grid
            display="flex"
            color="hsla(0, 2%, 11%, 0.819)"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
            fontFamily="Montserrat"
            fontWeight="600"
            fontSize={{ xs: 10 }}
            container
          >
            {monthDays.map((week, weekidx) => {
              return (
                <Grid
                  key={weekidx}
                  item
                  px="0%"
                  py="1%"
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                >
                  {week.map((day, dayidx) => {
                    // console.log(`the counter ${counter}`);
                    return (
                      <CalanderSideDay
                        dayClicked={dayClickHandler}
                        key={dayidx}
                        day={day}
                        isSide={true}
                      />
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
}