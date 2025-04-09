import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = ()=> {
    var[name,setName]=useState("SOOSANNA")

   const inputhandle=(e) => {
    setName(e.target.value)
};
   var[newname,setNewName]=useState()
const handleClick= ()=>{
    setNewName(name)
}
   var[counter,setCounter]=useState(0)
   const handlecounter=()=>{
    setCounter(counter+1)
   };

   var decrementCounter=()=>{
    setCounter(counter-1)
   };
   var[n,setN]=useState()
const input_handle=() => {
    setN("React Js")
   }
    const change_handle=() => {
      setN("Node js")
    }
    const change_handle1=() => {
      setN("Angular js")
    }


  return (
    <div>
        <Typography variant='h3'>WELCOME {newname}</Typography>
        <br></br>
        <TextField variant='outlined' label='type your name' onChange={inputhandle}/>
        <Button variant='outlined' onClick={handleClick}>SUBMIT</Button>
        <br></br>
        <br></br>
        <Typography variant='h3'>Counter:{counter}</Typography>
        <Button variant='contained' onClick={handlecounter}>INCREMENT</Button>
        <br></br>
        <br></br>
        <Button variant='contained' onClick={decrementCounter}>DECREMENT</Button>
        <Typography variant='h3'>WELCOME {n}</Typography>
        <Button variant='contained' onClick={input_handle}>React Js</Button> 
        <br></br> 
        <Button variant='contained' onClick={change_handle}>Nodejs</Button>
        <br></br>
        <Button variant='contained' onClick={change_handle1}>angularjs</Button>
        <br></br>            
          </div>
  )
}

export default StateBasics