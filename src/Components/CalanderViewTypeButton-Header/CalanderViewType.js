import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import CalanderContext from "../../Store/calander-store";
import { VIEWOPTIONSAMH, VIEWOPTIONSEN } from "../../Util/CalanderConstants";






export default function CalanderViewType() {

  const context = useContext(CalanderContext);
  const [anchorEl, setAnchorEl] =  useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleViewChange = (option) => {
    console.log(option);
    handleClose();
    context.setPickerOption(option)
  };
  
  return (
    <div>
        <Button
        variant="outlined"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        sx={{borderColor: "hsl(0, 0%, 52%)",
        borderStyle: "solid",
        borderBlockWidth: 1,
        color: '#3c4043',
        minWidth:{xs : "15ch"},
        maxWidth:{xs : "15ch"},
        py: 0.8,
        "&:hover": {
          borderColor: "hsl(0, 0%, 52%)",
          borderStyle: "solid",
          borderBlockWidth: 1,
          color: "inherit",
        },
        "&:active": { bgcolor: "hsla(228, 12%, 48%, 0.968)" },
      }}
      >
        { context.isGregorian ? context.pickerOption : 
        VIEWOPTIONSAMH[VIEWOPTIONSEN.indexOf(context.pickerOption.charAt(0).toUpperCase() + context.pickerOption.slice(1))]}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
       
        {
            VIEWOPTIONSEN.map((option,optionidx) => {
              return (
                <MenuItem id={option} key={option} sx={{minWidth:"15em"}} onClick={handleViewChange.bind(this,option.toLocaleLowerCase())}>
                <Stack
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        width:"100%",
                        justifyContent:'space-between',
                        py:1
                    }}
                 >
    
                  {optionidx % 3 !== 0 &&
                    <>
                      <Typography>
                          { context.isGregorian ? VIEWOPTIONSEN[optionidx] : VIEWOPTIONSAMH[optionidx]}
                      </Typography>
                      <Typography>
                          {context.isGregorian ? VIEWOPTIONSEN[optionidx][0] : VIEWOPTIONSAMH[optionidx][0]}
                      </Typography>
                    </>}
    
                </Stack>
            
            </MenuItem>
              );  
            })
        }
      
      
      </Menu>
    </div>
  );
}
