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
} from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment } from "react";
import CalanderHeader from "../Calander-Header/Calander-Header";
import CalanderViewType from "../CalanderViewTypeButton-Header/CalanderViewType";

export default function HeaderBar() {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            bgcolor: "hsl(0, 0%, 100%)",
            color: "hsl(0, 0%, 26%)",
            borderBlockColor: "hsla(0, 1%, 74%, 0.542)",
            borderBottomStyle: "solid",
            borderBlockWidth: 1,
            px: 0,
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
              <SvgIcon color="success" sx={{ fontSize: 40 }}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
              <Typography
                sx={{
                  letterSpacing: 0.8,
                  px: 0.6,
                  textAlign: "center",
                  fontSize: "150%",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Calender
              </Typography>

              <Container
                sx={{
                  color: "#3c4043",
                  display: "flex",
                  mx: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
               
                
               <CalanderHeader />

              </Container>
            </Stack>

            <CalanderViewType />
          </Toolbar>
        </AppBar>
      </Box>

      <Toolbar />
    </Fragment>
  );
}
