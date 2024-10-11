import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Revenue() {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>  
        <Dashboard/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Task</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       
        <Typography sx={{ marginBottom: 2 }}>
        
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>

        </Typography>
      </Box>
        </Box>
        </Box>
    </div>
  )
}

export default Revenue