import { Box, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { Banner } from './banner'
import { data1 } from '../../data/data1'
import { Card1 } from '../../components/card_1/card-1'
import { data2 } from '../../data/data2'
import { Card2 } from '../../components/card_2/card-2'

export const Home = () => {
  return (
    <>
      <Banner />
      <Box>
        <Container sx={{ pt: "129px", pb: "128px" }} maxWidth="xs">
          <Stack>
            <Typography mb={'48px'} textAlign={'center'} color='#1a0b5b' fontSize={'42px'} variant='h2'>Featured Products</Typography>
            <Stack direction={'row'} justifyContent={'center'} gap={'29px'}>
              {data1.map((item) => (
                <Stack key={item.id}>
                  <Card1 {...item} />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="xs">
          <Stack>
            <Typography mb={'48px'} textAlign={'center'} color='#1a0b5b' fontSize={'42px'} variant='h2'>Featured Products</Typography>
            <Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={'36px'}>
              {data2.map((item) => (
                <Stack mb={'120px'} key={item.id}>
                  <Card2 {...item} />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
