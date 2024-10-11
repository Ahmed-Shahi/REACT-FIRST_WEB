import React from 'react'
import Btn from './Btn'
import { height } from '@mui/system'
export default function () {
  return (
    <div style={{height:"300px"  , fontSize: '20px' , backgroundColor: "green"}}>
       <div style={{position:"relative ",top:"50px", }}>
        <h1 style={{color: 'white'}} >My Site</h1>
        <h2 style={{color: 'white'}}>Dinoaure are cool</h2>
        <Btn/>
        </div>
        
    </div>
  )
}

