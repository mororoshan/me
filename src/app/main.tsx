import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/i18n'
import '../index.css'
import App from './index'
import { Providers } from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
