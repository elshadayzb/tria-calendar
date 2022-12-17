
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import {  Grid, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import CalanderSideDay from '../UI/Button/Calander-Side_Days';




function rangerGenerator(start, limit) {
    let i = start;
    let ar = [];
    while (i <= limit)
        ar.push(i++)
    return ar;
}


let j = rangerGenerator(0, 5);
let i = rangerGenerator(1, 7);
let counter = 0;
const DaysGregorian = ["S", "M", "T", "W", "T", "F", "S"];

export default function CalanderSide() {



    let [selectedDay, setSelectedDay] = useState(0);
    
  
    

    return (

        <Grid container item xs={12}  >
                { console.log(` A render has occured`)}
            <Grid height='100%' container display='flex' direction='column'
                sx={
                    {
                        pl: { xs: 2 },
                        pr: { xs: 1.5 },
                        pb: { xs: 1 },
                        minWidth: "248px",
                        maxWidth: "248px",
                        /* bgcolor: { xs: 'hsl(48, 61%, 47%)', sm: 'rgb(95, 195, 168)', md: 'rgb(204, 144, 75)', lg: 'rgb(140, 79, 164)', xl: 'hsl(48, 61%, 47%)' } */
                    }
                } overflow='hidden' >

                <Grid container item display='flex' px="0%" py="2%" justifyContent='space-between' flexDirection='row' mb={1}
                    >

                    <Typography sx={{ pl:{xs:0.8}, minWidth: { xs: 30, sm: 45, md: "12%", lg: 45, xl: 45 },color:"hsla(0, 2%, 11%, 0.819)", textAlign: 'center', fontSize: '90%', fontFamily: 'Montserrat', fontWeight: '500' }}>December 2022</Typography>



                    <Stack direction='row' spacing={2} sx={{ p: 0, mx: 0 }} >
                        <IconButton sx={{ height: 24, width: 24 }}  > <ChevronLeftOutlined sx={{ fontSize: "100%" }} /> </IconButton>
                        <IconButton sx={{ height: 24, width: 24 }} > <ChevronRightOutlined sx={{ fontSize: "100%" }} /> </IconButton>
                    </Stack>


                </Grid>

                <Grid container item color='hsla(0, 2%, 11%, 0.819)' display='flex' fontFamily='Montserrat' fontWeight='600' fontSize={{ xs: 10 }} flexDirection='row' justifyContent='space-between' >

                    {
                        DaysGregorian.map(day => {
                            return (
                                <Typography key={Math.random()} sx={{ minWidth: { xs: 24 }, textAlign: 'center', fontSize: 'inherit', color:'inherit' , fontFamily: 'inherit', fontWeight: 'inherit' }}>{day}</Typography>
                            );
                        })
                    }

                </Grid>

                <Grid display='flex'  color='hsla(0, 2%, 11%, 0.819)' flexDirection='row' flexWrap='wrap' justifyContent='space-around' fontFamily='Montserrat' fontWeight='600' fontSize={{ xs: 10 }} container >
                    {

                        j.map((elm1) => {

                            return (
                                <Grid key={elm1} item px="0%" py="1%" display="flex" width="100%" justifyContent="space-between"  >
                                    {
                                        i.map((elm) => {
                                            counter++;
                                           // console.log(`the counter ${counter}`);
                                            return (
                                                <CalanderSideDay setSelectedDay={setSelectedDay} selectedDay={selectedDay} key={counter} content={elm+elm1 * 7} />
                                            );

                                        })
                                    }
                                </Grid>
                            );
                        })

                    }
                </Grid>



            </Grid>



        </Grid>



    );
}