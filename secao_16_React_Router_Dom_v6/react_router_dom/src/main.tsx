import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/global.css'
import { Home } from './components/home/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
