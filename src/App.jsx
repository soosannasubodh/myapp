import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Button, TextField, Toolbar } from '@mui/material'
import Sign from './components/Sign'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Api from './components/Api'
import CadGet from './components/CadGet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/s' element={<StateBasics/>}/>
      <Route path='/api' element={<Api/>}/>
      <Route path='/cad' element={<CadGet/>}/>   
    </Routes>
    </>
    
    
  )
}

export default App
