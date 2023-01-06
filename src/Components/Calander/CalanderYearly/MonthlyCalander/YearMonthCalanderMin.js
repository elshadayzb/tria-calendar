import {  Grid, Typography, useMediaQuery } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import CalanderContext from '../../../../Store/calander-store';
import { MONTHSETH, MONTHSGREG, WEEKDAYSETH, WEEKDAYSGREG } from '../../../../Util/CalanderConstants';
import {getMonthDaysEthiopic, getMonthDaysGreg} from '../../../../Util/CalanderFunction';
import CalanderSideDay from '../../../UI/Button/Calander-Side_Days';

 

export default function YearMonthCalander(props) {


    const context = useContext(CalanderContext);

    const monthDays = context.isGregorian ? getMonthDaysGreg(props.monthindex, context.yearIndex) :
                                            getMonthDaysEthiopic(props.monthindex, context.yearIndex) ;
    
    const weekdaynames = (context.isGregorian) ? WEEKDAYSGREG : WEEKDAYSETH;

    const monthName = context.isGregorian ? MONTHSGREG[props.monthindex]: MONTHSETH[props.monthindex];
    
    

    const dayClickHandler = (day) => {
       
        context.setSelectedDate({selectedDay: day.day, selectedMonth: day.dayMonth, selectedYear: day.dayYear, 
                                 selectedDayIndex: day.dayIndex, selectedWeekDay: day.weekDay})
    }

    return (

        <Grid container item >

            <Grid container display='flex' direction='column'
                sx={
                    {
                        pl: { xs: 2 },
                        pr: { xs: 1.5 },
                        pb: { xs: 1 },
                        /* bgcolor: { xs: 'hsl(48, 61%, 47%)', sm: 'rgb(95, 195, 168)', md: 'rgb(204, 144, 75)', lg: 'rgb(140, 79, 164)', xl: 'hsl(48, 61%, 47%)' } */
                    }
                } overflow='hidden' >

                <Grid container item display='flex' px="0%" py="2%" justifyContent='space-between' flexDirection='row' mb={1}
                    >

                    <Typography sx={{ pl:{xs:0.8}, minWidth: { xs: 30, sm: 45, md: "12%", lg: 45, xl: 45 },color:"hsla(0, 2%, 11%, 0.819)", textAlign: 'center', fontSize: '90%', fontFamily: 'Montserrat', fontWeight: '500' }}>
                        
                        { ` ${monthName} ` }                       
                        </Typography>

                </Grid>

                <Grid container item color='#70757a' display='flex' fontFamily='Montserrat' fontWeight='400' fontSize={{ xs: 12 }} flexDirection='row' justifyContent="space-between" >
                    {
                        weekdaynames.map(day => {
                            return (
                                <Typography key={Math.random()} sx={{ minWidth: { xs: 24 }, textAlign: 'center', fontSize: 'inherit', color:'inherit' , fontFamily: 'inherit', fontWeight: 'inherit' }}>{day[0]}</Typography>
                            );
                        })
                    }

                </Grid>

                <Grid display='flex'   flexDirection='row' flexWrap='wrap' 
                   justifyContent='space-around'  container >
                   
                    {

                        
                        monthDays.map((week,weekidx) => {
                           
                            return (
                                <Grid key={weekidx}  item px="0%" py="1%" 
                                display="flex" width="100%" justifyContent="space-between"
                                color='hsla(0, 2%, 11%, 0.819)' fontFamily='Montserrat' fontWeight='500' fontSize={{ xs: 12 }}
                                >
                                    {
                                        week.map((day,dayidx) => {
                                            
                                           // console.log(`the counter ${counter}`);
                                            return (
                                                <CalanderSideDay 
                                                dayClicked={dayClickHandler} 
                                                key={dayidx}
                                                day={day}
                                                monthindex = {props.monthindex}
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