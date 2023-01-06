import {  Grid } from '@mui/material';
import EventViewer from '../EventViewer/EventViewer';
import SideBar from '../SideBar/SideBar';




export default function MainView()
{
    return (
    <Grid container  pt={2} 
        sx={
            {
               // bgcolor:"gainsboro",
                flexGrow:1
            }

        }
    >
            
            <SideBar />
            <EventViewer />
       
    </Grid>
    );
} 