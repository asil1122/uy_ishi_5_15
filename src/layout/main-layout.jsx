import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'

export const MainLayout = () => {
  return (
    <>
    <header>
        <Header />
    </header>
    <main>
        <Outlet />
    </main>
    <Footer>
        <Footer />
    </Footer>
    </>
  )
}
