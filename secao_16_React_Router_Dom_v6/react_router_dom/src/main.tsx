import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home/Index.tsx'
import { About } from './components/About/Index.tsx'
import { Menu } from './components/Menu/Index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
