import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Gallery />
            <Contact />
            <Booking />
          </>
        } />
        <Route path="*" element={<p>404 — Page not found</p>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
