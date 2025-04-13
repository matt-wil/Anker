import './App.css'
import Welcome from './pages/Welcome'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageTransition from './effects/PageTransition'
import Home from './Pages/Home'
import Tattoo from './pages/Tattoo'
import Piercing from './pages/Piercing'
import Team from './pages/Team'
import Beratung from './pages/Beratung'
import Hero from './pages/Hero'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <BrowserRouter>
        <PageTransition>
          <Routes>
              <Route path='/' element={<Welcome />} />
                <Route path="home" element={<Layout />} >
                  <Route index element={<Hero />} />
                  <Route path="tattoo" element={<Tattoo />} />
                  <Route path="piercing" element={<Piercing />} />
                  <Route path="team" element={<Team />} />
                  <Route path="beratung" element={<Beratung />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="about" element={<About />} />
              </Route>
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </>
  )
}

export default App