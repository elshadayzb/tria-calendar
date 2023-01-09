import { useContext } from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import MonthlyTask from "../../Task/TaskMonthly/MonthlyTask";
import { WEEKDAYSETH, WEEKDAYSGREG } from "../../../Util/CalanderConstants";
import CalanderContext from "../../../Store/calander-store";

export default function MonthlyCalander() {
  const context = useContext(CalanderContext);

  const weekdays = context.isGregorian ? WEEKDAYSGREG : WEEKDAYSETH;

  return (
    <Stack 
      sx={{
        flexGrow:1
      }}
    >
     
      <Stack display="flex" height="fit-content" flexDirection="row"  width="100%" >
        {weekdays.map((day) => {
          return (
            <Box
              key={day}
              sx={{
               
                px: 2,
                display: "flex",
                flexDirection: "row",
                justifyItems: "stretch",
                flexGrow:1,
                flexBasis: "0%",
                borderColor: "hsla(0, 1%, 74%, 0.542)",
                borderWidth: 1,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRightWidth: day === "SAT" ? 1 : 0,
                borderStyle: "solid",

                height: { xs: "100%" },
                width: "100%",
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
      
    </Stack>
  );
}
