import { createContext, useReducer } from "react";

//*// functions for reducers and others 

function viewChangeReducer(state,action)
{
    console.log(` an action change was called to ${action}`);
    switch(action)
    {
        
        case "Day":
            return {viewType: "Day"} 
        case "Week":
            return {viewType: "Week"}
        case "Month":
            return {viewType: "Month"}
        case "Year":
            return {viewType: "Year"}
        default :
            return {viewType: "Month"}
    }

}








const CalanderContext =  createContext({
    viewSelected : {},
    changeView : () => {},
    getToday : () => {},
    getNext : () => {},
    getNextMonth: () => {},
    getNextWeek : () => {},
    
})


export function CalanderContextProvider(props)
{

    let [viewSelected,dispatchViewChange] = useReducer(viewChangeReducer,{viewType : "Month"})



    const changeViewSelected = (viewType) => 
    {
        console.log(`callaed to change view ${viewType}`);
        dispatchViewChange(viewType);
    }




   



    return (
        <CalanderContext.Provider
         value={{
           viewSelected : viewSelected,
           changeView : changeViewSelected,

         }}
        >{
                props.children
            }</CalanderContext.Provider>
    );
}  


export default CalanderContext;