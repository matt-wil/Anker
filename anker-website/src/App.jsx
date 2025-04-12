import './App.css'
import Welcome from './pages/Welcome'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageTransition from './effects/PageTransition'
import Home from './Pages/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <PageTransition>
          <Routes>
              <Route path='/' element={<Welcome />} />
                <Route path="/home" element={<Layout />} >
                <Route path="/home" element={<Home />} />
              </Route>
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </>
  )
}

export default App