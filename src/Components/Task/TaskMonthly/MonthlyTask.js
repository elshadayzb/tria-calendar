import { FiberManualRecord } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Fragment } from "react";

function rangerGenerator(start, limit) {
  let i = start;
  let ar = [];
  while (i <= limit) ar.push(i++);
  return ar;
}

let j = rangerGenerator(0, 5);
let i = rangerGenerator(1, 7);
let counter = 0;

export default function MonthlyTask(props) {
  console.log(j.length);
  return (
    <Fragment>
      {j.map((elm1) => {
        return (
          //"15.885%":"19%"
          <Stack
            key={elm1}
            display="flex"
            height="fit-content"
            overflow="hidden"
            flexDirection="row"
            sx={{ minHeight: j.length === 6 ? "15.885%" : "19%" }}
          >
            {i.map((elm) => {
              
              return (
                <Box
                  sx={{
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "stretch",
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "0%",
                    borderColor: "hsla(0, 1%, 74%, 0.542)",
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderBottomWidth:0,
                    borderRightWidth: elm === 7 ? 1 : 0,
                    borderStyle: "solid",
                    height: { xs: "100%" },
                    width: { xs : 4},
                    overflow: "hidden"
                    
                  }}
                >
                  <Typography
                    width="100%"
                    height="fit-content"
                    sx={{
                      p: { xs: 0.5 },
                      color: "hsla(0, 2%, 11%, 0.819)",
                      textAlign: "center",
                      fontSize: "90%",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                    }}
                  >
                    {elm + elm1 *7 }
                  </Typography>
                  
                  {(elm % 2 > 0 && elm1 % 2 > 0 ) ? <> </> :  <Box  textOverflow="clip"
                    sx={{px:1,display:"flex" ,flexDirection:"column",width:{xs:"100%"},height:"100%", overflow:"hidden"}}
                  >
                  <Button
                  startIcon={<FiberManualRecord sx={{ color:"#1a73e8", width:"0.8em" , height:"2em"}} />} 
                  variant="text"
                  
                  sx={{
                    color: "hsla(0, 2%, 11%, 0.819)",
                    textAlign: "center",
                    fontSize: "80%",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    textOverflow:"clip",
                    textTransform : "capitalize",
                   width:"100%" ,height:5,py:1.2  } }>
                            Lorem ipsum 
                  </Button> 

                  </Box>
}


                    
                </Box>
              );
            })}
          </Stack>
        );
      })}
    </Fragment>
  );
}
