import { Box, Button } from '@mui/material'
import React from 'react'

export default function Bottom() {
  return (
    <Box style={{width:"100%", justifyContent:"center",display:"flex",gap:"10px"}}>
        <Button color='success' variant='contained'>Send REQUEST</Button>
        <Button color='info' variant='contained'>Talk to chat</Button>
 
    </Box>
    // <></>
  )
}
