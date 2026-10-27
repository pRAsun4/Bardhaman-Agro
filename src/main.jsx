import React from 'react'
import ReactDOM from 'react-dom/client'
import 'lenis/dist/lenis.css'
import App from './App'
import './index.css'
import { injectTheme } from './theme'

injectTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
