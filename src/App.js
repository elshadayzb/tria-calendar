import { Stack} from '@mui/material';
import { Fragment } from 'react';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import MainView from './Components/MainView/MainView';
import {CalanderContextProvider} from './Store/calander-store';


function App() {
  return (

   
    
      <Fragment>
         <Stack>
            <HeaderBar />
            <MainView />
        </Stack>
  
      </Fragment>
      


  );
}

export default App;
