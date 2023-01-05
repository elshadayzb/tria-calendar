
  import {
    AppBar,
    Typography,
    Box,
    Toolbar,
    Grid,
  } from "@mui/material";
  import { Stack } from "@mui/system";
  import { Fragment , useContext} from "react";
  import { HOURS, WEEKDAYSETH, WEEKDAYSGREG } from "../../../Util/CalanderConstants";
  import CalanderContext from "../../../Store/calander-store";
  import CalanderSideDay from "../../UI/Button/Calander-Side_Days";

export default function DailyCalander()
{

    const context = useContext(CalanderContext);
    let weekdays = context.isGregorian ? WEEKDAYSGREG : WEEKDAYSETH;
    

    return(
        <Fragment >
         <AppBar  
           position="sticky"
           
           sx={{ height:"fit-content", bgcolor:"white" , boxShadow : "0 0 0" }} >
         <Toolbar 
            sx={{
             bgcolor:"transparent",
              display: "flex",
              flexDirection: "column",
              alignItems:"stretch",
              Height: "100%",
             
              mx: { xs: 0 },
              px: { xs: 0 },
              pt:{xs : 1}
            }}
          >
           
           <Stack display="flex" 
            flexGrow={1} 
            ml="7%" height="fit-content" flexDirection="row">
                 <Box
                            sx={{
                                px: 2,
                                display: "flex",
                                flexDirection: "row",
                                justifyItems: "stretch",
                                flexGrow: 1,
                                flexShrink: 1,
                                flexBasis: "0%",
                                height: { xs: "100%" },
                                overflow: "hidden",
                                
                            }}
                        >
                            <Typography
                                width="100%"
                                sx={{
                                  
                                    p:{xs:0.5},
                                    pl: { xs: 1 },
                                    color: "hsla(228, 12%, 48%, 0.868)",
                                    textAlign: "left",
                                    fontSize: "75%",
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                }}
                            >
                                {weekdays[context.selectedDate.selectedWeekDay]}
                            </Typography>
                        </Box>
            </Stack>


            <Stack display="flex" 
               flexGrow={1} ml="7%"  height="fit-content" flexDirection="row">
                      <Box
                        sx={{
                            px: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems:"start",
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "0%",
                            height: { xs: "100%" },
                            color: "hsla(228, 12%, 48%, 0.868)",
                            textAlign: "center",
                            fontSize: "150%",
                            fontFamily: "Montserrat",
                            fontWeight: "500",
                            overflow: "hidden",
                          
                        }}
                    >


                <CalanderSideDay  px={1}  day={context.selectedDate} />


                    </Box>
            </Stack>


            <Stack display="flex" 
             flexGrow={1} height="fit-content" flexDirection="row"  
             fontSize={{ xs : "5%" , sm: "30%" ,  md: "35%"  ,lg : "50%" }}>
                <Box
                            sx={{
                                px: 0,
                                display: "flex",
                                flexDirection:"column",
                                alignContent:"flex-end",
                                justifyContent:"flex-end",
                                width:"5%",
                                overflow: "hidden",
                                fontSize:"inherit"
                            }}
                        >
                            <Typography
                                width="100%"
                                sx={{
                                   
                                    p: { xs: 0 },
                                    color: "hsla(228, 12%, 48%, 0.868)",
                                    textAlign: "center",
                                    fontSize: "1.3em",
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                }}
                            >
                               GMT +03
                            </Typography>

                            
                        </Box>


                <Box sx={{
                    width:"2%",
                    borderColor: "hsla(0, 1%, 74%, 0.542)",
                    borderWidth: 0,
                    borderBottomWidth:1,
                    borderStyle: "solid",
                }} />
                    
                    <Box
                            
                            sx={{
                                px: 1,
                                py:0.5,
                                display: "flex",
                                flexDirection: "row",
                                justifyItems: "stretch",
                                flexGrow: 1,
                                flexShrink: 1,
                                flexBasis: "0%",
                                borderColor: "hsla(0, 1%, 74%, 0.542)",
                                borderWidth:0,
                                borderLeftWidth:1,
                                borderBottomWidth:1,
                                borderStyle: "solid",
                                overflow: "hidden",
                                
                            }}
                        >
                            <Typography
                                width="100%"
                                sx={{
                                    p: { xs: 0.1 },
                                    color: "hsla(228, 12%, 48%, 0.868)",
                                    textAlign: "center",
                                    fontSize: "90%",
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                }}
                            >
                               {/* inset the task to be be displayed at  */}
                            </Typography>
                        </Box>
            </Stack>

          </Toolbar>
         </AppBar>   


         <Grid display="flex" flexDirection="column" 
          justifyContent="stretch" justifyItems="stretch"
         flexGrow={1}  height="100%"
         
         fontSize={{ xs : "5%" , sm: "30%" ,  md: "35%"  ,lg : "50%" }}
         
         >

        {
            HOURS.map((hour) => {
                return(
                       
                    
                    <Stack 
                    key={hour}
                    display="flex" 
                    flexGrow={0}  mt={0} flexDirection="row"
                    sx={{ height:"8%" , overflow:"visible" }} 
                    >
                       <Box
                                   sx={{
                                       pt: 0,
                                       width:"5%",
                                       display: "flex",
                                       flexDirection: "row",
                                       justifyItems: "stretch",
                                       overflow:"visible",
                                   }}
                               >
                                   <Typography
                                       width="100%"
                                       sx={{
                                           pt: { xs: 5.3 },
                                           pr:{xs:1},
                                           color: "hsla(228, 12%, 48%, 0.868)",
                                           textAlign: "right",
                                           fontSize: "1.3em",
                                           fontFamily: "Montserrat",
                                           fontWeight: "500",
                                           letterSpacing: 1
                                           
                                       }}
                                   >
                                      {(hour <= 12 ) ? hour + " AM" : (hour !== 24) ? hour - 12 + " PM" : ""}
                                   </Typography>
                               </Box>
       
       
                       <Box sx={{
                           width:"2%",
                           borderColor: "hsla(0, 1%, 74%, 0.542)",
                           borderWidth: 0,
                           borderBottomWidth:1,
                           borderStyle: "solid",
                       }} />
                           
                       {weekdays.map((day,dayidx) => {
                           return (
                               <Box
                                    key={day}
                                    sx={{
                                        px: 1,
                                        py:0.8,
                                       display: "flex",
                                       flexDirection: "row",
                                       flexGrow: 1,
                                       flexShrink: 1,
                                       flexBasis: "0%",
                                       borderColor: "hsla(0, 1%, 74%, 0.542)",
                                       borderWidth:0,
                                       borderLeftWidth: dayidx === 0 ? 1 : 0,
                                       borderBottomWidth:1,
                                       borderRightWidth: day === "SAT" ? 1 : 0,
                                       borderStyle: "solid",
                                       overflow: "hidden",
                
                                   }}
                               >
                                   <Typography
                                       width="100%"
                                       sx={{
                                           height:"fit-content",
                                           color: "hsla(228, 12%, 48%, 0.868)",
                                           textAlign: "center",
                                           fontSize: "90%",
                                           fontFamily: "Montserrat",
                                           fontWeight: "500",
                                           bgcolor:"paleturquoise"
                                       }}
                                   >
                                      {/* plase the task to be displayed here  */}
                                   </Typography>
                               </Box>
                           );
                       })}
                   </Stack>


                );
            })
        }


        </Grid>



       





        
</Fragment>

    );



}



 