import './App.css'
import Welcome from './pages/Welcome'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageTransition from './effects/PageTransition'
import Home from './Pages/Home'
import Tattoo from './pages/Tattoo'
import Piercing from './pages/Piercing'
import Team from './pages/Team'
import Hero from './pages/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'
import EventsCalendar from './pages/EventsCalendar'
import Gallery from './components/Gallery'
import NotFound from './pages/NotFound'

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
                  <Route path="contact" element={<Contact />} />
                  <Route path="about" element={<About />} />
                  <Route path='datenschutz' element={<Datenschutz />} />
                  <Route path="impressum" element={<Impressum />} />
                  <Route path="events-calendar" element={<EventsCalendar />} />
                  <Route path='piercing/gallery' element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </>
  )
}

export default App