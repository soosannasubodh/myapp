import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>MY APP</Typography>
                <Link to='/login'>
                <button variant='contained'>LOGIN</button>
                </Link>
                <Link to='/sign'>
                <button variant='contained'>SIGNUP</button>
                </Link>
                <Link to='/s'>
                <button variant='contained'>STATE_BASE</button>
                </Link>
                <Link to='/api'>
                <button variant='contained'>API</button>
                </Link>
                <Link to='/cad'>
                <button variant='contained'>CADGET</button>
                </Link>
             </Toolbar>   
     </AppBar>
    </div>
  )
}

export default NavBar