import { Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../config/color'

export const Card2 = ({id, img, title, price}) => {
  return (
    <Stack maxWidth={'370px'}>
        <img src={img} alt="img" />
        <Stack mt={'16px'} direction={'row'} justifyContent={'space-between'}>
            <Typography color={colors.text} variant='body2'>{title}</Typography>
            <Typography color={colors.text} variant='body2'>{price}</Typography>
        </Stack>
    </Stack>
)
}
