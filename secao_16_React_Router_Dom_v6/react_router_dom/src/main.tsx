import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home/Index.tsx'
import { About } from './components/About/Index.tsx'
import { Menu } from './components/Menu/Index.tsx'
import { Post } from './components/Post/Index.tsx'
import { Redirect } from './components/Redirect/Index.tsx'
import { NotFound } from './components/NotFound/Index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post" element={<Post />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>      
  </StrictMode>,
)
