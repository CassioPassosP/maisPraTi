import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './01-css-global/App.jsx'
// import App from './02-css-modules/App.jsx'*
// import App from './03-tailwind/App.jsx'
import App from './04-styled-components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
