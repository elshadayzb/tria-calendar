import { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AddRounded, ArrowDropDown} from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import CalanderContext from "../../Store/calander-store";





export default function CreateEventTask() {

  const breakptreached = useMediaQuery('(min-width:1297px)');
  const breakptreachedxs = useMediaQuery('(min-width:560px)');

  const context = useContext(CalanderContext);

  const [anchorEl, setAnchorEl] =  useState(null);
 
  const optionsEN = ["Event","Task"];
  const optionsAM = ["ሁነት" , "ተግባር"]

  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelection = (option) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stack
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          mx: { xs: "3%", sm: "3.5%", md: "5%", lg: "8%" },
          mt: { xs: 5 },
          height: "auto",
          width: "70%",
          borderRadius: 10,
          borderColor: "hsl(0, 0%, 52%)",
          borderStyle: "none",
          borderBlockWidth: 1,
          color: "#3c4043",
          boxShadow: "0px 0px 6px hsla(0, 1%, 45%, 0.801)",
          px: { xs: "0.3em", sm: "3.5%", md: "3%", lg: "4%" },
          py: { xs: "0.3em", sm: "3.5%", md: "3%", lg: "4%" },
          "&:hover": {
            borderColor: "hsl(0, 0%, 52%)",
            borderStyle: "none",
            borderBlockWidth: 1,
            color: "inherit",
            boxShadow: "0px 5px 10px hsla(0, 1%, 36%, 0.842)",
          },
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "62%",
        }}
      >
        <AddRounded
          sx={{ color: "hsla(0, 0%, 40%, 0.849)", height: "20%", width: "20%" }}
        />

        <Typography
          sx={{
            color: "#3c4043",
            textAlign: "left",
            fontSize: {
              xs: "1em",
              sm: "180%",
              md: !breakptreached ? "2em" : "2.5em",
            },
            fontFamily: "Montserrat",
            fontWeight: "500",
          }}
        >
          {context.isGregorian ? `Create` : `ፍጠር `}
        </Typography>

        <ArrowDropDown
          sx={{ color: "hsla(0, 0%, 40%, 0.849)", height: "20%", width: "20%" }}
        />
      </Stack>

      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleSelection}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {optionsAM.map((option, optionidx) => {
          return (
            <MenuItem
              id={option}
              key={option}
              sx={{ minWidth: "11em" }}
              onClick={handleSelection.bind(this, option)}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  py: 1,
                }}
              >
                <Typography>
                  {context.isGregorian
                    ? optionsEN[optionidx]
                    : optionsAM[optionidx]}
                </Typography>
                <Typography>
                  {context.isGregorian
                    ? optionsEN[optionidx][0]
                    : optionsAM[optionidx][0]}
                </Typography>
              </Stack>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
