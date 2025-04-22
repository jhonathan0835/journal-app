import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JournalApp from './journal/JournalApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JournalApp />
  </StrictMode>,
)
