import {   Button, Grid } from '@mui/material';
import CalanderSide from '../Calander-Side/Calander-Side';
import CreateEventTask from '../CreateEventTaskButton-Side/CreateEventTask';


export default function  SideBar()
{

    return (
       

        <Grid  xs={2.2}   item>
            
               <CreateEventTask />
               <CalanderSide />
              
        </Grid>
   
    );

}