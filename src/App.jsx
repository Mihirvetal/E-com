/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

import Display from './components/Display'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
 
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default App
