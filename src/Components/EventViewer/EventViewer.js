import {Grid} from '@mui/material';
import { useContext } from 'react';
import CalanderContext from '../../Store/calander-store';
import DailyCalander from '../Calander/CalanderDaily/DailyCalander';
import MonthlyCalander from '../Calander/CalanderMonthly/MonthlyCalander';
import WeeklyCalander from '../Calander/CalanderWeekly/WeeklyCalander';
import YearlyCalander from '../Calander/CalanderYearly/YearlyCalander';



export default function EventViewer()
{
   let context = useContext(CalanderContext);


   return(
     <Grid  xs={9.8} display="flex" 
            flexDirection={(context.pickerOption === "month") ? "column" : "row"}  
            container item overflow="auto" sx={{  height:"89.3vh"}}>
    

     {/* { context.pickerOption === "day" && <DailyCalander /> } */}
      
      { context.pickerOption === "week" && <WeeklyCalander /> }
      
      { context.pickerOption === "month" && <MonthlyCalander /> }
      
      {/* { context.pickerOption === "year" && <YearlyCalander /> }  */}
      
      
    


    </Grid>
   );
}


