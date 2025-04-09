import { ThemeContext } from './Context';
import { Paper } from '@mui/material';
import React, { useContext } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function Sketch() {
       const{color,setcolor}=useContext(ThemeContext)
    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
      };
      console.log(color)
  return (
  
<Paper style={{height:"70%",width:"100%"}} elevation={5}>
<ReactSketchCanvas
    style={styles}
    width="500"
    height="100%"
    strokeWidth={3}
    strokeColor={color}
  />
</Paper>
  )
}
