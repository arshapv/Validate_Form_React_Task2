import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Valid from './commponent/Valid'
import Form from './commponent/Form'
import {  Link, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>       
         <Route element={<Form/>} path={'/'}/>     
         <Route element={<Valid/>} path={'/Valid'}/>
      </Routes>
    </div>
  )
}

export default App




