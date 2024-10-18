import { Container, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { SearchIcon } from '../../../assets/icon/search'

export const HeaderBottom = () => {
  return (
    <Container maxWidth="xs" sx={{ pt: "19px", pb: "19px" }}>
        <Stack direction={'row'} gap={'227px'} alignItems={'center'}>
            <Stack direction={'row'} gap={'88px'} alignItems={'center'}>
                <Typography variant='h2'>Hekto</Typography>
                <Stack direction={'row'} gap={'35px'}>
                    <Typography fontWeight={400} color='#0d0e43' variant='body2'>Home</Typography>
                    <Typography fontWeight={400} color='#0d0e43' variant='body2'>Pages</Typography>
                    <Typography fontWeight={400} color='#0d0e43' variant='body2'>Products</Typography>
                    <Typography fontWeight={400} color='#0d0e43' variant='body2'>Blog </Typography>
                    <Typography fontWeight={400} color='#0d0e43' variant='body2'>Shop</Typography>
                    <Typography fontWeight={400} color='#0d0e43' variant='body2'>Contact</Typography>
                </Stack>
            </Stack>
            <Stack flexGrow={1}>
                <TextField variant='outlined' slotProps={{ input: { endAdornment: (<InputAdornment position="end"><SearchIcon/></InputAdornment>) }}}/>
            </Stack> 
        </Stack>
    </Container>
)
}
