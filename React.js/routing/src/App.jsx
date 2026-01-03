import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Homepage';
import DynamicRoute from './pages/DynamicRoute';
import Color from './pages/Color';

function App() {


  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/:value' element={<DynamicRoute/>} />
        <Route path='/:value/:color1/:color2' element={<Color/>} />
      </Routes>
    </>
  )
}

export default App
