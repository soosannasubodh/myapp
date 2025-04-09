import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var[user,setUser]= useState([])  
    axios.get("https://jsonplaceholder.typicode.com/users")  
    .then((response)=>{ 
        console.log(response.data)
        setUser(response.data)
    })
  return (
    <div>
        <h1>WELCOME TO API!</h1>
        <Table container>
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>City</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {user.map((val)=>{
                    return(
                    <TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.username}</TableCell>
                 <TableCell>{val.address.city}</TableCell>
                    </TableRow>
                    )
                    
                })}
            </TableBody>
        </Table>
    
    </div>
  )
}

export default Api