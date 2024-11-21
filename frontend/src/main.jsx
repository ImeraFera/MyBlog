import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import darkTheme from './themes/dark.jsx'
import lightTheme from './themes/light.jsx'
import { store } from './redux/store.jsx'
import { Provider, useSelector } from 'react-redux'



createRoot(document.getElementById('root')).render(



  <Provider store={store}>
    <App />
  </Provider>
)
