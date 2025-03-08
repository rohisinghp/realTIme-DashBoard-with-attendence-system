import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sketch from './Component/Sketch'
import Header from './Component/Header'
import Bottom from './Component/Bottom'
import { Box } from '@mui/material'
import { ThemeProvider } from './Component/Context'

function App() {
 

  return (
    <>
<ThemeProvider>
    <Box style={{height:"100vh",width:"100vw",border:"2px solid red",display:"flex",flexDirection:"column",gap:"10px"}}>
    <Header></Header>
    <Sketch></Sketch>
    <Bottom></Bottom>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default App
