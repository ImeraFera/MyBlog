import PageContainer from './components/user/PageContainer'
import Navbar from './components/user/Navbar'
import './css/App.css'
import Home from './pages/Home'
import Footer from './components/user/Footer'
function App() {

  return (
    <>

      <Navbar></Navbar>
      <PageContainer>
        <Home></Home>
      </PageContainer>
      <Footer></Footer>

    </>
  )
}

export default App
