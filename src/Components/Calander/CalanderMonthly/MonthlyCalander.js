import { Fragment } from "react";
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import MonthlyTask from "../../Task/TaskMonthly/MonthlyTask";

let daysAM = [];
let daysEN = ["SUN", "MON", "TEU", "WED", "THU", "FRI", "SAT"]

export default function MonthlyCalander() {

    return (
        <Fragment>
            <Stack display="flex" height="fit-content" flexDirection="row">
                {daysEN.map((day) => {
                    return (
                        <Box
                            sx={{
                                px: 2,
                                display: "flex",
                                flexDirection: "row",
                                justifyItems: "stretch",
                                flexGrow: 1,
                                flexShrink: 1,
                                flexBasis: "0%",
                                borderColor: "hsla(0, 1%, 74%, 0.542)",
                                borderWidth: 1,
                                borderTopWidth: 0,
                                borderBottomWidth:0,
                                borderRightWidth: day === "SAT" ? 1 : 0,
                                borderStyle: "solid",

                                height: { xs: "100%" },

                                overflow: "hidden",
                                "&:hover": {
                                    backgroundColor: "primary.main",
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <Typography
                                width="100%"
                                sx={{
                                    p: { xs: 0.5 },
                                    color: "hsla(0, 2%, 11%, 0.819)",
                                    textAlign: "center",
                                    fontSize: "90%",
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                }}
                            >
                                {day}
                            </Typography>
                        </Box>
                    );
                })}
            </Stack>

            
         <MonthlyTask />


        </Fragment>
    );


}