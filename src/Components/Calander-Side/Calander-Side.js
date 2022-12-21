import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import {  Grid, IconButton, Stack, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import CalanderContext from '../../Store/calander-store';
import { MONTHSETH, MONTHSGREG, WEEKDAYSETH, WEEKDAYSGREG } from '../../Util/CalanderConstants';
import {getMonthDaysEthiopic, getMonthDaysGreg} from '../../Util/CalanderFunction';
import CalanderSideDay from '../UI/Button/Calander-Side_Days';

 

export default function CalanderSide() {


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

        <Grid container item xs={12}  >
                { console.log(` A render has occured`)}
            <Grid height='100%' container display='flex' direction='column'
                sx={
                    {
                        pl: { xs: 2 },
                        pr: { xs: 1.5 },
                        pb: { xs: 1 },
                        minWidth: "248px",
                        maxWidth: "248px",
                        /* bgcolor: { xs: 'hsl(48, 61%, 47%)', sm: 'rgb(95, 195, 168)', md: 'rgb(204, 144, 75)', lg: 'rgb(140, 79, 164)', xl: 'hsl(48, 61%, 47%)' } */
                    }
                } overflow='hidden' >

                <Grid container item display='flex' px="0%" py="2%" justifyContent='space-between' flexDirection='row' mb={1}
                    >

                    <Typography sx={{ pl:{xs:0.8}, minWidth: { xs: 30, sm: 45, md: "12%", lg: 45, xl: 45 },color:"hsla(0, 2%, 11%, 0.819)", textAlign: 'center', fontSize: '90%', fontFamily: 'Montserrat', fontWeight: '500' }}>
                        
                        { ` ${monthName}  ${year}` }                       
                        </Typography>



                    <Stack direction='row' spacing={2} sx={{ p: 0, mx: 0 }} >
                        <IconButton sx={{ height: 24, width: 24 }} onClick={prevMonthHandler} > <ChevronLeftOutlined sx={{ fontSize: "100%" }} /> </IconButton>
                        <IconButton sx={{ height: 24, width: 24 }} onClick={nextMonthHandler}> <ChevronRightOutlined sx={{ fontSize: "100%" }} /> </IconButton>
                    </Stack>


                </Grid>

                <Grid container item color='hsla(0, 2%, 11%, 0.819)' display='flex' fontFamily='Montserrat' fontWeight='600' fontSize={{ xs: 10 }} flexDirection='row' justifyContent='space-between' >

                    {
                        
                        weekdaynames.map(day => {
                            return (
                                <Typography key={Math.random()} sx={{ minWidth: { xs: 24 }, textAlign: 'center', fontSize: 'inherit', color:'inherit' , fontFamily: 'inherit', fontWeight: 'inherit' }}>{day}</Typography>
                            );
                        })
                    }

                </Grid>

                <Grid display='flex'  color='hsla(0, 2%, 11%, 0.819)' flexDirection='row' flexWrap='wrap' justifyContent='space-around' fontFamily='Montserrat' fontWeight='600' fontSize={{ xs: 10 }} container >
                   
                    {

                        
                        monthDays.map((week,weekidx) => {
                           
                            return (
                                <Grid key={weekidx} item px="0%" py="1%" display="flex" width="100%" justifyContent="space-between"  >
                                    {
                                        week.map((day,dayidx) => {
                                            
                                           // console.log(`the counter ${counter}`);
                                            return (
                                                <CalanderSideDay 
                                                dayClicked={dayClickHandler} 
                                                key={dayidx}
                                                day={day}
                                                
                                                />
                                            );

                                        })
                                    }
                                </Grid>
                            );
                        })

                    }
                </Grid>



            </Grid>



        </Grid>



    );
}