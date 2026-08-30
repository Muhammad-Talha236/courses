import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<h1>Register</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
