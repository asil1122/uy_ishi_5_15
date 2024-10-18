import React from 'react'

import { CardWrap, CardContent } from '../../style/style'
import { Stack, Typography } from '@mui/material'
import { colors } from '../../config/color'

export const Card1 = ({id, img, title, icon, code, price}) => {
    
    return (
        <CardWrap >
            <Stack p={'40px'}>
                <img src={img} alt="img" />
            </Stack>
            <CardContent>
                <Typography mb={'12px'} color={colors.accent} sx={{':hover': {color: colors.white}}} variant='h3'>{title}</Typography>
                <img src={icon} alt="icon" />
                <Typography mt={'12px'} color={colors.text} sx={{'.:hover': {color: colors.white} }} variant='h4'>{code}</Typography>
                <Typography mt={'12px'} color={colors.text} sx={{ '.:hover': { color: colors.white } }} variant='h4'>{price}</Typography>
            </CardContent>
        </CardWrap>
    )
}
