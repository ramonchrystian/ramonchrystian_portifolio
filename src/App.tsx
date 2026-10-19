import { LangProvider } from './context/LangContext'
import { ThemeProvider } from './context/ThemeContext'
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
  return (
    <LangProvider>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-200 bg-[#FAF8F5] text-[#252622] dark:bg-[#151714] dark:text-[#F3F0E8]">
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
      </ThemeProvider>
    </LangProvider>
  )
}
