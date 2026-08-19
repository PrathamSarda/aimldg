import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  //<StrictMode>
    <App />
  //</StrictMode>,
=======
  <StrictMode>
    <App />
  </StrictMode>,
>>>>>>> e3552d2dec754ea5c49905c6754f55d7bbe1f6e0
)
