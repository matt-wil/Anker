import './App.css'
import Welcome from './components/Welcome'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageTransition from './effects/PageTransition'


function App() {

  return (
    <>
      <BrowserRouter>
        <PageTransition>
          <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path="/home" element={<Home />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </>
  )
}

export default App