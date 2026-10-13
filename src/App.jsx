import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/layout/CustomCursor'
import Home from './pages/Home'
import { useTheme } from './components/ThemeContext'

export default function App() {
  const { theme } = useTheme()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-canvas">
      <CustomCursor />
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
