import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import {  Grid, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import CalanderContext from '../../Store/calander-store';
import { MONTHSETH, MONTHSGREG, WEEKDAYSETH, WEEKDAYSGREG } from '../../Util/CalanderConstants';
import {getMonthDaysEthiopic, getMonthDaysGreg} from '../../Util/CalanderFunction';
import CalanderSideDay from '../UI/Button/Calander-Side_Days';

 

export default function CalanderSide() {

    let breakptreached = useMediaQuery('(min-width:671px)');
    let breakptreachedxs = useMediaQuery('(min-width:560px)');
    
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
      <Grid container item xs={12} sx={{
        mt: "15%"
      }}>
      
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="stretch"
          sx={{
            pl: {xs : !breakptreachedxs ? "2em" : "3em" , sm : "3.5%" , md : "5%" , lg : "4%" },
            pr: {xs : !breakptreachedxs ? "2em" : "3em" , sm : "3.5%" , md : "5%" , lg : "4%" },
            pb: { xs: 1 },
            mr: {xs : !breakptreachedxs ? "5%" : "2%" , sm : "1.5%" , md : "2%" , lg : "2%" },
            fontSize: { xs : !breakptreachedxs ? "0.003%" : "5%" , sm: "45%" ,  md: "50%"  ,lg : "60%" },
            // minWidth: "248px",
            // maxWidth: "248px",
          }}
          overflow="hidden"
        >
          <Grid
            container
            item
            display="flex"
            pl="4%"
            py="0.3%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            
            mb={1}
            fontSize="inherit"
          //  bgcolor="plum"
          >
            <Typography
              sx={{
              //  bgcolor: "cornflowerblue",
                pl: { xs: 0 },
                color: "hsla(0, 2%, 11%, 0.819)",
                textAlign: "center",
                height:"fit-content",
                fontSize: {xs : !breakptreachedxs ? "13333em" : "14em" , sm : "1.7em" , md : "1.9em" , lg : "1.8em" },
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
                justifyContent: "space-around",
                //bgcolor: "palegoldenrod",
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
                    height: {xs : !breakptreachedxs ? "0.3em" : "0.4em" , sm : "0.7em" , md : "0.8em" , lg : "1em" },
                    width: {xs : !breakptreachedxs ? "0.3em" : "0.4em" , sm : "0.8em" , md : "0.8em" , lg : "1em" },
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
                    height: {xs : !breakptreachedxs ? "0.3em" : "0.4em" , sm : "0.7em" , md : "0.8em" , lg : "1em" },
                    width: {xs : !breakptreachedxs ? "0.3em" : "0.4em" , sm : "0.8em" , md : "0.8em" , lg : "1em" },
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
            flexWrap="wrap"
            fontSize="inherit"
            flexDirection="row"
            justifyContent="space-around"
           
          //  bgcolor="blue"
          >
            {weekdaynames.map((day) => {
              return (
                <Typography
                  key={Math.random()}
                  sx={{
                    //bgcolor:"palegoldenrod",
                    minWidth:{xs:!breakptreached ? 10 : 20 , sm : !breakptreached ? 22 : 24 },
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
            justifyContent="space-between"
            fontFamily="Montserrat"
            fontWeight="600"
            fontSize="inherit"
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
                  justifyContent="space-around"
                  fontSize="inherit"
                >
                  {week.map((day, dayidx) => {
                    // console.log(`the counter ${counter}`);
                    return (
                      <CalanderSideDay
                        dayClicked={dayClickHandler}
                        key={dayidx}
                        day={day}
                        isSide={true}
                        minsize={{xs:!breakptreached ? 10 : 20 , sm : !breakptreached ? 22 : 24 }}

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