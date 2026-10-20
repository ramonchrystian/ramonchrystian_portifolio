import { useState, useEffect } from 'react'
import { LangProvider } from './context/LangContext'
import { ThemeProvider } from './context/ThemeContext'
import Maintenance from './components/Maintenance'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Ministry from './components/Ministry'
import Teaching from './components/Teaching'
import Academic from './components/Academic'
import DigitalProjects from './components/DigitalProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('rc_dev_auth')
    if (saved === 'true') {
      setUnlocked(true)
    }
  }, [])

  const handleLock = () => {
    localStorage.removeItem('rc_dev_auth')
    setUnlocked(false)
  }

  return (
    <LangProvider>
      <ThemeProvider>
        {!unlocked ? (
          <Maintenance onUnlock={() => setUnlocked(true)} />
        ) : (
          <div className="min-h-screen transition-colors duration-200 bg-[#FAF8F5] text-[#252622] dark:bg-[#151714] dark:text-[#F3F0E8]">
            {/* Discreet floating developer indicator with lock button */}
            <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-[#E8E4DC] bg-[#FAF8F5]/95 px-3 py-1.5 font-mono text-[11px] shadow-lg backdrop-blur-xs dark:border-[#2E322C] dark:bg-[#20231F]/95">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#1B3B2B] dark:text-[#72947B] font-medium">Modo Desenvolvedor</span>
              <span className="opacity-30">•</span>
              <button
                onClick={handleLock}
                className="text-[#77766F] hover:text-red-600 dark:text-[#B8B8AE] dark:hover:text-red-400 cursor-pointer"
                title="Voltar para a página de manutenção"
              >
                Bloquear
              </button>
            </div>

            <Header />
            <main>
              <Hero />
              <About />
              <Ministry />
              <Teaching />
              <Academic />
              <DigitalProjects />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </ThemeProvider>
    </LangProvider>
  )
}
