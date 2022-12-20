import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import CalanderContext from "../../Store/calander-store";



let viewOptions = ["Day","Week","Month","Year","Schedule","4 Days"];


export default function CalanderViewType() {

  let context = useContext(CalanderContext);

  const [anchorEl, setAnchorEl] =  useState(null);
  


  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleViewChange = (event) => {
    console.log(event);
    handleClose();
    context.changeView(event);
  };
  





  console.log(` the view type is ${context.viewSelected.viewType}`);
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
       {context.viewSelected.viewType}
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
            viewOptions.map((elm) => {
              return (
                <MenuItem id={elm} key={elm} sx={{minWidth:"15em"}} onClick={handleViewChange.bind(this,elm)}>
                <Stack
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        width:"100%",
                        justifyContent:'space-between',
                        py:1
                    }}
                 >
    
                    <Typography>
                        {elm}
                    </Typography>
                    <Typography>
                        {elm[0]}
                    </Typography>
    
                </Stack>
            
            </MenuItem>
              );  
            })
        }
      
      
      </Menu>
    </div>
  );
}
