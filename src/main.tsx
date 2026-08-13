import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { socialConfig } from './config'
import './index.css'

document.title = socialConfig.subtitle
  ? `${socialConfig.brandName} — ${socialConfig.subtitle}`
  : socialConfig.brandName

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
