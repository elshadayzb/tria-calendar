import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';


/// Imported Fonts 
 //Font style @Monteserrat
import "@fontsource/montserrat"
import "@fontsource/montserrat/100.css"
import "@fontsource/montserrat/200.css"
import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"

 //Font style @Roboto 
import "@fontsource/roboto/100.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"

 //Font style @Quicksand
 import "@fontsource/quicksand"
 import "@fontsource/quicksand/300.css"
 import "@fontsource/quicksand/400.css"
 import "@fontsource/quicksand/500.css"
 import "@fontsource/quicksand/600.css"
 import "@fontsource/quicksand/700.css"
import { CalanderContextProvider } from './Store/calander-provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalanderContextProvider>
      <App />
    </CalanderContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
