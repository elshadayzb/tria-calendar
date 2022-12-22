import {  Grid } from '@mui/material';
import EventViewer from '../EventViewer/EventViewer';
import SideBar from '../SideBar/SideBar';




export default function MainView()
{
    return (
    <Grid container pt={1.6}  >
            <SideBar />
            <EventViewer />
       
    </Grid>
    );
} 