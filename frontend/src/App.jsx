import { Box } from '@mui/material'
import './App.css'
import Sketch from './components/Sketch'
import Header from './components/Header'
import Bottom from './components/Bottom'
import { ThemeProvider } from './components/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Box sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
        boxSizing: "border-box"
      }}>
        <Header />
        <Sketch />
        <Bottom />
      </Box>
    </ThemeProvider>
  )
}

export default App
