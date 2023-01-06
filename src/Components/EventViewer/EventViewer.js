import {Grid, useMediaQuery} from '@mui/material';
import { useContext } from 'react';
import CalanderContext from '../../Store/calander-store';
import DailyCalander from '../Calander/CalanderDaily/DailyCalander';
import MonthlyCalander from '../Calander/CalanderMonthly/MonthlyCalander';
import WeeklyCalander from '../Calander/CalanderWeekly/WeeklyCalander';
import YearlyCalander from '../Calander/CalanderYearly/YearlyCalander';



export default function EventViewer()
{
   let context = useContext(CalanderContext);
   let breakptreached =   useMediaQuery('(min-width:734px)')
    

   return(
     <Grid   
         display="flex" 
         flexDirection="row"
         flexGrow={1}
         overflow= { (context.pickerOption === "day" || context.pickerOption === "week" ) ? "auto" : "unset"  }
         height={ (context.pickerOption === "day" || context.pickerOption === "week" ) ? "89.3vh" : "auto"  }
         container item  
         
       
         xs={8}
         sm={!breakptreached ? 8.5 :8.8}
         md={9.2}
         lg={9.8}


         
        >
    

      { context.pickerOption === "day" && <DailyCalander /> }
      
      { context.pickerOption === "week" && <WeeklyCalander /> }
      
      { context.pickerOption === "month" && <MonthlyCalander /> }
      
      { context.pickerOption === "year" && <YearlyCalander /> } 
      
      
    


    </Grid>
   );
}


