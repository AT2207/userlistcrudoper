import React from 'react'

import Appbar from './components/Appbar'
import { Routes,Route } from 'react-router-dom'
import Users from './pages/Users'
import Adduser from './pages/Adduser'
import Edituser from './pages/Edituser'

const App = () => {
  return (
    <>
    <Appbar/>
    <Routes>
    <Route path="/" element={<Users/>}  />
    <Route path="/add-user" element={<Adduser/>} />
    <Route path="/edit-user/:userid" element={<Edituser/>} />
    </Routes>
    </>
  )
}

export default App
