import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <Button style={{fontSize:'20px',fontWeight:'bolder',backgroundColor: 'white', color: 'black' , width:'300px' , height:'60px'}} variant="contained" disableElevation>
      Disable elevation
    </Button>
  );
}