import {   Button, Grid, useMediaQuery } from '@mui/material';
import CalanderSide from '../Calander-Side/Calander-Side';
import CreateEventTask from '../CreateEventTaskButton-Side/CreateEventTask';


export default function  SideBar()
{

    let breakptreached = useMediaQuery('(min-width:734px)')
    return (
       

        <Grid container item 
         xs={4}
         sm={!breakptreached ? 3.5  : 3.2}
         md={2.8}
         lg={2.2}
         sx={
            {
                display:"flex",
                flexDirection:"row",
                alignContent:"flex-start",
                
                
            }
         }
        
        >
            
               <CreateEventTask />
               <CalanderSide />
              
        </Grid>
   
    );

}