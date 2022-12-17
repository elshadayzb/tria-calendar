import { Button } from "@mui/material";
import { Fragment, useState } from "react";

let btnStyles = {
    active : {bgcolor : "hsl(216, 88%, 91%)" , color : "hsl(0, 0%, 96%)"},
    selected : {bgcolor : "hsl(216, 88%, 91%)" , color : "hsl(0, 0%, 96%)"},
    hoverDefault : { color: "inherit" ,bgcolor: "#e8eaed" },
    hoverActive : { color: "hsl(0, 0%, 96%)",bgcolor:  "#1a73e8" }

}



function Styler(props)
{
    let today = new Date(Date.now());
    
    
    if(props.content === today.getDate())
    {
        return {bgcolor : "hsl(216, 88%, 91%)" , color : "hsl(0, 0%, 96%)"}
    }
    else if(props.content !== props.selectedDay)
    {
        return {bgcolor : "hsl(216, 87%, 91%)" , color : "hsl(214, 82%, 51%)"}
    }
   

}


export default function CalanderSideDay(props)
{
    let [clicked , setClicked] = useState(null);
    let [active , setActive] = useState(false);
    let [inactiveMonth,setInActiveMonth] = useState(false); 

    let setState = (event) => {

        setActive((prevState) => {
            return  (prevState) ? true : false;
        })

        props.setSelectedDay((prevState) => {return props.content})

    }


    

    return(
        
        <Button key={props.Ukey} onClick={setState}
            sx={{
                fontSize: 'inherit',
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                color: (props.content === props.selectedDay) ?  "hsl(0, 0%, 96%)" : "inherit" ,
                bgcolor : (props.content === props.selectedDay) ? "hsl(214, 82%, 51%)" : "" ,
                px: 0, py: 0,
                borderRadius: "50%", minHeight: { xs: 24 },
                minWidth: { xs: 24 }, margin: 0,
                '&:hover': (props.content !== props.selectedDay) ? btnStyles.hoverDefault : btnStyles.hoverActive 
                
            }} >
                
                {props.content}
            </Button>
        
    );
}