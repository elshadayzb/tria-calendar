import { Fragment, useContext } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { MONTHSETH, MONTHSGREG } from "../../../Util/CalanderConstants";
import CalanderContext from "../../../Store/calander-store";
import YearMonthCalander from "./MonthlyCalander/YearMonthCalanderMin";

export default function YearlyCalander() {

  let breakptreached = useMediaQuery('(min-width:644px)');
  let context = useContext(CalanderContext);

  
  const yearMonths = context.isGregorian ? MONTHSGREG : MONTHSETH;

  return (
    <Fragment>
      <Grid container 
        >
        {yearMonths.map((month,monthidx) => {
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
