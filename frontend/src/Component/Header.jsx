import { Box, Paper } from '@mui/material'
import React, { useContext } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { ThemeContext } from './Context';

export default function Header() {
    const{color,toggleTheme}=useContext(ThemeContext)
  return (
<Box style={{height:"100px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Paper elevation={5} style={{width:"500px",height:"50px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}
    > 
    <CreateIcon onClick={toggleTheme} ></CreateIcon>
    <ArrowForwardIcon></ArrowForwardIcon>
    <HdrAutoIcon></HdrAutoIcon>
    <AutoFixNormalIcon></AutoFixNormalIcon>
    
    </Paper>

</Box>
  )
}
