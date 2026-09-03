import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/layout/CustomCursor'
import Home from './pages/Home'
import { useTheme } from './components/ThemeContext'

export default function App() {
  const { theme } = useTheme()
  return (
    <div className="relative min-h-screen bg-canvas">
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}
