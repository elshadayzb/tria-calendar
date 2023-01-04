import {
  MenuRounded,
} from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Button,
  Container,
  SvgIcon,
  Switch,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment, useContext } from "react";
import CalanderContext from "../../Store/calander-store";
import CalanderHeader from "../Calander-Header/Calander-Header";
import CalanderViewType from "../CalanderViewTypeButton-Header/CalanderViewType";

export default function HeaderBar() {

  const context = useContext(CalanderContext);
  const breakptreached = useMediaQuery('(min-width:744px)')
  return (
    <Fragment>
      <Box sx={{  flexGrow:1  }}>
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
              
              {/* <SvgIcon color="success" sx={{ fontSize: 40 }}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon> */}
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
                    onChange={() =>context.setIsGregorian(prevState => !prevState)}
                    sx={{
                        '& .MuiSwitch-switchBase + .MuiSwitch-track' :{
                            backgroundColor: "#28f"},
                      '& .MuiSwitch-switchBase' :{
                            color: "#28f"},     	    
                        }}	/>
                <p style={{borderBottom: context.isGregorian ? "3px solid #28f" : ""}}>Gr</p>
            </Stack>    





            <CalanderViewType />
          </Toolbar>
        </AppBar>
      </Box>

      <Toolbar />
    </Fragment>
  );
}
