import { Routes, Route } from 'react-router-dom'
import Menu from './widgets/menu'
import AboutService from './pages/AboutService'
import Gallery from './pages/Gallery'
import Partners from './pages/Partners'
import Registration from './pages/RegistrationPage'
import MainMirai from './pages/MainMirai'
import Auth from './pages/AuthProfile'
import Footer from './widgets/footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative z-50">
        <Menu />
      </div>
      <div className="flex-1 h-full">
        <Routes>
          <Route path="/" element={<MainMirai />} />
          <Route path="/about" element={<AboutService />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
