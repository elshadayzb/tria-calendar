import { ChevronLeftOutlined, ChevronRightOutlined, MenuRounded } from '@mui/icons-material';
import { AppBar, Typography, Box, Toolbar, IconButton, Button, Container, SvgIcon } from '@mui/material';
import { Stack } from '@mui/system';
import { Fragment } from 'react';


export default function HeaderBar() {
  return (
    <Fragment>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar  elevation={0} position="fixed"  sx={{
              bgcolor:'hsl(0, 0%, 100%)',
              color:"hsl(0, 0%, 26%)",
              borderBlockColor:"hsla(0, 1%, 74%, 0.542)",
              borderBottomStyle:'solid',
              borderBlockWidth:1,
              px:0
            }}>
              <Toolbar sx={{ display:'flex', flexDirection:'row' ,justifyContent:'space-between', minHeight:{xs:70} , mx:{xs:0} , px:{xs:2} }}>
                <Stack   direction='row' alignItems='center'  justifyContent="space-between"  minWidth="35%" > 
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{py:3,m:0}}
                >
                  <MenuRounded style={{fontSize:"100%",color:'rgb(95,99,104)'}} />
                </IconButton>
                <SvgIcon color='success' sx={{fontSize:40}}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
                <Typography  sx={{ letterSpacing:0.8, px:0.6,  textAlign: 'center', fontSize: '150%', fontFamily: 'Montserrat', fontWeight: '500' }}  >
                  Calender
                </Typography>
               
              <Container sx={{ color:"#3c4043", display:"flex", mx:3, flexDirection:'row' ,  alignItems:'center'}}>
              <Button variant='outlined' sx={{borderColor:"hsl(0, 0%, 52%)",
              borderStyle:'solid',
              borderBlockWidth:1,color:"inherit" , py:0.8, '&:hover':{borderColor:"hsl(0, 0%, 52%)",
              borderStyle:'solid',
              borderBlockWidth:1,color:"inherit"} , '&:active':{bgcolor:'hsla(228, 12%, 48%, 0.968)'} }} >Login</Button>
              <Stack direction='row' spacing={1} sx={{p:0,mx:4}} > 
            <IconButton sx={{height:35,width:35 }}  > <ChevronLeftOutlined  sx={{fontSize:"150%"}}/> </IconButton>
              <IconButton sx={{height:35,width:35  }} > <ChevronRightOutlined sx={{fontSize:"150%"}} /> </IconButton>
            </Stack>
              <Typography sx={{ color:'inherit', minWidth: {xs:13,sm:13,md:"12%",lg:13,xl:13}, p:0,  textAlign: 'center', fontSize: '165%', fontFamily: 'Montserrat', fontWeight: '500' }}>December 2022</Typography>
              </Container>


               



                </Stack>
                
                  <Button variant='outlined' sx={{borderColor:"hsl(0, 0%, 52%)",
              borderStyle:'solid',
              borderBlockWidth:1,color:"rgb(60,64,67)" , p:0 , '&:hover':{borderColor:"hsl(0, 0%, 52%)",
              borderStyle:'solid',
              borderBlockWidth:1,color:"rgb(60,64,67)"} , '&:active':{bgcolor:'hsla(228, 12%, 48%, 0.968)'} }} >Login</Button>


              </Toolbar>
            </AppBar>
        </Box>
            <Toolbar/>
        <Typography mt={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
    </Fragment>
  );
}