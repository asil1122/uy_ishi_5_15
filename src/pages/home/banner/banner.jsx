import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../config/color'
import img from "../../../assets/hero_img.png"

export const Banner = () => {
  return (
    <Box bgcolor={colors.bgcolor}>
        <Container maxWidth="xs" sx={{ pt: "39px", pb: "39px" }} >
            <Stack direction={'row'} alignItems={'center'}>
                <Stack>
                    <Typography color={colors.accent} variant='body2'>Best Furniture For Your Castle....</Typography>
                    <Stack  mt={'12px'} mb={'12px'}>
                        <Typography variant={'h1'} width={'644px'} lineHeight={'64px'} >New Furniture Collection 
                        Trends in 2020</Typography>
                    </Stack>
                    <Typography mb={'27px'} width={'559px'} color={colors.subTextColor} fontWeight={700} variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</Typography>
                    <Button sx={{width: '180px'}} variant='contained'>Shop Now</Button>
                </Stack>
                <Stack>
                    <img src={img} alt="img" />
                </Stack>
            </Stack>
        </Container>
    </Box>
)
}
