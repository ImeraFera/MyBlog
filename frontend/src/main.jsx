import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import darkTheme from './themes/dark.jsx'
import lightTheme from './themes/light.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider
    theme={darkTheme}
  >
    <App />
  </ThemeProvider>
)
