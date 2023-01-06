import { Grid, Stack} from '@mui/material';
import { Fragment } from 'react';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import MainView from './Components/MainView/MainView';
import {CalanderContextProvider} from './Store/calander-store';


function App() {
  return (

   
    
      <Fragment>
         
        <Grid 
        spacing={2}
        sx={{ //bgcolor:"blueviolet" , 

               height:"100vh" , 
               flexGrow:1,
                display: "flex" ,
                 flexDirection:"column" }}>
                <HeaderBar />
                <MainView />
        </Grid>
  
      </Fragment>
      


  );
}

export default App;
