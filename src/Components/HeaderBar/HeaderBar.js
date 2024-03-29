import { Fragment, useContext } from "react";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Container,
  Switch,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import { MenuRounded } from "@mui/icons-material";
import CalanderContext from "../../Store/calander-store";
import CalanderHeader from "../Calander-Header/Calander-Header";
import CalanderViewType from "../CalanderViewTypeButton-Header/CalanderViewType";
import CalendarConverter from "../../Util/CalendarConverter";
import { getSelectedWeek } from "../../Util/CalanderFunction";

export default function HeaderBar() {

  const context = useContext(CalanderContext);
  const calendarConverter = new CalendarConverter();

  const calendarConverterHandler = () => {
    let convertedSelectedDate;

    if(context.isGregorian){
      // convert the selected Gregorain date to Ethiopic
      convertedSelectedDate = calendarConverter.convertToEC(context.selectedDate.selectedYear, 
                                                            context.selectedDate.selectedMonth + 1, 
                                                            context.selectedDate.selectedDay);

    }else{
      // convert the selected Ethiopic date to Gregorian
      convertedSelectedDate = calendarConverter.convertToGC(context.selectedDate.selectedYear, 
                                                            context.selectedDate.selectedMonth + 1, 
                                                            context.selectedDate.selectedDay);
    }

    // set the selected date to the converted date
    context.setSelectedDate({selectedDay: convertedSelectedDate.day, 
                             selectedMonth: convertedSelectedDate.month - 1, 
                             selectedYear: convertedSelectedDate.year, 
                             selectedDayIndex: convertedSelectedDate.day, 
                             selectedWeekDay: context.selectedDate.selectedWeekDay}); 

    context.setMonthIndex(convertedSelectedDate.month - 1); // set the month index with the converted month
    context.setYearIndex(convertedSelectedDate.year); // set the year index with the converted year

    context.setMonthSideIndex(convertedSelectedDate.month - 1) // set the month side index with the converted month
    context.setYearSideIndex(convertedSelectedDate.year) // set the year side index with the converted year 
    context.setSelectedWeek(getSelectedWeek({selectedDay: convertedSelectedDate.day, 
                                             selectedMonth: convertedSelectedDate.month - 1, 
                                             selectedYear: convertedSelectedDate.year}, !context.isGregorian));
    context.setIsGregorian(prevState => !prevState); 
  }
  
  
  const breakptreached = useMediaQuery('(min-width:744px)')
  return (
    <Fragment>
      <Box sx={{  flexGrow:0 , bgcolor:"black"  }}>
        <AppBar
          elevation={0}
          sx={{
            
            position : {xs : "fixed"},
            left:{xs : 0  , md:"auto" },
            display : "block",
            bgcolor: "hsl(0, 0%, 100%)",
            color: "hsl(0, 0%, 26%)",
            borderBlockColor: "hsla(0, 1%, 74%, 0.542)",
            borderBottomStyle: "solid",
            borderBlockWidth: 1,
            px: 0,
            minWidth:(!breakptreached) ? "50rem" : "auto",
            
            
            //bgcolor:"blue"
           
            
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              minHeight: { xs: 70 },
              mx: { xs: 0 },
              px: { xs: 2 },
             
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              minWidth="35%"
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ py: 3, m: 0 }}
              >
                <MenuRounded
                  style={{ fontSize: "100%", color: "rgb(95,99,104)" }}
                />
              </IconButton>
              
              <Typography
                sx={{
                  letterSpacing: 0.8,
                  px: 0.6,
                  textAlign: "center",
                  fontSize: "150%",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  display:{xs : "none" , md : "block"},
                  minWidth: { md: "5ch" ,lg: "8ch" ,xl: "12ch" },
                  maxWidth: { md: "5ch" ,lg: "8ch" ,xl: "12ch" }
                 
                }}
              >
                { context.isGregorian ?  `Calender` : `የቀን መቁጠሪያ` }  
              </Typography>

              <Container
                sx={{
                  color: "#3c4043",
                  display: "flex",
                  mx: "3%",
                  flexDirection: "row",
                  alignItems: "center",
                 
                }}
              >
               
                
               <CalanderHeader /> 

              </Container>
            </Stack>
             

            <Stack direction="row" spacing={1}  alignItems="center" sx={{
               mr:1
              
            }} >
                <p style={{borderBottom: !context.isGregorian ? "3px solid #28f" : ""}}>ኢት</p>
                <Switch
                    checked={context.isGregorian} 
                    onChange={calendarConverterHandler}
                    sx={{
                        '& .MuiSwitch-switchBase + .MuiSwitch-track' :{
                            backgroundColor: "#28f"},
                      '& .MuiSwitch-switchBase' :{
                            color: "#28f"},     	    
                        }}	/>
                <p style={{borderBottom: context.isGregorian ? "3px solid #28f" : ""}}>EN</p>
            </Stack>    
            <CalanderViewType />
          </Toolbar>
        </AppBar>
      </Box>

      <Toolbar />
    </Fragment>
  );
}
