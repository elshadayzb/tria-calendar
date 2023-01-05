import { Fragment, useContext } from "react";
import { Typography, Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import MonthlyTask from "../../Task/TaskMonthly/MonthlyTask";
import { MONTHSGREG, WEEKDAYSETH, WEEKDAYSGREG } from "../../../Util/CalanderConstants";
import CalanderContext from "../../../Store/calander-store";
import YearMonthCalander from "./MonthlyCalander/YearMonthCalanderMin";

export default function YearlyCalander() {

  let breakptreached = useMediaQuery('(min-width:644px)');
  let context = useContext(CalanderContext);

  let weekdays = context.isGregorian ? WEEKDAYSGREG : WEEKDAYSETH;
  

  return (
    <Fragment>
      <Grid container 
        >
        {MONTHSGREG.map((month,monthidx) => {
          return (
            <Grid container item  xs={12} sm={!breakptreached ?  12 : 6} md={4} lg={3} 
              key={monthidx}
              sx={{
                px: 2,
                pt:2,
                borderColor: "hsla(0, 1%, 74%, 0.542)",
                overflow: "hidden",
                borderWidth:1,
              }}
            >
              <YearMonthCalander monthindex={monthidx} /> 

            </Grid>
          );
        })}
      </Grid>
      
    </Fragment>
  );
}
