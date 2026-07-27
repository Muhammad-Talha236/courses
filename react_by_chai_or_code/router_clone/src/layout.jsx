import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function layout() {
  return (
   <>
   <Headers />
   <Outlet  />
    <Footer />
   </>
  )
}

export default layout
