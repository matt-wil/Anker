import './App.css'
import Welcome from './pages/Welcome'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageTransition from './effects/PageTransition'
import Tattoo from './pages/Tattoo'
import Piercing from './pages/Piercing'
import Hero from './pages/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'
import Aktionen from './pages/Aktionen'
import ArtistGallery from './components/ArtistGallery'
import NotFound from './pages/NotFound'
import FAQ from './pages/FAQ'
import ProtectedRoutes from './pages/Auth/ProtectedRoutes'
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Dashboard from './pages/Auth/Dashboard'
import { AuthProvider } from './pages/Auth/AuthContext'
import AuthLayout from './pages/Auth/AuthLayout'


function App() {

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <PageTransition>
          <Routes>
              <Route path='/' element={<Welcome />} />
                <Route path="home" element={<Layout />} >
                  <Route index element={<Hero />} />
                  <Route path="tattoo" element={<Tattoo />} />
                  <Route path="piercing" element={<Piercing />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="about" element={<About />} />
                  <Route path='datenschutz' element={<Datenschutz />} />
                  <Route path="impressum" element={<Impressum />} />
                  <Route path="aktionen" element={<Aktionen />} />
                  <Route path='artists/:artist_id/gallery' element={<ArtistGallery />} />
                  <Route path='artists/:artist_id/gallery' element={<ArtistGallery />} />
                  <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
              </Route>

              {/* Authentication routes*/}
                {/** Public */}
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>

                {/** Protected */}
                <Route path="/dashboard" element={
                  <ProtectedRoutes>
                    <AuthLayout />
                  </ProtectedRoutes>
                }>
                  <Route index element={<Dashboard />} />
                </Route>
          </Routes>
        </PageTransition>
              </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App