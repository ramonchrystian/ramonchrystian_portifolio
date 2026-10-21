import { LangProvider } from './context/LangContext'
import { ThemeProvider } from './context/ThemeContext'
import { AdminProvider, useAdmin } from './context/AdminContext'
import Maintenance from './components/Maintenance'
import AdminBar from './components/AdminBar'
import AdminLoginModal from './components/AdminLoginModal'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Ministry from './components/Ministry'
import Teaching from './components/Teaching'
import Academic from './components/Academic'
import DigitalProjects from './components/DigitalProjects'
import Gallery from './components/Gallery'
import VocationalHorizon from './components/VocationalHorizon'
import Contact from './components/Contact'
import Footer from './components/Footer'

function MainContent() {
  const { isAdmin, isMaintenance } = useAdmin()

  // If maintenance mode is active and visitor is not admin, show maintenance screen
  if (isMaintenance && !isAdmin) {
    return (
      <>
        <Maintenance />
        <AdminLoginModal />
      </>
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-200 bg-[#FAF8F5] text-[#252622] dark:bg-[#151714] dark:text-[#F3F0E8] ${
        isAdmin ? 'pt-10' : ''
      }`}
    >
      <AdminBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Ministry />
        <Teaching />
        <Academic />
        <DigitalProjects />
        <Gallery />
        <VocationalHorizon />
        <Contact />
      </main>
      <Footer />
      <AdminLoginModal />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <ThemeProvider>
        <AdminProvider>
          <MainContent />
        </AdminProvider>
      </ThemeProvider>
    </LangProvider>
  )
}
