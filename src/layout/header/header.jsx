import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { EmailIcon } from '../../assets/icon/email-icon'
import { colors } from '../../config/color'
import { ProfileIcon } from '../../assets/icon/profile-icon'
import { HeaderBottom } from './header-bottom/header-bottom'

export const Header = () => {
    return (
        <>
            <Box bgcolor={colors.violet}>
                <Container sx={{ pt: "13px", pb: "13px" }} maxWidth="xs">
                    <Stack direction={"row"} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack direction="row" gap={'48px'}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <IconButton>
                                    <EmailIcon />
                                </IconButton>
                                <Typography color={colors.tx} variant='body2'>mhhasanul@gmail.com</Typography>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <IconButton>
                                    <EmailIcon />
                                </IconButton>
                                <Typography color={colors.tx} variant='body2'>(12345)67890</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={"row"} gap={'16px'} alignItems={'center'}>
                            <Typography color={colors.tx} variant='body2'>English</Typography>
                            <Typography color={colors.tx} variant='body2'>USD</Typography>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Typography color={colors.tx} variant='body2'>Login</Typography>
                                <IconButton>
                                    <ProfileIcon />
                                </IconButton>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Typography color={colors.tx} variant='body2'>Wishlist</Typography>
                                <IconButton>
                                    <ProfileIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <HeaderBottom/>
        </>
    )
}
