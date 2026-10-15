import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import CityTrips from './pages/CityTrips'
import Conseils from './pages/Conseils'
import Carnets from './pages/Carnets'
import About from './pages/About'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/city-trips" element={<CityTrips />} />
          <Route path="/conseils" element={<Conseils />} />
          <Route path="/carnets" element={<Carnets />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
