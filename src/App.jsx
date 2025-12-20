import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
