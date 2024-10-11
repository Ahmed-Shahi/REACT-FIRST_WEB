import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  Header  from '../../Components/Header/Header';
import Charts from '../../Components/Charts/Charts'
function Home() {
  return (
    <div>
            <Box sx={{ display: 'flex' }}>  
                
                <Dashboard/>

                    <Box component="main" 
                    sx={{ flexGrow: 1, p: 3 }}
                    >
                         <h1>Home</h1>
                        {/* <Charts/> */}
                    </Box>
            </Box>
    </div>    
  )    
    
}

export default Home