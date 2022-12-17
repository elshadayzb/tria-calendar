import {   Button, Grid } from '@mui/material';
import CalanderSide from '../Calander-Side/Calander-Side';


export default function  SideBar()
{

    return (
       

        <Grid  xs={2.8} item> 
            <Button variant='outlined' sx={{ m:{xs:2},  borderColor: "hsl(0, 0%, 52%)",
              borderStyle:'solid',
              borderBlockWidth:1,color:"inherit" , py:0.8, '&:hover':{borderColor:"hsl(0, 0%, 52%)",
              borderStyle:'solid',
              borderBlockWidth:1,color:"inherit"} , '&:active':{bgcolor:'hsla(228, 12%, 48%, 0.968)'} }} >Login</Button>
               <CalanderSide />

        </Grid>
   
    );

}