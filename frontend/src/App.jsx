import PageContainer from './components/user/PageContainer'
import Navbar from './components/user/Navbar'
import './css/App.css'
import Home from './pages/Home'
import Footer from './components/user/Footer'
import { CssBaseline, ThemeProvider } from '@mui/material'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'
import { useSelector } from 'react-redux'

function App() {

  const theme = useSelector(({ app }) => app.theme)

  return (
    <>
      <ThemeProvider
        theme={!theme ? lightTheme : darkTheme}
      >
        <CssBaseline />
        <Navbar></Navbar>
        <PageContainer>
          <Home></Home>
        </PageContainer>
        <Footer></Footer>
      </ThemeProvider>

    </>
  )
}

export default App
