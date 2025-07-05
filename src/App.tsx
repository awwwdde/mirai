import { Routes, Route } from 'react-router-dom'
import Menu from './widgets/menu'
import AboutService from './pages/AboutService'
import Gallery from './pages/Gallery'
import Partners from './pages/Partners'
import Profile from './pages/Profile'
import MainMirai from './pages/MainMirai'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <div className="flex-1 ">
        <Routes>
          <Route path="/" element={<MainMirai />} />
          <Route path="/about" element={<AboutService />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
